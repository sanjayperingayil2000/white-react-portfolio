"use client";

import { LazyMotion, MotionConfig } from "motion/react";

const loadFeatures = () => import("@/components/motion/features").then((mod) => mod.default);

/**
 * LazyMotion: components use the lightweight `m.*` and the animation features
 * (domAnimation: animate, variants, inView) load after hydration. `strict` makes
 * any accidental full `motion.*` import fail loudly.
 *
 * reducedMotion="user": when the OS asks for reduced motion, motion skips
 * transform animations (reveals become plain fades). Parallax checks it itself.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={loadFeatures} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
