"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { ORANGE, SLATE } from "@/lib/tokens"
import { Corners } from "@/components/ui/corners"
import { SectionBadge } from "@/components/ui/section-badge"
import { RevealCardContent } from "@/components/ui/reveal-card-content"
import { RevealBrowserMock } from "@/components/ui/reveal-browser-mock"

const TOTAL_CARDS = 5
const PX_PER_CARD = 200  // px of scroll needed to reveal each card

// ── Card positions — radiating from center browser mock ───────────────────────
const REVEAL_CARDS = [
  { id: "reading",  pos: "top-[12%] right-[4%]",   accent: SLATE,  w: "w-[280px]" },
  { id: "analyze",  pos: "top-[16%] right-[22%]",   accent: ORANGE, w: "w-[260px]" },
  { id: "folders",  pos: "top-[62%] left-[26%]",    accent: SLATE,  w: "w-[270px]" },
  { id: "suggest",  pos: "top-[40%] right-[4%]",    accent: ORANGE, w: "w-[300px]" },
  { id: "approve",  pos: "top-[68%] right-[16%]",   accent: ORANGE, w: "w-[280px]" },
] as const

// ── Section ───────────────────────────────────────────────────────────────────
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
      <div ref={sectionRef} className="sticky top-0 h-screen short:h-[600px] bg-black overflow-hidden">

        {/* Background glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 right-0 w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-brand-slate/4 blur-[120px] rounded-full" />
          <div className="absolute bottom-1/3 left-0 w-[150px] h-[150px] md:w-[300px] md:h-[300px] bg-brand-orange/4 blur-[100px] rounded-full" />
          <div className="absolute inset-0 geometric-bg opacity-20" />
        </div>

        <RevealSvgLines lineData={lineData} revealedCount={revealedCount} />

        {/* Browser mock — center hub (desktop only) */}
        <div ref={browserRef} className="absolute left-1/2 top-[44%] -translate-x-1/2 -translate-y-1/2 hidden md:block" style={{ zIndex: 8 }}>
          <RevealBrowserMock />
        </div>

        {/* Left text (desktop) */}
        <div className="absolute top-1/2 -translate-y-1/2 left-16 lg:left-24 z-40 max-w-[360px] hidden md:block">
          <SectionBadge label="How it works" />
          <h2 className="text-hero-sm lg:text-hero-md leading-[1.2] text-white/85 font-light tracking-tight">
            A smart bookmark manager that works with{" "}
            <span className="text-brand-orange italic font-semibold">how you already browse.</span>
          </h2>
        </div>

        <RevealProgressDots revealedCount={revealedCount} />

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-white/5 z-50">
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
              }}
            >
              <div className="relative bento-card rounded-2xl p-5 overflow-hidden">
                <Corners color={card.accent} />
                <RevealCardContent id={card.id} accent={card.accent} />
              </div>
            </div>
          ))}
        </div>

        {/* Mobile layout — heading + one card at a time */}
        <div className="md:hidden flex flex-col items-center justify-center h-full px-4 pt-16 pb-20">
          <SectionBadge label="How it works" />
          <h2 className="text-2xl leading-[1.2] text-white/85 font-light tracking-tight text-center mb-6">
            A smart bookmark manager that works with{" "}
            <span className="text-brand-orange italic font-semibold">how you already browse.</span>
          </h2>

          {/* Step counter */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-label uppercase tracking-[0.3em] font-bold text-white/40">
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
                  }}
                >
                  <div className="relative bento-card rounded-2xl p-5 overflow-hidden">
                    <Corners color={card.accent} />
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
                  background: i < revealedCount ? ORANGE : "rgba(255,255,255,0.15)",
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
          <span className="text-label uppercase tracking-[0.35em] font-bold text-white/50 hidden md:block">
            {revealedCount === 0 ? "Scroll" : `${TOTAL_CARDS - revealedCount} more`}
          </span>
          <svg className="w-3.5 h-3.5 text-white/40 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>

        {/* Footer meta */}
        <div className="absolute bottom-6 left-0 right-0 hidden md:flex items-center justify-between px-10 pointer-events-none opacity-[0.07] text-note uppercase tracking-[0.4em] text-white">
          <span>Single Bookmark Flow</span>
          <span>{revealedCount} / {TOTAL_CARDS} steps</span>
          <span>MarkMind</span>
        </div>

      </div>
    </div>
  )
}

// ── SVG connection lines ──────────────────────────────────────────────────────
const RevealSvgLines = ({
  lineData,
  revealedCount,
}: {
  lineData: Array<{ x1: number; y1: number; x2: number; y2: number }>
  revealedCount: number
}) => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block" style={{ zIndex: 5 }} aria-hidden="true">
    {lineData[0] && (
      <>
        <circle
          cx={lineData[0].x1} cy={lineData[0].y1} r="18"
          fill="none" stroke={ORANGE} strokeWidth="0.5"
          opacity={revealedCount > 0 ? 0.12 : 0.06}
          style={{ transition: "opacity 0.6s ease" }}
        />
        <circle cx={lineData[0].x1} cy={lineData[0].y1} r="4" fill={ORANGE} opacity="0.55" />
      </>
    )}
    {lineData.map((d, i) => {
      const revealed = i < revealedCount
      const midX = (d.x1 + d.x2) / 2
      const path = `M ${d.x1} ${d.y1} C ${midX} ${d.y1} ${midX} ${d.y2} ${d.x2} ${d.y2}`
      return (
        <g key={i}>
          <path
            d={path} fill="none" stroke={REVEAL_CARDS[i].accent}
            strokeWidth="1" strokeLinecap="round" pathLength={1}
            style={{
              strokeDasharray: "1",
              strokeDashoffset: revealed ? 0 : 1,
              opacity: revealed ? 0.28 : 0,
              transition: `stroke-dashoffset 1s cubic-bezier(0.22,1,0.36,1) ${i * 80}ms, opacity 0.4s ease ${i * 80}ms`,
            }}
          />
          <circle
            cx={d.x2} cy={d.y2} r="2.5" fill={REVEAL_CARDS[i].accent}
            style={{ opacity: revealed ? 0.5 : 0, transition: `opacity 0.35s ease ${i * 80 + 850}ms` }}
          />
        </g>
      )
    })}
  </svg>
)

// ── Progress dots ─────────────────────────────────────────────────────────────
const RevealProgressDots = ({ revealedCount }: { revealedCount: number }) => (
  <div className="absolute right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-3">
    {Array.from({ length: TOTAL_CARDS }).map((_, i) => (
      <div
        key={i}
        className="rounded-full transition-all duration-500"
        style={{
          width:      i < revealedCount ? "6px" : "5px",
          height:     i < revealedCount ? "6px" : "5px",
          background: i < revealedCount ? ORANGE : "rgba(255,255,255,0.15)",
          transform:  i < revealedCount ? "scale(1.3)" : "scale(1)",
          boxShadow:  i < revealedCount ? "0 0 8px rgba(255,155,81,0.5)" : "none",
        }}
      />
    ))}
  </div>
)
