import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { ContactForm } from "@/components/sections/ContactForm";
import { BrandIcon } from "@/components/ui/BrandIcon";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { contactCopy, labels, sections } from "@/content/site";
import { email, phones, primaryWhatsapp } from "@/content/socials";
import { SECTION_IDS } from "@/lib/constants";
import { externalLinkProps } from "@/lib/utils";

const linkClass = "inline-flex min-h-11 items-center gap-1 text-sm font-medium text-accent hover:underline";

export function Contact() {
  return (
    <section id={SECTION_IDS.contact} aria-labelledby="contact-title" className="py-(--space-section)">
      <Container>
        <SectionHeading id="contact-title" {...sections.contact} />

        <div className="grid gap-10 md:grid-cols-[2fr_3fr]">
          <div>
            <h3 className="mb-6 text-center text-lg font-semibold text-fg md:text-left">{labels.contactLeftHeading}</h3>

            <Reveal>
              <ButtonLink href={primaryWhatsapp.whatsappHref} size="lg" className="mb-6 w-full" {...externalLinkProps}>
                <BrandIcon name="whatsapp" className="size-5" />
                {contactCopy.chatOnWhatsapp}
              </ButtonLink>
            </Reveal>

            <ul className="grid gap-4">
              <Reveal as="li">
                <GlassCard className="p-5 sm:p-5">
                  <Icon name="mail" className="size-6 text-fg" />
                  <p className="mt-2 text-sm font-semibold text-fg">{labels.emailCardTitle}</p>
                  <p className="text-sm text-muted">{email.address}</p>
                  <a href={email.href} className={linkClass}>
                    {labels.writeMe}
                    <span className="sr-only">: {labels.emailCardTitle}</span>
                    <ArrowRight className="size-4" strokeWidth={1.5} aria-hidden="true" />
                  </a>
                </GlassCard>
              </Reveal>

              {phones.map((phone, i) => (
                <Reveal as="li" key={phone.label} index={i + 1}>
                  <GlassCard className="p-5 sm:p-5">
                    <BrandIcon name="whatsapp" className="size-6 text-fg" />
                    <p className="mt-2 text-sm font-semibold text-fg">{phone.label}</p>
                    <a href={`tel:${phone.tel}`} className="inline-flex min-h-11 items-center text-sm text-muted hover:text-fg">
                      <span className="sr-only">{contactCopy.call} </span>
                      {phone.display}
                    </a>
                    <div>
                      <a href={phone.whatsappHref} className={linkClass} {...externalLinkProps}>
                        {labels.writeMe}
                        <span className="sr-only">: {phone.label}</span>
                        <ArrowRight className="size-4" strokeWidth={1.5} aria-hidden="true" />
                      </a>
                    </div>
                  </GlassCard>
                </Reveal>
              ))}
            </ul>
          </div>

          <Reveal index={1}>
            <h3 className="mb-6 text-center text-lg font-semibold text-fg md:text-left">{labels.contactFormHeading}</h3>
            <GlassCard className="relative">
              <ContactForm />
            </GlassCard>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
