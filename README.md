# Sanjay P Purushothaman — Portfolio

Personal portfolio site: one page with a glass design, light/dark themes, scroll motion and a working contact form.

**Live:** https://sanjay-peringayil-portfolio.vercel.app

## Tech stack

| Area | Choice |
|---|---|
| Framework | [Next.js 16](https://nextjs.org) (App Router, Cache Components, Turbopack), React 19, TypeScript (strict) |
| Styling | Tailwind CSS v4, with design tokens as CSS variables in `src/app/globals.css` |
| Fonts | Instrument Serif (display) + Geist (body), self-hosted via `next/font` |
| Theme | `next-themes`: light / dark / system, with a circular reveal in browsers that support View Transitions |
| Motion | `motion` (LazyMotion): scroll parallax and reveal-on-scroll, tuned from one config file |
| Icons | `lucide-react`; brand logos are inline SVGs from Simple Icons (CC0) |
| Contact | EmailJS (sent from the browser) behind a server-side check at `/api/contact` (zod validation, honeypot, minimum time, per-IP rate limit) |
| Tests | Playwright: unit, desktop and mobile smoke tests |
| Hosting | Vercel |

## Running locally

Needs **Node.js 20.9+** and npm.

```bash
npm install
cp .env.example .env.local   # then fill in the EmailJS values (see below)
npm run dev                  # http://localhost:3000
```

| Script | What it does |
|---|---|
| `npm run dev` | Development server with hot reload |
| `npm run build` | Production build (into `.next/`) |
| `npm start` | Serves the production build: run `npm run build` first |
| `npm run typecheck` | Generates Next's route types, then runs `tsc --noEmit` |
| `npm run lint` | ESLint |
| `npm test` | All Playwright tests. Builds its own copy of the site into `.next-e2e/` first. |
| `npm run test:unit` | Logic-only tests (no browser) |

The first time you run tests: `npx playwright install chromium`.

## Environment variables

All three are needed for the contact form. Without them, the form shows its error state and offers the email address instead.

| Variable | Where to find it (dashboard.emailjs.com) |
|---|---|
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | Email Services → your service → Service ID |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | Email Templates → your template → Template ID |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | Account → General → Public Key |

- **Locally:** put them in `.env.local`. It's gitignored, so it's never committed.
- **On Vercel:** Project → Settings → Environment Variables, for Production and Preview, then redeploy. `NEXT_PUBLIC_*` values are built into the page, so changing them needs a new build.
- **They're public by design:** EmailJS runs in the browser. To stop others from using them, turn on **Account → Security → domain allowlist** in EmailJS for the production domain.
- **Template variables:** the EmailJS template can use `{{name}}`, `{{email}}`, `{{subject}}` and `{{message}}`. `{{project}}` is also sent, with the same text as `message`, so the old site's template keeps working.

## Project structure

```
src/
  app/            layout, page, global CSS (design tokens), metadata routes (sitemap, robots,
                  manifest, OG/Twitter images, icons), /api/contact
  components/
    layout/       Navbar, MobileMenu, Footer, BackgroundOrbs, ScrollToTop, FloatingWhatsApp
    sections/     Hero, About, Experience, Projects, Skills, Education, Certificates,
                  Services, Testimonials, Contact (+ their small client parts)
    motion/       config.ts (motion settings), Parallax, Reveal, MotionProvider
    ui/           Button, GlassCard, Badge, SectionHeading, ThemeToggle, Icon, BrandIcon …
  content/        ← all site content, as typed TypeScript
  lib/            validation (zod), contact settings, rate limiter, helpers
  types/          content types
public/
  images/         optimised WebP images (profile, projects, testimonials)
  resume/         the downloadable resume
e2e/              Playwright tests
docs/             design system and the content audit from the rebuild
```

## Editing content

**All content lives in `src/content/`.** Components only render what those files export, so you never need to edit a component to change text. TypeScript checks every entry against `src/types/content.ts`, so `npm run typecheck` catches a missing field before you deploy.

| File | Holds |
|---|---|
| `site.ts` | Site URL, SEO title/description, **resume path**, nav, section headings, button/form labels, footer |
| `profile.ts` | Name, headline, summary, hero/about images, the three stat boxes |
| `experience.ts` | Jobs, newest first |
| `projects.ts` | Featured (case-study) projects and the screenshot gallery |
| `skills.ts` | Skill groups |
| `education.ts` | Education entries |
| `certificates.ts` | Certificates (image, verify link, PDF) |
| `socials.ts` | Email, phone/WhatsApp numbers and greeting, social links |
| `services.ts`, `testimonials.ts` | Services (with their "View More" details) and testimonials |

### Example: add a project

1. Save a screenshot as WebP, about 1600px wide, in `public/images/projects/`. For example, `public/images/projects/inventory-app.webp`.
2. Add an object to the `gallery` array in `src/content/projects.ts`. Its position in the array is its position on the page.

```ts
{
  kind: "gallery",
  slug: "inventory-app",                 // unique, kebab-case
  title: "Inventory App",
  category: "business",                  // "ai" | "ui" | "business" | "blog" (the filter buttons)
  liveUrl: "https://inventory-app.vercel.app/",
  repoUrl: "https://github.com/sanjayperingayil2000/inventory-app", // or null
  description: "Stock tracking for a logistics team.",              // or null
  techStack: ["Next.js", "MongoDB"],     // shown as badges; [] for none
  image: screenshot("inventory-app", "Inventory App", 900),        // last arg = image height in px at 1600 wide
},
```

For a case-study card with bullet points (like the FDE projects), add to the `featured` array instead, with `kind: "featured"`, `context` and `bullets`. The other fields are the same. To add a new filter category, add it to `ProjectCategory` in `src/types/content.ts` and to `projectFilters` in `src/content/site.ts`.

### Example: add a job

Add an object at the **top** of the array in `src/content/experience.ts` (newest first). If it's your current role, set the previous one's `end`, because the role with `end: null` becomes the hero's "Currently" card and the highlighted node on the timeline.

```ts
{
  role: "Senior Software Engineer",
  company: "Example Corp",
  location: "Remote",            // optional
  start: "2027-03",              // YYYY-MM, used for ordering and <time>
  end: null,                     // null = current role; otherwise "YYYY-MM"
  dates: "Mar 2027 – Present",   // shown exactly as written
  bullets: [
    "What you owned, built or shipped — one line each.",
  ],
},
```

### Example: add a certificate

1. Put the image in `public/images/certificates/`. If you also want a downloadable PDF, put it in `public/certificates/`.
2. Add an object to `src/content/certificates.ts` with `slug`, `title`, `issuer`, and optionally `date` and `topics`. Set `image` (`{ src, width, height, alt }`), `credentialUrl` and `file`, or `null` where you don't have one. Without an image, the card shows a neutral placeholder, and the "View" lightbox only appears once there is one.

### Other common edits

- **WhatsApp number or greeting:** `src/content/socials.ts` (`whatsappGreeting`, `phones`, `primaryWhatsapp`).
- **Nav items:** `nav.items` in `src/content/site.ts`. `desktop: false` keeps an item in the mobile menu only.
- **Headline or summary:** `src/content/profile.ts`. The hero shows `heroDescription`, and About shows `summary`.

## Replacing the resume

Every download button uses `site.resumeUrl`, which is set in `src/content/site.ts`.

- **Same file name (simplest):** overwrite `public/resume/Sanjay-Purushothaman-Resume.pdf` with the new PDF and deploy. Nothing else changes.
- **New file name:** add the new PDF to `public/resume/`, delete the old one, and update both `resumeUrl` and `resumeFileName` (the name visitors' browsers save it as) in `site.ts`.

The tests check that the served PDF matches the file in `public/resume/`, so `npm test` confirms the swap. If your resume content changed (new role, new project), update the matching files in `src/content/` too.

## Changing the accent colour

The site uses a neutral base plus **one** accent colour (currently teal). To change it:

1. In `src/app/globals.css`, update these tokens in **both** `:root` (light) and `.dark`:
   - `--accent`: buttons, links, active states.
   - `--ring`: focus outline. Usually the same as `--accent`.
   - `--accent-tint`: the background orbs only.
   - `--accent-foreground`: text on accent buttons. White in light mode, near-black in dark.
2. Update the two other places the accent is written out:
   - `theme_color` in `src/app/manifest.ts`.
   - `accent` and the `rgba(…)` glow in `src/app/opengraph-image.tsx` (the social share image).
3. **Check contrast.** Accent text must stay at least 4.5:1 on every surface, including glass over a background orb, in both themes. `docs/DESIGN_SYSTEM.md` §1.3–1.5 has the method and two pre-checked alternatives:
   - Indigo: `#4F46E5` light / `#818CF8` dark.
   - Amber: `#9A4A07` light / `#FBBF24` dark.

## Tuning animation

All scroll motion is set in **`src/components/motion/config.ts`**:

| Setting | Effect |
|---|---|
| `intensity` | Global multiplier for every parallax distance and the reveal rise. `1` = current (medium), `0.5` = subtler, `0` = no movement (fades only). |
| `parallax.presets.*.distance` | Per-layer drift in px: background orbs (`orbNear`/`orbMid`/`orbFar`), hero text and image, section headings. Negative values move ahead of the scroll. |
| `parallax.touchFactor` | Multiplier on touch devices (`0.5` = half). `disableOnTouch` turns a layer off on touch. |
| `reveal.distance` / `duration` / `stagger` | How far cards rise, how long the fade takes, and the delay between neighbours. |

- **Reduced motion:** visitors with "reduce motion" turned on get no parallax, and reveals become plain fades. That's automatic.
- **CSS animations:** two small ones live in `src/app/globals.css`:
  - `.hero-morph`: the portrait's slow blob shape, 8s.
  - `.scroll-wheel`: the scroll indicator, 2s.

## Deploying

The project deploys on Vercel. In the project settings:

- **Framework preset:** Next.js. The old site was Create React App, so check this if the project was set up for it.
- **Node.js:** 20.x or newer.
- **Environment variables:** the three listed above.

## Docs

`docs/` holds the decision record from the rebuild:

- [`DESIGN_SYSTEM.md`](docs/DESIGN_SYSTEM.md): tokens, glass spec, contrast measurements, motion and responsive rules.
- [`CONTENT_INVENTORY.md`](docs/CONTENT_INVENTORY.md): everything on the old site, verbatim.
- [`RESUME_MERGE.md`](docs/RESUME_MERGE.md): what changed with the new resume, with item IDs (O\*/U\*/C\*).
- [`PARITY_REPORT.md`](docs/PARITY_REPORT.md): an item-by-item check that the new site carries everything over.
- `content-snapshot.json` / `content-final.json`: machine-readable versions of the above.

The previous (Create React App) site is still on the `main` and `dev` branches until this branch is merged.
