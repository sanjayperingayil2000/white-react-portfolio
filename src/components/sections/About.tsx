import { Download } from "lucide-react";
import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { GlassCard } from "@/components/ui/GlassCard";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { profile } from "@/content/profile";
import { labels, sections, site } from "@/content/site";
import { SECTION_IDS } from "@/lib/constants";

export function About() {
  return (
    <section id={SECTION_IDS.about} aria-labelledby="about-title" className="py-(--space-section)">
      <Container>
        <SectionHeading id="about-title" {...sections.about} />

        <div className="grid items-start gap-10 md:grid-cols-[minmax(0,320px)_1fr]">
          <Reveal className="glass mx-auto w-full max-w-[320px] p-2">
            <Image
              src={profile.aboutImage.src}
              width={profile.aboutImage.width}
              height={profile.aboutImage.height}
              alt={profile.aboutImage.alt}
              sizes="320px"
              className="aspect-square w-full rounded-[calc(var(--radius-xl)-0.5rem)] object-cover"
            />
          </Reveal>

          <Reveal delay={0.06}>
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {profile.stats.map((stat) => (
                <GlassCard as="li" key={stat.title} className="p-5 text-center sm:p-5">
                  <Icon name={stat.icon} className="mx-auto mb-2 size-6 text-accent" />
                  <p className="text-sm font-semibold text-fg">{stat.title}</p>
                  <p className="text-xs text-muted">{stat.value}</p>
                </GlassCard>
              ))}
            </ul>

            <p className="mt-8 max-w-[65ch] text-base text-muted">{profile.summary}</p>

            <dl className="mt-6 grid gap-3 text-sm sm:grid-cols-2">
              <div className="flex items-center gap-2 text-muted">
                <dt className="sr-only">{labels.location}</dt>
                <Icon name="map-pin" className="size-4 text-accent" />
                <dd>
                  {profile.location} · {profile.availability}
                </dd>
              </div>
              <div className="flex items-center gap-2 text-muted">
                <dt className="sr-only">{labels.languages}</dt>
                <Icon name="languages" className="size-4 text-accent" />
                <dd>{profile.languages.join(", ")}</dd>
              </div>
            </dl>

            <ButtonLink href={site.resumeUrl} download={site.resumeFileName} size="lg" className="mt-8">
              {labels.downloadCv}
              <Download className="size-4" strokeWidth={1.5} aria-hidden="true" />
            </ButtonLink>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
