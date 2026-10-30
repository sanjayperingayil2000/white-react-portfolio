# Design System — Portfolio v2

Status: **APPROVED (2026-10-30)**. Accent: Option A, Lagoon teal. Fonts: Instrument Serif (display) + Geist (body).

**Direction:** eye-catching but restrained: premium, modern, calm. Frosted **glass** is the signature surface. The base is neutral, with **one** accent colour. Colour stays quiet; depth comes from blur, light and motion.

All tokens are framework-agnostic CSS custom properties. Light values live on `:root` and dark values on `.dark` (the class `next-themes` sets on `<html>`). Tailwind or another styling layer will map onto these tokens in Phase 4.

---

## 1. Colour

### 1.1 Rules

- **Neutral base + exactly one accent.** The accent has a single tint, used only in the background blob layer.
- **One gradient family:** accent → its tint, used **only** in the background layer. No gradient text, gradient buttons or rainbow effects.
- The accent is for **meaning, not decoration**: primary CTA, links, focus ring, the active filter or tab, small highlights. It should cover no more than about 5–10% of any viewport.
- Hover and press states don't add new colours. They use elevation, opacity (`0.9`), underline or border changes.

### 1.2 Neutral scale

| Step | Hex | Use |
|---|---|---|
| 0 | `#FFFFFF` | light `--surface` |
| 50 | `#F7F7F8` | light `--bg` |
| 100 | `#EFEFF1` | light subtle fills |
| 200 | `#E2E2E6` | light hairlines |
| — | `#ACACB5` | dark `--text-muted` (tuned for AA on glass, see 1.5) |
| 400 | `#A1A1AA` | light neutral blob |
| 500 | `#71717A` | dark neutral blob |
| 600 | `#52525B` | light `--text-muted` |
| 700 | `#3F3F46` | dark hairlines |
| 800 | `#27272A` | dark subtle fills |
| 850 | `#1C1C20` | dark glass fallback |
| 900 | `#18181B` | light `--text`, dark `--surface` |
| 950 | `#0C0C0E` | dark `--bg`, dark `--accent-foreground` |
| — | `#F4F4F5` | dark `--text` |

### 1.3 Accent options

Each option has a light-theme value, a dark-theme value and one tint. All three were tested with the same neutral base and glass settings.

| Option | Light accent | Dark accent | Tint (blobs) | Lowest ratio on any surface | Character |
|---|---|---|---|---|---|
| **A — Lagoon teal** ⭐ | `#0D6E66` | `#2DD4BF` | `#14B8A6` | **4.88** (light, accent text on bare blob) | Calm, technical, uncommon for AI portfolios; looks very good through glass |
| B — Iris indigo | `#4F46E5` | `#818CF8` | `#818CF8` | **4.53** (dark, accent text on glass over blob) | Familiar "AI product" look, slightly generic; dark-mode accent text is close to the AA limit |
| C — Ember amber | `#9A4A07` | `#FBBF24` | `#F59E0B` | **5.14** (light) | Warm and distinctive. The light-mode shade must be this dark brown-amber; the brighter `#B45309` **failed** (4.13). |

**Recommendation: A — Lagoon teal.** It's the calmest of the three, reads as "engineering" rather than "marketing", and is different from the default indigo of AI products. It also has the most comfortable margins in dark mode (accent text ≥ 6.6:1 everywhere).

> Tuning note: the first-pass teal (`#0F766E`, blob alpha 0.22/0.20, dark muted `#A1A1AA`) **failed** in two places (4.21 and 4.39). The final values above (`#0D6E66`, blob alpha 0.18/0.16, dark muted `#ACACB5`) are the fixed versions.

### 1.4 Semantic tokens (Option A)

```css
:root {
  color-scheme: light;

  --bg: #F7F7F8;
  --surface: #FFFFFF;
  --surface-glass: rgb(255 255 255 / 0.60);
  --surface-glass-fallback: rgb(255 255 255 / 0.92);
  --border: #E2E2E6;                       /* solid hairline, non-glass */
  --border-glass: rgb(24 24 27 / 0.08);
  --glass-highlight: rgb(255 255 255 / 0.90);

  --text: #18181B;
  --text-muted: #52525B;

  --accent: #0D6E66;
  --accent-tint: #14B8A6;                  /* blobs only */
  --accent-foreground: #FFFFFF;
  --ring: #0D6E66;

  --blob-accent: var(--accent-tint);
  --blob-neutral: #A1A1AA;
  --blob-opacity: 0.18;
  --grain-opacity: 0.035;

  --glass-blur: 16px;
  --glass-saturate: 180%;
}

.dark {
  color-scheme: dark;

  --bg: #0C0C0E;
  --surface: #18181B;
  --surface-glass: rgb(255 255 255 / 0.06);
  --surface-glass-fallback: #1C1C20;
  --border: #3F3F46;
  --border-glass: rgb(255 255 255 / 0.10);
  --glass-highlight: rgb(255 255 255 / 0.08);

  --text: #F4F4F5;
  --text-muted: #ACACB5;

  --accent: #2DD4BF;
  --accent-tint: #0D6E66;                  /* the same pair, reversed — not a new colour */
  --accent-foreground: #0C0C0E;
  --ring: #2DD4BF;

  --blob-accent: var(--accent);
  --blob-neutral: #71717A;
  --blob-opacity: 0.16;
  --grain-opacity: 0.05;

  --glass-blur: 20px;
  --glass-saturate: 140%;
}
```

`::selection` uses `--accent` as the background and `--accent-foreground` as the text.

### 1.5 WCAG contrast (Option A, measured)

**Method:** WCAG 2.x relative luminance. Glass surfaces were calculated by compositing the glass fill over (a) the plain `--bg` and (b) the **peak** colour of each blob, which is the worst case, since blur only lowers it. The grain overlay (≤5% opacity) is not included. AA requires **4.5:1** for body text and **3:1** for large text and UI parts such as the focus ring.

**Light theme**

| Surface (composited colour) | `--text` | `--text-muted` | `--accent` as text |
|---|---|---|---|
| `--bg` `#F7F7F8` | 16.55 | 7.22 | 5.70 |
| `--surface` `#FFFFFF` | 17.72 | 7.73 | 6.11 |
| Glass over bg `#FCFCFC` | 17.27 | 7.53 | 5.95 |
| Glass over accent blob peak `#EBF7F6` | 16.17 | 7.06 | 5.57 |
| Glass over neutral blob peak `#F6F6F7` | 16.40 | 7.16 | 5.65 |
| Glass fallback `#FEFEFE` | 17.57 | 7.66 | 6.05 |
| Bare bg over accent blob peak, no glass `#CEECE9` | 14.17 | 6.18 | **4.88** ← lowest |
| `--accent-foreground` on `--accent` | 6.11 | | |
| `--ring` vs `--bg` (needs 3:1) | 5.70 | | |

**Dark theme**

| Surface (composited colour) | `--text` | `--text-muted` | `--accent` as text |
|---|---|---|---|
| `--bg` `#0C0C0E` | 17.78 | 8.68 | 10.50 |
| `--surface` `#18181B` | 16.12 | 7.86 | 9.52 |
| Glass over bg `#1B1B1C` | 15.66 | 7.64 | 9.25 |
| Glass over accent blob peak `#1F3937` | 11.25 | **5.49** ← lowest | 6.64 |
| Glass over neutral blob peak `#2A2A2C` | 13.03 | 6.36 | 7.70 |
| Glass fallback `#1C1C20` | 15.45 | 7.54 | 9.12 |
| Bare bg over accent blob peak, no glass `#112C2A` | 13.48 | 6.58 | 7.96 |
| `--accent-foreground` on `--accent` | 10.50 | | |
| `--ring` vs `--bg` (needs 3:1) | 10.50 | | |

**Result: every text and surface pair passes AA in both themes.** All body text is ≥ 5.49:1 and accent text is ≥ 4.88:1.

**Contrast rules this depends on:**
- Blob opacity must not go above 0.18 (light) or 0.16 (dark). If it does, re-run the check.
- Glass must not be stacked on glass. Elements inside a glass card use `transparent` or `--surface`.
- `--border-glass` is decorative. Interactive edges, such as input borders, use `--border` or `--ring` so they meet the 3:1 rule for UI parts.

---

## 2. Glass

### 2.1 Surface

```css
.glass {
  background: var(--surface-glass);
  -webkit-backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-saturate));
          backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-saturate));
  border: 1px solid var(--border-glass);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-glass);          /* inner top highlight + soft drop */
}
```

| | Light | Dark | Why they differ |
|---|---|---|---|
| Fill | white @ 60% | white @ 6% | On light the glass frosts toward white; on dark it should only lift slightly |
| Blur | 16px | 20px | Dark needs more blur to hide blob edges |
| Saturate | 180% | 140% | Keeps the teal alive through white frost; dark mode doesn't need the extra colour |
| Border | near-black @ 8% | white @ 10% | A white border is invisible on an off-white background |
| Inner highlight | `inset 0 1px 0` white @ 90% | `inset 0 1px 0` white @ 8% | The "top edge catching light" cue |
| Drop shadow | `0 8px 32px` rgb(24 24 27 / 0.06) | `0 8px 32px` rgb(0 0 0 / 0.45) | |

**Variants:** `.glass` (cards, section panels), `.glass-nav` (the sticky header: same tokens, `radius-full` pill, blur +4px), `.glass-sm` (chips and filters: `radius-full`, no drop shadow).

**Hover (interactive cards only):** `translateY(-2px)`, shadow goes up one step, border alpha +4%. No scaling and no colour change.

### 2.2 Fallbacks

```css
@supports not ((backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px))) {
  .glass, .glass-nav, .glass-sm { background: var(--surface-glass-fallback); }
}
@media (prefers-reduced-transparency: reduce) {
  .glass, .glass-nav, .glass-sm {
    background: var(--surface-glass-fallback);
    backdrop-filter: none; -webkit-backdrop-filter: none;
  }
}
```

The fallback values were checked in 1.5 and pass.

### 2.3 Background layer (what the glass blurs, and what parallax moves)

A single fixed layer sits behind everything: `position: fixed; inset: 0; z-index: -1; pointer-events: none; overflow: hidden; aria-hidden`.

| Shape | Colour | Size | Position (approx.) | Parallax rate |
|---|---|---|---|---|
| Blob 1 | `--blob-accent` | 42vmax | top-left, partly off-screen | 0.08 |
| Blob 2 | `--blob-accent` | 34vmax | right edge, ~40% down | 0.14 |
| Blob 3 | `--blob-neutral` | 38vmax | bottom-left | 0.05 |

- Each blob is drawn as `radial-gradient(closest-side, color, transparent)` at `opacity: var(--blob-opacity)`. This gives the soft edge **without** `filter: blur()`, which is much cheaper on mobile GPUs.
- Movement is `transform: translate3d()` only, for GPU compositing. Parallax uses CSS scroll-driven animations where supported, otherwise a `requestAnimationFrame` scroll handler. The parallax itself is a later phase.
- An optional slow ambient drift (about 40s, alternate, ±3vmax) gives life when the page is still.
- **Grain:** an inline SVG `feTurbulence` noise (baseFrequency ~0.8, 3 octaves) as a data-URI tile (~160px), at `opacity: var(--grain-opacity)`, on top of the blobs. It removes gradient banding and gives the glass some texture.
- **Reduced motion:** no parallax and no drift. The blobs stay fixed.

---

## 3. Typography

### 3.1 Fonts (via `next/font/google`, self-hosted at build time, no layout shift)

| Role | Font | Weights | CSS var |
|---|---|---|---|
| **Display** | **Instrument Serif** | 400, plus italic for an occasional emphasised word | `--font-display` |
| **Body / UI** | **Geist** (variable) | 400 / 500 / 600 | `--font-body` |

**Why this pair:** a refined editorial serif for large headings with a clean, technical sans for everything else. It reads "premium and calm", contrasts well with the glass, and neither font is overused in developer portfolios. `next/font` serves the files from the site's own domain and adds `size-adjust` fallback metrics, so text doesn't shift when the font loads.

- Display font only at `--text-2xl` and above (Instrument Serif is thin at small sizes). Card titles, nav and buttons use Geist 500/600.
- Tech chips, dates and similar meta use Geist with `font-variant-numeric: tabular-nums`. No third mono font.
- **Alternative if you'd prefer an all-sans look:** Sora (display) + Inter (body).
- This replaces Poppins from the old site.

### 3.2 Fluid type scale

The sizes scale linearly between 360px and 1280px viewports. These values are calculated, not estimated.

```css
--text-xs:   0.75rem;                                               /* 12px        */
--text-sm:   clamp(0.875rem, 0.8505rem + 0.1087vw, 0.9375rem);      /* 14 → 15px   */
--text-base: clamp(1rem,     0.9755rem + 0.1087vw, 1.0625rem);      /* 16 → 17px   */
--text-lg:   clamp(1.125rem, 1.0761rem + 0.2174vw, 1.25rem);        /* 18 → 20px   */
--text-xl:   clamp(1.25rem,  1.1522rem + 0.4348vw, 1.5rem);         /* 20 → 24px   */
--text-2xl:  clamp(1.5rem,   1.3533rem + 0.6522vw, 1.875rem);       /* 24 → 30px   */
--text-3xl:  clamp(1.75rem,  1.4565rem + 1.3043vw, 2.5rem);         /* 28 → 40px   */
--text-4xl:  clamp(2.125rem, 1.587rem  + 2.3913vw, 3.5rem);         /* 34 → 56px   */
--text-5xl:  clamp(2.5rem,   1.6196rem + 3.913vw,  4.75rem);        /* 40 → 76px   */
```

Each size includes a `rem` part, so browser zoom and user font-size settings still apply.

| Use | Size | Font | Line height | Tracking |
|---|---|---|---|---|
| Hero name | 5xl | Display | 1.0 | -0.02em |
| Section title | 4xl | Display | 1.05 | -0.015em |
| Sub-heading / card title (large) | 2xl–3xl | Display | 1.15 | -0.01em |
| Card title | lg–xl | Body 600 | 1.3 | -0.005em |
| Body | base | Body 400 | 1.65 | 0 |
| Muted / meta | sm | Body 400–500 | 1.5 | 0 |
| Eyebrow / label | xs | Body 500 uppercase | 1.4 | 0.08em |

Body text is limited to a maximum width of `65ch`.

---

## 4. Spacing, layout, radius, shadow

### 4.1 Spacing (4px base)

```css
--space-1: 0.25rem;  --space-2: 0.5rem;  --space-3: 0.75rem; --space-4: 1rem;
--space-5: 1.25rem;  --space-6: 1.5rem;  --space-8: 2rem;    --space-10: 2.5rem;
--space-12: 3rem;    --space-16: 4rem;   --space-20: 5rem;   --space-24: 6rem;

--space-section: clamp(4rem, 2.435rem + 6.957vw, 8rem);      /* 64 → 128px vertical rhythm */
--gutter:        clamp(1rem, 0.6087rem + 1.7391vw, 2rem);    /* 16 → 32px page side padding */
--container:     72rem;                                      /* 1152px max content width   */
```

### 4.2 Radius

```css
--radius-sm: 0.5rem;   /* 8px  — inputs, small chips */
--radius-md: 0.75rem;  /* 12px — buttons */
--radius-lg: 1rem;     /* 16px — images inside cards */
--radius-xl: 1.5rem;   /* 24px — glass cards */
--radius-2xl: 2rem;    /* 32px — hero panel, modals */
--radius-full: 9999px; /* pills, nav, avatars */
```

Nested elements use the radius one step smaller than their container (container radius − padding), so curves stay concentric.

### 4.3 Shadows

```css
:root {
  --shadow-sm:   0 1px 2px rgb(24 24 27 / 0.06);
  --shadow-md:   0 1px 3px rgb(24 24 27 / 0.05), 0 4px 12px rgb(24 24 27 / 0.06);
  --shadow-lg:   0 2px 6px rgb(24 24 27 / 0.04), 0 16px 40px rgb(24 24 27 / 0.08);
  --shadow-glass: inset 0 1px 0 var(--glass-highlight), 0 8px 32px rgb(24 24 27 / 0.06);
}
.dark {
  --shadow-sm:   0 1px 2px rgb(0 0 0 / 0.40);
  --shadow-md:   0 1px 3px rgb(0 0 0 / 0.35), 0 4px 12px rgb(0 0 0 / 0.40);
  --shadow-lg:   0 2px 6px rgb(0 0 0 / 0.30), 0 16px 40px rgb(0 0 0 / 0.50);
  --shadow-glass: inset 0 1px 0 var(--glass-highlight), 0 8px 32px rgb(0 0 0 / 0.45);
}
```

### 4.4 Breakpoints

`sm 640px · md 768px · lg 1024px · xl 1280px`. Layouts are mobile-first and work at 320px wide with no horizontal scrolling.

---

## 5. Motion

```css
--dur-instant: 100ms;   /* press feedback                          */
--dur-fast:    150ms;   /* hover, focus                            */
--dur-base:    250ms;   /* theme colour transition, small UI moves */
--dur-slow:    400ms;   /* modals, tab content, menu               */
--dur-reveal:  600ms;   /* scroll-in reveals                       */
--dur-theme:   450ms;   /* circular theme reveal                   */

--ease-standard: cubic-bezier(0.2, 0, 0, 1);       /* default UI           */
--ease-out:      cubic-bezier(0.22, 1, 0.36, 1);    /* entrances, reveals   */
--ease-in-out:   cubic-bezier(0.65, 0, 0.35, 1);    /* theme reveal, modals */
```

**Rules:**
- Only animate `transform` and `opacity`, plus the colour properties during a theme change. Never animate layout properties.
- Scroll reveals: fade in with a 12px upward rise, play once, stagger ≤ 60ms per item, and nothing waits on an animation before showing content.
- `prefers-reduced-motion: reduce` turns off parallax, blob drift, the circular reveal, reveal movement (content just appears) and card lift. Colour cross-fades stay, because they aren't movement.

---

## 6. Theme (light / dark / system)

### 6.1 Setup

- `next-themes` `ThemeProvider` with `attribute="class"`, `defaultTheme="system"`, `enableSystem`, `disableTransitionOnChange={false}`.
- `<html lang="en" suppressHydrationWarning>`. next-themes adds a small blocking script to `<head>` that sets the class **before first paint**, so the wrong theme never flashes.
- `color-scheme` is set per theme (see 1.4), so scrollbars and form controls match.
- The theme toggle shows a same-size placeholder until mounted, which avoids a hydration mismatch and any layout shift. It cycles **Light → Dark → System**, has an `aria-label` describing the next action, and shows a visible state.

### 6.2 Smooth change

**Default (all browsers):** a 250ms colour transition, applied only to themed properties on the elements that need it:

```css
body, .glass, .glass-nav, .glass-sm, .bg-layer > *, a, button, input, textarea {
  transition-property: background-color, border-color, color, fill, stroke, box-shadow, opacity;
  transition-duration: var(--dur-base);
  transition-timing-function: var(--ease-standard);
}
```

There is no global `* { transition }`, because it would slow the page.

**Enhanced (View Transitions API, where supported and motion is allowed):** a circular reveal that expands from the toggle button.

```ts
function switchTheme(next: 'light' | 'dark' | 'system', e: React.MouseEvent) {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!document.startViewTransition || reduce) return setTheme(next);   // fallback: colour transition

  const { clientX: x, clientY: y } = e;
  const r = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
  const root = document.documentElement;
  root.classList.add('theme-vt');                     // pauses the CSS colour transitions during the snapshot

  const vt = document.startViewTransition(() => {
    const dark = next === 'dark' || (next === 'system' && matchMedia('(prefers-color-scheme: dark)').matches);
    root.classList.toggle('dark', dark);              // apply synchronously so the "after" snapshot is correct
    setTheme(next);                                   // next-themes stays the source of truth and persists the choice
  });

  vt.ready.then(() =>
    root.animate(
      { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${r}px at ${x}px ${y}px)`] },
      { duration: 450, easing: 'cubic-bezier(0.65, 0, 0.35, 1)', pseudoElement: '::view-transition-new(root)' },
    ),
  );
  vt.finished.finally(() => root.classList.remove('theme-vt'));
}
```

```css
.theme-vt, .theme-vt * { transition: none !important; }
::view-transition-old(root), ::view-transition-new(root) { animation: none; mix-blend-mode: normal; }
```

If triggered by keyboard (no pointer coordinates), the circle starts from the centre of the toggle button.

---

## 7. Iconography

- The old site used icon fonts (Unicons `release-pro` CDN + Boxicons CDN). These are **replaced** with SVG icons that are bundled with the site, so there are no external requests and no licence risk.
- **UI icons:** `lucide-react`, 1.5px stroke, sizes 16/20/24, `currentColor`.
- **Brand icons** (GitHub, LinkedIn, Instagram, Facebook, WhatsApp, Gmail): inline SVGs from Simple Icons (CC0), because Lucide doesn't include brand logos.
- Every icon-only control has an `aria-label`. Decorative icons get `aria-hidden`.
- The icon names recorded in `content-final.json` (e.g. `uil-award`) describe *intent* and will be matched to Lucide equivalents in the build.

---

## 8. Accessibility baseline

- **Focus:** `outline: 2px solid var(--ring); outline-offset: 2px;` on `:focus-visible` everywhere. It's never removed.
- **Targets:** at least 44×44px for touch.
- Everything listed in sections 1.5, 2.2 and 5 (contrast, transparency fallback, reduced motion) is a requirement, not a suggestion.
- **Semantic structure:** landmarks (`header`, `nav`, `main`, `footer`), one `h1`, and headings in order.

---

## 9. Additions during the UI build (Phase 5)

- **`--text-hero`** `clamp(3.5rem, 1.152rem + 10.435vw, 9.5rem)` (56 → 152px): used only for the hero name. It sits above `--text-5xl`.
- **`--surface-glass-strong`** (light: white @ 80%; dark: `rgb(24 24 27 / 0.75)`): the navbar background once the page scrolls. It's more opaque than `--surface-glass` and moves toward each theme's text-contrasting extreme, so every §1.5 ratio still holds or improves.
- **Theme toggle behaviour (changed from the 3-state cycle in §6.1):** the toggle follows the OS by default, and each click flips the appearance. If the chosen appearance matches the OS, the preference goes back to `system`. Every click now changes what you see, and "system" is still the default.
- **Sun ↔ moon icon:** an SVG mask morph using only transforms and opacity. Its state comes from the `.dark` class, so it's correct before hydration. Transitions turn off under reduced motion.
- **Accent usage, tightened:** section eyebrows, icons, dates and bullet markers are neutral. The accent is kept for CTAs, links, the active nav item and filter, the current-role timeline node and date, the availability dot and certification badges.
- **Dialog and mobile menu surface:** `--surface-glass-fallback` (near-opaque) over a dimmed, blurred backdrop, so their text doesn't depend on what's behind them.

---

## 10. Scroll motion (Phase 6, medium intensity)

All tuning lives in `src/components/motion/config.ts`: a global `intensity` multiplier, the parallax presets, and the reveal distance, duration and stagger.

- **Background layer (replaces the fixed layer in §2.3):** 8 orbs spread down the full page height, on alternating sides so no two ever overlap (the §1.5 contrast numbers assume a single orb behind any point). Each orb lags the scroll by 32, 56 or 80px across its trip through the viewport, which reads as depth. The grain stays fixed.
- **Parallax:** hero text and portrait drift 28px and 64px (measured from page top, so nothing shifts on load). Section headings lead the scroll by 24px. Everything uses `transform` only; native scrolling is unchanged.
- **Reveal:** a 16px rise plus fade, played once, with a 60ms stagger inside groups of 3. The hero isn't revealed, because it's above the fold and that would delay LCP. A `<noscript>` rule keeps content visible without JavaScript.
- **Reduced motion:** parallax is off. `MotionConfig reducedMotion="user"` removes the rise from reveals, leaving an opacity fade only.
- **Touch (`pointer: coarse`):** parallax distances are halved, and orb parallax (the heaviest layers) is off. Reveals stay.
- **Measured** in headless Chrome with CPU throttled 4× on a production build, scrolling the full page: p50, p95 and p99 frame times were 16.7ms, with no frames over 33ms and no long animation frames. Layout count matched the no-parallax baseline (44 vs 47), so there's no layout thrashing.

---

## 11. Additions for the contact form (Phase 7)

- **`--danger`** (light `#b42318`, dark `#fda29b`): used only for form error text, invalid-field borders and the error icon. It's a semantic state colour, not a second accent. Measured on every surface in §1.5: light ≥ 6.00:1, dark ≥ 6.37:1 (the first dark choice, `#f97066`, failed at 4.44:1 on glass over a teal orb, so it was lightened).
- **Floating WhatsApp button** (below `lg` only): an accent-filled circle at bottom right, with back-to-top stacked above it so the two never overlap.

---

## 12. Responsive rules (Phase 8)

- **`--text-hero`** minimum raised to 64px: `clamp(4rem, 1.848rem + 9.565vw, 9.5rem)`, so the name stays bold on a 360px phone and still fits on one line with the hand icon.
- **Below 768px:** glass blur is 10px (light) / 12px (dark) instead of 16 / 20, and 4 of the 8 background orbs show (still alternating sides). Contrast from §1.5 is unaffected, since it's measured at each orb's peak colour.
- **Mobile menu (below `lg`):** a full-screen glass sheet on a native modal `<dialog>`. This gives a focus trap, an inert background and Escape to close. Section links close the sheet and scroll to the section; Escape and ✕ return focus to the menu button. The theme toggle, Download Resume and socials are inside the sheet.
- **Scroll lock:** `html:has(dialog[open]) { overflow: hidden }` covers every modal (menu, service details, certificate lightbox).
- **Touch targets:** every interactive element is at least 44×44px. Inline links inside a sentence (the `mailto:` fallback) are the only exception.
- **Hover effects:** Tailwind v4's `hover:` only applies on hover-capable devices, the `.tilt` lift needs `(hover: hover) and (pointer: fine)`, and `TiltCard` ignores non-mouse pointers.
