import { MobileMenu } from "@/components/layout/MobileMenu";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { nav } from "@/content/site";

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-(--gutter) pt-4">
      <nav
        aria-label="Primary"
        className="glass-nav mx-auto flex h-14 max-w-(--container) items-center justify-between gap-4 pr-2 pl-5"
      >
        <a href={nav.logo.href} className="font-display text-2xl leading-none text-fg">
          {nav.logo.label}
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {nav.items.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="rounded-full px-3 py-2 text-sm font-medium text-muted hover:text-fg"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <MobileMenu items={nav.items} />
        </div>
      </nav>
    </header>
  );
}
