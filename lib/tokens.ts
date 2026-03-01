// ── Brand color tokens — single source of truth ───────────────────────────────
// Raw hex values — used in inline styles and template literals (e.g. `${ORANGE}18`)
export const ORANGE        = "#FF9B51"
export const SLATE         = "#BFC9D1"
export const NAVY          = "#25343F"
export const OFFWHITE      = "#EAEFEF"
export const BLACK         = "#000000"
// Near-black tints used for atmospheric card gradients
export const ORANGE_DARK   = "#0f0800"
export const SLATE_DARK    = "#00091a"

// CSS variable references — use in JS when referencing the Tailwind theme token
export const CSS_ORANGE   = "var(--color-brand-orange)"
export const CSS_SLATE    = "var(--color-brand-slate)"
export const CSS_NAVY     = "var(--color-brand-navy)"
export const CSS_OFFWHITE = "var(--color-brand-offwhite)"

export type Accent = "orange" | "slate" | "neutral"

export const accentColor: Record<Accent, string> = {
  orange:  ORANGE,
  slate:   SLATE,
  neutral: "rgba(255,255,255,0.35)",
}

// ── Site-wide constants ─────────────────────────────────────────────────────────
export const SITE_URL       = "https://markmind.xyz"
export const CONTACT_EMAIL  = "themarkmind@gmail.com"
export const GITHUB_URL     = "https://github.com/migsilva89/MarkMind"
