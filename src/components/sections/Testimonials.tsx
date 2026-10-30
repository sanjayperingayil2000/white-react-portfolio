import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { sections } from "@/content/site";
import { testimonials } from "@/content/testimonials";
import { SECTION_IDS } from "@/lib/constants";

export function Testimonials() {
  return (
    <section id={SECTION_IDS.testimonials} aria-labelledby="testimonials-title" className="py-(--space-section)">
      <Container>
        <SectionHeading id="testimonials-title" {...sections.testimonials} />

        <ul className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal as="li" key={t.name} delay={i * 0.06}>
              <GlassCard as="figure" className="flex h-full flex-col">
                <blockquote className="flex-1 text-sm text-muted">“{t.quote}”</blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <Image
                    src={t.image.src}
                    width={t.image.width}
                    height={t.image.height}
                    alt=""
                    sizes="40px"
                    className="size-10 rounded-full object-cover"
                  />
                  <span className="text-sm font-semibold text-fg">{t.name}</span>
                </figcaption>
              </GlassCard>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
