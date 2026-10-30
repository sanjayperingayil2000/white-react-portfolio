# Sanjay P Purushothaman — Portfolio

Next.js (App Router) · TypeScript · Tailwind CSS v4 · next-themes · motion

```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck
npm run lint
npm run build
npm test           # Playwright: unit + desktop + mobile smoke tests (builds into .next-e2e)
```

The first time, install the test browser with `npx playwright install chromium`. The tests build their own copy of the site with mock EmailJS keys and mock the EmailJS API, so they never send real email or touch `.next`.

## Editing content

All site content lives in typed files under `src/content/`. Components only render what those files export.

| File | What it holds |
|---|---|
| `site.ts` | URL, SEO title/description, **resume URL**, nav, section headings, button/form labels, footer |
| `profile.ts` | Name, headline, summary, hero/about images, stats |
| `experience.ts` | Roles (newest first) |
| `projects.ts` | Featured (FDE) projects and the gallery of web projects |
| `skills.ts` | Skill groups |
| `education.ts` | Education |
| `certificates.ts` | Certificates showcase (image, verify link, PDF per certificate) |
| `socials.ts` | Email, phone/WhatsApp, social links |
| `services.ts`, `testimonials.ts` | Services and testimonials |

To add a project, add one object to the array in `src/content/projects.ts` and put its screenshot in `public/images/projects/`.

To replace the resume, overwrite `public/resume/Sanjay-Purushothaman-Resume.pdf`, or change `site.resumeUrl`. Every download button reads that one value.

## Contact form

The form sends email from the browser with EmailJS. Before sending, `/api/contact` checks the message: zod validation, a honeypot field, a minimum time to submit, and a per-IP rate limit.

1. Copy `.env.example` to `.env.local` and fill in the three `NEXT_PUBLIC_EMAILJS_*` values.
2. Add the same three variables in your Vercel project settings.
3. In the EmailJS dashboard, make sure the email service (Gmail) is connected and the template uses `{{name}}`, `{{email}}`, `{{subject}}` and `{{message}}`.

The WhatsApp number and greeting are in `src/content/socials.ts`.

## Design

The design tokens are in `src/app/globals.css`. The spec and contrast checks are in `_audit/DESIGN_SYSTEM.md`.

## Audit trail

`_audit/` holds the content inventory of the old site, the resume merge and the design system. The old site is still on the `main` and `dev` branches.
