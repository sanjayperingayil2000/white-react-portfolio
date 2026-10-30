"use client";

import { cn } from "@/lib/utils";

type TiltCardProps = {
  children: React.ReactNode;
  className?: string;
  /** Maximum tilt in degrees at the card edge. */
  max?: number;
};

/**
 * Subtle pointer-tracked tilt + hover lift. Mouse only (touch and pen are ignored),
 * and disabled under prefers-reduced-motion by the .tilt CSS.
 */
export function TiltCard({ children, className, max = 4 }: TiltCardProps) {
  function onPointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (e.pointerType !== "mouse") return;
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.setProperty("--tilt-x", `${(-py * max).toFixed(2)}deg`);
    el.style.setProperty("--tilt-y", `${(px * max).toFixed(2)}deg`);
  }

  function onPointerLeave(e: React.PointerEvent<HTMLDivElement>) {
    e.currentTarget.style.removeProperty("--tilt-x");
    e.currentTarget.style.removeProperty("--tilt-y");
  }

  return (
    <div className={cn("tilt group h-full", className)} onPointerMove={onPointerMove} onPointerLeave={onPointerLeave}>
      {children}
    </div>
  );
}
