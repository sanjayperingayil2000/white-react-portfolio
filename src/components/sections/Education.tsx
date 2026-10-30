import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { certifications, education } from "@/content/education";
import { sections } from "@/content/site";
import { SECTION_IDS } from "@/lib/constants";

export function Education() {
  return (
    <section id={SECTION_IDS.education} aria-labelledby="education-title" className="py-(--space-section)">
      <Container>
        <SectionHeading id="education-title" {...sections.education} />

        <div className="grid gap-6 lg:grid-cols-[3fr_2fr]">
          <ol className="grid gap-4">
            {education.map((item, i) => (
              <Reveal as="li" key={item.title} delay={Math.min(i, 4) * 0.06}>
                <GlassCard className="flex gap-4 p-5 sm:p-6">
                  <Icon name="graduation-cap" className="mt-0.5 size-5 shrink-0 text-accent" />
                  <div>
                    <h3 className="text-base font-semibold text-fg">{item.title}</h3>
                    <p className="text-sm text-muted">{item.institution}</p>
                    <p className="mt-1 text-sm font-medium text-accent tabular-nums">{item.dates}</p>
                    {item.description && <p className="mt-3 text-sm text-muted">{item.description}</p>}
                  </div>
                </GlassCard>
              </Reveal>
            ))}
          </ol>

          <ul className="grid content-start gap-4">
            {certifications.map((cert, i) => (
              <Reveal as="li" key={cert.title} delay={i * 0.06}>
                <GlassCard className="flex gap-4 p-5 sm:p-6">
                  <Icon name="badge-check" className="mt-0.5 size-5 shrink-0 text-accent" />
                  <div>
                    <h3 className="text-base font-semibold text-fg">{cert.title}</h3>
                    <p className="text-sm text-muted">
                      {cert.issuer}
                      {cert.date && ` · ${cert.date}`}
                    </p>
                    {cert.topics && <p className="mt-2 text-sm text-muted">{cert.topics}</p>}
                  </div>
                </GlassCard>
              </Reveal>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
