# IEEE Brand Guidelines — Applied Reference

> This document summarizes the official IEEE brand guidelines as they apply to the IEEE Student Branch website at GSFC University.  
> Source: [brand-experience.ieee.org](https://brand-experience.ieee.org)  
> Last reviewed: September 2026

---

## 1. The IEEE Name

**Rule:** The letters "IEEE" must **always** appear in **UPPERCASE**.

**Applied in this website:**
- All occurrences of "IEEE" in headings, body text, buttons, and metadata are in uppercase
- ESLint/review pass confirmed — no lowercase "ieee" appears in rendered content

---

## 2. IEEE Color Palette

### Primary Brand Color

| Name | Hex | RGB | Pantone | Usage |
|---|---|---|---|---|
| IEEE Blue | `#00629B` | `0, 98, 155` | 3015 C | Primary buttons, section headings, logo accents |
| IEEE Blue Light | `#0082CC` | — | — | Hover states, gradients |
| IEEE Blue Dark | `#004F7D` | — | — | Deep shadows |

### Secondary Accent

| Name | Hex | RGB | Usage |
|---|---|---|---|
| IEEE Accent Blue | `#00B5E2` | `0, 181, 226` | Section tags, highlights, gradient terminus |

**Applied in this website:**
- `--color-ieee-blue: #00629B` registered as Tailwind CSS v4 theme token
- Primary buttons use a gradient from `#00629B` → `#0082CC`
- Section tag chips and link hover states use `#00B5E2`
- Background dark scale (`#060E1C`, `#0A1628`, `#0F1F3B`) ensures IEEE Blue pops with proper contrast

### Colors NOT used (prohibited)
- ❌ Custom "university blue" overriding the IEEE Blue on the logo
- ❌ Unapproved neon/pastel variants of blue
- ❌ Drop shadows or glows applied to the IEEE logo itself

---

## 3. Logo Usage Rules

### Dos ✅
- Display IEEE Master Brand logo with required **clear space** (at least ½ the logo height around it)
- Use blue, black, or white versions of the logo depending on background contrast
- Give the IEEE logo **equal or greater prominence** than other logos in the header

### Don'ts ❌
- Do not stretch, rotate, or distort the IEEE logo
- Do not incorporate the IEEE kite/logo into a custom design or sub-brand logo
- Do not apply drop shadows, glows, outlines, or reflections to the logo
- Do not place the logo on cluttered or busy backgrounds

**Applied in this website:**
- Logo is displayed in the navbar with surrounding whitespace margin
- Placeholder `<div>` is styled with a dashed border labeled "IEEE Logo" — this is intentionally minimal so the real logo isn't accidentally distorted
- Instructions in `documentation/README.md` guide the team to use `<Image>` with correct `alt` text and `priority` loading
- Logo also appears in footer, isolated with clear space on all sides

---

## 4. Typography

### Official IEEE Typefaces

| Typeface | Classification | Status |
|---|---|---|
| Formata | Primary sans-serif | Licensed (not free) |
| Caslon | Primary serif | Licensed (not free) |
| **Open Sans** | **Web/digital alternative** | **✅ Used in this project** |
| Calibri | Web alternative | Available in Office |
| Verdana | Web alternative | Available |

**Applied in this website:**
- `Open Sans` loaded via Google Fonts CDN (preconnect optimized)
- Imported in `layout.tsx` via `<link>` in `<head>` with `display=swap`
- Registered as `--font-sans` in the Tailwind `@theme` block in `globals.css`
- Weight range: 300 (light body) → 800 (hero headings)
- Italic variant included for pull quotes / emphasis

### Typographic Hierarchy Applied

| Level | Size | Weight | Usage |
|---|---|---|---|
| H1 | 5xl–7xl (responsive) | 800 | Hero headline |
| H2 | 3xl–4xl | 800 | Section headings |
| H3 | lg–xl | 700 | Card headings |
| Body | base (16px) | 400–500 | Paragraph text |
| Small | sm (14px) | 400 | Captions, metadata |
| Tags | xs (12px) | 600 | Section labels |

---

## 5. Website-Specific Rules

| Rule | Implementation |
|---|---|
| IEEE Master Brand present in header | ✅ Navbar logo slot + sub-brand text |
| "IEEE" uppercase everywhere | ✅ Verified in all text content |
| IEEE logo given prominence | ✅ First element in navbar, high contrast |
| Trademark acknowledgment | ✅ Footer: "The IEEE name and logo are registered trademarks of IEEE." |
| Clean, professional design | ✅ Dark design system, no cluttered backgrounds behind logo |
| Accessible color contrast | ✅ IEEE Blue on dark backgrounds meets WCAG AA contrast |

---

## 6. Sub-Brand Guidelines (Student Branch)

### Official Sub-Brand Format

```
[IEEE Logo]  |  Student Branch
                GSFC University
```

- The IEEE logo appears at left
- "Student Branch" in a smaller, secondary weight
- Institution name beneath in a readable sans-serif

**Applied in this website:**
- Navbar brand area: IEEE Logo placeholder | "Student Branch" (secondary) / "GSFC University" (primary)
- Hero: Full section devoted to "IEEE Student Branch" wordmark

### Student Branch ID

- Official SB ID must be documented and displayed
- Currently shown as `SBXXXXX` — **update before launch**
- Location: Footer contact section + `page.tsx` `TEAM_MEMBERS` data

---

## 7. Accessibility Standards

Followed during development:

- `aria-label` on all interactive elements (nav, buttons, links)
- `aria-hidden="true"` on decorative SVG icons
- Semantic HTML5 elements (`<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- `:focus-visible` styles with IEEE Accent Blue outline
- `role="navigation"`, `role="contentinfo"` on landmark regions
- Alt text strategy documented for all image slots

---

## 8. Resources & References

| Resource | URL |
|---|---|
| IEEE Brand Experience Site | https://brand-experience.ieee.org |
| IEEE Student Branch Guidelines | https://brand-experience.ieee.org/guidelines/sub-brand-resources/students/ |
| IEEE Logo Downloads | https://brand-experience.ieee.org/logos/ |
| Branding Questions | branding@ieee.org |
| IEEE Membership | https://www.ieee.org/membership/join/ |
| IEEE Xplore | https://ieeexplore.ieee.org |
