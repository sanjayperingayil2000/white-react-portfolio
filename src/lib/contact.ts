/** Spam-protection settings shared by the contact form and /api/contact. */
export const contactSpam = {
  /** Name of the hidden honeypot input. */
  honeypotField: "website",
  /** Submissions faster than this after the form appears are treated as bots. */
  minSubmitMs: 3000,
  /** Per-IP limit enforced by /api/contact. */
  rateLimit: { max: 5, windowMs: 10 * 60 * 1000 },
} as const;

/** EmailJS client config. All three are public by design (they ship in the browser bundle). */
export const emailjsConfig = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "",
};

export const isEmailjsConfigured = () =>
  Boolean(emailjsConfig.serviceId && emailjsConfig.templateId && emailjsConfig.publicKey);
