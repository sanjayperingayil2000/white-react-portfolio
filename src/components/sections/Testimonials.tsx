import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { labels, sections } from "@/content/site";
import { testimonials } from "@/content/testimonials";
import { SECTION_IDS } from "@/lib/constants";

export function Testimonials() {
  return (
    <section id={SECTION_IDS.testimonials} aria-labelledby="testimonials-title" className="py-(--space-section)">
      <Container>
        <SectionHeading id="testimonials-title" {...sections.testimonials} />

        {/* Swipeable row on mobile (replaces the old Swiper carousel), grid from md up.
            The scroll container is a focusable region so keyboard users can scroll it. */}
        {/* One reveal for the whole row: per-card reveals would leave cards that are
            swiped in from the side blank (they never cross the viewport vertically). */}
        <Reveal>
          <div
            role="region"
            aria-label={labels.testimonialsList}
            tabIndex={0}
            className="-mx-(--gutter) snap-x snap-mandatory overflow-x-auto px-(--gutter) pb-2 [scrollbar-width:none] md:mx-0 md:overflow-visible md:px-0"
          >
            <ul className="flex gap-4 md:grid md:grid-cols-3 md:gap-6">
              {testimonials.map((t) => (
                <li key={t.name} className="w-[85%] shrink-0 snap-center md:w-auto">
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
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
