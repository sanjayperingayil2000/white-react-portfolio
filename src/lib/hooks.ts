import { useEffect, useState, useSyncExternalStore } from "react";

const noopSubscribe = () => () => {};

/** True on the client after hydration, false during SSR. */
export function useMounted() {
  return useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false,
  );
}

function subscribeToScroll(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => window.removeEventListener("scroll", onChange);
}

/** Whether the page has scrolled at least `threshold` px. Re-renders only when that flips. */
export function useScrolledPast(threshold: number) {
  return useSyncExternalStore(
    subscribeToScroll,
    () => window.scrollY >= threshold,
    () => false,
  );
}

/**
 * Id of the section currently crossing a line ~40% down the viewport.
 * Pass a stable (module-level) array of ids.
 */
export function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -59% 0px" },
    );

    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [ids]);

  return active;
}
