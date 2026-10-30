import type { Experience } from "@/types/content";

/** Newest first. Text is verbatim from the resume. */
export const experience: Experience[] = [
  {
    role: "Associate Consultant",
    company: "Zimble Systems Pvt. Ltd.",
    start: "2026-02",
    end: null,
    dates: "Feb 2026 – Present",
    bullets: [
      "Own the entire frontend of Config App, the company’s core product a single Next.js application through which multiple backend services are configured and managed; currently leading its frontend development.",
      "Participate in client calls for requirement discussions, translating client needs into scoped frontend features and delivery priorities.",
      "Designed and built HyperConfigurator from scratch within the Config App ecosystem: a Node.js serverless backend on AWS Lambda, a Next.js frontend with Zustand state management, and integration of a specialised Python API.",
      "Own deployments end to end: GitLab CI/CD pipelines, Docker image builds, and releases to AWS EC2, ECS and Kubernetes.",
      "Monitor and debug production with AWS CloudWatch, using log analysis to diagnose issues across services and sustain uptime.",
      "Maintain manifest-driven application servers, managing MongoDB integrations and secure GitHub authentication.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "JAH Transport LLC",
    start: "2025-06",
    end: "2026-01",
    dates: "Jun 2025 – Jan 2026",
    bullets: [
      "Built and deployed an Inventory & Supply Chain Management application (Next.js, MongoDB, REST APIs) that digitised daily operational tracking for the business.",
      "Implemented role-based access control (RBAC) across the admin dashboard, securing data and tailoring functionality to each department.",
    ],
  },
  {
    role: "Junior Software Engineer",
    company: "Softnotions Technologies Pvt. Ltd.",
    start: "2023-03",
    end: "2025-06",
    dates: "Mar 2023 – Jun 2025",
    bullets: [
      "Shipped AI-powered features, including contextual content suggestions using the OpenAI API, integrated directly into React interfaces.",
      "Developed full-stack applications with Next.js, React.js and Node.js, improving frontend responsiveness and backend efficiency.",
      "Designed REST and GraphQL APIs powering dynamic UI components and third-party integrations.",
      "Containerised Node.js services with Docker and built Jenkins CI/CD pipelines for consistent staging and production releases.",
      "Built real-time analytics dashboards and enforced security with OAuth2, JWT and strict input validation.",
    ],
  },
  {
    role: "MERN Stack Developer Trainee",
    company: "Prepbytes",
    location: "Remote",
    start: "2022-07",
    end: "2023-03",
    dates: "Jul 2022 – Mar 2023",
    bullets: [
      "Built CRUD blog platforms and secure admin dashboards (MongoDB, Express.js, React) with JWT authentication, validation and multi-format file uploads, working in Agile sprints with peer code reviews.",
    ],
  },
  {
    role: "Graphic Designer",
    company: "Calypso Branding Partner",
    start: "2021-07",
    end: "2022-06",
    dates: "Jul 2021 – Jun 2022",
    bullets: [
      "Designed high-fidelity UI layouts and built responsive, semantic marketing landing pages (HTML5, CSS3), developing the user-centred design sense used in client-facing solution work today.",
    ],
  },
];
