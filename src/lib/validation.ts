import { z } from "zod";

/** Contact form payload. Field names match the old EmailJS template (name, email, project). */
export const contactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.email("Please enter a valid email").max(200),
  project: z.string().trim().min(10, "Tell me a little more about your project").max(5000),
});

export type ContactInput = z.infer<typeof contactSchema>;
