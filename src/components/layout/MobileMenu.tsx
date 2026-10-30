"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useId, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import type { NavItem } from "@/types/content";

export function MobileMenu({ items }: { items: NavItem[] }) {
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
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((o) => !o)}
        className="grid size-11 place-items-center rounded-full text-fg hover:bg-fg/5"
      >
        {open ? <X className="size-5" strokeWidth={1.5} /> : <Menu className="size-5" strokeWidth={1.5} />}
      </button>

      <div id={panelId} hidden={!open} className="glass absolute inset-x-(--gutter) top-20 p-4">
        <ul className="grid grid-cols-3 gap-2">
          {items.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex flex-col items-center gap-1.5 rounded-lg px-2 py-3 text-sm font-medium text-muted hover:bg-fg/5 hover:text-fg"
              >
                <Icon name={item.icon} className="size-5" />
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
