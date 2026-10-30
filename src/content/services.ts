import type { Service } from "@/types/content";

/** Old-site services, verbatim (O5–O7). */
export const services: Service[] = [
  {
    icon: "layout-grid",
    titleLines: ["Full Stack", "Web Apps"],
    modalTitle: "Full Stack Web Application",
    description:
      "Scalable, responsive, and modern web applications built from scratch using the latest fullstack technologies.",
    bullets: [
      "End-to-end development with React.js, Next.js, Node.js & databases like MongoDB/PostgreSQL",
      "Fully responsive, SEO-friendly, and user-centric designs",
      "RESTful & GraphQL API integration with secure authentication",
      "Admin dashboards, content management, and analytics-ready setups",
      "Clean, maintainable codebase with Git and deployment pipelines",
    ],
  },
  {
    icon: "code",
    titleLines: ["Website", "Maintenance"],
    modalTitle: "Ensuring Your Website Runs Smoothly 24/7",
    description: "Reliable ongoing support to keep your website secure, updated, and running smoothly at all times.",
    bullets: [
      "Regular bug fixes, performance tuning, and content updates",
      "Uptime monitoring, backups, and security enhancements",
      "CMS adjustments or plugin/module integration",
      "Troubleshooting deployment issues and broken functionalities",
      "Adding new sections or pages without disrupting existing systems",
    ],
  },
  {
    icon: "pen-tool",
    titleLines: ["Graphic", "Design"],
    modalTitle: "Designs That Speak for Your Brand",
    description: "Creative and brand-aligned visuals for digital and print that leave a lasting impression.",
    bullets: [
      "Custom logo, poster, and brochure design",
      "Social media creatives with consistent visual branding",
      "Clean, professional, and pixel-perfect designs",
      "Fast delivery with multiple format exports (PNG, PDF, SVG)",
      "Social media marketing visuals for brand engagement and promotions",
    ],
  },
];
