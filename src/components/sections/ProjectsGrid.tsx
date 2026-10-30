"use client";

import { useState } from "react";
import { FeaturedProjectCard, GalleryProjectCard } from "@/components/sections/ProjectCards";
import { TiltCard } from "@/components/ui/TiltCard";
import { labels, projectFilters } from "@/content/site";
import { cn } from "@/lib/utils";
import type { Project } from "@/types/content";

type Filter = (typeof projectFilters)[number]["value"];

/** Category filter (old-site behaviour) over featured and gallery projects. */
export function ProjectsGrid({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<Filter>("all");
  const visible = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <div role="group" aria-label={labels.filterProjects} className="mb-10 flex flex-wrap justify-center gap-2">
        {projectFilters.map((f) => {
          const pressed = filter === f.value;
          return (
            <button
              key={f.value}
              type="button"
              aria-pressed={pressed}
              onClick={() => setFilter(f.value)}
              className={cn(
                "min-h-11 rounded-full px-5 text-sm font-medium",
                pressed ? "bg-accent text-accent-foreground shadow-sm" : "glass-sm text-muted hover:text-fg",
              )}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      <ul className="grid gap-6 md:grid-cols-2">
        {visible.map((project) =>
          project.kind === "featured" ? (
            <li key={project.slug} className="md:col-span-2">
              <TiltCard max={1.5}>
                <FeaturedProjectCard project={project} />
              </TiltCard>
            </li>
          ) : (
            <li key={project.slug}>
              <TiltCard>
                <GalleryProjectCard project={project} />
              </TiltCard>
            </li>
          ),
        )}
      </ul>
    </>
  );
}
