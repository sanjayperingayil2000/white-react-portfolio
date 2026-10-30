/**
 * Content model for the portfolio. Everything under src/content/ is typed
 * against these definitions; components only render what they receive.
 */

/** Icons rendered with lucide-react. See components/ui/Icon.tsx for the mapping. */
export type IconName =
  | "home"
  | "user"
  | "file"
  | "briefcase"
  | "image"
  | "message"
  | "award"
  | "headphones"
  | "layout-grid"
  | "code"
  | "pen-tool"
  | "check-circle"
  | "graduation-cap"
  | "calendar"
  | "mail"
  | "map-pin"
  | "languages"
  | "badge-check";

/** Brand logos rendered with components/ui/BrandIcon.tsx. */
export type BrandName = "github" | "linkedin" | "instagram" | "facebook" | "whatsapp";

export type ImageAsset = {
  /** Path under public/, e.g. "/images/profile/hero.webp" */
  src: string;
  width: number;
  height: number;
  alt: string;
};

export type Link = {
  label: string;
  href: string;
};

export type NavItem = Link & { icon: IconName };

export type SectionCopy = {
  title: string;
  subtitle?: string;
};

export type Stat = {
  icon: IconName;
  title: string;
  value: string;
};

export type Experience = {
  role: string;
  company: string;
  location?: string;
  /** ISO year-month, used for ordering and <time dateTime>. */
  start: string;
  /** ISO year-month, or null when the role is current. */
  end: string | null;
  /** Display string exactly as written on the resume. */
  dates: string;
  bullets: string[];
};

export type ProjectCategory = "ai" | "ui" | "business" | "blog";

type ProjectBase = {
  slug: string;
  title: string;
  category: ProjectCategory;
  techStack: string[];
  liveUrl: string | null;
  repoUrl: string | null;
  image: ImageAsset | null;
};

/** Case-study style project with resume bullets. */
export type FeaturedProject = ProjectBase & {
  kind: "featured";
  context: string;
  bullets: string[];
};

/** Gallery project: screenshot plus live demo link. */
export type GalleryProject = ProjectBase & {
  kind: "gallery";
  description: string | null;
};

export type Project = FeaturedProject | GalleryProject;

export type SkillGroup = {
  name: string;
  items: string[];
};

/** Proficiency labels used on the old site, kept for reference (not rendered). */
export type SkillLevel = "Basic" | "Intermediate" | "Advanced" | "Professional";

export type Education = {
  title: string;
  institution: string;
  dates: string;
  description?: string;
};

export type Certification = {
  title: string;
  issuer: string;
  topics?: string;
  date?: string;
};

export type Service = {
  icon: IconName;
  /** Card title, split where the old site used a line break. */
  titleLines: string[];
  modalTitle: string;
  description: string;
  bullets: string[];
};

export type Testimonial = {
  name: string;
  quote: string;
  image: ImageAsset;
};

export type SocialLink = {
  network: BrandName;
  label: string;
  href: string;
};

export type PhoneContact = {
  label: string;
  display: string;
  whatsappHref: string;
};

export type FormField = {
  name: "name" | "email" | "project";
  label: string;
  type: "text" | "email" | "textarea";
  placeholder: string;
  autoComplete?: string;
};
