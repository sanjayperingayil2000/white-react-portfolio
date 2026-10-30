import { cn } from "@/lib/utils";

type Variant = "primary" | "glass" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md font-medium whitespace-nowrap select-none " +
  "disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 " +
  "motion-safe:active:scale-[0.98]";

const variants: Record<Variant, string> = {
  primary: "bg-accent text-accent-foreground shadow-sm hover:opacity-90",
  glass: "glass-sm text-fg hover:shadow-md",
  ghost: "text-fg hover:bg-fg/5",
};

const sizes: Record<Size, string> = {
  md: "min-h-11 px-5 text-sm",
  lg: "min-h-12 px-7 text-base",
};

type StyleProps = { variant?: Variant; size?: Size };

export function buttonClasses({ variant = "primary", size = "md" }: StyleProps = {}, className?: string) {
  return cn(base, variants[variant], sizes[size], className);
}

type ButtonProps = React.ComponentProps<"button"> & StyleProps;

export function Button({ variant, size, className, type = "button", ...props }: ButtonProps) {
  return <button type={type} className={buttonClasses({ variant, size }, className)} {...props} />;
}

type ButtonLinkProps = React.ComponentProps<"a"> & StyleProps;

/** Anchor styled as a button: in-page anchors, downloads and external links. */
export function ButtonLink({ variant, size, className, ...props }: ButtonLinkProps) {
  return <a className={buttonClasses({ variant, size }, className)} {...props} />;
}
