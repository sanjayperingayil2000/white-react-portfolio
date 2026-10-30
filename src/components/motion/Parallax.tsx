"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

type ParallaxProps = {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  /**
   * How far to drift upward (in vh) over the full page scroll. Bounded, so
   * fixed-position layers stay on screen however long the page is.
   */
  distance: number;
};

/** Drifts its content against page scroll. Static under reduced motion. */
export function Parallax({ children, className, style, distance }: ParallaxProps) {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", `${-distance}vh`]);

  return (
    <motion.div className={className} style={reduceMotion ? style : { ...style, y }}>
      {children}
    </motion.div>
  );
}
