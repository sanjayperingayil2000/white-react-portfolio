"use client";

import { useTheme } from "next-themes";
import { useId } from "react";
import { labels } from "@/content/site";
import { useMounted } from "@/lib/hooks";
import { cn } from "@/lib/utils";

const RAYS = Array.from({ length: 8 }, (_, i) => {
  const a = (i * Math.PI) / 4;
  const r = (n: number) => Math.round(n * 100) / 100;
  return { x1: r(12 + Math.cos(a) * 8), y1: r(12 + Math.sin(a) * 8), x2: r(12 + Math.cos(a) * 10.5), y2: r(12 + Math.sin(a) * 10.5) };
});

/**
 * Light/dark toggle. Follows the OS until the visitor clicks; every click then flips
 * to the opposite theme and stores that explicit choice.
 */
export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();
  const maskId = `theme-mask-${useId().replace(/[^\w-]/g, "")}`;

  const label = !mounted ? labels.toggleTheme : resolvedTheme === "dark" ? labels.switchToLight : labels.switchToDark;

  function toggle(event: React.MouseEvent<HTMLButtonElement>) {
    const root = document.documentElement;
    const toDark = !root.classList.contains("dark");
    const next = toDark ? "dark" : "light";
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!document.startViewTransition || reduceMotion) {
      setTheme(next); // colour cross-fade via CSS transitions
      return;
    }

    // Keyboard activation has no pointer position: start from the button centre.
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX || rect.left + rect.width / 2;
    const y = event.clientY || rect.top + rect.height / 2;
    const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));

    root.classList.add("theme-vt");
    const transition = document.startViewTransition(() => {
      root.classList.toggle("dark", toDark); // sync, so the "after" snapshot is correct
      root.classList.toggle("light", !toDark);
      setTheme(next); // next-themes stays the source of truth and persists the choice
    });

    // `ready` rejects if the browser skips the transition; the theme has still changed.
    transition.ready
      .then(() => {
        root.animate(
          { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
          { duration: 450, easing: "cubic-bezier(0.65, 0, 0.35, 1)", pseudoElement: "::view-transition-new(root)" },
        );
      })
      .catch(() => {});
    void transition.finished.finally(() => root.classList.remove("theme-vt"));
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={mounted ? label : undefined}
      className={cn("grid size-11 place-items-center rounded-full text-fg hover:bg-fg/5", className)}
    >
      {/* Sun in light mode, moon in dark: the cutout slides over the core and the rays fold away. */}
      <svg viewBox="0 0 24 24" className="theme-icon size-5" aria-hidden="true">
        <mask id={maskId}>
          <rect width="24" height="24" fill="white" />
          <circle className="theme-icon-cutout" cx="24" cy="10" r="6" fill="black" />
        </mask>
        <circle className="theme-icon-core" cx="12" cy="12" r="8" fill="currentColor" mask={`url(#${maskId})`} />
        <g className="theme-icon-rays" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          {RAYS.map((ray) => (
            <line key={`${ray.x1}-${ray.y1}`} {...ray} />
          ))}
        </g>
      </svg>
    </button>
  );
}
