"use client";

import { ArrowUp } from "lucide-react";
import { labels } from "@/content/site";
import { hash, SECTION_IDS } from "@/lib/constants";
import { useScrolledPast } from "@/lib/hooks";
import { cn } from "@/lib/utils";

/** Floating "back to top" link; appears after 560px of scroll, as on the old site. */
export function ScrollToTop() {
  const visible = useScrolledPast(560);

  return (
    <a
      href={hash(SECTION_IDS.home)}
      aria-label={labels.backToTop}
      aria-hidden={!visible}
      tabIndex={visible ? undefined : -1}
      className={cn(
        "glass-sm fixed right-(--gutter) bottom-6 z-40 grid size-12 place-items-center text-fg shadow-md hover:shadow-lg",
        !visible && "pointer-events-none opacity-0",
      )}
    >
      <ArrowUp className="size-5" strokeWidth={1.5} aria-hidden="true" />
    </a>
  );
}
