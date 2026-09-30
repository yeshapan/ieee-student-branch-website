
# Progress & Decision Log

> IEEE Student Branch Website — GSFC University  
> This log tracks all key decisions, changes, and milestones during development.

---

## Session 1 — September 16, 2026

### Context
- Tomorrow (September 17, 2026) is the inaugural ceremony of the IEEE Student Branch at GSFC University
- Goal: Build a complete, IEEE brand-compliant website for the launch

### Research Completed
- Fetched IEEE brand guidelines from `brand-experience.ieee.org` (403 on direct fetch → used search + memory of guidelines)
- Confirmed official IEEE Blue: `#00629B` (Pantone 3015)
- Confirmed approved web typefaces: Formata (licensed), **Open Sans** (chosen — free, IEEE-approved alternative)
- Confirmed `IEEE` must always be uppercase

### Technical Decisions

| Decision | Rationale |
|---|---|
| Next.js 16 App Router | Already set up in the project; latest recommended version |
| Tailwind CSS v4 `@theme` | Existing in `package.json`; enables design tokens |
| Open Sans via Google Fonts | IEEE-approved web alternative; free; widely supported |
| Single-page layout | Appropriate for inauguration landing page; fast and simple |
| Dark theme (`#0A1628` base) | Professional look; IEEE Blue pops on dark backgrounds; modern feel |
| No external UI libraries | Keeps bundle lean; custom components allow full brand control |

### Design Decisions

| Decision | Rationale |
|---|---|
| `#00629B` as primary | Exact IEEE Pantone 3015 equivalent |
| `#00B5E2` as accent | IEEE's official secondary blue for highlights |
| Glassmorphism cards | Premium, modern feel; used carefully so brand colors remain dominant |
| Floating orbs in hero | Adds depth without violating logo clear space rules |
| Grid texture on hero | Subtle tech motif appropriate for engineering community |
| Circular team avatars | Standard professional headshot format |
| Initials fallback in avatar | Graceful degradation when no headshot is available |

### Files Created

| File | Purpose |
|---|---|
| `app/globals.css` | Full design system: tokens, animations, utilities |
| `app/layout.tsx` | Metadata, Open Sans font, SEO |
| `app/components/Navbar.tsx` | Sticky responsive navigation |
| `app/components/Hero.tsx` | Full-screen inauguration hero |
| `app/components/AboutSection.tsx` | Reusable two-column section |
| `app/components/TeamCard.tsx` | Team member card with headshot slot |
| `app/components/EventCard.tsx` | Event listing with badges |
| `app/components/Footer.tsx` | Footer with contact, social links, trademark notice |
| `app/page.tsx` | Main page assembling all sections |
| `documentation/README.md` | Project setup and content guide |
| `documentation/ieee-brand-guidelines.md` | Brand guidelines reference |
| `documentation/progress-log.md` | This file |

### Placeholders Left for Team to Fill

- [ ] IEEE logo (`/public/ieee-logo.png`)
- [ ] IEEE SB sub-brand logo (`/public/ieee-sb-logo.png`)
- [ ] GSFC University logo (`/public/gsfc-logo.png`)
- [ ] Campus photo (`/public/gsfc-campus.jpg`)
- [ ] Team headshots (`/public/team/*.jpg`)
- [ ] Branch inauguration photo (`/public/branch-photo.jpg`)
- [ ] Real team member names, bios, emails, LinkedIn URLs
- [ ] Official Student Branch ID (replace `SBXXXXX`)
- [ ] Real contact email (replace `ieee.sb@gsfcuniversity.ac.in`)
- [ ] Social media URLs (LinkedIn, Instagram, X/Twitter)
- [ ] Faculty Advisor name and department

---

## Upcoming Tasks

- [ ] Add Faculty Advisor approval and signature for launch
- [ ] Submit SB website URL to IEEE Gujarat Section
- [ ] Add IEEE SB application/membership form link
- [ ] Integrate Google Analytics or Plausible for traffic tracking
- [ ] Setup custom domain (e.g., `ieee.gsfcuniversity.ac.in`)
- [ ] Apply for IEEE Sites hosting if migrating to WordPress

---

*Add new entries below as the project evolves.*
