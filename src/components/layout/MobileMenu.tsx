"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useId, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { ResumeButton } from "@/components/ui/ResumeButton";
import { labels } from "@/content/site";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/types/content";

type MobileMenuProps = {
  items: NavItem[];
  /** Id of the section in view, from Navbar's scroll-spy. */
  active: string | null;
};

export function MobileMenu({ items, active }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? labels.closeMenu : labels.openMenu}
        onClick={() => setOpen((o) => !o)}
        className="grid size-11 place-items-center rounded-full text-fg hover:bg-fg/5"
      >
        {open ? <X className="size-5" strokeWidth={1.5} /> : <Menu className="size-5" strokeWidth={1.5} />}
      </button>

      {/* The nav is the containing block (backdrop-filter creates one), so position against it. */}
      <div id={panelId} hidden={!open} className="glass dialog-surface absolute inset-x-0 top-[calc(100%+0.5rem)] p-4">
        <ul className="grid grid-cols-3 gap-2">
          {items.map((item) => {
            const isActive = active === item.href.slice(1);
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive ? "location" : undefined}
                  className={cn(
                    "flex flex-col items-center gap-1.5 rounded-lg px-2 py-3 text-sm font-medium hover:bg-fg/5",
                    isActive ? "text-accent" : "text-muted hover:text-fg",
                  )}
                >
                  <Icon name={item.icon} className="size-5" />
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
        <ResumeButton variant="primary" className="mt-3 w-full" />
      </div>
    </div>
  );
}
