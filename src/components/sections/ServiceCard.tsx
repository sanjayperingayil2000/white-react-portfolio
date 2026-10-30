"use client";

import { ArrowRight, X } from "lucide-react";
import { useId, useRef } from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Icon } from "@/components/ui/Icon";
import { labels } from "@/content/site";
import type { Service } from "@/types/content";

/** Service card with the old site's "View More" details, as a native modal <dialog>. */
export function ServiceCard({ service }: { service: Service }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  return (
    <GlassCard as="article" className="flex h-full flex-col">
      <Icon name={service.icon} className="size-7 text-fg" />
      <h3 className="mt-4 text-xl font-semibold text-fg">
        {service.titleLines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </h3>

      <button
        type="button"
        onClick={() => dialogRef.current?.showModal()}
        className="mt-auto inline-flex min-h-11 items-center gap-1 self-start pt-6 text-sm font-medium text-accent hover:underline"
      >
        {labels.viewMore}
        <span className="sr-only">: {service.modalTitle}</span>
        <ArrowRight className="size-4" strokeWidth={1.5} aria-hidden="true" />
      </button>

      <dialog
        ref={dialogRef}
        aria-labelledby={titleId}
        // A click on the dialog element itself (not its content) is a click on the backdrop.
        onClick={(e) => e.target === e.currentTarget && dialogRef.current?.close()}
        className="glass dialog-surface m-auto max-h-[85dvh] w-[min(36rem,calc(100%-2rem))] overflow-y-auto p-0 text-fg"
      >
        <div className="p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <h3 id={titleId} className="font-display text-2xl leading-tight text-fg">
              {service.modalTitle}
            </h3>
            <button
              type="button"
              onClick={() => dialogRef.current?.close()}
              aria-label={labels.close}
              className="-mt-2 -mr-2 grid size-11 shrink-0 place-items-center rounded-full text-muted hover:bg-fg/5 hover:text-fg"
            >
              <X className="size-5" strokeWidth={1.5} aria-hidden="true" />
            </button>
          </div>
          <p className="mt-3 text-sm text-muted">{service.description}</p>
          <ul className="mt-5 grid gap-3">
            {service.bullets.map((b) => (
              <li key={b} className="flex gap-3 text-sm text-muted">
                <Icon name="check-circle" className="mt-0.5 size-4 shrink-0 text-accent" />
                {b}
              </li>
            ))}
          </ul>
        </div>
      </dialog>
    </GlassCard>
  );
}
