import type { LucideIcon } from "lucide-react"

// ── Navigation ────────────────────────────────────────────────────────────────
export interface NavLink {
  label: string
  href:  string
}

export interface FooterLink {
  label: string
  href:  string
}

// ── Marquee ───────────────────────────────────────────────────────────────────
export interface MarqueeItem {
  label: string
  Icon:  LucideIcon
}

// ── Philosophy ────────────────────────────────────────────────────────────────
export interface PhilosophyPrinciple {
  keyword:   string
  statement: string
}

// ── Testimonials ──────────────────────────────────────────────────────────────
export type TestimonialAccent = "orange" | "slate" | "neutral"

export interface MiniTestimonial {
  handle:  string
  role:    string
  snippet: React.ReactNode
  accent:  TestimonialAccent
}
