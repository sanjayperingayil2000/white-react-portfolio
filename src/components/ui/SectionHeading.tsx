import { Parallax } from "@/components/motion/Parallax";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";
import type { SectionCopy } from "@/types/content";

type SectionHeadingProps = SectionCopy & {
  /** id for the <h2>, referenced by the section's aria-labelledby. */
  id: string;
  align?: "center" | "start";
  className?: string;
};

export function SectionHeading({ id, title, subtitle, align = "center", className }: SectionHeadingProps) {
  return (
    <Parallax preset="heading" className={cn("mb-12 sm:mb-16", className)}>
      <Reveal as="header" className={cn(align === "center" && "text-center")}>
        {subtitle && <p className="mb-3 text-xs font-medium tracking-[0.08em] text-muted uppercase">{subtitle}</p>}
        <h2 id={id} className="font-display text-4xl leading-[1.05] tracking-[-0.015em] text-balance text-fg">
          {title}
        </h2>
      </Reveal>
    </Parallax>
  );
}
