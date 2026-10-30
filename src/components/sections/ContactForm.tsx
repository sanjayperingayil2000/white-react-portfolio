"use client";

import { CircleAlert, CircleCheck, LoaderCircle, Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { contactCopy, contactForm, labels } from "@/content/site";
import { email as contactEmail } from "@/content/socials";
import { contactSpam, emailjsConfig, isEmailjsConfigured } from "@/lib/contact";
import { cn } from "@/lib/utils";
// zod (via @/lib/validation) and EmailJS are imported on submit, keeping them out of the initial bundle.
import type { ContactField, ContactInput, ContactResponse } from "@/lib/validation";

type Status =
  | { kind: "idle" }
  | { kind: "sending" }
  | { kind: "success" }
  | { kind: "error"; message: string };

type FieldErrors = Partial<Record<ContactField, string>>;

const fieldClasses =
  "w-full rounded-sm border bg-surface/60 px-4 py-3 text-base text-fg placeholder:text-muted " +
  "focus-visible:border-ring focus-visible:outline-none aria-invalid:border-danger";

const firstErrors = (errors: Partial<Record<ContactField, string[]>>): FieldErrors =>
  Object.fromEntries(Object.entries(errors).map(([k, v]) => [k, v?.[0]]));

function mailtoFallback(values: Partial<ContactInput>) {
  const subject = values.subject || contactCopy.fallbackSubject;
  const body = values.message ?? "";
  return `${contactEmail.href}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/**
 * Contact form. Flow: validate (zod) → /api/contact gate (server zod, rate limit,
 * honeypot, minimum time) → send from the browser with EmailJS.
 */
export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const startedAt = useRef(0);
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [lastValues, setLastValues] = useState<Partial<ContactInput>>({});

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const raw = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      subject: String(data.get("subject") ?? ""),
      message: String(data.get("message") ?? ""),
    };
    setLastValues(raw);

    const { contactSchema, firstFieldErrors } = await import("@/lib/validation");
    const parsed = contactSchema.safeParse(raw);
    if (!parsed.success) {
      setErrors(firstFieldErrors(parsed.error));
      setStatus({ kind: "idle" });
      return;
    }
    setErrors({});
    setStatus({ kind: "sending" });

    try {
      const gate = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...parsed.data,
          [contactSpam.honeypotField]: String(data.get(contactSpam.honeypotField) ?? ""),
          startedAt: startedAt.current,
        }),
      });
      const result = (await gate.json()) as ContactResponse;

      if (!result.ok) {
        if (result.reason === "invalid") {
          setErrors(firstErrors(result.errors));
          setStatus({ kind: "idle" });
        } else {
          setStatus({ kind: "error", message: result.reason === "rate-limited" ? contactCopy.rateLimited : contactCopy.error });
        }
        return;
      }

      // Bots get the same success screen without anything being sent.
      if (result.deliver) {
        if (!isEmailjsConfigured()) throw new Error("EmailJS env vars are not set (see .env.example)");
        const { default: emailjs } = await import("@emailjs/browser");
        const { name, email, subject, message } = parsed.data;
        await emailjs.send(
          emailjsConfig.serviceId,
          emailjsConfig.templateId,
          // `project` keeps the old EmailJS template ({{name}}, {{email}}, {{project}}) working.
          { name, email, subject: subject || contactCopy.fallbackSubject, message, project: message },
          {
            publicKey: emailjsConfig.publicKey,
            blockHeadless: true,
            limitRate: { id: "contact", throttle: 10_000 },
          },
        );
      }

      formRef.current?.reset();
      startedAt.current = Date.now();
      setStatus({ kind: "success" });
    } catch (error) {
      console.error("Contact form failed:", error);
      setStatus({ kind: "error", message: contactCopy.error });
    }
  }

  const sending = status.kind === "sending";

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="grid gap-5" aria-busy={sending}>
      {contactForm.map((field) => {
        const id = `contact-${field.name}`;
        const error = errors[field.name];
        const shared = {
          id,
          name: field.name,
          placeholder: field.placeholder,
          required: field.required,
          "aria-invalid": error ? true : undefined,
          "aria-describedby": error ? `${id}-error` : undefined,
          className: cn(fieldClasses, !error && "border-border"),
        };
        return (
          <div key={field.name} className="grid gap-2">
            <label htmlFor={id} className="text-sm font-medium text-fg">
              {field.label}
              {!field.required && <span className="ml-1 font-normal text-muted">({contactCopy.optional})</span>}
            </label>
            {field.type === "textarea" ? (
              <textarea rows={6} {...shared} />
            ) : (
              <input type={field.type} autoComplete={field.autoComplete} {...shared} />
            )}
            {error && (
              <p id={`${id}-error`} className="text-sm text-danger">
                {error}
              </p>
            )}
          </div>
        );
      })}

      {/* Honeypot: off-screen and skipped by keyboard and screen readers; bots fill it in. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="contact-website">Website</label>
        <input id="contact-website" type="text" name={contactSpam.honeypotField} tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" size="lg" disabled={sending}>
          {sending ? contactCopy.sending : labels.sendMessage}
          {sending ? (
            <LoaderCircle className="size-4 motion-safe:animate-spin" strokeWidth={1.5} aria-hidden="true" />
          ) : (
            <Send className="size-4" strokeWidth={1.5} aria-hidden="true" />
          )}
        </Button>
      </div>

      <div role="status" aria-live="polite">
        {status.kind === "success" && (
          <p className="flex items-start gap-2 text-sm text-fg">
            <CircleCheck className="mt-0.5 size-4 shrink-0 text-accent" strokeWidth={1.5} aria-hidden="true" />
            {contactCopy.success}
          </p>
        )}
        {status.kind === "error" && (
          <p className="flex items-start gap-2 text-sm text-fg">
            <CircleAlert className="mt-0.5 size-4 shrink-0 text-danger" strokeWidth={1.5} aria-hidden="true" />
            <span>
              {status.message} {contactCopy.fallbackPrefix}{" "}
              <a href={mailtoFallback(lastValues)} className="font-medium text-accent underline">
                {contactEmail.address}
              </a>
              .
            </span>
          </p>
        )}
      </div>
    </form>
  );
}
