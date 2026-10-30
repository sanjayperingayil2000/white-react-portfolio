import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { certifications, education } from "@/content/education";
import { labels, sections } from "@/content/site";
import { SECTION_IDS } from "@/lib/constants";

export function Education() {
  return (
    <section id={SECTION_IDS.education} aria-labelledby="education-title" className="py-(--space-section)">
      <Container>
        <SectionHeading id="education-title" {...sections.education} />

        <div className="grid gap-10 lg:grid-cols-[3fr_2fr] lg:gap-8">
          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-[0.08em] text-muted uppercase">
              {labels.educationHeading}
            </h3>
            <ol className="grid gap-4">
              {education.map((item) => (
                <li key={item.title}>
                  <GlassCard className="flex gap-4 p-5 sm:p-6">
                    <Icon name="graduation-cap" className="mt-0.5 size-5 shrink-0 text-muted" />
                    <div>
                      <h4 className="text-base font-semibold text-fg">{item.title}</h4>
                      <p className="text-sm text-muted">{item.institution}</p>
                      <p className="mt-1 text-sm font-medium text-muted tabular-nums">{item.dates}</p>
                      {item.description && <p className="mt-3 text-sm text-muted">{item.description}</p>}
                    </div>
                  </GlassCard>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-[0.08em] text-muted uppercase">
              {labels.certificationsHeading}
            </h3>
            <ul className="grid gap-4">
              {certifications.map((cert) => (
                <li key={cert.title}>
                  <GlassCard className="flex gap-4 p-5 sm:p-6">
                    <Icon name="badge-check" className="mt-0.5 size-5 shrink-0 text-accent" />
                    <div>
                      <h4 className="text-base font-semibold text-fg">{cert.title}</h4>
                      <p className="text-sm text-muted">
                        {cert.issuer}
                        {cert.date && ` · ${cert.date}`}
                      </p>
                      {cert.topics && <p className="mt-2 text-sm text-muted">{cert.topics}</p>}
                    </div>
                  </GlassCard>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
