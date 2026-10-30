"use client";

import { MobileMenu } from "@/components/layout/MobileMenu";
import { ResumeButton } from "@/components/ui/ResumeButton";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { labels, nav } from "@/content/site";
import { SECTION_IDS } from "@/lib/constants";
import { useActiveSection, useScrolledPast } from "@/lib/hooks";
import { cn } from "@/lib/utils";

const sectionIds = Object.values(SECTION_IDS);

export function Navbar() {
  const scrolled = useScrolledPast(8);
  const active = useActiveSection(sectionIds);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-(--gutter) pt-4">
      <nav
        aria-label={labels.primaryNav}
        data-scrolled={scrolled}
        className="glass-nav mx-auto flex h-14 max-w-(--container) items-center justify-between gap-4 pr-2 pl-5"
      >
        <a href={nav.logo.href} className="inline-flex min-h-11 items-center font-display text-2xl leading-none text-fg">
          {nav.logo.label}
        </a>

        <ul className="hidden items-center lg:flex">
          {nav.items.filter((item) => item.desktop).map((item) => {
            const isActive = active === item.href.slice(1);
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-current={isActive ? "location" : undefined}
                  className={cn(
                    "inline-flex min-h-11 items-center rounded-full px-2.5 text-sm font-medium xl:px-3",
                    isActive ? "text-accent" : "text-muted hover:text-fg",
                  )}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-1">
          <ResumeButton label={labels.resumeShort} variant="ghost" className="hidden min-h-11 px-3 lg:inline-flex" />
          <ThemeToggle />
          <MobileMenu items={nav.items} active={active} />
        </div>
      </nav>
    </header>
  );
}
