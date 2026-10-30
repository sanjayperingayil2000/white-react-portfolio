import { ArrowRight, Send } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { BrandIcon } from "@/components/ui/BrandIcon";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { contactForm, labels, sections } from "@/content/site";
import { email, phones } from "@/content/socials";
import { SECTION_IDS } from "@/lib/constants";
import { externalLinkProps } from "@/lib/utils";

const fieldClasses =
  "w-full rounded-sm border border-border bg-surface/60 px-4 py-3 text-base text-fg placeholder:text-muted " +
  "focus-visible:border-ring focus-visible:outline-none";

export function Contact() {
  const cards = [
    { key: "email", title: labels.emailCardTitle, value: email.address, href: email.href, icon: <Icon name="mail" className="size-6 text-fg" />, external: false },
    ...phones.map((p) => ({
      key: p.label,
      title: p.label,
      value: p.display,
      href: p.whatsappHref,
      icon: <BrandIcon name="whatsapp" className="size-6 text-fg" />,
      external: true,
    })),
  ];

  return (
    <section id={SECTION_IDS.contact} aria-labelledby="contact-title" className="py-(--space-section)">
      <Container>
        <SectionHeading id="contact-title" {...sections.contact} />

        <div className="grid gap-10 md:grid-cols-[2fr_3fr]">
          <div>
            <h3 className="mb-6 text-center text-lg font-semibold text-fg md:text-left">{labels.contactLeftHeading}</h3>
            <ul className="grid gap-4">
              {cards.map((card, i) => (
                <Reveal as="li" key={card.key} index={i}>
                  <GlassCard className="p-5 sm:p-5">
                    {card.icon}
                    <p className="mt-2 text-sm font-semibold text-fg">{card.title}</p>
                    <p className="text-sm text-muted">{card.value}</p>
                    <a
                      href={card.href}
                      className="mt-2 inline-flex min-h-11 items-center gap-1 text-sm font-medium text-accent hover:underline"
                      aria-label={`${labels.writeMe}: ${card.title}`}
                      {...(card.external ? externalLinkProps : {})}
                    >
                      {labels.writeMe}
                      <ArrowRight className="size-4" strokeWidth={1.5} aria-hidden="true" />
                    </a>
                  </GlassCard>
                </Reveal>
              ))}
            </ul>
          </div>

          <Reveal index={1}>
            <h3 className="mb-6 text-center text-lg font-semibold text-fg md:text-left">{labels.contactFormHeading}</h3>
            {/* TODO(Phase 7): wire to /api/contact with the chosen email provider. Submit is disabled until then. */}
            <GlassCard as="div">
              <form className="grid gap-5" noValidate>
                {contactForm.map((field) => (
                  <div key={field.name} className="grid gap-2">
                    <label htmlFor={`contact-${field.name}`} className="text-sm font-medium text-fg">
                      {field.label}
                    </label>
                    {field.type === "textarea" ? (
                      <textarea
                        id={`contact-${field.name}`}
                        name={field.name}
                        rows={6}
                        placeholder={field.placeholder}
                        className={fieldClasses}
                      />
                    ) : (
                      <input
                        id={`contact-${field.name}`}
                        name={field.name}
                        type={field.type}
                        autoComplete={field.autoComplete}
                        placeholder={field.placeholder}
                        className={fieldClasses}
                      />
                    )}
                  </div>
                ))}
                <Button type="submit" size="lg" disabled className="justify-self-start">
                  {labels.sendMessage}
                  <Send className="size-4" strokeWidth={1.5} aria-hidden="true" />
                </Button>
              </form>
            </GlassCard>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
