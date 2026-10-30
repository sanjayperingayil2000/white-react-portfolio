import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Opens in a new tab without leaking window.opener or the referrer. */
export const externalLinkProps = {
  target: "_blank",
  rel: "noopener noreferrer",
} as const;
