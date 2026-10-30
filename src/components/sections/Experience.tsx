import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experience } from "@/content/experience";
import { sections } from "@/content/site";
import { SECTION_IDS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Experience() {
  return (
    <section id={SECTION_IDS.experience} aria-labelledby="experience-title" className="py-(--space-section)">
      <Container>
        <SectionHeading id="experience-title" {...sections.experience} />

        {/* Vertical timeline: the rail is the list's ::before, each entry has a node on it. */}
        <ol className="relative mx-auto max-w-3xl before:absolute before:top-3 before:bottom-3 before:left-[7px] before:w-px before:bg-border">
          {experience.map((job) => {
            const isCurrent = job.end === null;
            return (
              <li key={`${job.company}-${job.start}`} className="relative pb-8 pl-10 last:pb-0 sm:pl-12">
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute top-8 left-0 size-[15px] rounded-full border-2 shadow-[0_0_0_4px_var(--bg)]",
                    isCurrent ? "border-accent bg-accent" : "border-border bg-bg",
                  )}
                />
                <GlassCard as="article">
                  <header className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-fg">{job.role}</h3>
                      <p className="text-sm text-muted">
                        {job.company}
                        {job.location && ` · ${job.location}`}
                      </p>
                    </div>
                    <p
                      className={cn(
                        "shrink-0 text-sm font-medium tabular-nums",
                        isCurrent ? "text-accent" : "text-muted",
                      )}
                    >
                      <time dateTime={job.start}>{job.dates}</time>
                    </p>
                  </header>

                  <ul className="mt-4 grid list-disc gap-2 pl-5 text-sm text-muted marker:text-border">
                    {job.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </GlassCard>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
