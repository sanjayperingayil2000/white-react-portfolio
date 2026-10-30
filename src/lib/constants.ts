/** Anchor ids for the one-page layout. Old-site anchors (#home, #about, #skills,
 * #services, #portfolio, #testimonials, #contact) are kept so existing links work. */
export const SECTION_IDS = {
  home: "home",
  about: "about",
  experience: "experience",
  portfolio: "portfolio",
  skills: "skills",
  education: "education",
  certificates: "certificates",
  services: "services",
  testimonials: "testimonials",
  contact: "contact",
} as const;

export type SectionId = (typeof SECTION_IDS)[keyof typeof SECTION_IDS];

export const hash = (id: SectionId) => `#${id}` as const;
