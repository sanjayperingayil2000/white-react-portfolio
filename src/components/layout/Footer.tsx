import { BrandIcon } from "@/components/ui/BrandIcon";
import { Container } from "@/components/ui/Container";
import { ResumeButton } from "@/components/ui/ResumeButton";
import { footer } from "@/content/site";
import { footerSocials } from "@/content/socials";
import { externalLinkProps } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="pt-(--space-section) pb-10">
      <Container>
        <div className="glass flex flex-col items-center gap-6 px-6 py-10 text-center">
          <p className="font-display text-3xl text-fg">{footer.title}</p>

          <ul className="flex flex-wrap justify-center gap-x-5">
            {footer.links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="inline-flex min-h-11 items-center px-1 text-sm font-medium text-muted hover:text-fg">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <ResumeButton />

          <ul className="flex gap-2">
            {footerSocials.map((s) => (
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

          <p className="text-xs text-muted">{footer.copyright}</p>
        </div>
      </Container>
    </footer>
  );
}
