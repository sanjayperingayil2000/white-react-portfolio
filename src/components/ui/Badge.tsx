import { cn } from "@/lib/utils";

type BadgeProps = React.ComponentProps<"span">;

export function Badge({ className, ...props }: BadgeProps) {
  return (
    <span
      className={cn("glass-sm inline-flex items-center px-3 py-1 text-xs font-medium text-muted tabular-nums", className)}
      {...props}
    />
  );
}
