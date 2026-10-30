import { z } from "zod";
import { contactSchema } from "@/lib/validation";

/**
 * Placeholder until Phase 7 (email provider). Validates the payload so the
 * client contract is fixed now, then reports that sending isn't configured.
 */
export async function POST(request: Request) {
  const body: unknown = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return Response.json({ ok: false, errors: z.flattenError(parsed.error).fieldErrors }, { status: 400 });
  }

  return Response.json({ ok: false, error: "Contact form is not configured yet." }, { status: 501 });
}
