import { z } from "zod";

/** Contact form fields, validated in the browser and again in /api/contact. */
export const contactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100, "Please keep your name under 100 characters"),
  email: z.email("Please enter a valid email address").max(200),
  subject: z.string().trim().max(150, "Please keep the subject under 150 characters"),
  message: z
    .string()
    .trim()
    .min(10, "Please write at least a sentence (10+ characters)")
    .max(5000, "Please keep your message under 5000 characters"),
});

export type ContactInput = z.infer<typeof contactSchema>;
export type ContactField = keyof ContactInput;

/** What the browser posts to /api/contact: the fields plus the spam signals. */
export const contactRequestSchema = contactSchema.extend({
  /** Honeypot: hidden from people, so any value means a bot. */
  website: z.string().max(500).default(""),
  /** When the form was first shown (ms since epoch), for the minimum-time check. */
  startedAt: z.number().int().nonnegative(),
});

export type ContactRequest = z.infer<typeof contactRequestSchema>;

export type ContactResponse =
  | { ok: true; deliver: boolean }
  | { ok: false; reason: "invalid"; errors: Partial<Record<ContactField, string[]>> }
  | { ok: false; reason: "rate-limited"; retryAfterSeconds: number }
  | { ok: false; reason: "bad-request" };

/** First error message per field, for showing under each input. */
export function firstFieldErrors(error: z.ZodError<ContactInput>): Partial<Record<ContactField, string>> {
  const { fieldErrors } = z.flattenError(error);
  return Object.fromEntries(Object.entries(fieldErrors).map(([k, v]) => [k, v?.[0]]));
}
