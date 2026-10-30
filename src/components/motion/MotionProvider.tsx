"use client";

import { MotionConfig } from "motion/react";

/**
 * reducedMotion="user": when the OS asks for reduced motion, motion skips
 * transform animations (reveals become plain fades). Parallax checks it itself.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
