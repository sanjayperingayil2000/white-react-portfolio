import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { education } from "@/content/education";
import { sections } from "@/content/site";
import { SECTION_IDS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Education() {
  return (
    <section id={SECTION_IDS.education} aria-labelledby="education-title" className="py-(--space-section)">
      <Container>
        <SectionHeading id="education-title" {...sections.education} />

        <ol className="grid gap-6 md:grid-cols-2">
          {education.map((item, i) => (
            // Entries with a programme description get the full row.
            <Reveal as="li" key={item.title} index={i} className={cn(item.description && "md:col-span-2")}>
              <GlassCard className="flex h-full gap-4">
                <Icon name="graduation-cap" className="mt-0.5 size-6 shrink-0 text-muted" />
                <div>
                  <p className="text-sm font-medium text-muted tabular-nums">{item.dates}</p>
                  <h3 className="mt-1 text-lg font-semibold text-fg">{item.title}</h3>
                  <p className="text-sm text-muted">{item.institution}</p>
                  {item.description && <p className="mt-3 max-w-[75ch] text-sm text-muted">{item.description}</p>}
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
