import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** wa.me chat link: `number` is digits only with country code, e.g. "919061381726". */
export function whatsappLink(number: string, text: string) {
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}

/** Opens in a new tab without leaking window.opener or the referrer. */
export const externalLinkProps = {
  target: "_blank",
  rel: "noopener noreferrer",
} as const;
