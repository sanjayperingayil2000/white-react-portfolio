"use client";

import { ArrowUpRight, Award, FileDown, Maximize2, X } from "lucide-react";
import Image from "next/image";
import { useId, useRef } from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { labels } from "@/content/site";
import { externalLinkProps } from "@/lib/utils";
import type { Certification } from "@/types/content";

const linkClass = "inline-flex min-h-11 items-center gap-1 text-sm font-medium text-accent hover:underline";

/** Certificate preview card; "View" opens the full certificate in a modal <dialog>. */
export function CertificateCard({ cert }: { cert: Certification }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  return (
    <GlassCard as="article" className="flex h-full flex-col p-3 sm:p-3">
      {/* Certificates are landscape; A4 landscape ratio keeps scans uncropped. */}
      <div className="relative aspect-[1.414] overflow-hidden rounded-lg border border-border bg-surface">
        {cert.image ? (
          <Image
            src={cert.image.src}
            width={cert.image.width}
            height={cert.image.height}
            alt={cert.image.alt}
            sizes="(min-width: 1280px) 360px, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="size-full object-cover object-top"
          />
        ) : (
          <div className="grid size-full place-items-center p-6 text-center">
            <div>
              <Award className="mx-auto size-10 text-muted" strokeWidth={1.25} aria-hidden="true" />
              <p className="mt-3 text-xs font-medium tracking-[0.08em] text-muted uppercase">{cert.issuer}</p>
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col px-3 pt-4 pb-1">
        {cert.date && <p className="text-sm font-medium text-muted tabular-nums">{cert.date}</p>}
        <h3 className="mt-1 text-base font-semibold text-fg">{cert.title}</h3>
        <p className="text-sm text-muted">{cert.issuer}</p>
        {cert.topics && <p className="mt-2 text-sm text-muted">{cert.topics}</p>}

        {(cert.image || cert.credentialUrl || cert.file) && (
          <div className="mt-auto flex flex-wrap gap-x-4 pt-3">
            {cert.image && (
              <button type="button" onClick={() => dialogRef.current?.showModal()} className={linkClass}>
                <Maximize2 className="size-4" strokeWidth={1.5} aria-hidden="true" />
                {labels.viewCertificate}
                <span className="sr-only">: {cert.title}</span>
              </button>
            )}
            {cert.credentialUrl && (
              <a href={cert.credentialUrl} className={linkClass} {...externalLinkProps}>
                {labels.verifyCredential}
                <span className="sr-only">: {cert.title}</span>
                <ArrowUpRight className="size-4" strokeWidth={1.5} aria-hidden="true" />
              </a>
            )}
            {cert.file && (
              <a href={cert.file} download className={linkClass}>
                <FileDown className="size-4" strokeWidth={1.5} aria-hidden="true" />
                {labels.certificatePdf}
                <span className="sr-only">: {cert.title}</span>
              </a>
            )}
          </div>
        )}
      </div>

      {cert.image && (
        <dialog
          ref={dialogRef}
          aria-labelledby={titleId}
          onClick={(e) => e.target === e.currentTarget && dialogRef.current?.close()}
          className="glass dialog-surface m-auto max-h-[92dvh] w-[min(64rem,calc(100%-2rem))] overflow-y-auto p-0 text-fg"
        >
          <div className="flex items-center justify-between gap-4 px-5 pt-4 pb-3">
            <h3 id={titleId} className="text-base font-semibold text-fg">
              {cert.title}
            </h3>
            <button
              type="button"
              onClick={() => dialogRef.current?.close()}
              aria-label={labels.close}
              className="grid size-11 shrink-0 place-items-center rounded-full text-muted hover:bg-fg/5 hover:text-fg"
            >
              <X className="size-5" strokeWidth={1.5} aria-hidden="true" />
            </button>
          </div>
          <div className="px-5 pb-5">
            <Image
              src={cert.image.src}
              width={cert.image.width}
              height={cert.image.height}
              alt={cert.image.alt}
              sizes="(min-width: 1024px) 64rem, 100vw"
              className="h-auto w-full rounded-lg"
            />
          </div>
        </dialog>
      )}
    </GlassCard>
  );
}
