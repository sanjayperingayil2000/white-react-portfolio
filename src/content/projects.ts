import type { FeaturedProject, GalleryProject, Project } from "@/types/content";

/** Forward Deployed Engineering projects from the resume. Text is verbatim. */
const featured: FeaturedProject[] = [
  {
    kind: "featured",
    slug: "dhaga-order-resolution-assistant",
    title: "Dhaga & Co. AI-Powered D2C Order Resolution Assistant",
    context: "FDE Academy, Cohort 3",
    category: "ai",
    bullets: [
      "Owned an end-to-end Forward Deployed engagement for a D2C brand, scoping repetitive “Where is my order?” (WISMO) queries — answered in ~9 hours on average — as the core support bottleneck through stakeholder-led discovery.",
      "Architected a 7-stage agentic LLM pipeline: intent and sub-intent routing, order-ID extraction with regex fallback, Supabase lookup, structured fact extraction, response generation, validation and fail-closed fallback — replacing the ~9-hour manual turnaround with real-time answers.",
      "Designed a tiered two-model strategy: Gemini Flash-Lite for high-frequency classification, extraction and validation; a higher-tier Gemini Flash model only for bilingual English/Hinglish response generation, minimising token cost and latency.",
      "Built an anti-hallucination guardrail (evaluator pattern) that audits every response against database ground truth; on a failed check or timeout, a fail-closed engine sends a deterministic templated reply, so unverified claims never reach customers.",
      "Chose direct relational lookups over vector RAG for exact, real-time order data (status, ETA, courier, payment mode), keeping the LLM strictly as the language layer over a deterministic source of truth; defended the architecture and trade-offs to executive stakeholders.",
    ],
    techStack: ["TypeScript", "Node.js", "Express", "React", "Vite", "Tailwind CSS", "Google Gemini API (@google/genai)", "Supabase (PostgreSQL)"],
    liveUrl: null, // TODO(Q6): optional demo link
    repoUrl: null, // TODO(Q6): optional repository link
    image: null, // TODO(Q6): screenshot
  },
  {
    kind: "featured",
    slug: "slack-team-insights",
    title: "Slack Team Insights AI Workflow Automation",
    context: "FDE Academy, Cohort 3",
    category: "ai",
    bullets: [
      "Built an AI-powered workflow (Slack → Python → Gemini → Team Insights) that turns scattered Slack team updates into concise, readable team summaries.",
      "Integrated Slack APIs to collect team updates and wrote Python automation to process them and prompt the Gemini API for summary generation.",
      "Brought AI into the tool where the team already works, so insights reach people without changing their workflow.",
      "Designed it as a Slack-based AI chatbot workflow, so team members get summaries and insights directly inside Slack rather than in a separate tool.",
      "Delivered a working end-to-end prototype within the hackathon timeframe, demonstrating how collaboration platforms can be connected to LLMs to cut the time spent reading through team updates.",
    ],
    techStack: ["Python", "Slack API", "Google Gemini API"],
    liveUrl: null, // TODO(Q6): optional demo link
    repoUrl: null, // TODO(Q6): optional repository link
    image: null, // TODO(Q6): screenshot
  },
];

/** Screenshots in public/images/projects/ are 1600px wide. */
const screenshot = (slug: string, title: string, height: number) => ({
  src: `/images/projects/${slug}.webp`,
  width: 1600,
  height,
  alt: `Screenshot of ${title}`,
});

/**
 * Web projects from the old site, in the old display order (O11–O18).
 * description/techStack are empty: TODO(Q7) if you want to add them.
 */
const gallery: GalleryProject[] = [
  {
    kind: "gallery",
    slug: "ai-application",
    title: "AI application",
    category: "ui",
    liveUrl: "https://ui001-beta.vercel.app/",
    repoUrl: null,
    description: null,
    techStack: [],
    image: screenshot("ai-application", "AI application", 718),
  },
  {
    kind: "gallery",
    slug: "business-service",
    title: "Business service",
    category: "business",
    liveUrl: "https://ikonext.vercel.app/",
    repoUrl: null,
    description: null,
    techStack: [],
    image: screenshot("business-service", "Business service", 719),
  },
  {
    kind: "gallery",
    slug: "logistics-company",
    title: "Logistics Company",
    category: "business",
    liveUrl: "https://transportlogistics.vercel.app/",
    repoUrl: null,
    description: null,
    techStack: [],
    image: screenshot("logistics-company", "Logistics Company", 723),
  },
  {
    kind: "gallery",
    slug: "coffee-shop",
    title: "Coffee Shop",
    category: "ui",
    liveUrl: "https://coffeui.vercel.app/",
    repoUrl: null,
    description: null,
    techStack: [],
    image: screenshot("coffee-shop", "Coffee Shop", 729),
  },
  {
    kind: "gallery",
    slug: "ecommerce-app",
    title: "Ecommerce app",
    category: "business",
    liveUrl: "https://ecommerce002.vercel.app/",
    repoUrl: null,
    description: null,
    techStack: [],
    image: screenshot("ecommerce-app", "Ecommerce app", 712),
  },
  {
    kind: "gallery",
    slug: "hotel-booking-web",
    title: "Hotel Booking Web",
    category: "business",
    liveUrl: "https://hotelbooking001.vercel.app/",
    repoUrl: null,
    description: null,
    techStack: [],
    image: screenshot("hotel-booking-web", "Hotel Booking Web", 714),
  },
  {
    kind: "gallery",
    slug: "blog-web",
    title: "Blog web",
    category: "blog",
    liveUrl: "https://incredible-nasturtium-a80245.netlify.app/",
    repoUrl: null,
    description: null,
    techStack: [],
    image: screenshot("blog-web", "Blog web", 732),
  },
  {
    kind: "gallery",
    slug: "dashboard-ui",
    title: "Dashboard UI",
    category: "ui",
    liveUrl: "https://dashboard001-kappa.vercel.app/dashboard",
    repoUrl: null,
    description: null,
    techStack: [],
    image: screenshot("dashboard-ui", "Dashboard UI", 715),
  },
];

export const projects: Project[] = [...featured, ...gallery];
