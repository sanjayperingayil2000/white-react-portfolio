import { Download } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { labels, site } from "@/content/site";

type ResumeButtonProps = {
  variant?: "primary" | "glass" | "ghost";
  size?: "md" | "lg";
  /** Visible text; the accessible name is always the full "Download Resume". */
  label?: string;
  className?: string;
};

/** The one resume download control. Every instance reads site.resumeUrl. */
export function ResumeButton({ variant = "glass", size = "md", label = labels.downloadResume, className }: ResumeButtonProps) {
  return (
    <ButtonLink
      href={site.resumeUrl}
      download={site.resumeFileName}
      variant={variant}
      size={size}
      aria-label={label === labels.downloadResume ? undefined : labels.downloadResume}
      className={className}
    >
      {label}
      <Download className="size-4" strokeWidth={1.5} aria-hidden="true" />
    </ButtonLink>
  );
}
