/**
 * Scroll-motion settings — the one place to tune intensity.
 *
 * Distances are in px across an element's trip through the viewport.
 * Positive = the element lags behind the scroll (reads as further away);
 * negative = it leads slightly (reads as closer).
 */
export const motionConfig = {
  /** Global multiplier for every parallax distance and the reveal rise. 1 = medium. */
  intensity: 1,

  parallax: {
    /** Multiplier on coarse-pointer (touch) devices. */
    touchFactor: 0.5,
    presets: {
      // Background orbs: the heaviest layers (large painted areas), so off on touch.
      orbNear: { distance: 80, range: "cross", disableOnTouch: true },
      orbMid: { distance: 56, range: "cross", disableOnTouch: true },
      orbFar: { distance: 32, range: "cross", disableOnTouch: true },
      // Hero: measured from page top, so nothing shifts on load.
      heroText: { distance: 28, range: "leave", disableOnTouch: false },
      heroImage: { distance: 64, range: "leave", disableOnTouch: false },
      // Section headings drift up a touch faster than the content.
      heading: { distance: -24, range: "cross", disableOnTouch: false },
    },
  },

  reveal: {
    /** Rise in px (scaled by intensity). Under reduced motion only the fade remains. */
    distance: 16,
    duration: 0.6,
    /** Delay between neighbouring items, in seconds. */
    stagger: 0.06,
    /** Items per stagger cycle (roughly one grid row), so long lists never wait. */
    staggerGroup: 3,
    ease: [0.22, 1, 0.36, 1] as const,
    /** Start a little after the element enters, so the motion is seen. */
    viewportMargin: "0px 0px -8% 0px",
  },
} as const;

export type ParallaxPreset = keyof typeof motionConfig.parallax.presets;
