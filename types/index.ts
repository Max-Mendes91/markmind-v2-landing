import type { LucideIcon } from "lucide-react"
import type { Accent } from "@/lib/tokens"

// ── Navigation ────────────────────────────────────────────────────────────
export interface NavLink {
  label: string
  href:  string
}

export interface FooterLink {
  label: string
  href:  string
}

// ── Marquee ───────────────────────────────────────────────────────────────
export interface MarqueeItem {
  label: string
  Icon:  LucideIcon
}

// ── Philosophy ────────────────────────────────────────────────────────────
export interface PhilosophyPrinciple {
  keyword:   string
  statement: string
}

// ── Testimonials ──────────────────────────────────────────────────────────
export interface MiniTestimonial {
  handle:  string
  role:    string
  snippet: React.ReactNode
  accent:  Accent
}

// ── Shared component props ────────────────────────────────────────────────
export interface CornersProps {
  color: string
}

export interface SectionBadgeProps {
  label: string
}

// ── FAQ ──────────────────────────────────────────────────────────────────
export interface FaqItem {
  question: string
  answer:   string
}

// ── Blog ─────────────────────────────────────────────────────────────────
export interface BlogPostMeta {
  title:           string
  slug:            string
  metaDescription: string
  keywords:        string[]
  ogTitle:         string
  h1:              string
  author:          string
  datePublished:   string
  dateModified?:   string
  tags:            string[]
  image?:          string
  excerpt:         string
  readingTime:     string
}
