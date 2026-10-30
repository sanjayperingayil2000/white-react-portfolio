const blob = (color: string): React.CSSProperties => ({
  background: `radial-gradient(closest-side, var(${color}), transparent)`,
  opacity: "var(--blob-opacity)",
});

/**
 * Fixed background behind the glass: two accent blobs, one neutral blob and grain.
 * Radial gradients instead of filter: blur() — same softness, far cheaper on mobile.
 * Opacity is capped by --blob-opacity; DESIGN_SYSTEM.md §1.5 contrast depends on it.
 * Static for now; the parallax (components/motion/Parallax.tsx) is added in the motion phase.
 */
export function BackgroundOrbs() {
  return (
    <div aria-hidden="true" className="bg-layer pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-[12vmax] -left-[10vmax] size-[42vmax] rounded-full" style={blob("--blob-accent")} />
      <div className="absolute top-[40%] -right-[12vmax] size-[34vmax] rounded-full" style={blob("--blob-accent")} />
      <div className="absolute -bottom-[14vmax] -left-[6vmax] size-[38vmax] rounded-full" style={blob("--blob-neutral")} />
      <div className="grain absolute inset-0" />
    </div>
  );
}
