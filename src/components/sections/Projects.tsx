import { ProjectsGrid } from "@/components/sections/ProjectsGrid";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/content/projects";
import { sections } from "@/content/site";
import { SECTION_IDS } from "@/lib/constants";

export function Projects() {
  return (
    <section id={SECTION_IDS.portfolio} aria-labelledby="portfolio-title" className="py-(--space-section)">
      <Container>
        <SectionHeading id="portfolio-title" {...sections.portfolio} />
        <ProjectsGrid projects={projects} />
      </Container>
    </section>
  );
}
