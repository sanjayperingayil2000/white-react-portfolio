import { cn } from "@/lib/utils";

type GlassCardProps = React.HTMLAttributes<HTMLElement> & {
  as?: "div" | "article" | "li" | "figure";
  /** Lift on hover; only for cards that are themselves interactive. */
  interactive?: boolean;
};

export function GlassCard({ as: Tag = "div", interactive = false, className, ...props }: GlassCardProps) {
  return (
    <Tag
      className={cn(
        "glass p-6 sm:p-8",
        interactive &&
          "motion-safe:transition-transform motion-safe:duration-(--dur-fast) motion-safe:hover:-translate-y-0.5 hover:shadow-lg",
        className,
      )}
      {...props}
    />
  );
}
