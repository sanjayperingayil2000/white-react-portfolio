"use client";

import { Menu, X } from "lucide-react";
import { useRef } from "react";
import { BrandIcon } from "@/components/ui/BrandIcon";
import { Icon } from "@/components/ui/Icon";
import { ResumeButton } from "@/components/ui/ResumeButton";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { labels, nav } from "@/content/site";
import { heroSocials } from "@/content/socials";
import { cn, externalLinkProps } from "@/lib/utils";
import type { NavItem } from "@/types/content";

type MobileMenuProps = {
  items: NavItem[];
  /** Id of the section in view, from Navbar's scroll-spy. */
  active: string | null;
};

/**
 * Full-screen glass sheet below lg. A native modal <dialog> gives the focus trap,
 * inert background, Escape-to-close and focus return; globals.css locks page
 * scroll while any dialog is open.
 */
export function MobileMenu({ items, active }: MobileMenuProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  // Set when a section link closes the sheet: focus then follows the page, not the trigger.
  const navigating = useRef(false);

  const open = () => {
    navigating.current = false;
    dialogRef.current?.showModal();
    closeRef.current?.focus();
  };
  // Closing before the anchor's default navigation runs restores page scroll first.
  const close = () => dialogRef.current?.close();
  const closeForLink = () => {
    navigating.current = true;
    close();
  };
  // Taps don't reliably focus the trigger (iOS), so return focus to it explicitly.
  const onClose = () => {
    if (!navigating.current) triggerRef.current?.focus();
  };

  return (
    <div className="lg:hidden">
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="dialog"
        aria-label={labels.openMenu}
        onClick={open}
        className="grid size-11 place-items-center rounded-full text-fg hover:bg-fg/5"
      >
        <Menu className="size-5" strokeWidth={1.5} aria-hidden="true" />
      </button>

      <dialog
        ref={dialogRef}
        onClose={onClose}
        aria-label={labels.siteMenu}
        className="mobile-sheet glass dialog-surface m-0 h-dvh max-h-none w-full max-w-none rounded-none border-0 p-0 text-fg"
      >
        <div className="flex min-h-full flex-col px-(--gutter) pt-4 pb-[max(2rem,env(safe-area-inset-bottom))]">
          <div className="flex h-14 items-center justify-between pr-2 pl-5">
            <a
              href={nav.logo.href}
              onClick={closeForLink}
              className="inline-flex min-h-11 items-center font-display text-base leading-none font-bold tracking-tight"
            >
              {nav.logo.label}
            </a>
            <div className="flex items-center gap-1">
              <ThemeToggle />
              <button
                ref={closeRef}
                type="button"
                onClick={close}
                aria-label={labels.closeMenu}
                className="grid size-11 place-items-center rounded-full hover:bg-fg/5"
              >
                <X className="size-5" strokeWidth={1.5} aria-hidden="true" />
              </button>
            </div>
          </div>

          <ul className="mt-6 grid gap-1">
            {items.map((item) => {
              const isActive = active === item.href.slice(1);
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={closeForLink}
                    aria-current={isActive ? "location" : undefined}
                    className={cn(
                      "flex min-h-13 items-center gap-4 rounded-lg px-5 font-display text-xl font-semibold hover:bg-fg/5",
                      isActive ? "text-accent" : "text-fg",
                    )}
                  >
                    <Icon name={item.icon} className="size-5 shrink-0 text-muted" />
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="mt-auto grid gap-4 pt-8">
            <ResumeButton variant="primary" size="lg" className="w-full" />
            <ul className="flex justify-center gap-2">
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
      </dialog>
    </div>
  );
}
