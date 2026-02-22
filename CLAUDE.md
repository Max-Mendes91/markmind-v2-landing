# MarkMind v2 Landing — CLAUDE.md

> Single-page marketing site for the MarkMind browser extension.

## ⚠️ MANDATORY — Read Before Any Code Change

Before writing or modifying a single line of code, Claude MUST read these files in order:

1. **This file** (CLAUDE.md) — project rules and debt table
2. **`.claude/rules/architecture.md`** — folder structure, component conventions, scroll/animation patterns
3. **`.claude/rules/clean-code.md`** — DRY violations to fix, TypeScript rules, commit checklist
4. **`.claude/DEVICE_BREAKPOINTS.md`** — responsive targets (mandatory for any layout change)
5. **`.claude/skills/seo.md`** — only when touching `app/layout.tsx` or heading structure

For any change touching **more than 2 files** → use **Plan Mode** first. No exceptions.

---

## Tech Stack

| Layer | Tool | Version |
|---|---|---|
| Framework | Next.js (App Router) | 16.1.6 |
| UI Library | React | 19 |
| Language | TypeScript | strict |
| Styling | Tailwind CSS | v4 |
| Icons | Lucide React | latest |
| Package Manager | npm | — |
| Dev Server | Turbopack | — |

---

## Critical Rules — Non-Negotiable

1. **One component per file.** No exceptions.
2. **No hardcoded color values** anywhere in TSX. Use design tokens (CSS custom properties or the constants in `lib/tokens.ts`).
3. **Arrow functions only.** Never `function Foo() {}` for components or hooks.
4. **`useCallback` on every event handler** passed as prop or used in `useEffect`.
5. **Functions under 50 lines.** If longer, split into helpers or sub-components.
6. **Files under 400 lines.** Sections that exceed this must be split.
7. **No `console.log` in committed code.** Use the debug utility if needed.
8. **No mutation.** Always spread/create new objects and arrays.
9. **`"use client"` only when strictly required** (event handlers, refs, browser APIs). Server components by default.
10. **`overflow-x-hidden` is banned** on any ancestor of a `position: sticky` element. Use `overflow-x-clip` instead.

---

## Architecture & File Structure

```
markmind-v2-landing/
├── app/
│   ├── layout.tsx          # Root layout — fonts, metadata, global providers
│   ├── page.tsx            # Page composition only — imports sections, no logic
│   └── globals.css         # Design tokens, keyframes, utility classes
├── components/
│   ├── ui/                 # Shared primitives (Corners, Stars, Badge, etc.)
│   ├── sections/           # One file per page section
│   │   ├── hero-section.tsx
│   │   ├── marquee-section.tsx
│   │   ├── bento-section.tsx
│   │   ├── reveal-cards-section.tsx
│   │   └── social-proof-section.tsx
│   └── navbar.tsx
├── lib/
│   ├── tokens.ts           # Design token constants (colors, radii, etc.)
│   └── utils.ts            # Shared helpers (cn, clamp, etc.)
├── types/
│   └── index.ts            # All shared TypeScript interfaces & types
└── public/
    └── og-image.png        # Open Graph image (1200×630)
```

### Rules
- `components/ui/` holds **any component used in more than one section** — extract immediately when reuse happens
- `components/sections/` files export exactly **one named export** (the section component)
- `lib/tokens.ts` is the **single source of truth** for brand colors and spacing scales
- `page.tsx` contains **only imports and JSX composition** — no logic, no state, no effects
- Data arrays that drive section content (testimonials, marquee items, card data) live as **`const` exports at the top of the section file** or in a co-located `data.ts` file if large

---

## Design Tokens

These must be defined in `globals.css` as CSS custom properties AND exported from `lib/tokens.ts` for use in JS (e.g. SVG fills, inline styles).

```css
/* globals.css — brand tokens */
:root {
  --color-gold:        #fcd34d;
  --color-gold-dim:    rgba(252, 211, 77, 0.55);
  --color-blue:        #bfdbfe;
  --color-blue-dim:    rgba(191, 219, 254, 0.55);
  --color-surface:     rgba(20, 20, 20, 0.8);
  --color-border:      rgba(255, 255, 255, 0.05);
  --color-text-muted:  rgba(255, 255, 255, 0.45);
}
```

```ts
// lib/tokens.ts
export const GOLD  = "#fcd34d"
export const BLUE  = "#bfdbfe"

export type Accent = "gold" | "blue" | "neutral"

export const accentColor: Record<Accent, string> = {
  gold:    GOLD,
  blue:    BLUE,
  neutral: "rgba(255,255,255,0.35)",
}
```

**Never write `#fcd34d` or `#bfdbfe` directly in a component.** Import from `lib/tokens.ts`.

---

## Responsive Breakpoints

Tailwind-first, mobile-first. Design for these targets in order:

| Breakpoint | Min-Width | Target |
|---|---|---|
| default | 0px | Mobile ≤ 430px (iPhone 14 Pro Max) |
| `sm:` | 640px | Large phones, phablets |
| `md:` | 768px | iPad Mini / tablets portrait |
| `lg:` | 1024px | Laptops, landscape tablets |
| `xl:` | 1280px | Desktops |
| `2xl:` | 1536px | Large desktops |

### Height-aware breakpoints (add to `globals.css`)

```css
@custom-variant short  (@media (max-height: 700px));
@custom-variant tall   (@media (min-height: 800px));
```

Use `short:` on the reveal section and any `h-screen` container — Nest Hub, iPhone SE landscape, and similar devices will break otherwise.

### Device priorities
- **Mobile (375–430px):** Full content visible, single column, condensed spacing
- **Tablet (768–1023px):** 2-column grids, intermediate padding
- **Desktop (1024px+):** Full layout, max spacing, all animations enabled
- **Short height (< 700px):** Reduce vertical margins, ensure h-screen sections don't overflow

---

## Component Conventions

### Shared primitives to keep in `components/ui/`

| Component | Status | Notes |
|---|---|---|
| `Corners` | ⚠️ duplicated | Defined in `reveal-cards-section.tsx` AND `social-proof-section.tsx`. Extract to `ui/corners.tsx` |
| `Stars` | ⚠️ inline only | Used in two places within social-proof. Extract to `ui/stars.tsx` |
| `SectionBadge` | ✅ create | The pill badge used in every section header — make it one component |
| `AtmoCard` | ✅ ok | Social proof only — stay in section file |

### Component signature pattern

```tsx
// components/ui/corners.tsx
import type { Accent } from "@/lib/tokens"
import { accentColor } from "@/lib/tokens"

interface CornersProps {
  accent: Accent
  static?: boolean  // true = no hover animation
}

export const Corners = ({ accent, static: isStatic = false }: CornersProps) => {
  const color = accentColor[accent]
  const base  = isStatic
    ? "absolute w-3 h-3 opacity-25"
    : "absolute w-3 h-3 opacity-25 group-hover:opacity-60 transition-opacity duration-500"
  // ...
}
```

### Data-driven sections

Section content (testimonials, marquee labels, bento cards) must be defined as typed `const` arrays above the component. Never inline large data objects inside JSX.

```ts
// ✅ correct
const ITEMS: MarqueeItem[] = [...]
export const MarqueeSection = () => <div>{ITEMS.map(...)}</div>

// ❌ wrong
export const MarqueeSection = () => (
  <div>
    {[{ label: "Instant Capture" }, { label: "AI Organization" }, ...].map(...)}
  </div>
)
```

---

## SEO Setup

Currently missing. Must be added to `app/layout.tsx`.

### Title formula
```
MarkMind — Capture Any Idea While You Browse | Browser Extension
```
- Primary keyword first
- Under 60 characters
- One H1 per page (currently in HeroSection)

### Meta tags to add in `app/layout.tsx`

```tsx
export const metadata: Metadata = {
  title: "MarkMind — Capture Ideas While You Browse",
  description:
    "MarkMind is a browser extension that captures highlights, annotations, and ideas from any webpage — instantly, with zero friction.",
  keywords: ["browser extension", "reading tool", "highlight", "annotate", "knowledge capture"],
  openGraph: {
    title:       "MarkMind — Capture Ideas While You Browse",
    description: "Zero-friction idea capture for every webpage you read.",
    url:         "https://markmind.app",
    siteName:    "MarkMind",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "MarkMind" }],
    type: "website",
  },
  twitter: {
    card:        "summary_large_image",
    title:       "MarkMind — Capture Ideas While You Browse",
    description: "Zero-friction idea capture for every webpage you read.",
    images:      ["/og-image.png"],
  },
}
```

### Heading hierarchy rule
- **H1:** One per page — the main hero headline
- **H2:** Section headings (Social Proof, How it Works, etc.)
- **H3:** Card titles, feature names
- Never skip levels (H1 → H3 is forbidden)

---

## Scroll-driven Animations — Pattern

The reveal cards section uses **CSS `position: sticky`** + a passive `scroll` listener. This is the correct approach.

**Rule: Never use `e.preventDefault()` on wheel events** for scroll-driven UI. Always use sticky + scroll position math.

**Rule: Never put `overflow: hidden` or `overflow-x: hidden` on an ancestor of a sticky element.** Use `overflow-x-clip` instead — it prevents horizontal overflow without creating a new scroll container.

---

## Known Technical Debt (address in refactor order)

| # | Issue | File | Fix |
|---|---|---|---|
| 1 | `Corners` duplicated | reveal-cards + social-proof | Extract to `ui/corners.tsx` |
| 2 | `#fcd34d` / `#bfdbfe` hardcoded ~40+ times | all sections | Move to `lib/tokens.ts` |
| 3 | No SEO metadata | `app/layout.tsx` | Add `metadata` export |
| 4 | No TypeScript types file | — | Create `types/index.ts` |
| 5 | No `lib/` folder | — | Create `lib/tokens.ts`, `lib/utils.ts` |
| 6 | `social-proof-section.tsx` is 320+ lines | — | Split data + sub-components |
| 7 | `reveal-cards-section.tsx` is 300+ lines | — | Split `CardContent`, `BrowserMock` into `ui/` |
| 8 | No `short:` height handling | reveal section | h-screen fails on Nest Hub / landscape phones |
| 9 | No OG image | `public/` | Create 1200×630 og-image.png |
| 10 | `bento-card` CSS class used inconsistently | globals.css | Audit usage — social proof mini cards removed it manually |

---

## Git Workflow

Conventional commits only:

```
feat: add pricing section
fix: correct sticky scroll engagement on fast trackpad
refactor: extract Corners to shared ui component
perf: lazy-load reveal cards section
chore: add SEO metadata to layout
```

---

## Before Starting Any Work

1. Read this file
2. Check the debt table above — does your task intersect with known issues?
3. For structural changes → use Plan Mode
4. For any new shared UI → check `components/ui/` first before creating inline
