"use client";

import { motion, useMotionValue, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef } from "react";
import { motionConfig, type ParallaxPreset } from "@/components/motion/config";
import { useIsTouch } from "@/components/motion/useIsTouch";

type ParallaxProps = {
  preset: ParallaxPreset;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

/**
 * Scroll-linked vertical drift (transform only, native scrolling untouched).
 * "cross": -d/2 → +d/2 while the element passes through the viewport.
 * "leave": 0 → d from page load until the element has scrolled out (for the hero).
 * Off under reduced motion; scaled or off on touch per config.
 */
export function Parallax({ preset, children, className, style }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const isTouch = useIsTouch();
  const { distance, range, disableOnTouch } = motionConfig.parallax.presets[preset];

  const touchScale = isTouch ? (disableOnTouch ? 0 : motionConfig.parallax.touchFactor) : 1;
  const d = reduceMotion ? 0 : distance * motionConfig.intensity * touchScale;

  // Distance lives in a motion value so a late change (touch detection after hydration) applies live.
  const dist = useMotionValue(d);
  useEffect(() => dist.set(d), [d, dist]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: range === "leave" ? ["start start", "end start"] : ["start end", "end start"],
  });
  const y = useTransform(() => {
    const p = scrollYProgress.get();
    const span = dist.get();
    return range === "leave" ? p * span : (p - 0.5) * span;
  });

  return (
    <motion.div ref={ref} className={className} style={{ ...style, y }}>
      {children}
    </motion.div>
  );
}
