import type { ImageAsset, Stat } from "@/types/content";

export const profile = {
  fullName: "Sanjay P Purushothaman",
  shortName: "Sanjay",
  headline: [
    "Forward Deployed Engineer",
    "Applied AI & Agentic Systems",
    "Full-Stack (Next.js, Node.js, AWS)",
  ],
  location: "Kerala, India",
  availability: "Open to Remote / Relocation",
  languages: ["English", "Malayalam", "Hindi", "Tamil"],

  /** First sentence of the resume summary (RESUME_MERGE.md U3; awaiting a shorter hero line if wanted). */
  heroDescription:
    "Forward Deployed–oriented engineer with 5+ years of professional experience across software engineering and digital product delivery, including 4+ years building and shipping production full-stack and cloud systems.",

  /** Resume professional summary, verbatim (the PDF itself has no dashes after "discipline" / "ownership"). */
  summary:
    "Forward Deployed–oriented engineer with 5+ years of professional experience across software engineering and digital product delivery, including 4+ years building and shipping production full-stack and cloud systems. Combines a consultant's discipline stakeholder-led problem discovery, requirement framing, solution design and executive delivery with an engineer's end-to-end ownership currently owning the frontend of a multi-service product, joining client requirement calls, and shipping through GitLab CI/CD to AWS (Lambda, EC2, ECS) and Kubernetes. Currently building agentic AI systems with multi-model LLM orchestration (LangChain) in the PGP in Forward Deployed Engineering & Applied AI Solutions including a bilingual order-resolution assistant with a tiered model strategy and fail-closed anti-hallucination guardrails, delivered from discovery to MVP.",

  heroImage: {
    src: "/images/profile/hero.webp",
    width: 1200,
    height: 1200,
    alt: "Portrait of Sanjay P Purushothaman",
  } satisfies ImageAsset,

  aboutImage: {
    src: "/images/profile/about.webp",
    width: 900,
    height: 900,
    alt: "Sanjay P Purushothaman",
  } satisfies ImageAsset,

  stats: [
    { icon: "award", title: "Experience", value: "5+ Years Working" },
    { icon: "briefcase", title: "Completed", value: "18 + Projects" }, // O3, old-site only
    { icon: "headphones", title: "Support", value: "Online 24/7" }, // O4, old-site only
  ] satisfies Stat[],
} as const;
