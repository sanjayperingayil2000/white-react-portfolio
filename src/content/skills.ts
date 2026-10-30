import type { SkillGroup, SkillLevel } from "@/types/content";

/** Resume "Core Skills", verbatim. Bootstrap and Wordpress are old-site only (O19, O20). */
export const skills: SkillGroup[] = [
  {
    name: "Applied AI & LLMs",
    items: [
      "Agentic AI design patterns",
      "multi-model LLM orchestration & routing",
      "LLM guardrails and evaluator/validator patterns",
      "fail-closed design",
      "LangChain",
      "Google Gemini API",
      "OpenAI API",
      "prompt & context engineering",
      "entity extraction",
      "AI workflow automation (n8n, Python)",
      "Slack API integrations",
      "RAG (in progress)",
    ],
  },
  {
    name: "Forward Deployed & Consulting",
    items: [
      "Stakeholder-led problem discovery",
      "requirement discovery",
      "PRDs",
      "solution design documents",
      "MVP scoping",
      "trade-off communication",
      "executive client presentations",
    ],
  },
  {
    name: "Backend",
    items: ["Node.js", "Express.js", "NestJS", "Python API integration", "REST", "GraphQL", "microservices", "serverless"],
  },
  {
    name: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Vite",
      "Tailwind CSS",
      "Zustand",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "Wordpress",
    ],
  },
  {
    name: "Cloud & DevOps",
    items: ["AWS (Lambda, EC2, ECS, CloudWatch, S3, Cognito)", "Docker", "Kubernetes", "GitLab CI/CD", "Jenkins", "GitHub Actions"],
  },
  {
    name: "Data & Security",
    items: ["PostgreSQL", "Supabase", "MongoDB", "OAuth2", "JWT", "RBAC", "input validation"],
  },
  {
    name: "Practices",
    items: ["System design", "manifest-driven architecture", "design patterns", "MVC", "Agile/Scrum"],
  },
];

/**
 * Proficiency levels from the old site, verbatim names (O21). Kept for reference;
 * not rendered until you decide whether to show levels.
 */
export const legacySkillLevels: Record<string, Record<string, SkillLevel>> = {
  "Frontend Developer": {
    HTML: "Advanced",
    CSS: "Advanced",
    Javascript: "Professional",
    Wordpress: "Intermediate",
    React: "Advanced",
    Next: "Advanced",
    Bootstrap: "Advanced",
    Tailwind: "Intermediate",
  },
  "Backend Developer": {
    "Node Js": "Advanced",
    Express: "Intermediate",
    "Nest Js": "Basic",
    AWS: "Intermediate",
    Mongodb: "Advanced",
    Postgresql: "Intermediate",
    GraphQL: "Intermediate",
    "REST API": "Advanced",
  },
  "AI (No code)": {
    n8n: "Basic",
    Automation: "Basic",
    Agent: "Basic",
  },
};
