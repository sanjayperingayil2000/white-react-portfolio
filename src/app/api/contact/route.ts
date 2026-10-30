import { z } from "zod";
import { contactSpam } from "@/lib/contact";
import { clientIp, rateLimit } from "@/lib/rateLimit";
import { contactRequestSchema, type ContactResponse } from "@/lib/validation";

const json = (body: ContactResponse, init?: ResponseInit) => Response.json(body, init);

/**
 * Pre-send gate for the contact form. The email itself is sent from the browser
 * through EmailJS (client-side by choice), and only after this route says
 * `deliver: true`. It validates, rate-limits per IP and filters obvious bots.
 */
export async function POST(request: Request) {
  const limit = rateLimit(clientIp(request.headers), contactSpam.rateLimit.max, contactSpam.rateLimit.windowMs);
  if (!limit.allowed) {
    return json(
      { ok: false, reason: "rate-limited", retryAfterSeconds: limit.retryAfterSeconds },
      { status: 429, headers: { "Retry-After": String(limit.retryAfterSeconds) } },
    );
  }

  const body: unknown = await request.json().catch(() => null);
  if (body === null || typeof body !== "object") return json({ ok: false, reason: "bad-request" }, { status: 400 });

  const parsed = contactRequestSchema.safeParse(body);
  if (!parsed.success) {
    const { fieldErrors } = z.flattenError(parsed.error);
    return json({ ok: false, reason: "invalid", errors: fieldErrors }, { status: 400 });
  }

  // Bots: report success so they don't retry, but tell the client not to send.
  const { website, startedAt } = parsed.data;
  const tooFast = Date.now() - startedAt < contactSpam.minSubmitMs;
  if (website !== "" || tooFast) return json({ ok: true, deliver: false });

  return json({ ok: true, deliver: true });
}
