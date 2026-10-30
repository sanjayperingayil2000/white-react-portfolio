import { hash, SECTION_IDS } from "@/lib/constants";
import type { FormField, Link, NavItem, SectionCopy } from "@/types/content";

/**
 * Site-wide settings and UI copy. Section headings, button labels and form
 * labels are carried over from the old site (see _audit/RESUME_MERGE.md, O26).
 */
export const site = {
  /** Production URL, taken from the "Portfolio" link in the resume PDF. */
  url: "https://sanjay-peringayil-portfolio.vercel.app",
  locale: "en",
  title: "Sanjay P Purushothaman — Forward Deployed Engineer",
  description:
    "Portfolio of Sanjay P Purushothaman — Forward Deployed Engineer | Applied AI & Agentic Systems | Full-Stack (Next.js, Node.js, AWS)",
  /** Used for sitemap lastModified. Update when content changes. */
  contentUpdatedAt: "2026-10-31",

  /** The only resume link in the app; every download button uses this. */
  resumeUrl: "/resume/Sanjay-Purushothaman-Resume.pdf",
  resumeFileName: "Sanjay-Purushothaman-Resume.pdf",
} as const;

export const nav: { logo: Link; items: NavItem[] } = {
  logo: { label: "Sanjay", href: hash(SECTION_IDS.home) },
  // Old-site nav labels and targets, ordered to follow the new page order.
  items: [
    { label: "Home", href: hash(SECTION_IDS.home), icon: "home" },
    { label: "About", href: hash(SECTION_IDS.about), icon: "user" },
    { label: "Portfolio", href: hash(SECTION_IDS.portfolio), icon: "image" },
    { label: "Skills", href: hash(SECTION_IDS.skills), icon: "file" },
    { label: "Services", href: hash(SECTION_IDS.services), icon: "briefcase" },
    { label: "Contact", href: hash(SECTION_IDS.contact), icon: "message" },
  ],
};

export const sections = {
  about: { title: "About Me", subtitle: "My introduction" },
  // The old "Qualification" section is split into Experience and Education.
  experience: { title: "Experience", subtitle: "My personal journey" },
  portfolio: { title: "Portfolio", subtitle: "Most recent works" },
  skills: { title: "Skills", subtitle: "My technical level" },
  education: { title: "Qualification", subtitle: "Education" },
  services: { title: "Services", subtitle: "What I offer" },
  testimonials: { title: "My clients say", subtitle: "Testimonial" },
  contact: { title: "Get in touch", subtitle: "Contact Me" },
} satisfies Record<string, SectionCopy>;

export const labels = {
  sayHello: "Say Hello",
  scrollDown: "Scroll Down",
  downloadCv: "Download CV",
  viewMore: "View More",
  demo: "Demo",
  writeMe: "Write me",
  sendMessage: "Send Message",
  contactLeftHeading: "Talk to me",
  contactFormHeading: "Write me your project",
  emailCardTitle: "Email",
  // Screen-reader-only labels
  location: "Location",
  languages: "Languages",
  techStack: "Tech stack",
} as const;

export const projectFilters = ["all", "ai", "ui", "business", "blog"] as const;

export const contactForm: FormField[] = [
  { name: "name", label: "Name", type: "text", placeholder: "Insert your name", autoComplete: "name" },
  { name: "email", label: "Mail", type: "email", placeholder: "Insert your email", autoComplete: "email" },
  { name: "project", label: "Project", type: "textarea", placeholder: "Write your project" },
];

export const footer = {
  title: "Sanjay P Purushothaman",
  links: [
    { label: "About", href: hash(SECTION_IDS.about) },
    { label: "Projects", href: hash(SECTION_IDS.portfolio) },
    { label: "Testimonials", href: hash(SECTION_IDS.testimonials) },
  ] satisfies Link[],
  copyright: "© Sanjay P Purushothaman. All rights reserved",
} as const;
