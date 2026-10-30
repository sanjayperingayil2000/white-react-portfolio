import { BrandIcon } from "@/components/ui/BrandIcon";
import { contactCopy } from "@/content/site";
import { primaryWhatsapp } from "@/content/socials";
import { externalLinkProps } from "@/lib/utils";

/** Mobile/tablet only (the desktop has the Contact section button in reach). Sits below the back-to-top button. */
export function FloatingWhatsApp() {
  return (
    <a
      href={primaryWhatsapp.whatsappHref}
      aria-label={contactCopy.chatOnWhatsapp}
      className="fixed right-(--gutter) bottom-6 z-40 grid size-12 place-items-center rounded-full bg-accent text-accent-foreground shadow-lg lg:hidden"
      {...externalLinkProps}
    >
      <BrandIcon name="whatsapp" className="size-6" />
    </a>
  );
}
