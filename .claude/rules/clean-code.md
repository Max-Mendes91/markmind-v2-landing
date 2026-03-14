# Clean Code & DRY Rules — MarkMind v2 Landing

---

## Core Principles

| Rule | Limit |
|---|---|
| Function length | ≤ 50 lines |
| File length | ≤ 400 lines (800 absolute max) |
| Nesting depth | ≤ 3 levels |
| Component props | ≤ 6 props (use object pattern if more needed) |

---

## DRY — Don't Repeat Yourself

**If a pattern appears twice → extract it.**

### Current violations to fix

| Pattern | Repeated in | Fix |
|---|---|---|
| `Corners` component | `reveal-cards-section.tsx`, `social-proof-section.tsx` | `components/ui/corners.tsx` |
| Brand color strings | Every section file | `lib/tokens.ts` + `bg-brand-orange` / `text-brand-slate` Tailwind tokens ✅ |
| Section pill badge (label chip) | All 5 section headers | `components/ui/section-badge.tsx` |
| Glow div pattern | Bento, reveal-cards, social-proof | `components/ui/glow.tsx` or inline CSS class |

### How to extract

1. Identify the repeated pattern
2. Define the minimal props interface in `types/index.ts`
3. Create the file in `components/ui/`
4. Replace all usages — no leftover copies

---

## Immutability

```ts
// ✅
const next = { ...state, count: state.count + 1 }
const newArr = [...items, newItem]

// ❌
state.count = state.count + 1
items.push(newItem)
```

---

## No Magic Values

```tsx
// ✅
import { GOLD } from "@/lib/tokens"
const PX_PER_CARD = 200

// ❌
style={{ color: "#fcd34d" }}
const next = Math.min(count, 5)
```

Every number or string that represents a domain concept → named constant.

---

## No console.log

Remove all `console.log` before committing. If debugging is needed:

```ts
// Temporary debug — remove before commit
if (process.env.NODE_ENV === "development") {
  console.debug("[RevealCards] scrolled:", scrolled)
}
```

---

## TypeScript

- `strict: true` in `tsconfig.json` — no exceptions
- No `any`. Use `unknown` and narrow, or define a proper type
- All component props typed with an `interface` in `types/index.ts` or co-located if private
- Generic types for reusable utilities

```ts
// ✅
interface QuoteCardProps {
  badge:  string
  quote:  React.ReactNode
  handle: string
  role:   string
  accent?: Accent
}

// ❌
const QuoteCard = (props: any) => ...
```

---

## Immutable Data Arrays

Data that drives UI is defined once, typed, and never mutated:

```ts
// ✅
const MINI_ITEMS = [
  { handle: "@user", role: "Writer", accent: "gold" as const, snippet: <>text</> },
] satisfies MiniItem[]

const MINI_TRACK = [...MINI_ITEMS, ...MINI_ITEMS] // duplicate for marquee loop — ok
```

---

## CSS / Tailwind

- **No inline `style` for static values** — if a value never changes, use a Tailwind class or CSS variable
- **Inline `style` only for dynamic values** computed in JS (scroll progress, accent colors from props)
- **No `!important`** — fix specificity instead
- **Custom classes in `globals.css`** only if the pattern is used in 3+ places and Tailwind can't express it

```tsx
// ✅ dynamic color from prop
<div style={{ borderColor: accentColor[accent] }} />

// ✅ static — use Tailwind
<div className="border border-white/5" />

// ❌ static value in inline style
<div style={{ borderRadius: "16px" }} />
```

---

## Checklist Before Every Commit

- [ ] No `console.log` in committed code
- [ ] No `[#hex]` arbitrary color classes — use `bg-brand-orange`, `text-brand-slate`, etc.
- [ ] No `text-[Npx]` arbitrary sizes — use scale tokens (`text-micro` … `text-display`)
- [ ] No hex string literals in JS/JSX — import `ORANGE`, `SLATE` from `@/lib/tokens`
- [ ] No duplicated component logic (check if similar exists in `components/ui/`)
- [ ] Functions ≤ 50 lines
- [ ] Files ≤ 400 lines
- [ ] All props typed (no `any`)
- [ ] `"use client"` only where strictly needed
