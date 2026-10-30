# Parity Report — old site vs new site

Checked on 2026-10-31 against the production build (`next start`).

- ✅ present on the new site
- 🔧 was missing, fixed in Phase 10
- ↪️ intentionally changed, by your instruction or an approved rule (the reference is given)
- ⚠️ waiting for your decision

## Summary

| Check | Result |
|---|---|
| `content-final.json`: every user-facing string (297) | **271 rendered on the page** · 24 kept in content but not rendered (19 ⚠️ skill levels, 3 disabled Messenger, 2 approved label changes) · 2 replaced by the `wa.me` format. Details in [B](#b-content-finaljson--automated-string-check). |
| Inventory A–H (sections, copy, data, assets, metadata, integrations, behaviours, resume) | All ✅ or ↪️, except **G4 and G5, fixed now** 🔧 |
| ❌ remaining | **None** |
| ⚠️ open | **O21: old skill proficiency levels** (display or drop?) |

**Method.** The B check was a script, not a manual read. It went through every string in `content-final.json`, skipping internal fields such as `_notes`, `old*` values, slugs and icon names. It searched the decoded server-rendered HTML for each one. That HTML includes text inside closed `<dialog>` elements and the mobile menu, because they're rendered on the server too. Text and attribute values (`href`, `alt`, `aria-label`, `placeholder`) both counted. Anything not found on the page was then looked up in `src/content/*`.

---

## A. Site map (inventory §A)

| Old section | New location | Status |
|---|---|---|
| Header / nav | Glass navbar (+ mobile sheet menu) | ✅ |
| Home `#home` | Hero `#home` | ✅ |
| About `#about` | About `#about` | ✅ |
| Skills `#skills` | Skills `#skills` | ✅ |
| Services `#services` | Services `#services` | ✅ |
| Qualification (no id) | Split into Experience `#experience`, Education `#education` and Certificates `#certificates` | ↪️ Phase 4 structure + your Phase 5 follow-up |
| Portfolio `#portfolio` | Portfolio `#portfolio` | ✅ |
| Testimonials `#testimonials` | Testimonials `#testimonials` | ✅ |
| Contact `#contact` | Contact `#contact` | ✅ |
| Footer | Footer | ✅ |
| Scroll-to-top | Scroll-to-top | ✅ |

Every old anchor (`#home`, `#about`, `#skills`, `#services`, `#portfolio`, `#testimonials`, `#contact`) still works.

---

## B. `content-final.json` — automated string check

**271 of 297 strings render on the page ✅.** The other 26:

| Item | Count | Status | Reason |
|---|---|---|---|
| `skills.legacyLevels.*` (Basic / Intermediate / Advanced / Professional) | 19 | ⚠️ | O21. Kept in `src/content/skills.ts` but not shown. Phase 2 marked this "display TBD" and it hasn't been decided. The resume has no levels, and "n8n: Basic" clashes with the new positioning. |
| `contact.disabled[0]` Messenger (title, label, URL) | 3 | ↪️ | O27. It was commented out on the old site, so it was never visible. Kept disabled, and recorded in `socials.ts`. |
| `sections.about.cvButtonLabel` "Download CV" | 1 | ↪️ | Phase 5 brief: every download button is now "Download Resume". |
| `sections.qualification.title` "Qualification" | 1 | ↪️ | Your Phase 5 follow-up ("add these things as of current trend"): the heading is now "Education" / "Academic background". |
| `contact.phones[*].whatsappHref` (`api.whatsapp.com/send?...`) | 2 | ↪️ | Phase 7 brief: links use `https://wa.me/<number>?text=<encoded>`, with the same numbers and the same greeting. |

---

## C. Structured data (inventory §C)

### C1. Experience

| Old entry | New entry | Status |
|---|---|---|
| — | Associate Consultant · Zimble Systems Pvt. Ltd. · Feb 2026 – Present (6 bullets) | ✅ new (N1) |
| Full Stack developer · JAH Transport by heavy & light trucks LLC · 2025 - 2026 | Full Stack Developer · JAH Transport LLC · Jun 2025 – Jan 2026 (2 bullets) | ↪️ U6 (resume wins) |
| Junior Software Engineer · Softnotions Technologies Private Limited · 2023 - 2025 | … Softnotions Technologies Pvt. Ltd. · Mar 2023 – Jun 2025 (5 bullets) | ↪️ U7 |
| Full Stack developer Program · Preb bytes.com · 2022 - 2023 | MERN Stack Developer Trainee · Prepbytes · Remote · Jul 2022 – Mar 2023 | ↪️ U8 |
| Graphic Designer · Calypso Innovative Branding Partner · 2021 - 2022 | Graphic Designer · Calypso Branding Partner · Jul 2021 – Jun 2022 | ↪️ U9 |

### C2. Projects

All 8 old projects are present with their titles, categories, live links and screenshots: AI application (C6 casing fix), Business service, Logistics Company, Coffee Shop, Ecommerce app, Hotel Booking Web, Blog web, Dashboard UI ✅. Both FDE projects are new ✅. Their images and links are still TODO (Q6, you'll provide them).

### C3. Skills

Every old skill is present by name in the resume groups. The resume spelling is used (U13): `Javascript` → JavaScript, `Node Js` → Node.js, and so on. **Bootstrap** and **Wordpress** (O19, O20) were added to Frontend ✅. Levels: ⚠️ O21, see B.

### C4. Education, certifications

| Item | Status |
|---|---|
| Bachelor's → B.Tech in Electronics and Communication Engineering, APJ Abdul Kalam Technological University, 2017 – 2021 | ↪️ U10 |
| Diploma, KASE, 2017 – 2019 | ✅ O1 |
| High School, Kerala State Board, 2015 – 2017 | ✅ O2 |
| PGP (FDE Academy), MBA in AI (Amrita) | ✅ new |
| Certificates: Dhaga & Co. Client Engagement; Generative AI (Skill India / NSDC) | ✅ new, in the Certificates section (images TODO) |

### C5. Links

| Link | Status |
|---|---|
| Email `sanjayperingayil@gmail.com` (display + `mailto:`) | ✅ (the old broken `mailto:examplemail@gmail.com.com` is fixed, C1) |
| WhatsApp India `+91 90613 81726` | ✅ `wa.me/919061381726` + `tel:` (the old link was missing the 91 country code, U11) |
| WhatsApp UAE `+971-588-393-705` | ✅ `wa.me/971588393705` + `tel:` (O22) |
| GitHub, LinkedIn, Instagram (hero) · Facebook, Instagram, LinkedIn (footer) | ✅ same URLs, same placement |
| Messenger, X/Twitter | ↪️ disabled on the old site, still disabled (O27, O28) |

---

## D. Assets (inventory §D)

| Old asset (in use) | New | Status |
|---|---|---|
| `snjy07.jpg` (hero) | `/images/profile/hero.webp` | ✅ |
| `snjy00.JPG` (about) | `/images/profile/about.webp` | ✅ |
| `brainwaveui.png`, `ikon.png`, `logistics.png`, `coffeeui.png`, `ecommerce002.png`, `hotel001.png`, `blog001.png`, `muikit.png` | `/images/projects/<slug>.webp` | ✅ (all 8) |
| `testimonial1.png`, `jibu.jpg`, `suf01.jpg` | `/images/testimonials/*.webp` | ✅ |
| `snjyred.png` (favicon, hot-linked from GitHub) | `favicon.ico`, `icon.png`, `apple-icon.png`, manifest icons, all served locally | ✅ |
| `sanjay-resume-2026.pdf` | **removed**, replaced by the new resume | ↪️ rule 3 |
| Inline SVGs: waving hand · send · document · scroll mouse | `/images/hand.svg` · lucide `Send` · lucide `Download` · inline scroll mouse | ✅ (scroll mouse 🔧, see G5) |
| Icon fonts (Unicons, Boxicons CDNs) | lucide-react + Simple Icons (bundled) | ↪️ design system §7 |
| Poppins | Instrument Serif + Geist via `next/font` | ↪️ design system §3 |

The 28 unused old assets (D2) were never shown on the old site, so none were carried over. They're still in git history on `main`/`dev`.

---

## E. Metadata & SEO (inventory §E)

| Item | Old | New | Status |
|---|---|---|---|
| `lang` | `en` | `en` | ✅ |
| Title | `Sanjay Peringayil` | `Sanjay P Purushothaman — Forward Deployed Engineer` | ↪️ U14 |
| Description | `Sanjay Peringayil Purushothaman Portfolio` | Resume headline version | ↪️ U14 |
| Viewport, charset | ✓ | ✓ | ✅ |
| Favicon | GitHub hot-link | Local favicon set | ✅ |
| OG / Twitter / manifest / robots / sitemap / canonical / JSON-LD | none | all added | ✅ new (Phase 9) |

---

## F. Integrations (inventory §F)

| Item | Status |
|---|---|
| Analytics | ✅ none before, none now (no IDs existed) |
| Contact form via EmailJS, fields `name`/`email`/`project` | ✅ EmailJS (your Phase 7 choice). Keys moved to `NEXT_PUBLIC_EMAILJS_*`, and `project` is still sent so the old template keeps working. Note: the EmailJS Gmail connection needs reconnecting (Phase 7). |
| WhatsApp / mailto deep links | ✅ (fixed: see C5) |
| Third-party CSS (Google Fonts, Unicons, Boxicons) | ↪️ replaced by self-hosted fonts and bundled icons |

---

## G. Behaviour (inventory §G)

| # | Old behaviour | New | Status |
|---|---|---|---|
| G1 | Header background on scroll | Glass navbar gets more opaque after 8px | ✅ |
| G2 | Active nav link (on click) | Scroll-spy active link (`aria-current`) | ✅ |
| G3 | Mobile bottom-sheet menu | Full-screen glass sheet: focus trap, Escape, closes on link tap (the old one didn't) | ✅ |
| G4 | Morphing blob hero image (8s `border-radius`) | Restored on the glass frame and the photo; static under reduced motion | 🔧 |
| G5 | Animated scroll-mouse wheel | Restored as a scroll mouse with an animated wheel | 🔧 |
| G6 | Smooth anchor scrolling | ✓ (with navbar offset) | ✅ |
| G7 | Services "View More" modals | Native `<dialog>` (Esc, ✕, backdrop click) | ✅ |
| G8 | Qualification tabs | Separate Experience / Education / Certificates sections | ↪️ Phase 4 structure |
| G9 | Portfolio filter | All / AI / UI / Business / Blog | ✅ |
| G10 | Swiper testimonial carousel | Swipeable row on mobile, grid on desktop | ✅ (noted in Phase 5) |
| G11 | Contact form via EmailJS | Validated, rate-limited, with success and error states | ✅ |
| G12 | Scroll-to-top after 560px | ✓ | ✅ |
| G13 | Resume download | New resume, 4 download buttons | ✅ |
| G14 | Waving hand next to name | ✓ | ✅ |

---

## H. Resume (inventory §H)

| Check | Result |
|---|---|
| PDFs in `public/` | Exactly one: `public/resume/Sanjay-Purushothaman-Resume.pdf` (126,616 bytes, byte-identical to `_input/resume-new.pdf`) ✅ |
| Download links | 4 (navbar, hero, mobile menu, footer), all `href="/resume/Sanjay-Purushothaman-Resume.pdf"` with `download="Sanjay-Purushothaman-Resume.pdf"`. Also covered by a Playwright test ✅ |
| Served | `200 application/pdf` ✅ |
| Old file names in code (`grep -i "sanjay-resume\|resume-2025\|resume-2026\|third2025"`, excluding `_audit/`, `node_modules/` and build output) | **0 matches** ✅ |
| Old names inside `_audit/` | Expected: the inventory, merge docs, snapshot and the Phase 1 backup copy `_audit/assets-backup/sanjay-resume-2026.pdf`. None of these are part of the build. |

---

## OLD-ONLY items (RESUME_MERGE.md)

| ID | Item | Status |
|---|---|---|
| O1–O2 | Diploma, High School | ✅ Education |
| O3–O4 | "18 + Projects", "Online 24/7" | ✅ About stats |
| O5–O7 | Three services, with all modal text | ✅ Services (dialog content in the HTML) |
| O8–O10 | Three testimonials | ✅ |
| O11–O18 | Eight web projects | ✅ |
| O19–O20 | Wordpress, Bootstrap | ✅ Skills → Frontend |
| O21 | Proficiency levels | ⚠️ in content, not displayed. **Decision needed** |
| O22 | WhatsApp UAE | ✅ |
| O23–O25 | GitHub, Instagram, Facebook | ✅ |
| O26 | Site UI copy (section titles and subtitles, button and form labels) | ✅, except "Download CV" and "Qualification" (↪️, see B) and the form's "Project" label, which became "Message" (Phase 7 brief; the "Write your project" placeholder is kept) |
| O27–O28 | Messenger, X/Twitter | ↪️ still disabled |

Corrections C1–C8 (typos, broken `mailto:`, logo link, date dashes) are applied as listed in RESUME_MERGE.md. You didn't object when they were reported in Phase 2.
