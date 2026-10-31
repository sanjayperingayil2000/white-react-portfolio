import { hash, SECTION_IDS } from "@/lib/constants";
import { profile } from "@/content/profile";
import type { FormField, Link, NavItem, ProjectCategory, SectionCopy } from "@/types/content";

/**
 * Site-wide settings and UI copy. Section headings, button labels and form
 * labels are carried over from the old site (see docs/RESUME_MERGE.md, O26).
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
  logo: { label: profile.fullName, href: hash(SECTION_IDS.home) },
  // Page order. The desktop bar keeps 7 links (Home is the logo; Services is reachable
  // from the mobile menu and by scrolling); the mobile menu shows all 9 as a 3×3 grid.
  items: [
    { label: "Home", href: hash(SECTION_IDS.home), icon: "home", desktop: false },
    { label: "About", href: hash(SECTION_IDS.about), icon: "user", desktop: true },
    { label: "Experience", href: hash(SECTION_IDS.experience), icon: "milestone", desktop: true },
    { label: "Portfolio", href: hash(SECTION_IDS.portfolio), icon: "image", desktop: true },
    { label: "Skills", href: hash(SECTION_IDS.skills), icon: "file", desktop: true },
    { label: "Education", href: hash(SECTION_IDS.education), icon: "graduation-cap", desktop: true },
    { label: "Certificates", href: hash(SECTION_IDS.certificates), icon: "award", desktop: true },
    { label: "Services", href: hash(SECTION_IDS.services), icon: "briefcase", desktop: false },
    { label: "Contact", href: hash(SECTION_IDS.contact), icon: "message", desktop: true },
  ],
};

export const sections = {
  about: { title: "About Me", subtitle: "My introduction" },
  // The old "Qualification" section is split into Experience, Education and Certificates.
  experience: { title: "Experience", subtitle: "My personal journey" },
  portfolio: { title: "Portfolio", subtitle: "Most recent works" },
  skills: { title: "Skills", subtitle: "My technical level" },
  education: { title: "Education", subtitle: "Academic background" },
  certificates: { title: "Certificates", subtitle: "Credentials" },
  services: { title: "Services", subtitle: "What I offer" },
  testimonials: { title: "My clients say", subtitle: "Testimonial" },
  contact: { title: "Get in touch", subtitle: "Contact Me" },
} satisfies Record<string, SectionCopy>;

export const labels = {
  sayHello: "Say Hello",
  scrollDown: "Scroll Down",
  // Replaces the old site's "Download CV" (Phase 5 brief).
  downloadResume: "Download Resume",
  resumeShort: "Resume",
  viewMore: "View More",
  demo: "Demo",
  repo: "Code",
  writeMe: "Write me",
  sendMessage: "Send Message",
  contactLeftHeading: "Talk to me",
  contactFormHeading: "Write me your project",
  emailCardTitle: "Email",
  currently: "Currently",
  viewCertificate: "View",
  verifyCredential: "Verify",
  certificatePdf: "PDF",
  // Screen-reader-only labels
  location: "Location",
  languages: "Languages",
  techStack: "Tech stack",
  primaryNav: "Primary",
  openMenu: "Open menu",
  closeMenu: "Close menu",
  siteMenu: "Site menu",
  skipToContent: "Skip to content",
  close: "Close",
  backToTop: "Back to top",
  filterProjects: "Filter projects by category",
  testimonialsList: "Testimonials",
  toggleTheme: "Toggle theme",
  switchToDark: "Switch to dark theme",
  switchToLight: "Switch to light theme",
} as const;

/** Old-site filters (all / ui / business / blog) plus "ai" for the FDE projects. */
export const projectFilters: { value: ProjectCategory | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "ai", label: "AI" },
  { value: "ui", label: "UI" },
  { value: "business", label: "Business" },
  { value: "blog", label: "Blog" },
];

/** Name/Mail labels and placeholders are from the old site; "project" became "message" (Phase 7). */
export const contactForm: FormField[] = [
  { name: "name", label: "Name", type: "text", placeholder: "Insert your name", required: true, autoComplete: "name" },
  { name: "email", label: "Mail", type: "email", placeholder: "Insert your email", required: true, autoComplete: "email" },
  { name: "subject", label: "Subject", type: "text", placeholder: "What is it about?", required: false },
  { name: "message", label: "Message", type: "textarea", placeholder: "Write your project", required: true },
];

/** Contact form states (Phase 7). */
export const contactCopy = {
  optional: "optional",
  sending: "Sending…",
  success: "Thanks — your message is on its way. I'll get back to you soon.",
  error: "Sorry, your message couldn't be sent.",
  rateLimited: "You've sent a few messages already. Please try again in a few minutes.",
  fallbackPrefix: "You can email me directly at",
  fallbackSubject: "Portfolio enquiry",
  chatOnWhatsapp: "Chat on WhatsApp",
  call: "Call",
} as const;

export const footer = {
  title: "Sanjay P Purushothaman",
  links: [
    { label: "About", href: hash(SECTION_IDS.about) },
    { label: "Projects", href: hash(SECTION_IDS.portfolio) },
    { label: "Services", href: hash(SECTION_IDS.services) },
    { label: "Testimonials", href: hash(SECTION_IDS.testimonials) },
  ] satisfies Link[],
  copyright: "© Sanjay P Purushothaman. All rights reserved",
} as const;
