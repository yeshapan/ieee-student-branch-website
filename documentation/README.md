# IEEE Student Branch Website — Documentation

> Last updated: September 2026  
> Maintained by: IEEE Student Branch, GSFC University

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Folder Structure](#folder-structure)
4. [Quick Start (Development)](#quick-start-development)
5. [Adding Real Content](#adding-real-content)
6. [Deployment](#deployment)
7. [IEEE Brand Guidelines Applied](./ieee-brand-guidelines.md)
8. [Progress & Decision Log](./progress-log.md)

---

## Project Overview

This is the official website for the **IEEE Student Branch at GSFC University**, Vadodara, Gujarat, India.  
It was built for the inaugural ceremony on **September 17, 2026**, and will serve as the branch's ongoing web presence.

### Goals
- Present the IEEE Student Branch to students, faculty, and the public
- Showcase the team, upcoming events, and resources
- Comply with official IEEE brand guidelines

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| Next.js | 16 (App Router) | React framework for SSR & routing |
| React | 19 | UI component library |
| TypeScript | 5 | Type safety |
| Tailwind CSS | 4 | Utility-first CSS (design tokens via `@theme`) |
| Open Sans | Google Fonts | IEEE-approved web typeface |

---

## Folder Structure

```
ieestudentbranch/
├── app/
│   ├── components/
│   │   ├── Navbar.tsx          # Sticky navigation bar
│   │   ├── Hero.tsx            # Full-screen hero section
│   │   ├── AboutSection.tsx    # Reusable two-column section
│   │   ├── TeamCard.tsx        # Individual team member card
│   │   ├── EventCard.tsx       # Event listing card
│   │   └── Footer.tsx          # Footer with contact + links
│   ├── globals.css             # Design system (colors, typography, animations)
│   ├── layout.tsx              # Root layout + metadata + fonts
│   └── page.tsx                # Main page — assembles all sections
├── public/
│   ├── ieee-logo.png           ← DROP HERE (IEEE Master Brand logo)
│   ├── ieee-sb-logo.png        ← DROP HERE (Student Branch sub-brand)
│   ├── gsfc-logo.png           ← DROP HERE (GSFC University logo)
│   ├── gsfc-campus.jpg         ← DROP HERE (campus photo)
│   ├── ieee-world.jpg          ← DROP HERE (IEEE global network image)
│   ├── branch-photo.jpg        ← DROP HERE (team/inauguration photo)
│   └── team/
│       ├── faculty-advisor.jpg ← DROP HERE
│       ├── chairperson.jpg     ← DROP HERE
│       ├── vice-chair.jpg      ← DROP HERE
│       ├── secretary.jpg       ← DROP HERE
│       ├── treasurer.jpg       ← DROP HERE
│       └── tech-lead.jpg       ← DROP HERE
└── documentation/
    ├── README.md               ← this file
    ├── ieee-brand-guidelines.md
    └── progress-log.md
```

---

## Quick Start (Development)

```bash
# Navigate to project
cd "IEEE Student Branch Website/ieestudentbranch"

# Install dependencies (already done)
npm install

# Start dev server
npm run dev

# Visit
open http://localhost:3000
```

---

## Adding Real Content

### 1. Replace Placeholder Text

Open `app/page.tsx` and update the `TEAM_MEMBERS` array at the top:

```tsx
const TEAM_MEMBERS = [
  {
    name: "Dr. Actual Name",       // ← update
    role: "Faculty Advisor",
    bio: "Actual bio text...",     // ← update
    photoSrc: "/team/faculty-advisor.jpg",   // ← uncomment
    email: "actual@gsfcuniversity.ac.in",    // ← update
    linkedin: "https://linkedin.com/in/...", // ← update
  },
  // ... more members
];
```

Also update the **Student Branch ID** — search for `SBXXXXX` in the codebase.

### 2. Add Logos

Place the following files in `/public/` (the folder is at `ieestudentbranch/public/`):

| File | Source |
|---|---|
| `ieee-logo.png` | [IEEE Brand Experience site](https://brand-experience.ieee.org) → download logo package |
| `ieee-sb-logo.png` | Student Branch sub-brand template (from IEEE) |
| `gsfc-logo.png` | GSFC University communications office |

After adding, replace each `logo-placeholder` `<div>` in the components with:

```tsx
import Image from "next/image";

<Image
  src="/ieee-logo.png"
  alt="IEEE"
  width={140}
  height={40}
  priority
/>
```

### 3. Add Team Headshots

1. Place photos in `public/team/` (e.g., `public/team/chairperson.jpg`)
2. Uncomment the `photoSrc` field in the `TEAM_MEMBERS` array in `page.tsx`

### 4. Update Contact Info

Search for `ieee.sb@gsfcuniversity.ac.in` in `Footer.tsx` and replace with the real email.  
Update social media `href` values for LinkedIn, Instagram, and X in `Footer.tsx`.

---

## Deployment

### Option A — Vercel (Recommended)

```bash
npx vercel --prod
```

Or connect the GitHub repo to [vercel.com](https://vercel.com) for auto-deployments.

### Option B — Static Export

```bash
# In next.config.ts, add: output: 'export'
npm run build
# Upload the `out/` folder to any static host
```

### Option C — IEEE Sites (WordPress)

If the branch migrates to the official IEEE Sites WordPress platform, the content and design will need to be adapted to the WordPress theme. Keep the brand colors and typography consistent.

---

## Contacts

| Role | Person | Email |
|---|---|---|
| Faculty Advisor | [Name] | [email] |
| Branch Chairperson | [Name] | [email] |
| Webmaster | [Name] | [email] |
| IEEE Branding Queries | IEEE | branding@ieee.org |
