import { education } from "@/content/education";
import { experience } from "@/content/experience";
import { profile } from "@/content/profile";
import { site } from "@/content/site";
import { skills } from "@/content/skills";
import { email, phones, socials } from "@/content/socials";

/** schema.org Person, built only from the content files. */
export function PersonJsonLd() {
  const current = experience.find((job) => job.end === null);

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.fullName,
    // The old site's name for the same person (RESUME_MERGE.md U1).
    alternateName: "Sanjay Peringayil",
    jobTitle: profile.headline[0],
    description: profile.heroDescription,
    url: site.url,
    image: new URL(profile.heroImage.src, site.url).toString(),
    email: email.href,
    telephone: phones[0].tel,
    address: { "@type": "PostalAddress", addressRegion: "Kerala", addressCountry: "IN" },
    ...(current && { worksFor: { "@type": "Organization", name: current.company } }),
    alumniOf: education.map((e) => ({ "@type": "EducationalOrganization", name: e.institution })),
    knowsLanguage: profile.languages,
    knowsAbout: skills.flatMap((g) => g.items).slice(0, 30),
    sameAs: socials.map((s) => s.href),
  };

  return (
    <script
      type="application/ld+json"
      // Escape "<" so the JSON can never close the script tag.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(person).replace(/</g, "\\u003c") }}
    />
  );
}
