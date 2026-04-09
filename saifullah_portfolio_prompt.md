# Saifullah Waseem — Portfolio Website Prompt
# Paste this entire prompt into Claude Code to scaffold the full website.

---

## PROMPT START

Build a complete, production-ready personal portfolio website for **Saifullah Waseem** using the following stack and design specifications. Scaffold the entire project from scratch and make it ready to deploy on Vercel.

---

## TECH STACK

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + CSS custom properties for theming
- **Animations**: Framer Motion
- **Icons**: Lucide React + React Icons
- **Font**: Geist Sans (Next.js built-in) or Inter via `next/font`
- **Deployment target**: Vercel
- **Language**: TypeScript

Install all dependencies. Generate `package.json`, `tsconfig.json`, `tailwind.config.ts`, `next.config.ts`, and all required config files.

---

## DESIGN SYSTEM

### Theme
Dark theme. Inspired by `asjad.codes` but darker and more minimal.

```
Background:       #0a0a0a  (near-black)
Surface:          #111111  (cards, nav)
Surface elevated: #1a1a1a  (hover states)
Border:           #222222
Primary accent:   #00ff88  (electric green — replaces asjad's warm tones)
Secondary accent: #00ccff  (cyan for tags/links)
Text primary:     #f0f0f0
Text secondary:   #888888
Text muted:       #444444
```

### Typography
- Headings: Bold, large, editorial — similar to asjad.codes hero ("Building digital experiences")
- Body: Clean 16px, line-height 1.7, color text-secondary
- Labels: 12px uppercase tracked — for section labels and tags
- Code/tech tags: Monospace, small, pill-shaped with border

### Layout
- Max-width: 1100px centered
- Full-bleed dark background
- Sections separated by thin `#222` borders or generous whitespace
- Mobile-first, fully responsive

### Animations
- Fade-up on scroll for each section (Framer Motion `useInView`)
- Subtle hover scale on project cards (1.02)
- Smooth underline draw on nav links
- Cursor blink on hero tagline (optional)
- Page load fade-in

---

## SITE STRUCTURE

### Navigation (Sticky top, full-width)
```
[Saifullah.]                    About  Work  Contact  GitHub  [Resume ↗]
```
- Logo left, links right
- On mobile: hamburger menu with slide-down drawer
- "Resume" opens `/resume.pdf` in a new tab (place a placeholder PDF at `/public/resume.pdf`)
- Active section highlighted in accent green on scroll
- Nav background: `#0a0a0a` with `backdrop-filter: blur(12px)` and bottom border `#222`

---

## SECTIONS

### 1. HERO

Full-viewport-height opening section.

Layout (desktop): Left text, right subtle visual element (abstract green grid or code snippet decorative block)

Content:
```
[small label]  Available for work · Islamabad, Pakistan

[Large heading]
Building software
that matters.

[Subtext]
CS student at NUST SEECS. Full-stack developer and systems thinker.
I build web apps, mobile tools, and AI-assisted software — from idea to deployment.

[CTA buttons]
[View My Work →]   [Get In Touch]
```

Mobile: Stacked, centered, no right visual

---

### 2. ABOUT

Two-column on desktop (text left, subtle stats right), single column on mobile.

**About Me text** (use exactly this, refined from CV):

```
I'm Saifullah — a Computer Science student at NUST SEECS, Islamabad,
building at the intersection of full-stack development, AI integration,
and systems design.

I started with C++ and quickly moved into full-stack territory — shipping
a production app (NUST Lost & Found) with React, TypeScript, Supabase,
and PostgreSQL while the semester was still running. Most recently I've
been working with Firebase and Kotlin Jetpack Compose on SAFAR, a
ride-sharing mobile app built for NUST students.

My focus right now: Java, ML/AI, C++, Firebase, and AI-assisted
development using tools like Claude Code. I like building things that
solve real problems for real people — not just demo projects.

Outside code, I've worked professionally as a Technical Specialist at
IBEX Global handling 50+ insurance claims daily, which taught me more
about clear communication and pressure than any class did.
```

**Stats block (right side or below on mobile):**
```
3+    Production Apps
2+    Years Building
5+    Languages
1     Live Deployment
```

**Tech stack tags** (pill-shaped, bordered):
```
Java · C++ · Python · TypeScript · JavaScript · SQL
React · Next.js · Supabase · Firebase · Tailwind
PostgreSQL · MongoDB · Git · Vercel · Claude Code
```

---

### 3. WORK (Projects)

Section label: `SELECTED WORK / 2024–2026`

**Filter tabs** (like asjad.codes): All | Web App | Mobile App | Tools

---

#### Project 1 — NUST Lost & Found
- **Type**: Web App
- **Year**: 2025
- **Stack tags**: React · TypeScript · Supabase · PostgreSQL · EmailJS · Vercel
- **Description**: Full-stack web application centralizing lost and found item reporting across NUST campus. Built with PostgreSQL Row Level Security for role-based access control, automated email notifications via EmailJS, and a reactive UI with optimistic updates.
- **Links**: [Live ↗](https://nustlostandfound.vercel.app) | [GitHub ↗](https://github.com/sa1ffffff)
- **Highlight**: "Live in production · Used by NUST students & staff"

#### Project 2 — SAFAR
- **Type**: Mobile App
- **Year**: 2025–Present
- **Stack tags**: Kotlin · Jetpack Compose · Firebase · Android
- **Description**: Ride-sharing mobile app designed for NUST students — dark-themed with emerald green design system, Firebase phone authentication, real-time location tracking, and an Inbox/Messages UI. Currently in active development.
- **Links**: [GitHub ↗](https://github.com/sa1ffffff)
- **Highlight**: "In development · Android"

#### Project 3 — Neon Racing 3D
- **Type**: C++ / Game
- **Year**: 2024
- **Stack tags**: C++ · OOP · Data Structures
- **Description**: Fully playable 3D racing game in C++ using object-oriented design, pointers, and structs. Architected reusable class hierarchies for vehicles, tracks, and collision logic. Demonstrates strong systems-level programming.
- **Links**: [GitHub ↗](https://github.com/sa1ffffff)

#### Project 4 — Prompt Helper (Chrome Extension)
- **Type**: Tools
- **Year**: 2024
- **Stack tags**: JavaScript · Chrome MV3 · Gemini API · OpenAI API
- **Description**: Chrome extension with a proxy backend supporting both Gemini and OpenAI APIs. Built with Manifest V3 architecture, reddish-black theme, and a clean popup UI for AI-assisted prompt generation.
- **Links**: [GitHub ↗](https://github.com/sa1ffffff)

#### Project 5 — HessianX
- **Type**: Tools
- **Year**: 2024
- **Stack tags**: Python · SymPy · Matplotlib · PySide6
- **Description**: Desktop application for analyzing critical points of multivariable functions f(x,y). Features symbolic computation with SymPy, matplotlib visualizations, and a dark navy/graphite PySide6 GUI.
- **Links**: [GitHub ↗](https://github.com/sa1ffffff)

**Card design:**
- Dark surface `#111` background
- Thin `#222` border
- Top-right: year label in muted color
- Bottom: stack tags as small monospace pills
- Hover: border color shifts to accent green, subtle lift
- Arrow icon appears on hover top-right

---

### 4. EXPERIENCE (Timeline style — like Brittany Chiang)

```
December 2024 – June 2025
Technical Specialist · IBEX Global (Allstate Campaign)
Islamabad, Pakistan

Triaged and resolved 50+ inbound appliance insurance claims daily.
Reduced average call handle time by streamlining troubleshooting workflows.
Collaborated with cross-functional teams on escalated cases.

[Skills] Customer Service · Technical Communication · Agile Problem Solving
```

```
September 2025 – Present
B.S. Computer Science · NUST SEECS
Islamabad, Pakistan

Focus areas: Digital Logic Design, Database Systems, OOP (Java/C++),
Multivariable Calculus, Linear Algebra, AI/ML.
```

---

### 5. CONTACT

Inspired by asjad.codes contact section — clean, editorial.

Heading: `Let's build something together.`

Subtext:
```
I'm open to internships, freelance projects, hackathon collaborations,
and full-time roles after graduation. If you have something in mind — let's talk.
```

**Contact links (large, clickable, with icons):**
```
✉  saifullahwasim1@gmail.com        → mailto:saifullahwasim1@gmail.com
💬  +92 312 363 9722 (WhatsApp)     → https://wa.me/923123639722
🐙  github.com/sa1ffffff             → https://github.com/sa1ffffff
💼  linkedin.com/in/saifullah-waseem → https://linkedin.com/in/saifullah-waseem
```

Each link: large text, hover accent green underline draw animation, icon left.

---

### 6. FOOTER

```
Saifullah Waseem · NUST SEECS · Built with Next.js & Tailwind

[GitHub]  [LinkedIn]  [Email]  [WhatsApp]

© 2026 Saifullah Waseem. All rights reserved.
```

---

## RESPONSIVE BEHAVIOR

| Breakpoint | Behavior |
|-----------|----------|
| Mobile (<768px) | Single column, hamburger nav, centered hero |
| Tablet (768–1024px) | Hybrid — 2 col where it fits |
| Desktop (>1024px) | Full layout as described |

---

## RESUME LINK

Place a file at `/public/Saifullah_Waseem_Resume.pdf`
Nav button and any "View Resume" CTA should open this with `target="_blank"`.

---

## ADDITIONAL DETAILS

- Add `<meta>` SEO tags: title, description, og:image
- Favicon: simple "S" monogram in accent green on dark background (generate as SVG in `/public/favicon.svg`)
- Smooth scroll behavior (`scroll-behavior: smooth` on `html`)
- `404.tsx` page matching the dark theme
- All external links open in `_blank` with `rel="noopener noreferrer"`

---

## FILE STRUCTURE TO GENERATE

```
saifullah-portfolio/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Work.tsx
│   ├── Experience.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── lib/
│   └── data.ts          ← all project/experience data
├── public/
│   ├── favicon.svg
│   └── Saifullah_Waseem_Resume.pdf  (placeholder)
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.ts
```

Generate ALL files completely. Do not use placeholder comments — write the full implementation for every component.

## PROMPT END
