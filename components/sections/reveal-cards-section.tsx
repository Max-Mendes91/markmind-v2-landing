"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { ORANGE, accentColor } from "@/lib/tokens"
import type { Accent } from "@/lib/tokens"
import { Corners } from "@/components/ui/corners"
import { SectionBadge } from "@/components/ui/section-badge"
import { RevealCardContent } from "@/components/ui/reveal-card-content"
import { RevealBrowserMock } from "@/components/ui/reveal-browser-mock"
import { RevealSvgLines } from "@/components/ui/reveal-svg-lines"
import { RevealProgressDots } from "@/components/ui/reveal-progress-dots"

const TOTAL_CARDS = 5
const PX_PER_CARD = 200  // px of scroll needed to reveal each card

// ── Card positions — radiating from center browser mock ───────────────────────
interface RevealCard {
  id:     string
  pos:    string
  accent: Exclude<Accent, "neutral">
  w:      string
}

const REVEAL_CARDS: RevealCard[] = [
  { id: "reading",  pos: "top-[12%] right-[4%]",   accent: "slate",  w: "w-[280px]" },
  { id: "analyze",  pos: "top-[16%] right-[22%]",   accent: "orange", w: "w-[260px]" },
  { id: "folders",  pos: "top-[62%] left-[26%]",    accent: "slate",  w: "w-[270px]" },
  { id: "suggest",  pos: "top-[40%] right-[4%]",    accent: "orange", w: "w-[300px]" },
  { id: "approve",  pos: "top-[68%] right-[16%]",   accent: "orange", w: "w-[280px]" },
]

// ── Section ───────────────────────────────────────────────────────────────
export const RevealCardsSection = () => {
  const scrollRef  = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const browserRef = useRef<HTMLDivElement>(null)
  const cardRefs   = useRef<(HTMLDivElement | null)[]>([])

  const [revealedCount, setRevealedCount] = useState(0)
  const [lineData, setLineData] = useState<Array<{ x1: number; y1: number; x2: number; y2: number }>>([])

  // ── Scroll-driven reveal — no wheel hijacking, works at any scroll speed ──
  useEffect(() => {
    const onScroll = () => {
      const outer = scrollRef.current
      if (!outer) return
      const scrolled = Math.max(0, -outer.getBoundingClientRect().top)
      const next = Math.min(TOTAL_CARDS, Math.floor(scrolled / PX_PER_CARD))
      setRevealedCount(next)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // ── Compute SVG line coordinates ──────────────────────────────────────────
  const computeLines = useCallback(() => {
    const section = sectionRef.current
    const browser = browserRef.current
    if (!section || !browser) return

    const sRect = section.getBoundingClientRect()
    const bRect = browser.getBoundingClientRect()
    const bx = bRect.left - sRect.left + bRect.width  / 2
    const by = bRect.top  - sRect.top  + bRect.height / 2

    setLineData(
      cardRefs.current.map(el => {
        if (!el) return { x1: bx, y1: by, x2: bx, y2: by }
        const r = el.getBoundingClientRect()
        return {
          x1: bx,
          y1: by,
          x2: r.left - sRect.left + r.width  / 2,
          y2: r.top  - sRect.top  + r.height / 2,
        }
      })
    )
  }, [])

  useEffect(() => {
    const t = setTimeout(computeLines, 150)
    window.addEventListener("resize", computeLines)
    return () => { clearTimeout(t); window.removeEventListener("resize", computeLines) }
  }, [computeLines])

  const progress = revealedCount / TOTAL_CARDS
  const outerHeight = `calc(100vh + ${TOTAL_CARDS * PX_PER_CARD}px)`

  return (
    <div id="how-it-works" ref={scrollRef} style={{ height: outerHeight }}>
      <div ref={sectionRef} className="sticky top-0 h-screen short:h-[600px] bg-background overflow-hidden">

        {/* Background glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 right-0 w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-brand-slate/4 blur-[120px] rounded-full" />
          <div className="absolute bottom-1/3 left-0 w-[150px] h-[150px] md:w-[300px] md:h-[300px] bg-brand-orange/4 blur-[100px] rounded-full" />
          <div className="absolute inset-0 geometric-bg opacity-20" />
        </div>

        <RevealSvgLines lineData={lineData} revealedCount={revealedCount} cards={REVEAL_CARDS} />

        {/* Browser mock — center hub (desktop only) */}
        <div ref={browserRef} className="absolute left-1/2 top-[44%] -translate-x-1/2 -translate-y-1/2 hidden md:block" style={{ zIndex: 8 }}>
          <RevealBrowserMock />
        </div>

        {/* Left text (desktop) */}
        <div className="absolute top-1/2 -translate-y-1/2 left-16 lg:left-24 z-40 max-w-[360px] hidden md:block">
          <SectionBadge label="How it works" />
          <h2 className="text-hero-sm lg:text-hero-md leading-[1.2] text-overlay-85 font-light tracking-tight">
            A smart bookmark manager that works with{" "}
            <span className="text-brand-orange italic font-semibold">how you already browse.</span>
          </h2>
        </div>

        <RevealProgressDots revealedCount={revealedCount} totalCards={TOTAL_CARDS} />

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-overlay-5 z-50">
          <div className="h-full bg-brand-orange transition-all duration-300 ease-out" style={{ width: `${progress * 100}%` }} />
        </div>

        {/* Desktop cards — absolute positioned */}
        <div className="relative w-full h-full hidden md:block">
          {REVEAL_CARDS.map((card, i) => (
            <div
              key={card.id}
              ref={el => { cardRefs.current[i] = el }}
              className={`absolute ${card.pos} ${card.w}`}
              style={{
                zIndex:          (i + 1) * 10,
                opacity:         i < revealedCount ? 1 : 0,
                transform:       i < revealedCount ? "translateY(0) scale(1)" : "translateY(18px) scale(0.93)",
                transition:      "opacity 0.6s cubic-bezier(0.22,1,0.36,1), transform 0.6s cubic-bezier(0.22,1,0.36,1)",
                transitionDelay: `${i * 50}ms`,
                pointerEvents:   i < revealedCount ? "auto" : "none",
                willChange:      "transform, opacity",
              }}
            >
              <div
                className="relative bento-card rounded-2xl p-5 overflow-hidden"
                style={{ backdropFilter: i < revealedCount ? "blur(20px)" : "none" }}
              >
                <Corners color={accentColor[card.accent]} />
                <RevealCardContent id={card.id} accent={card.accent} />
              </div>
            </div>
          ))}
        </div>

        {/* Mobile layout — heading + one card at a time */}
        <div className="md:hidden flex flex-col items-center justify-center h-full px-4 pt-16 pb-20">
          <SectionBadge label="How it works" />
          <h2 className="text-2xl leading-[1.2] text-overlay-85 font-light tracking-tight text-center mb-6">
            A smart bookmark manager that works with{" "}
            <span className="text-brand-orange italic font-semibold">how you already browse.</span>
          </h2>

          {/* Step counter */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-label uppercase tracking-[0.3em] font-bold text-overlay-55 dark:text-overlay-40">
              {revealedCount === 0 ? "Scroll to explore" : `Step ${revealedCount} of ${TOTAL_CARDS}`}
            </span>
          </div>

          {/* Single card container */}
          <div className="relative w-full max-w-[320px] min-h-[180px]">
            {REVEAL_CARDS.map((card, i) => {
              const isActive = i === revealedCount - 1
              return (
                <div
                  key={card.id}
                  className="absolute inset-0"
                  style={{
                    opacity:         isActive ? 1 : 0,
                    transform:       isActive ? "translateY(0) scale(1)" : "translateY(12px) scale(0.95)",
                    transition:      "opacity 0.5s ease, transform 0.5s ease",
                    pointerEvents:   isActive ? "auto" : "none",
                    willChange:      "transform, opacity",
                  }}
                >
                  <div
                    className="relative bento-card rounded-2xl p-5 overflow-hidden"
                    style={{ backdropFilter: isActive ? "blur(20px)" : "none" }}
                  >
                    <Corners color={accentColor[card.accent]} />
                    <RevealCardContent id={card.id} accent={card.accent} />
                  </div>
                </div>
              )
            })}
          </div>

          {/* Mobile progress dots */}
          <div className="flex items-center gap-2 mt-5">
            {REVEAL_CARDS.map((card, i) => (
              <div
                key={card.id}
                className="rounded-full transition-all duration-400"
                style={{
                  width:      i === revealedCount - 1 ? "20px" : "6px",
                  height:     "6px",
                  background: i < revealedCount ? ORANGE : "rgb(var(--overlay) / 0.15)",
                }}
              />
            ))}
          </div>
        </div>

        {/* Scroll hint */}
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2 transition-opacity duration-500"
          style={{ opacity: revealedCount >= TOTAL_CARDS ? 0 : 0.5 }}
        >
          <span className="text-label uppercase tracking-[0.35em] font-bold text-overlay-65 dark:text-overlay-50 hidden md:block">
            {revealedCount === 0 ? "Scroll" : `${TOTAL_CARDS - revealedCount} more`}
          </span>
          <svg className="w-3.5 h-3.5 text-overlay-55 dark:text-overlay-40 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>

      </div>
    </div>
  )
}
