"use client";

import { motion } from "motion/react";
import { motionConfig } from "@/components/motion/config";

const { distance, duration, stagger, staggerGroup, ease, viewportMargin } = motionConfig.reveal;

const tags = { div: motion.div, li: motion.li, article: motion.article, header: motion.header } as const;

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  as?: keyof typeof tags;
  /** Position in a list; neighbours are staggered in groups of `staggerGroup`. */
  index?: number;
};

/**
 * Fades and rises in once, the first time it enters the viewport.
 * Reduced motion: MotionConfig (reducedMotion="user") drops the rise and keeps the fade.
 * No-JS: the <noscript> rule in layout.tsx forces [data-reveal] visible.
 */
export function Reveal({ children, className, as = "div", index = 0 }: RevealProps) {
  const Tag = tags[as];

  return (
    <Tag
      data-reveal=""
      className={className}
      initial={{ opacity: 0, y: distance * motionConfig.intensity }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: viewportMargin }}
      transition={{ duration, ease, delay: (index % staggerGroup) * stagger }}
    >
      {children}
    </Tag>
  );
}
