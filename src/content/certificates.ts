import type { Certification } from "@/types/content";

/**
 * Certificates showcase. Newest first; to add one, add an object here.
 *
 * - image: put the scan/screenshot in public/images/certificates/ and set
 *   { src, width, height, alt }. Without an image the card shows a neutral preview.
 * - credentialUrl: the issuer's verification page, if any.
 * - file: a PDF copy under public/certificates/, if you want it downloadable.
 */
export const certificates: Certification[] = [
  {
    slug: "dhaga-client-engagement",
    title: "Certificate — Dhaga & Co. Client Engagement",
    topics: "Agentic Design Patterns, LLM Orchestration, Problem Discovery, MVP Engineering",
    issuer: "FDE Academy",
    date: "Oct 2026",
    image: null, // TODO: certificate image
    credentialUrl: null,
    file: null,
  },
  {
    slug: "generative-ai-nsdc",
    title: "Generative AI Certification",
    issuer: "Skill India & National Skill Development Corporation (NSDC)",
    image: null, // TODO: certificate image
    credentialUrl: null,
    file: null,
  },
];
