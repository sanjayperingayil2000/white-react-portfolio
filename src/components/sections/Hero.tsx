import { ArrowDown, Send } from "lucide-react";
import Image from "next/image";
import { BrandIcon } from "@/components/ui/BrandIcon";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { profile } from "@/content/profile";
import { labels } from "@/content/site";
import { heroSocials } from "@/content/socials";
import { hash, SECTION_IDS } from "@/lib/constants";
import { externalLinkProps } from "@/lib/utils";

export function Hero() {
  return (
    <section id={SECTION_IDS.home} aria-labelledby="hero-title" className="pt-36 pb-(--space-section) sm:pt-44">
      <Container className="grid items-center gap-12 md:grid-cols-[1.2fr_1fr]">
        <div>
          <h1
            id="hero-title"
            className="flex items-center gap-3 font-display text-5xl leading-none tracking-[-0.02em] text-fg"
          >
            {profile.shortName}
            <Image src="/images/hand.svg" alt="" width={48} height={48} className="size-[0.8em]" unoptimized />
          </h1>

          <p className="mt-5 flex flex-wrap gap-x-3 gap-y-1 text-lg font-medium text-fg">
            {profile.headline.map((line, i) => (
              <span key={line} className="flex items-center gap-3">
                {i > 0 && <span aria-hidden="true" className="size-1 rounded-full bg-accent" />}
                {line}
              </span>
            ))}
          </p>

          <p className="mt-6 max-w-[60ch] text-base text-muted">{profile.heroDescription}</p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <ButtonLink href={hash(SECTION_IDS.contact)} size="lg">
              {labels.sayHello}
              <Send className="size-4" strokeWidth={1.5} aria-hidden="true" />
            </ButtonLink>

            <ul className="flex gap-1">
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
          </div>
        </div>

        {/* Above the fold: no reveal animation, so the LCP image and heading paint immediately. */}
        <div className="w-full max-w-[420px] justify-self-center">
          <div className="glass p-2">
            <Image
              src={profile.heroImage.src}
              width={profile.heroImage.width}
              height={profile.heroImage.height}
              alt={profile.heroImage.alt}
              priority
              sizes="(min-width: 768px) 420px, 80vw"
              className="aspect-square w-full max-w-[420px] rounded-[calc(var(--radius-xl)-0.5rem)] object-cover"
            />
          </div>
        </div>
      </Container>

      <Container className="mt-16 hidden md:block">
        <a
          href={hash(SECTION_IDS.about)}
          className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-fg"
        >
          <ArrowDown className="size-4 motion-safe:animate-bounce" strokeWidth={1.5} aria-hidden="true" />
          {labels.scrollDown}
        </a>
      </Container>
    </section>
  );
}
