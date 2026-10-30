import type { ParallaxPreset } from "@/components/motion/config";
import { Parallax } from "@/components/motion/Parallax";
import { cn } from "@/lib/utils";

type Orb = {
  top: string;
  side: "left" | "right";
  inset: string;
  size: string;
  tone: "accent" | "neutral";
  preset: ParallaxPreset;
  /** Also shown below md (4 of 8, still alternating sides). */
  mobile: boolean;
};

/**
 * Orbs alternate sides so they never overlap: DESIGN_SYSTEM.md §1.5 contrast assumes
 * a single orb at --blob-opacity behind any point, never two stacked.
 */
const orbs: Orb[] = [
  { top: "0%", side: "left", inset: "-10vmax", size: "42vmax", tone: "accent", preset: "orbFar", mobile: true },
  { top: "9%", side: "right", inset: "-12vmax", size: "34vmax", tone: "accent", preset: "orbNear", mobile: false },
  { top: "21%", side: "left", inset: "-8vmax", size: "38vmax", tone: "neutral", preset: "orbMid", mobile: false },
  { top: "34%", side: "right", inset: "-10vmax", size: "40vmax", tone: "accent", preset: "orbFar", mobile: true },
  { top: "47%", side: "left", inset: "-12vmax", size: "36vmax", tone: "accent", preset: "orbNear", mobile: true },
  { top: "60%", side: "right", inset: "-8vmax", size: "38vmax", tone: "neutral", preset: "orbMid", mobile: false },
  { top: "73%", side: "left", inset: "-10vmax", size: "40vmax", tone: "accent", preset: "orbFar", mobile: false },
  { top: "86%", side: "right", inset: "-12vmax", size: "34vmax", tone: "accent", preset: "orbNear", mobile: true },
];

/**
 * Background behind the glass: page-length orbs that lag the scroll at different
 * rates (depth), plus fixed grain. Radial gradients instead of filter: blur() —
 * same softness, far cheaper to paint.
 */
export function BackgroundOrbs() {
  return (
    <>
      <div aria-hidden="true" className="bg-layer pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {orbs.map((orb) => (
          <Parallax
            key={orb.top}
            preset={orb.preset}
            className={cn("absolute rounded-full", !orb.mobile && "max-md:hidden")}
            style={{
              top: orb.top,
              [orb.side]: orb.inset,
              width: orb.size,
              height: orb.size,
              background: `radial-gradient(closest-side, var(${orb.tone === "accent" ? "--blob-accent" : "--blob-neutral"}), transparent)`,
              opacity: "var(--blob-opacity)",
            }}
          />
        ))}
      </div>
      <div aria-hidden="true" className="grain pointer-events-none fixed inset-0 -z-10" />
    </>
  );
}
