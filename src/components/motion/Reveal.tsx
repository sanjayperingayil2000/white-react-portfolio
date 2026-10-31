"use client";

import { useEffect, useRef } from "react";
import { motionConfig } from "@/components/motion/config";

const { stagger, staggerGroup, revealAhead } = motionConfig.reveal;

type Tag = "div" | "li" | "article" | "header";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  as?: Tag;
  /** Position in a list; neighbours are staggered in groups of `staggerGroup`. */
  index?: number;
};

// One observer shared by every Reveal on the page.
let observer: IntersectionObserver | null = null;
function getObserver() {
  observer ??= new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        (entry.target as HTMLElement).dataset.reveal = "shown";
        observer?.unobserve(entry.target);
      }
    },
    // Positive bottom margin: start the fade before the block reaches the screen,
    // so fast scrolling never lands on empty space.
    { rootMargin: `0px 0px ${revealAhead} 0px` },
  );
  return observer;
}

/**
 * Fades and rises in once as it approaches the viewport.
 *
 * Content is visible in the server HTML. Only after hydration are blocks that are
 * still below the fold switched to "pending" (hidden by CSS), so if JS is slow,
 * blocked or broken, nothing ever stays invisible. Blocks already on screen are
 * left alone (no flash). Reduced motion: no hiding at all.
 */
export function Reveal({ children, className, as: Tag = "div", index = 0 }: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight) return; // on screen or above it

    el.dataset.reveal = "pending";
    const io = getObserver();
    io.observe(el);
    return () => io.unobserve(el);
  }, []);

  return (
    <Tag
      // The ref type differs per tag; all are HTMLElements.
      ref={ref as React.Ref<never>}
      data-reveal=""
      className={className}
      style={{ "--reveal-delay": `${(index % staggerGroup) * stagger}s` } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
}
