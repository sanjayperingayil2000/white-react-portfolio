import { Reveal } from "@/components/motion/Reveal";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/content/services";
import { sections } from "@/content/site";
import { SECTION_IDS } from "@/lib/constants";

export function Services() {
  return (
    <section id={SECTION_IDS.services} aria-labelledby="services-title" className="py-(--space-section)">
      <Container>
        <SectionHeading id="services-title" {...sections.services} />

        <ul className="grid gap-6 md:grid-cols-3">
          {services.map((service, i) => (
            <Reveal as="li" key={service.modalTitle} index={i}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
