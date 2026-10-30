# Content Inventory — old CRA portfolio

Audited on 2026-10-30 from branch `v.1.01-fde` (identical to `main` @ `567f299`).
Framework: Create React App, React 19.1.0. Single page, no router.

Text in section B is copied **verbatim**, including original typos, casing and spacing. Typos are marked `[sic]` only in this note column, never inside the quoted text.

A machine-readable copy of sections B and C is in [`content-snapshot.json`](content-snapshot.json).

---

## A. Site map

There is one route, `/` (`public/index.html` → `src/index.js` → `src/App.js`). The sections render in this order:

| # | Section | Anchor id | Component | In nav? |
|---|---|---|---|---|
| 0 | Header / nav (fixed) | — | `src/components/header/Header.jsx` | — |
| 1 | Home / hero | `#home` | `src/components/home/Home.jsx` (+ `Social.jsx`, `Data.jsx`, `ScrollDown.jsx`) | Yes |
| 2 | About Me | `#about` | `src/components/about/About.jsx` (+ `Info.jsx`) | Yes |
| 3 | Skills | `#skills` | `src/components/skills/Skills.jsx` (+ `Frontend.jsx`, `Backend.jsx`, `Aiskills.jsx`) | Yes |
| 4 | Services | `#services` | `src/components/services/Services.jsx` | Yes |
| 5 | Qualification | *(no id)* | `src/components/qualification/Qualification.jsx` | **No** — can't be reached from the nav |
| 6 | Portfolio | `#portfolio` | `src/components/work/Work.jsx` (+ `Works.jsx`, `WorkItems.jsx`, `Data.jsx`) | Yes ("portfolio") |
| 7 | Testimonials | `#testimonials` | `src/components/testimmonials/Testimonials.jsx` (+ `Data.jsx`) | No (footer only) |
| 8 | Contact | `#contact` | `src/components/contact/Contact.jsx` | Yes |
| 9 | Footer | — | `src/components/footer/Footer.jsx` | — |
| 10 | Scroll-to-top button (floating) | — | `src/components/scrollup/Scrollup.jsx` | — |

---

## B. Verbatim content

### B0. Header — `src/components/header/Header.jsx`

| Element | Text | Target |
|---|---|---|
| Logo | `Sanjay` | `index.html` |
| Nav link (icon `uil-estate`) | `Home` | `#home` |
| Nav link (icon `uil-user`) | `About` | `#about` |
| Nav link (icon `uil-file-alt`) | `Skills` | `#skills` |
| Nav link (icon `uil-briefcase-alt`) | `Services` | `#services` |
| Nav link (icon `uil-scenery`) | `portfolio` | `#portfolio` (lowercase in the original) |
| Nav link (icon `uil-message`) | `Contact` | `#contact` |
| Mobile menu open / close icons | `uil-apps` / `uil-times` | — |

### B1. Home — `src/components/home/Data.jsx`, `Social.jsx`, `ScrollDown.jsx`

- **H1:** `Sanjay`, followed by an inline waving-hand SVG (`home__hand`; yellow `#FFDD67` / `#EBA352`)
- **Subtitle 1:** `Full Stack Developer`
- **Subtitle 2:** `AI automation & agent (n8n)`
- **Description:**
  > As a Full Stack Developer, I'm passionate about crafting dynamic and responsive web applications. I bring experience in both front-end and back-end development, complemented by my expertise as an n8n Developer focused on AI automation and AI agent generation. I'm consistently eager to explore new technologies and enhance my skill set.
- **CTA button:** `Say Hello` (paper-plane SVG icon) → `#contact`
- **Scroll indicator:** `Scroll Down` (animated mouse SVG + `uil-arrow-down`) → `#about`
- **Social icons (vertical, left of hero):** Instagram, GitHub, LinkedIn (see C5)
- **Hero image:** CSS background `snjy07.jpg` (no alt text, decorative `div`)

### B2. About — `src/components/about/About.jsx`, `Info.jsx`

- **Section title:** `About Me`
- **Section subtitle:** `My introduction`
- **Image:** `snjy00.JPG`, `alt=""`
- **Info boxes:**

  | Icon | Title | Subtitle |
  |---|---|---|
  | `uil-award` | `Experience` | `4+ Years Working` |
  | `uil-briefcase-alt` | `Completed` | `18 + Projects` |
  | `bx-headphone-mic` | `Support` | `Online 24/7` |

- **Description:**
  > I'm a Full Stack Developer with a passion for creating dynamic and responsive web applications. My experience spans both front-end and back-end development, and I specialize as an n8n Developer for AI automation and AI agent generation. I'm always eager to learn new technologies and improve my skills.
- **Button:** `Download CV` (document SVG icon) → `sanjay-resume-2026.pdf` (`download` attribute)

### B3. Skills — `src/components/skills/*.jsx`

- **Section title:** `Skills`
- **Section subtitle:** `My technical level`
- **Group headings:** `Frontend Developer`, `Backend Developer`, `AI (No code)` (the skills themselves are in C3)
- Each skill uses the icon `bx-badge-check`

### B4. Services — `src/components/services/Services.jsx`

- **Section title:** `Services`
- **Section subtitle:** `What i offer` (lowercase "i" in the original)
- **Card button label (all three cards):** `View More` (icon `uil-arrow-right`)
- **Modal close icon:** `uil-times`; each bullet uses the icon `uil-check-circle`

**Card 1** — icon `uil-web-grid`, card title `Full Stack` / `Web Apps` (two lines, `<br/>`)
- Modal title: `Full Stack Web Application`
- Modal description: `Scalable, responsive, and modern web applications built from scratch using the latest fullstack technologies.`
- Bullets:
  1. `End-to-end development with React.js, Next.js, Node.js & databases like MongoDB/PostgreSQL`
  2. `Fully responsive, SEO-friendly, and user-centric designs`
  3. `RESTful & GraphQL API integration with secure authentication`
  4. `Admin dashboards, content management, and analytics-ready setups`
  5. `Clean, maintainable codebase with Git and deployment pipelines`

**Card 2** — icon `uil-arrow`, card title `Website` / `Maintenance`
- Modal title: `Ensuring Your Website Runs Smoothly 24/7`
- Modal description: `Reliable ongoing support to keep your website secure, updated, and running smoothly at all times.`
- Bullets:
  1. `Regular bug fixes, performance tuning, and content updates`
  2. `Uptime monitoring, backups, and security enhancements`
  3. `CMS adjustments or plugin/module integration`
  4. `Troubleshooting deployment issues and broken functionalities`
  5. `Adding new sections or pages without disrupting existing systems`

**Card 3** — icon `uil-edit`, card title `Graphic` / `Design`
- Modal title: `Designs That Speak for Your Brand`
- Modal description: `Creative and brand-aligned visuals for digital and print that leave a lasting impression.`
- Bullets:
  1. `Custom logo, poster, and brochure design`
  2. `Social media creatives with consistent visual branding`
  3. `Clean, professional, and pixel-perfect designs`
  4. `Fast delivery with multiple format exports (PNG, PDF, SVG)`
  5. `Social media marketing visuals for brand engagement and promotions`

### B5. Qualification — `src/components/qualification/Qualification.jsx`

- **Section title:** `Qualification`
- **Section subtitle:** `My personal journey`
- **Tabs:** `Education` (icon `uil-graduation-cap`, selected by default), `Experience` (icon `uil-briefcase-alt`)
- Each entry has a calendar icon (`uil-calendar-alt`). The entries themselves are in C1 and C4.

### B6. Portfolio — `src/components/work/*.jsx`

- **Section title:** `Portfolio`
- **Section subtitle:** `Most recent works`
- **Filter labels:** `all`, `ui`, `business`, `blog` (lowercase in data; shown as `All`, `Ui`, `Business`, `Blog` via `text-transform: capitalize` in `work.css:15`)
- **Card button:** `Demo` (icon `uil-arrow-right`)
- The projects themselves are in C2.

### B7. Testimonials — `src/components/testimmonials/*.jsx`

- **Section title:** `My  clients say` (two spaces between "My" and "clients" in the original)
- **Section subtitle:** `Testimonial`

| # | Name | Image | Quote (verbatim) |
|---|---|---|---|
| 1 | `Sreehari` | `testimonial1.png` | `Worked with me as a freelance developer and delivered a fully functional, responsive website tailored to client needs. Reliable, technically sound, and quick to adapt to feedback throughout the project.` |
| 2 | `Jibu Thomas` | `jibu.jpg` | `A proactive and reliable team player. Consistently led development efforts with precision and played a key role in successful project deliveries within tight deadlines.` |
| 3 | `Sufair` | `suf01.jpg` | `Handled our brand’s visual identity and online presence with creativity and consistency. Designed impactful visuals and ran social campaigns that enhanced our engagement and reach.` (curly apostrophe `’`) |

No roles, companies or dates are attached to any testimonial.

### B8. Contact — `src/components/contact/Contact.jsx`

- **Section title:** `Get in touch`
- **Section subtitle:** `Contact Me`
- **Left column heading:** `Talk to me`
- **Cards:**

  | Icon | Card title | Displayed data | Button | Button target |
  |---|---|---|---|---|
  | `bx-envelope` | `Email` | `sanjayperingayil@gmail.com` | `Write me` | `mailto:examplemail@gmail.com.com` ⚠️ wrong address |
  | `uil-whatsapp` | `Whatsapp UAE` | `+971-588-393-705` | `Write me` | `https://api.whatsapp.com/send?phone=971588393705&text=Hello, more information!` |
  | `uil-whatsapp` | `Whatsapp India` | `+91-906-138-1726` | `Write me` | `https://api.whatsapp.com/send?phone=9061381726&text=Hello, more information!` ⚠️ no `91` country code |
  | *(commented out)* `uil-facebook-messenger-alt` | `Messenger` | `Sanjay peringayil` | `Write me` | `https://m.me/crypticalcoder` |

- **Right column heading:** `Write me your project`
- **Form fields:**

  | Label | `name` attribute | Type | Placeholder |
  |---|---|---|---|
  | `Name` | `name` | text | `Insert your name` |
  | `Mail` | `email` | email | `Insert your email` |
  | `Project` | `project` | textarea (30×10) | `Write your project` |

- **Submit button:** `Send Message` (paper-plane SVG icon)

### B9. Footer — `src/components/footer/Footer.jsx`

- **Title:** `Sanjay Peringayil`
- **Links:** `About` → `#about`, `Projects` → `#portfolio`, `Testimonials` → `#testimonials`
- **Social icons:** Facebook (`uil-facebook-f`), Instagram (`uil-instagram`), LinkedIn (`uil-linkedin-alt`). A commented-out X/Twitter SVG is left over in the LinkedIn anchor.
- **Copyright:** `© SanjayPeringayil. All rigths reserved` (written as `&#169;`; "rigths" [sic])

### B10. Scroll-to-top — `src/components/scrollup/Scrollup.jsx`

- Icon-only button (`uil-arrow-up`), no text or aria-label.

---

## C. Structured data

### C1. Experience

Sources: the Qualification → Experience tab, plus About → `4+ Years Working`. No section on the old site gives a location or bullet points.

| # | Role (verbatim) | Company (verbatim) | Dates (verbatim) | Location | Bullets |
|---|---|---|---|---|---|
| 1 | `Full Stack developer` | `JAH Transport by heavy & light trucks LLC` | `2025 - 2026` | not stated | none |
| 2 | `Junior Software Engineer` | `Softnotions Technologies Private Limited` | `2023 - 2025` | not stated | none |
| 3 | `Full Stack developer Program` | `Preb bytes.com` [sic] | `2022 - 2023` | not stated | none |
| 4 | `Graphic Designer` | `Calypso Innovative Branding Partner` | `2021 - 2022` | not stated | none |

### C2. Projects

Source: `src/components/work/Data.jsx`. The site shows no descriptions, tech stacks or repo links for any project. They are listed below in the display order (the array order), not by `id`.

| Order | id | Title | Category | Live link | Repo | Image |
|---|---|---|---|---|---|---|
| 1 | 5 | `Ai application` | ui | https://ui001-beta.vercel.app/ | — | `brainwaveui.png` |
| 2 | 8 | `Business service` | business | https://ikonext.vercel.app/ | — | `ikon.png` |
| 3 | 7 | `Logistics Company` | business | https://transportlogistics.vercel.app/ | — | `logistics.png` |
| 4 | 6 | `Coffee Shop` | ui | https://coffeui.vercel.app/ | — | `coffeeui.png` |
| 5 | 2 | `Ecommerce app` | business | https://ecommerce002.vercel.app/ | — | `ecommerce002.png` |
| 6 | 3 | `Hotel Booking Web` | business | https://hotelbooking001.vercel.app/ | — | `hotel001.png` |
| 7 | 1 | `Blog web` | blog | https://incredible-nasturtium-a80245.netlify.app/ | — | `blog001.png` |
| 8 | 4 | `Dashboard UI` | ui | https://dashboard001-kappa.vercel.app/dashboard | — | `muikit.png` |

### C3. Skills (grouped exactly as on the site)

Each group is shown in two columns; "Col" below means the column the skill appears in.

**Frontend Developer** — `src/components/skills/Frontend.jsx`

| Col | Skill | Level |
|---|---|---|
| 1 | `HTML` | `Advanced` |
| 1 | `CSS` | `Advanced` |
| 1 | `Javascript` | `Professional` |
| 1 | `Wordpress` | `Intermediate` |
| 2 | `React` | `Advanced` |
| 2 | `Next` | `Advanced` |
| 2 | `Bootstrap` | `Advanced` |
| 2 | `Tailwind` | `Intermediate` |

**Backend Developer** — `src/components/skills/Backend.jsx`

| Col | Skill | Level |
|---|---|---|
| 1 | `Node Js` | `Advanced` |
| 1 | `Express` | `Intermediate` |
| 1 | `Nest Js` | `Basic` |
| 1 | `AWS` | `Intermediate` |
| 2 | `Mongodb` | `Advanced` |
| 2 | `Postgresql` | `Intermediate` |
| 2 | `GraphQL` | `Intermediate` |
| 2 | `REST API` | `Advanced` |

**AI (No code)** — `src/components/skills/Aiskills.jsx`

| Col | Skill | Level |
|---|---|---|
| 1 | `n8n` | `Basic` |
| 1 | `Automation` | `Basic` |
| 2 | `Agent` | `Basic` |

### C4. Education, certifications, awards, publications

**Education** (Qualification → Education tab):

| # | Title (verbatim) | Institution (verbatim) | Dates |
|---|---|---|---|
| 1 | `Bachlor's Degree` [sic] | `A.P.J Abdul kalam Technological  university` (two spaces in the original) | `2017 - 2021` |
| 2 | `Diploma` | `Kerala Academy for Skills Excellence (KASE)` | `2017 - 2019` |
| 3 | `High School` | `Kerala State Board` | `2015 - 2017` |

- **Certifications:** none on the old site.
- **Awards:** none.
- **Publications:** none.

### C5. Social / profile / contact links

| Type | Value | Where used |
|---|---|---|
| Email (displayed) | `sanjayperingayil@gmail.com` | Contact card |
| Email (mailto link) | `examplemail@gmail.com.com` ⚠️ | Contact "Write me" button |
| Phone / WhatsApp UAE | `+971-588-393-705` → `wa.me` number `971588393705` | Contact card |
| Phone / WhatsApp India | `+91-906-138-1726` → link number `9061381726` ⚠️ | Contact card |
| GitHub | https://github.com/sanjayperingayil2000 | Home social |
| LinkedIn | https://www.linkedin.com/in/sanjay-purushothaman-5223aa224/ | Home social, Footer |
| Instagram | https://www.instagram.com/sanjayperingayil?igsh=eGJmMzgzcThyMmZm | Home social, Footer |
| Facebook | https://www.facebook.com/share/1EM19GJhb8/ | Footer only |
| Messenger *(commented out)* | https://m.me/crypticalcoder | Contact (disabled) |
| X / Twitter *(commented out)* | icon only, no URL | Footer (disabled) |

---

## D. Assets

All assets live in `src/assets/` (43 files). `public/` contains only `index.html` — there is **no** `favicon.ico`, `manifest.json`, `robots.txt`, or logo PNGs.

### D1. In use — backed up to `_audit/assets-backup/` (15 files, verified byte-identical)

| File | Used by | How |
|---|---|---|
| `snjy07.jpg` | Home hero | CSS `background: url(...)` in `home.css:63` |
| `snjy00.JPG` | About photo | import in `About.jsx:3` |
| `sanjay-resume-2026.pdf` | About "Download CV" | import in `About.jsx:4` (**old resume — to be replaced**) |
| `snjyred.png` | Favicon | Loaded from the GitHub raw URL in `public/index.html:15`, not bundled |
| `brainwaveui.png` | Project "Ai application" | `work/Data.jsx` |
| `ikon.png` | Project "Business service" | `work/Data.jsx` |
| `logistics.png` | Project "Logistics Company" | `work/Data.jsx` |
| `coffeeui.png` | Project "Coffee Shop" | `work/Data.jsx` |
| `ecommerce002.png` | Project "Ecommerce app" | `work/Data.jsx` |
| `hotel001.png` | Project "Hotel Booking Web" | `work/Data.jsx` |
| `blog001.png` | Project "Blog web" | `work/Data.jsx` |
| `muikit.png` | Project "Dashboard UI" | `work/Data.jsx` |
| `testimonial1.png` | Testimonial "Sreehari" | `testimmonials/Data.jsx` |
| `jibu.jpg` | Testimonial "Jibu Thomas" | `testimmonials/Data.jsx` |
| `suf01.jpg` | Testimonial "Sufair" | `testimmonials/Data.jsx` |

### D2. Not referenced anywhere (28 files; still in git history on `main`/`dev`)

| File(s) | Note |
|---|---|
| `sanjay-resume-2025-india.pdf`, `sanjay-resume-2025.pdf`, `sanjay-resume-2025first.pdf`, `sanjay-resume-2025second.pdf`, `sanjay-resume-third2025.pdf` | Older resumes. To be removed (rule 3). |
| `snjy01.jpg` … `snjy06.jpg` | Alternate portraits |
| `greysnjy.png`, `snjygrey.png`, `redsnjy.png` | Alternate portraits / logo variants (`snjyred.png` is the one in use as the favicon) |
| `testimonial2.png`, `testimonial3.png`, `suf02.jpg` | Unused testimonial avatars |
| `work1.jpg` … `work5.jpg` | Template placeholder project images |
| `hand.svg`, `scroll.svg`, `send.svg`, `files.svg` | SVG versions of the icons that are inlined in the JSX (waving hand, scroll mouse, paper plane, document) |

### D3. Inline SVGs (part of the code, not separate files)

- Waving hand — `home/Data.jsx`
- Paper-plane "send" icon — `home/Data.jsx`, `contact/Contact.jsx`
- Document "CV" icon — `about/About.jsx`
- Animated scroll mouse — `home/ScrollDown.jsx`
- X/Twitter logo — `footer/Footer.jsx` (commented out)

### D4. Fonts and icon libraries (external)

| Asset | Source |
|---|---|
| Poppins 400/500/600 | Google Fonts `@import` in `App.css:2` |
| Unicons (Line) | `https://unicons.iconscout.com/release-pro/v4.0.0/css/line.css` (active); `release/v4.0.8` (commented out) |
| Boxicons | `https://cdn.boxicons.com/fonts/basic/boxicons.min.css` (active); `unpkg.com/boxicons@2.1.4` (commented out) |
| Swiper CSS | `swiper/css`, `swiper/css/pagination` (npm) |

**Icon classes used:** `uil-estate`, `uil-user`, `uil-file-alt`, `uil-briefcase-alt`, `uil-scenery`, `uil-message`, `uil-times`, `uil-apps`, `uil-instagram`, `uil-github-alt`, `uil-linkedin-alt`, `uil-facebook-f`, `uil-arrow-down`, `uil-arrow-up`, `uil-arrow-right`, `uil-award`, `uil-web-grid`, `uil-arrow`, `uil-edit`, `uil-check-circle`, `uil-graduation-cap`, `uil-calendar-alt`, `uil-whatsapp`, `uil-facebook-messenger-alt` (commented out), `bx-headphone-mic`, `bx-badge-check`, `bx-envelope`, `bx-arrow-right`.

### D5. Design tokens (`src/App.css`)

- Monochrome palette: `--hue: 0; --sat: 0%`; title 20% lightness, title-dark 0%, text 46%, body background 98%, container `#fff`.
- Typography scale: big 3.5rem, h1 2.25rem, h2 1.5rem, h3 1.25rem, normal 1rem, small 0.875rem, smaller 0.813rem, tiny 0.625rem. The scale steps down at ≤992px and ≤350px.
- Container max-width 968px. Breakpoints: 992 / 768 / 576 / 350px. On mobile the nav becomes a bottom sheet.

---

## E. Metadata & SEO — `public/index.html`

| Item | Value |
|---|---|
| `<html lang>` | `en` |
| `<title>` | `Sanjay Peringayil` |
| `meta description` | `Sanjay Peringayil Purushothaman Portfolio` |
| `meta viewport` | `width=device-width, initial-scale=1` |
| `meta charset` | `utf-8` |
| Favicon | `<link rel="icon" type="image/png" href="https://github.com/sanjayperingayil2000/white-react-portfolio/blob/main/src/assets/snjyred.png?raw=true">` |
| Open Graph tags | **none** |
| Twitter card tags | **none** |
| Apple touch icon / favicon set | **none** |
| Web manifest | **none** |
| robots.txt | **none** |
| sitemap | **none** |
| Canonical URL | **none** — the production domain isn't recorded anywhere in the repo |
| Structured data (JSON-LD) | **none** |
| `theme-color` | **none** |

---

## F. Integrations

### F1. Analytics

**None.** No GA, GTM, Vercel Analytics, Plausible, Hotjar or similar. `web-vitals` is in `package.json` but never imported.

### F2. Contact form — EmailJS

- **Package:** `@emailjs/browser` ^4.4.1 (used). `emailjs-com` ^3.2.0 is also installed but **unused**.
- **Call:** `emailjs.sendForm(serviceId, templateId, form, { publicKey })` in `Contact.jsx:13-15`
- **Endpoint:** EmailJS REST API (`api.emailjs.com`), called by the SDK
- **Config:** **hardcoded in the source, not in env vars.** No `process.env` usage exists anywhere in the repo. The values are not repeated in this file; they are in `src/components/contact/Contact.jsx:13-15` on `main`/`dev`.
- **Proposed env var names for the rebuild:** `NEXT_PUBLIC_EMAILJS_SERVICE_ID`, `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`, `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
- **Template fields sent:** `name`, `email`, `project`. The EmailJS template on the dashboard must keep these names.
- **Behaviour:** the form resets immediately after the call. There is no success/error feedback, no validation, and no required fields.

### F3. Redirect / deep links

- WhatsApp: `api.whatsapp.com/send?phone=…&text=Hello, more information!` (×2, see C5)
- `mailto:` link (wrong address, see C5)
- Project demos open in the **same tab** (no `target="_blank"`). Social links open in a new tab with `rel="noreferrer"`.

### F4. Third-party scripts and styles

- No third-party `<script>` tags.
- External CSS: Google Fonts, Unicons, Boxicons (see D4).

---

## G. Behaviour worth keeping

| # | Behaviour | Where | Details |
|---|---|---|---|
| 1 | Header gets a shadow/background on scroll | `Header.jsx` | Adds `.scroll-header` once `scrollY >= 80` |
| 2 | Active nav link highlight | `Header.jsx` | Set **on click** only, not by scroll position |
| 3 | Mobile bottom-sheet menu | `Header.jsx`, `header.css` | ≤768px the nav sits at the bottom; `uil-apps` opens it and `uil-times` closes it. Tapping a link does **not** close the menu. |
| 4 | Morphing blob hero image | `home.css` | `profile__animate`, 8s infinite `border-radius` morph |
| 5 | Animated scroll-mouse wheel | `home.css` | `.wheel` `translateY` loop, 2s |
| 6 | Smooth anchor scrolling | `App.css` | `html { scroll-behavior: smooth }` |
| 7 | Services modals | `Services.jsx` | "View More" opens a modal per card; close with ✕ only (no Esc or backdrop click) |
| 8 | Qualification tabs | `Qualification.jsx` | Education / Experience toggle; alternating left/right timeline with dots and lines |
| 9 | Portfolio category filter | `Works.jsx` | `all / ui / business / blog`; the active filter is highlighted |
| 10 | Testimonial carousel | `Testimonials.jsx` | Swiper: loop, grab cursor, clickable pagination dots; 1 slide on mobile, 2 at ≥576px (gap 24px, 48px at ≥768px) |
| 11 | Contact form via EmailJS | `Contact.jsx` | See F2 |
| 12 | Scroll-to-top button | `Scrollup.jsx` | Appears once `scrollY >= 560`; smooth-scrolls to top |
| 13 | Resume download | `About.jsx` | `<a download>` to the bundled PDF |
| 14 | Waving-hand icon next to name | `home/Data.jsx` | Static SVG (no animation found in CSS) |

---

## H. Old resume

- **File:** `src/assets/sanjay-resume-2026.pdf` (98,652 bytes). Bundled by CRA as a hashed file under `static/media/`.
- **Linked from:** one place only, `src/components/about/About.jsx:4` (import) → `:24` (`<a download="" href={CV}>Download CV</a>`).
- The other 5 resume PDFs in `src/assets/` are **not** linked anywhere (see D2).
- **New resume:** `_input/resume-new.pdf` **still does not exist** (Phase 0 blocker). A copy was provided in chat as `Sanjay_P_Purushothaman_FDE_Resume.pdf`.

---

## I. Preview: where the new resume conflicts with or extends the old site (not acted on yet)

This section is for planning only; nothing has been changed. Per rule 2, the resume will win where the two conflict.

| Topic | Old site | New resume |
|---|---|---|
| Headline | `Full Stack Developer` / `AI automation & agent (n8n)` | Forward Deployed Engineer \| Applied AI & Agentic Systems \| Full-Stack (Next.js, Node.js, AWS) |
| Years of experience | `4+ Years Working` | 5+ years professional; 4+ years full-stack/cloud |
| Current role | — (missing) | Associate Consultant, Zimble Systems Pvt. Ltd., Feb 2026 – Present |
| JAH Transport | `Full Stack developer`, `JAH Transport by heavy & light trucks LLC`, `2025 - 2026` | Full Stack Developer, JAH Transport LLC, Jun 2025 – Jan 2026 |
| Softnotions | `2023 - 2025` | Mar 2023 – Jun 2025 |
| Prepbytes | `Full Stack developer Program`, `Preb bytes.com`, `2022 - 2023` | MERN Stack Developer Trainee, Prepbytes (Remote), Jul 2022 – Mar 2023 |
| Calypso | `Calypso Innovative Branding Partner`, `2021 - 2022` | Calypso Branding Partner, Jul 2021 – Jun 2022 |
| B.Tech | `Bachlor's Degree`, A.P.J Abdul kalam Technological university | B.Tech in Electronics and Communication Engineering, APJ Abdul Kalam Technological University |
| Diploma (KASE), High School | Present | **Not on resume** → keep and flag |
| PGP (FDE Academy), MBA in AI (Amrita) | — | New |
| Certifications | — | Dhaga & Co. Client Engagement (FDE Academy, Oct 2026); Generative AI Certification (Skill India / NSDC) |
| FDE projects | — | Dhaga & Co. Order Resolution Assistant; Slack Team Insights |
| Skills | 3 groups with proficiency levels | 7 categories, no proficiency levels |
| Location / availability | — | Kerala, India · Open to Remote / Relocation |
| Languages | — | English, Malayalam, Hindi, Tamil |
| Phone | UAE + India WhatsApp | India only (+91 90613 81726) |
| Social links | Instagram, Facebook, GitHub, LinkedIn | Portfolio, LinkedIn (no GitHub/Instagram/Facebook) → keep the old ones and flag |
| Services, testimonials, 8 web projects, "18 + Projects", "Online 24/7" | Present | Not on resume → keep and flag |

---

## Possible gaps

1. **Production URL unknown.** No domain, `homepage` field or deploy config exists in the repo. This is needed for the canonical URL, OG tags and sitemap, and to confirm the deploy target (Vercel?).
2. **Favicon is hot-linked** from GitHub `main/src/assets/snjyred.png`. If the rebuild deletes `src/assets/` and merges to `main`, the favicon URL breaks. It must move into `public/`.
3. **`Qualification` has no anchor id** and isn't in the nav, so I recorded it as "unlinked". Was that intentional?
4. **"Full Stack developer Program" at Prepbytes** sits on the site's Experience tab, but it could also be classed as education or training. The resume lists it as experience (Trainee).
5. **Diploma (KASE) 2017–2019** overlaps the B.Tech (2017–2021). Kept as-is; you'll need to decide whether it stays.
6. **Testimonials** have no role, company or relationship info, and the "Sufair" quote is about design work. I can't verify them, so they're kept verbatim.
7. **"18 + Projects" and "Online 24/7"** are claims that aren't on the resume. Kept and flagged.
8. **Services → "Graphic Design"** matches the 2021–22 role but isn't in the new FDE positioning. Keep or drop?
9. **Skill proficiency levels** (Basic/Intermediate/Advanced/Professional) exist only on the old site. "n8n — Basic" contradicts the old hero copy, which calls him an "n8n Developer".
10. **Unicons `release-pro` CDN** may need a paid licence or stop working. The rebuild should probably switch to an icon package bundled in the repo.
11. **Commented-out content** (Messenger card, X/Twitter icon). Recorded, but I treated it as not live.
12. **Unused assets** (D2) — not backed up, since they're still in git history on `main`/`dev`. Say if you want them copied as well.
13. **"Portfolio" link on the resume** points to a URL I can't see from the PDF text. It's presumably this site.
14. **Unused dependencies:** `emailjs-com`, `web-vitals`, and the `@testing-library/*` packages (there are no tests). Flagged so they aren't carried over by accident.
