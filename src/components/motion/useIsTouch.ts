"use client";

import { useSyncExternalStore } from "react";

const query = "(pointer: coarse)";

function subscribe(onChange: () => void) {
  const mql = window.matchMedia(query);
  mql.addEventListener("change", onChange);
  return () => mql.removeEventListener("change", onChange);
}

/** True on coarse-pointer (touch) devices. False during SSR. */
export function useIsTouch() {
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => false,
  );
}
