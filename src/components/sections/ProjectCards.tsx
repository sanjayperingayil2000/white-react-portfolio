import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { BrandIcon } from "@/components/ui/BrandIcon";
import { GlassCard } from "@/components/ui/GlassCard";
import { labels } from "@/content/site";
import { externalLinkProps } from "@/lib/utils";
import type { FeaturedProject, GalleryProject, Project } from "@/types/content";

function ProjectLinks({ project }: { project: Project }) {
  if (!project.liveUrl && !project.repoUrl) return null;
  const linkClass = "inline-flex min-h-11 items-center gap-1 text-sm font-medium text-accent hover:underline";

  return (
    <div className="flex items-center gap-4">
      {project.liveUrl && (
        <a href={project.liveUrl} className={linkClass} aria-label={`${labels.demo}: ${project.title}`} {...externalLinkProps}>
          {labels.demo}
          <ArrowUpRight className="size-4" strokeWidth={1.5} aria-hidden="true" />
        </a>
      )}
      {project.repoUrl && (
        <a href={project.repoUrl} className={linkClass} aria-label={`${labels.repo}: ${project.title}`} {...externalLinkProps}>
          <BrandIcon name="github" className="size-4" />
          {labels.repo}
        </a>
      )}
    </div>
  );
}

function StackBadges({ stack }: { stack: string[] }) {
  if (stack.length === 0) return null;
  return (
    <ul className="flex flex-wrap gap-2" aria-label={labels.techStack}>
      {stack.map((t) => (
        <li key={t}>
          <Badge>{t}</Badge>
        </li>
      ))}
    </ul>
  );
}

function ProjectImage({ project, sizes }: { project: Project; sizes: string }) {
  if (!project.image) return null;
  return (
    <Image
      src={project.image.src}
      width={project.image.width}
      height={project.image.height}
      alt={project.image.alt}
      sizes={sizes}
      className="aspect-[16/9] w-full rounded-lg object-cover object-top"
    />
  );
}

/** Wide case-study card for the FDE projects. */
export function FeaturedProjectCard({ project }: { project: FeaturedProject }) {
  return (
    <GlassCard as="article" className="h-full group-hover:shadow-lg">
      <div className="grid gap-8 lg:grid-cols-[2fr_3fr]">
        <div className="flex flex-col gap-5">
          <ProjectImage project={project} sizes="(min-width: 1280px) 440px, (min-width: 1024px) 40vw, 100vw" />
          <div>
            <p className="text-xs font-medium tracking-[0.08em] text-muted uppercase">{project.context}</p>
            <h3 className="mt-2 font-display text-2xl leading-[1.2] font-bold tracking-[-0.015em] text-fg">{project.title}</h3>
          </div>
          <StackBadges stack={project.techStack} />
          <ProjectLinks project={project} />
        </div>
        <ul className="grid list-disc content-start gap-3 pl-5 text-sm text-muted marker:text-border">
          {project.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </div>
    </GlassCard>
  );
}

/** Screenshot card for the web project gallery. */
export function GalleryProjectCard({ project }: { project: GalleryProject }) {
  return (
    <GlassCard as="article" className="flex h-full flex-col p-3 group-hover:shadow-lg sm:p-3">
      <ProjectImage project={project} sizes="(min-width: 1280px) 560px, (min-width: 768px) 50vw, 100vw" />
      <div className="flex flex-1 flex-col gap-3 px-3 pt-4 pb-1">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-base font-semibold text-fg">{project.title}</h3>
          <ProjectLinks project={project} />
        </div>
        {project.description && <p className="text-sm text-muted">{project.description}</p>}
        <StackBadges stack={project.techStack} />
      </div>
    </GlassCard>
  );
}
