import { whatsappLink } from "@/lib/utils";
import type { PhoneContact, SocialLink } from "@/types/content";

export const email = {
  address: "sanjayperingayil@gmail.com",
  href: "mailto:sanjayperingayil@gmail.com",
} as const;

/** Pre-filled WhatsApp greeting, carried over from the old site. */
export const whatsappGreeting = "Hello, more information!";

export const phones: PhoneContact[] = [
  {
    label: "Whatsapp India",
    display: "+91 90613 81726",
    tel: "+919061381726",
    whatsappHref: whatsappLink("919061381726", whatsappGreeting),
  },
  {
    // O22, old-site only
    label: "Whatsapp UAE",
    display: "+971-588-393-705",
    tel: "+971588393705",
    whatsappHref: whatsappLink("971588393705", whatsappGreeting),
  },
];

/** Number used by the "Chat on WhatsApp" buttons (contact section and mobile floating button). */
export const primaryWhatsapp = phones[0];

export const socials: SocialLink[] = [
  { network: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/sanjay-purushothaman-5223aa224/" },
  { network: "github", label: "GitHub", href: "https://github.com/sanjayperingayil2000" }, // O23
  { network: "instagram", label: "Instagram", href: "https://www.instagram.com/sanjayperingayil?igsh=eGJmMzgzcThyMmZm" }, // O24
  { network: "facebook", label: "Facebook", href: "https://www.facebook.com/share/1EM19GJhb8/" }, // O25
];

/** Networks shown in the hero and footer, matching the old site. */
export const heroSocials = socials.filter((s) => ["instagram", "github", "linkedin"].includes(s.network));
export const footerSocials = socials.filter((s) => ["facebook", "instagram", "linkedin"].includes(s.network));

// Disabled on the old site and kept disabled (O27, O28):
//   Messenger — "Sanjay peringayil" — https://m.me/crypticalcoder
//   X/Twitter — icon only, no URL
