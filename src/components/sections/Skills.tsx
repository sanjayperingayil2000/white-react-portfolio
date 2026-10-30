import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { sections } from "@/content/site";
import { skills } from "@/content/skills";
import { SECTION_IDS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Skills() {
  return (
    <section id={SECTION_IDS.skills} aria-labelledby="skills-title" className="py-(--space-section)">
      <Container>
        <SectionHeading id="skills-title" {...sections.skills} />

        <ul className="grid gap-6 md:grid-cols-2">
          {skills.map((group, i) => (
            // The first group (the resume's lead skill set) spans the full width.
            <li key={group.name} className={cn(i === 0 && "md:col-span-2")}>
              <GlassCard className="h-full">
                <h3 className="text-lg font-semibold text-fg">{group.name}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item}>
                      <Badge>{item}</Badge>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
