import { ArrowDown, Send } from "lucide-react";
import Image from "next/image";
import { Parallax } from "@/components/motion/Parallax";
import { BrandIcon } from "@/components/ui/BrandIcon";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ResumeButton } from "@/components/ui/ResumeButton";
import { experience } from "@/content/experience";
import { profile } from "@/content/profile";
import { labels } from "@/content/site";
import { heroSocials } from "@/content/socials";
import { hash, SECTION_IDS } from "@/lib/constants";
import { externalLinkProps } from "@/lib/utils";

export function Hero() {
  const currentRole = experience.find((job) => job.end === null);

  return (
    <section id={SECTION_IDS.home} aria-labelledby="hero-title" className="pt-32 pb-(--space-section) sm:pt-40">
      <Container className="grid items-center gap-14 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
        {/* No reveal above the fold (keeps LCP immediate); the two columns drift at different rates. */}
        <Parallax preset="heroText">
          <p className="glass-sm inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-muted">
            <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
            {profile.availability} · {profile.location}
          </p>

          <h1
            id="hero-title"
            className="mt-6 flex items-end gap-[0.12em] font-display text-hero leading-[0.9] tracking-[-0.03em] text-fg"
          >
            {profile.shortName}
            <Image
              src="/images/hand.svg"
              alt=""
              width={48}
              height={48}
              unoptimized
              className="mb-[0.14em] size-[0.36em]"
            />
          </h1>

          <p className="mt-6 font-display text-3xl leading-tight text-fg italic">{profile.headline[0]}</p>
          <p className="mt-2 text-base font-medium text-muted">{profile.headline.slice(1).join(" · ")}</p>

          <p className="mt-6 max-w-[56ch] text-base text-muted">{profile.heroDescription}</p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <ButtonLink href={hash(SECTION_IDS.contact)} size="lg">
              {labels.sayHello}
              <Send className="size-4" strokeWidth={1.5} aria-hidden="true" />
            </ButtonLink>
            <ResumeButton size="lg" />
          </div>

          <ul className="mt-8 flex gap-1">
            {heroSocials.map((s) => (
              <li key={s.network}>
                <a
                  href={s.href}
                  aria-label={s.label}
                  className="grid size-11 place-items-center rounded-full text-muted hover:bg-fg/5 hover:text-fg"
                  {...externalLinkProps}
                >
                  <BrandIcon name={s.network} className="size-[18px]" />
                </a>
              </li>
            ))}
          </ul>
        </Parallax>

        <Parallax preset="heroImage" className="relative mx-auto w-full max-w-[440px]">
          <div className="glass p-2">
            <Image
              src={profile.heroImage.src}
              width={profile.heroImage.width}
              height={profile.heroImage.height}
              alt={profile.heroImage.alt}
              priority
              // Rendered width: 424px at xl, ~38vw beside the text at lg, up to 424px stacked, else viewport minus gutters and frame.
              sizes="(min-width: 1280px) 424px, (min-width: 1024px) 38vw, (min-width: 640px) 424px, calc(100vw - 3rem)"
              className="aspect-square w-full rounded-[calc(var(--radius-xl)-0.5rem)] object-cover"
            />
          </div>

          {currentRole && (
            // Solid surface, not glass: it sits over the photo, so contrast can't depend on the image.
            <div className="absolute -bottom-6 left-4 max-w-[17rem] rounded-xl border border-border bg-surface px-4 py-3 shadow-lg sm:-left-8">
              <p className="text-xs font-medium tracking-[0.08em] text-muted uppercase">{labels.currently}</p>
              <p className="mt-1 text-sm font-semibold text-fg">{currentRole.role}</p>
              <p className="text-xs text-muted">{currentRole.company}</p>
            </div>
          )}
        </Parallax>
      </Container>

      <Container className="mt-20 hidden lg:block">
        <a
          href={hash(SECTION_IDS.about)}
          className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-muted hover:text-fg"
        >
          <ArrowDown className="size-4" strokeWidth={1.5} aria-hidden="true" />
          {labels.scrollDown}
        </a>
      </Container>
    </section>
  );
}
