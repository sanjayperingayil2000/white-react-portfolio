"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { cn } from "@/lib/utils";

type ThemeChoice = "light" | "dark" | "system";

const order: ThemeChoice[] = ["light", "dark", "system"];
const icons = { light: Sun, dark: Moon, system: Monitor } as const;

// True on the client, false during SSR — avoids rendering a theme-dependent icon on the server.
const useMounted = () =>
  useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

const prefersDark = () => window.matchMedia("(prefers-color-scheme: dark)").matches;

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const mounted = useMounted();

  const current: ThemeChoice = mounted && order.includes(theme as ThemeChoice) ? (theme as ThemeChoice) : "system";
  const next = order[(order.indexOf(current) + 1) % order.length];
  const Icon = icons[current];

  function switchTheme(event: React.MouseEvent<HTMLButtonElement>) {
    const root = document.documentElement;
    const willBeDark = next === "dark" || (next === "system" && prefersDark());
    const changesAppearance = willBeDark !== root.classList.contains("dark");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!document.startViewTransition || reduceMotion || !changesAppearance) {
      setTheme(next); // falls back to the CSS colour transition
      return;
    }

    // Keyboard activation has no pointer position: start from the button centre.
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX || rect.left + rect.width / 2;
    const y = event.clientY || rect.top + rect.height / 2;
    const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));

    root.classList.add("theme-vt");
    const transition = document.startViewTransition(() => {
      root.classList.toggle("dark", willBeDark); // sync, so the "after" snapshot is correct
      root.classList.toggle("light", !willBeDark);
      setTheme(next); // next-themes stays the source of truth and persists the choice
    });

    transition.ready.then(() => {
      root.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
        { duration: 450, easing: "cubic-bezier(0.65, 0, 0.35, 1)", pseudoElement: "::view-transition-new(root)" },
      );
    });
    transition.finished.finally(() => root.classList.remove("theme-vt"));
  }

  return (
    <button
      type="button"
      onClick={switchTheme}
      aria-label={mounted ? `Theme: ${current}. Switch to ${next}` : "Switch theme"}
      title={mounted ? `Theme: ${current}` : undefined}
      className={cn(
        "grid size-11 place-items-center rounded-full text-fg hover:bg-fg/5",
        className,
      )}
    >
      {/* Same-size placeholder until mounted, so there is no layout shift or hydration mismatch. */}
      {mounted ? <Icon className="size-5" strokeWidth={1.5} aria-hidden="true" /> : <span className="size-5" />}
    </button>
  );
}
