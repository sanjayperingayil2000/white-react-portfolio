import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/content/services";
import { sections } from "@/content/site";
import { SECTION_IDS } from "@/lib/constants";

// The old "View More" modal (content/site.ts → labels.viewMore) is rebuilt in the sections phase;
// until then the modal content is shown inline.
export function Services() {
  return (
    <section id={SECTION_IDS.services} aria-labelledby="services-title" className="py-(--space-section)">
      <Container>
        <SectionHeading id="services-title" {...sections.services} />

        <ul className="grid gap-6 md:grid-cols-3">
          {services.map((service, i) => (
            <Reveal as="li" key={service.modalTitle} delay={i * 0.06}>
              <GlassCard as="article" className="h-full">
                <Icon name={service.icon} className="size-7 text-accent" />
                <h3 className="mt-4 text-xl font-semibold text-fg">
                  {service.titleLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </h3>
                <p className="mt-4 text-sm font-medium text-fg">{service.modalTitle}</p>
                <p className="mt-2 text-sm text-muted">{service.description}</p>
                <ul className="mt-4 grid gap-2">
                  {service.bullets.map((b) => (
                    <li key={b} className="flex gap-2 text-sm text-muted">
                      <Icon name="check-circle" className="mt-0.5 size-4 shrink-0 text-accent" />
                      {b}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
