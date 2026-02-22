# Architecture Rules — MarkMind v2 Landing

> Apply before any structural change. Use Plan Mode for anything touching more than 2 files.

---

## Folder Structure (canonical)

```
markmind-v2-landing/
├── app/
│   ├── layout.tsx        # Root layout only — fonts, metadata, global providers
│   ├── page.tsx          # Composition only — imports + JSX, zero logic
│   └── globals.css       # Tokens, keyframes, utility classes
├── components/
│   ├── ui/               # Shared primitives used in 2+ places
│   │   ├── corners.tsx
│   │   ├── stars.tsx
│   │   └── section-badge.tsx
│   └── sections/         # One file per page section (or keep at root if small)
│       └── ...
├── lib/
│   ├── tokens.ts         # Brand colors, accent map — single source of truth
│   └── utils.ts          # cn(), clamp(), and other pure helpers
└── types/
    └── index.ts          # All shared TS interfaces and types
```

---

## File Rules

| Rule | Detail |
|---|---|
| One component per file | No multi-export component files |
| One named export per section file | `export const HeroSection = ...` — nothing else |
| Files < 400 lines | Split when exceeded — extract sub-components or data |
| Data arrays at top of file | Before the component, typed, named in SCREAMING_SNAKE |
| Types in `types/index.ts` | Not inline in component files |

---

## Component Rules

```tsx
// ✅ Correct
export const MyComponent = ({ prop }: MyComponentProps) => {
  const handleClick = useCallback(() => { ... }, [dep])
  return <div onClick={handleClick}>...</div>
}

// ❌ Wrong — function declaration
export function MyComponent() { ... }

// ❌ Wrong — inline handler (not memoized)
return <div onClick={() => doSomething()}>...</div>
```

- **Arrow functions** for all components and hooks
- **`useCallback`** on every handler passed as prop or used in `useEffect`
- **`"use client"`** only when the file uses: state, refs, effects, event listeners, browser APIs
- **Server components by default** — don't add `"use client"` preemptively

---

## Design Token Rule

All color values live in `lib/tokens.ts`. Never write `#fcd34d` or `#bfdbfe` in a component.

```ts
// lib/tokens.ts
export const GOLD    = "#fcd34d"
export const BLUE    = "#bfdbfe"
export type Accent   = "gold" | "blue" | "neutral"
export const accentColor: Record<Accent, string> = {
  gold:    GOLD,
  blue:    BLUE,
  neutral: "rgba(255,255,255,0.35)",
}
```

---

## Shared UI Components

Extract to `components/ui/` when a component appears in **2 or more places**.

Current extractions needed:

| Component | Currently in | Action |
|---|---|---|
| `Corners` | reveal-cards + social-proof | → `components/ui/corners.tsx` |
| `Stars` | social-proof (×2) | → `components/ui/stars.tsx` |
| Section pill badge | every section header | → `components/ui/section-badge.tsx` |

---

## Data-Driven Sections

Section content is **typed `const` arrays** — never inline objects inside JSX map calls.

```tsx
// ✅ correct
const ITEMS: MarqueeItem[] = [
  { label: "Instant Capture", Icon: Bookmark },
  ...
]
export const MarqueeSection = () => (
  <div>{ITEMS.map(({ label, Icon }, i) => <Item key={i} {...{ label, Icon }} />)}</div>
)

// ❌ wrong
export const MarqueeSection = () => (
  <div>{[{ label: "Instant Capture", Icon: Bookmark }].map(...)}</div>
)
```

---

## Scroll & Animation Rules

- **Sticky scroll sections:** use CSS `position: sticky` + passive `scroll` listener — never `e.preventDefault()` on wheel events
- **`overflow-x-clip`** on parent wrappers — never `overflow-x-hidden` near sticky children
- **Marquee speed control:** use Web Animations API `playbackRate` — never change `animationDuration` mid-play (causes position jump)
- **CSS keyframes** for looping animations — JS only for dynamic control (hover speed, scroll progress)

---

## page.tsx Contract

`page.tsx` is **composition-only**. If you find yourself adding logic here, it belongs in a section component or a hook.

```tsx
// ✅ page.tsx
export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-x-clip">
      <Navbar />
      <HeroSection />
      <MarqueeSection />
      <BentoSection />
      <RevealCardsSection />
      <SocialProofSection />
    </main>
  )
}
```
