import type { Certification, Education } from "@/types/content";

/** Newest first. Resume entries verbatim; Diploma and High School are old-site only (O1, O2). */
export const education: Education[] = [
  {
    title: "PGP in Forward Deployed Engineering & Applied AI Solutions",
    institution: "FDE Academy, Bengaluru",
    dates: "Aug 2026 – Present",
    description:
      "Selective program (≈4% acceptance). Dual-track: production AI engineering (LLM apps, agents, RAG, evaluation, deployment) and consulting (discovery, PRDs, solution design, client delivery). Hands-on labs: LangChain use cases (LLM workflows, chains and agents); currently studying advanced RAG.",
  },
  {
    title: "MBA in Artificial Intelligence",
    institution: "Amrita Vishwa Vidyapeetham",
    dates: "April 2026 – Present",
  },
  {
    title: "B.Tech in Electronics and Communication Engineering",
    institution: "APJ Abdul Kalam Technological University",
    dates: "2017 – 2021",
  },
  {
    title: "Diploma",
    institution: "Kerala Academy for Skills Excellence (KASE)",
    dates: "2017 – 2019",
  },
  {
    title: "High School",
    institution: "Kerala State Board",
    dates: "2015 – 2017",
  },
];

export const certifications: Certification[] = [
  {
    title: "Certificate — Dhaga & Co. Client Engagement",
    topics: "Agentic Design Patterns, LLM Orchestration, Problem Discovery, MVP Engineering",
    issuer: "FDE Academy",
    date: "Oct 2026",
  },
  {
    title: "Generative AI Certification",
    issuer: "Skill India & National Skill Development Corporation (NSDC)",
  },
];
