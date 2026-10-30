import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/content/projects";
import { labels, sections } from "@/content/site";
import { SECTION_IDS } from "@/lib/constants";
import { externalLinkProps } from "@/lib/utils";
import type { FeaturedProject, GalleryProject } from "@/types/content";

// Category filters (content/site.ts → projectFilters) are wired up in the sections phase.
export function Projects() {
  const featured = projects.filter((p): p is FeaturedProject => p.kind === "featured");
  const gallery = projects.filter((p): p is GalleryProject => p.kind === "gallery");

  return (
    <section id={SECTION_IDS.portfolio} aria-labelledby="portfolio-title" className="py-(--space-section)">
      <Container>
        <SectionHeading id="portfolio-title" {...sections.portfolio} />

        <div className="grid gap-6">
          {featured.map((project) => (
            <Reveal key={project.slug}>
              <GlassCard as="article">
                <p className="text-xs font-medium tracking-[0.08em] text-accent uppercase">{project.context}</p>
                <h3 className="mt-2 font-display text-2xl leading-[1.15] tracking-[-0.01em] text-fg">
                  {project.title}
                </h3>
                <ul className="mt-4 grid list-disc gap-2 pl-5 text-sm text-muted marker:text-accent">
                  {project.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <ul className="mt-5 flex flex-wrap gap-2" aria-label={labels.techStack}>
                  {project.techStack.map((t) => (
                    <li key={t}>
                      <Badge>{t}</Badge>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </Reveal>
          ))}
        </div>

        <ul className="mt-6 grid gap-6 sm:grid-cols-2">
          {gallery.map((project, i) => (
            <Reveal as="li" key={project.slug} delay={(i % 2) * 0.06}>
              <GlassCard as="article" interactive className="p-3 sm:p-3">
                {project.image && (
                  <Image
                    src={project.image.src}
                    width={project.image.width}
                    height={project.image.height}
                    alt={project.image.alt}
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="aspect-[16/9] w-full rounded-lg object-cover object-top"
                  />
                )}
                <div className="flex items-center justify-between gap-4 px-3 pt-4 pb-2">
                  <h3 className="text-base font-semibold text-fg">{project.title}</h3>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      className="inline-flex min-h-11 items-center gap-1 text-sm font-medium text-accent hover:underline"
                      aria-label={`${labels.demo}: ${project.title}`}
                      {...externalLinkProps}
                    >
                      {labels.demo}
                      <ArrowUpRight className="size-4" strokeWidth={1.5} aria-hidden="true" />
                    </a>
                  )}
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
