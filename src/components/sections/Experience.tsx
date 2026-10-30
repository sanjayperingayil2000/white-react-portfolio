import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experience } from "@/content/experience";
import { sections } from "@/content/site";
import { SECTION_IDS } from "@/lib/constants";

export function Experience() {
  return (
    <section id={SECTION_IDS.experience} aria-labelledby="experience-title" className="py-(--space-section)">
      <Container>
        <SectionHeading id="experience-title" {...sections.experience} />

        <ol className="mx-auto grid max-w-3xl gap-6">
          {experience.map((job, i) => (
            <Reveal as="li" key={`${job.company}-${job.start}`} delay={Math.min(i, 4) * 0.06}>
              <GlassCard as="article">
                <header className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-fg">{job.role}</h3>
                    <p className="text-sm text-muted">
                      {job.company}
                      {job.location && ` · ${job.location}`}
                    </p>
                  </div>
                  <p className="shrink-0 text-sm font-medium text-accent tabular-nums">
                    <time dateTime={job.start}>{job.dates}</time>
                  </p>
                </header>

                <ul className="mt-4 grid list-disc gap-2 pl-5 text-sm text-muted marker:text-accent">
                  {job.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </GlassCard>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
