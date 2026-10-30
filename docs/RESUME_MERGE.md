# Resume Merge — new resume vs old site

- **Resume source:** `Sanjay_P_Purushothaman_FDE_Resume.pdf`, provided in chat (2 pages). `_input/resume-new.pdf` was **not present** when this file was written. When it's added, check that it matches this copy.
- **Old-site source:** [`CONTENT_INVENTORY.md`](CONTENT_INVENTORY.md) / [`content-snapshot.json`](content-snapshot.json)
- **Merged output:** [`content-final.json`](content-final.json)
- **Rule applied:** the resume wins on conflicts. Old-only items are **kept** unless you say otherwise.

Every item has an ID so you can reply with something like "drop O7, O19; approve U1 as old name".

> **PDF text extraction note:** several resume sentences read as if em dashes were lost when the text was extracted, e.g. *"Combines a consultant's discipline stakeholder-led problem discovery…"* and *"the company's core product a single Next.js application…"*. I kept the text exactly as extracted. Please check those sentences against the PDF (see Q3).

---

## NEW — in the resume, not on the old site

| ID | Item | Content (resume, verbatim) |
|---|---|---|
| N1 | **Current role** | Associate Consultant \| Zimble Systems Pvt. Ltd. \| Feb 2026 – Present (6 bullets) |
| N2 | **Bullets for every existing role** | The old site listed only title, company and years. The resume adds bullets for JAH (2), Softnotions (5), Prepbytes (1) and Calypso (1). |
| N3 | **Professional summary** | "Forward Deployed–oriented engineer with 5+ years of professional experience…" (full text in `profile.summary`) |
| N4 | **Location & availability** | Kerala, India · Open to Remote / Relocation |
| N5 | **Languages** | English, Malayalam, Hindi, Tamil |
| N6 | **Project: Dhaga & Co. AI-Powered D2C Order Resolution Assistant** | FDE Academy, Cohort 3. 5 bullets plus a stack line. No link or image in the resume. |
| N7 | **Project: Slack Team Insights AI Workflow Automation** | FDE Academy, Cohort 3. 5 bullets plus a stack line. No link or image in the resume. |
| N8 | **Education: PGP in Forward Deployed Engineering & Applied AI Solutions** | FDE Academy, Bengaluru · Aug 2026 – Present, with a programme description |
| N9 | **Education: MBA in Artificial Intelligence** | Amrita Vishwa Vidyapeetham · April 2026 – Present |
| N10 | **Certification: Dhaga & Co. Client Engagement** | FDE Academy, Oct 2026 |
| N11 | **Certification: Generative AI Certification** | Skill India & NSDC (no date given) |
| N12 | **Skill groups that didn't exist before** | Applied AI & LLMs · Forward Deployed & Consulting · Cloud & DevOps · Data & Security · Practices |
| N13 | **Individual skills that are new** | LangChain, Google Gemini API, OpenAI API, prompt & context engineering, entity extraction, LLM guardrails/evaluator patterns, fail-closed design, multi-model orchestration, Slack API integrations, RAG (in progress), Python API integration, microservices, serverless, TypeScript, Vite, Zustand, Docker, Kubernetes, GitLab CI/CD, Jenkins, GitHub Actions, CloudWatch/S3/Cognito/Lambda/EC2/ECS, Supabase, OAuth2, JWT, RBAC, input validation, system design, manifest-driven architecture, design patterns, MVC, Agile/Scrum, and all consulting skills |
| N14 | **"Portfolio" link in the resume header** | The URL can't be seen in the extracted text. It's probably this site, and it's still `TODO` (see Q1). |

---

## UPDATED — on both, changed (resume wins)

| ID | Item | Old site | New (used in `content-final.json`) |
|---|---|---|---|
| U1 | **Full name** ⚠️ decide | Footer/brand: `Sanjay Peringayil`; meta description: `Sanjay Peringayil Purushothaman` | `Sanjay P Purushothaman` (resume). The logo and hero first name `Sanjay` are unchanged. |
| U2 | **Headline / hero subtitles** | `Full Stack Developer` · `AI automation & agent (n8n)` | `Forward Deployed Engineer` · `Applied AI & Agentic Systems` · `Full-Stack (Next.js, Node.js, AWS)` |
| U3 | **Hero description** | "As a Full Stack Developer, I'm passionate about crafting dynamic…" | The **first sentence of the resume summary**, used unchanged: "Forward Deployed–oriented engineer with 5+ years of professional experience across software engineering and digital product delivery, including 4+ years building and shipping production full-stack and cloud systems." (taken from the resume, not written by me — see Q4) |
| U4 | **About description** | "I'm a Full Stack Developer with a passion for creating dynamic…" | The full resume professional summary |
| U5 | **Years of experience stat** | `4+ Years Working` | `5+ Years Working` |
| U6 | **JAH Transport** | `Full Stack developer` · `JAH Transport by heavy & light trucks LLC` · `2025 - 2026` | `Full Stack Developer` · `JAH Transport LLC` · `Jun 2025 – Jan 2026` |
| U7 | **Softnotions** | `Junior Software Engineer` · `Softnotions Technologies Private Limited` · `2023 - 2025` | `Junior Software Engineer` · `Softnotions Technologies Pvt. Ltd.` · `Mar 2023 – Jun 2025` |
| U8 | **Prepbytes** | `Full Stack developer Program` · `Preb bytes.com` · `2022 - 2023` | `MERN Stack Developer Trainee` · `Prepbytes` · location `Remote` · `Jul 2022 – Mar 2023` |
| U9 | **Calypso** | `Graphic Designer` · `Calypso Innovative Branding Partner` · `2021 - 2022` | `Graphic Designer` · `Calypso Branding Partner` · `Jul 2021 – Jun 2022` |
| U10 | **Bachelor's degree** | `Bachlor's Degree` · `A.P.J Abdul kalam Technological  university` · `2017 - 2021` | `B.Tech in Electronics and Communication Engineering` · `APJ Abdul Kalam Technological University` · `2017 – 2021` |
| U11 | **India phone** | Display `+91-906-138-1726`; WhatsApp link `phone=9061381726` (broken, no country code) | Display `+91 90613 81726`; WhatsApp link `phone=919061381726` |
| U12 | **Skills structure** | 3 groups (Frontend Developer / Backend Developer / AI (No code)), 19 skills, each with a level | 7 resume groups. The old "AI (No code)" skills (`n8n`, `Automation`, `Agent`) are covered by the resume's "AI workflow automation (n8n, Python)" and "Agentic AI design patterns". |
| U13 | **Skill name spelling** | `Javascript`, `Node Js`, `Nest Js`, `Express`, `Mongodb`, `Postgresql`, `Next`, `React`, `Tailwind`, `HTML`, `CSS`, `REST API` | Resume spelling: `JavaScript`, `Node.js`, `NestJS`, `Express.js`, `MongoDB`, `PostgreSQL`, `Next.js`, `React.js`, `Tailwind CSS`, `HTML5`, `CSS3`, `REST` |
| U14 | **Page title / meta description** ⚠️ decide | `Sanjay Peringayil` / `Sanjay Peringayil Purushothaman Portfolio` | `Sanjay P Purushothaman — Forward Deployed Engineer` / `Portfolio of Sanjay P Purushothaman — Forward Deployed Engineer \| Applied AI & Agentic Systems \| Full-Stack (Next.js, Node.js, AWS)`. Both are assembled from resume text only; depends on U1. |
| U15 | **Experience section structure** | Only shown inside the "Qualification" tabs | Its own list of 5 roles with bullets. Layout is for the design phase; this is a content change only. |

---

## OLD-ONLY — on the old site, not in the resume (default: **KEEP**)

Mark each one **KEEP** or **DROP**. All of them are currently in `content-final.json`, marked `"_source": "old-site"`.

| ID | Item | Content | Default | Note |
|---|---|---|---|---|
| O1 | Education: Diploma | Kerala Academy for Skills Excellence (KASE), 2017 – 2019 | KEEP | Overlaps the B.Tech dates |
| O2 | Education: High School | Kerala State Board, 2015 – 2017 | KEEP | |
| O3 | Stat box | `Completed` · `18 + Projects` | KEEP | Not on the resume and can't be verified |
| O4 | Stat box | `Support` · `Online 24/7` | KEEP | Reads like a freelancer claim; doesn't fit the FDE positioning well |
| O5 | Service: Full Stack Web Apps | Modal "Full Stack Web Application" + 5 bullets | KEEP | Consistent with the resume |
| O6 | Service: Website Maintenance | Modal "Ensuring Your Website Runs Smoothly 24/7" + 5 bullets | KEEP | |
| O7 | Service: Graphic Design | Modal "Designs That Speak for Your Brand" + 5 bullets | KEEP | Relates to the 2021–22 Calypso role only |
| O8 | Testimonial: Sreehari | "Worked with me as a freelance developer…" | KEEP | No role or company attached |
| O9 | Testimonial: Jibu Thomas | "A proactive and reliable team player…" | KEEP | No role or company attached |
| O10 | Testimonial: Sufair | "Handled our brand's visual identity…" | KEEP | About design and social work |
| O11 | Project: Ai application | ui · https://ui001-beta.vercel.app/ | KEEP | No description or stack |
| O12 | Project: Business service | business · https://ikonext.vercel.app/ | KEEP | No description or stack |
| O13 | Project: Logistics Company | business · https://transportlogistics.vercel.app/ | KEEP | No description or stack |
| O14 | Project: Coffee Shop | ui · https://coffeui.vercel.app/ | KEEP | No description or stack |
| O15 | Project: Ecommerce app | business · https://ecommerce002.vercel.app/ | KEEP | No description or stack |
| O16 | Project: Hotel Booking Web | business · https://hotelbooking001.vercel.app/ | KEEP | No description or stack |
| O17 | Project: Blog web | blog · https://incredible-nasturtium-a80245.netlify.app/ | KEEP | No description or stack |
| O18 | Project: Dashboard UI | ui · https://dashboard001-kappa.vercel.app/dashboard | KEEP | No description or stack |
| O19 | Skill: Wordpress | Intermediate | KEEP | Added to the Frontend group |
| O20 | Skill: Bootstrap | Advanced | KEEP | Added to the Frontend group |
| O21 | Skill proficiency levels | All 19 old levels (Basic → Professional) | KEEP | Kept as data in `skills.legacyLevels`. The resume has no levels, and "n8n: Basic" undersells the new positioning. |
| O22 | WhatsApp UAE | `+971-588-393-705` | KEEP | The resume lists only an India number, and the location is Kerala |
| O23 | GitHub | https://github.com/sanjayperingayil2000 | KEEP | Not on the resume, but relevant for an engineer |
| O24 | Instagram | https://www.instagram.com/sanjayperingayil?igsh=… | KEEP | |
| O25 | Facebook | https://www.facebook.com/share/1EM19GJhb8/ | KEEP | |
| O26 | Site UI copy | Section titles and subtitles ("My introduction", "My technical level", "My personal journey", "Most recent works", "Get in touch"…), button labels ("Say Hello", "Download CV", "View More", "Demo", "Send Message", "Write me"), form labels and placeholders, "Scroll Down", footer links | KEEP | Not career content, so it doesn't conflict with the resume |
| O27 | Messenger card | https://m.me/crypticalcoder | **Stays disabled** | It was commented out on the old site |
| O28 | X/Twitter icon | No URL | **Stays disabled** | It was commented out on the old site, with no link |

---

## CORRECTIONS — not from the resume, applied in `content-final.json` (approve or revert)

These are typo and bug fixes rather than content changes. The original wording is preserved in `content-snapshot.json`.

| ID | Where | Old | New |
|---|---|---|---|
| C1 | Contact → Email "Write me" | `mailto:examplemail@gmail.com.com` | `mailto:sanjayperingayil@gmail.com` |
| C2 | Footer copyright | `© SanjayPeringayil. All rigths reserved` | `© Sanjay P Purushothaman. All rights reserved` (name per U1) |
| C3 | Services subtitle | `What i offer` | `What I offer` |
| C4 | Testimonials title | `My  clients say` | `My clients say` |
| C5 | Nav label | `portfolio` | `Portfolio` |
| C6 | Project title | `Ai application` | `AI application` |
| C7 | Header logo link | `href="index.html"` | `href="#home"` |
| C8 | Diploma and High School dates (O1, O2) | `2017 - 2019`, `2015 - 2017` | `2017 – 2019`, `2015 – 2017` (en dash, to match resume style) |

**Intentional replacements (not losses):** the broken India WhatsApp link (U11), the old resume `sanjay-resume-2026.pdf` (rule 3), and the hot-linked GitHub favicon URL (same image, served locally). The old values are kept as `old*` fields in `content-final.json`.

---

## Questions for you

1. **Q1 — Site URL:** what's the production domain? It's the resume's "Portfolio" link and is needed for canonical/OG tags. It's `TODO` in `site.url`.
2. **Q2 — Name (U1/U14):** should the site use `Sanjay P Purushothaman` (resume), `Sanjay Peringayil Purushothaman`, or keep the `Sanjay Peringayil` brand?
3. **Q3 — Lost dashes:** may I restore the em dashes in the summary and in the first Zimble bullet, if the PDF shows them?
4. **Q4 — Hero description:** using the summary's first sentence (U3) is my suggestion. You may prefer to write a shorter hero line yourself; I won't write one for you.
5. **Q5 — FDE project category:** the old filters are `ui / business / blog`. I've put both new projects under a new `ai` filter. Is that OK?
6. **Q6 — Images and links for N6/N7:** if you have screenshots, demo links or repos for the two FDE projects, send them. Until then they're `TODO`.
7. **Q7 — Old project descriptions (O11–O18):** if you'd like a one-line description and stack for each, you'll need to give me the text. I won't make it up.
