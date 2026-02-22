"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { Sparkles, BrainCircuit, CheckCircle2, Link2, Bookmark } from "lucide-react"
import { ORANGE, SLATE } from "@/lib/tokens"
import { Corners } from "@/components/ui/corners"
import { SectionBadge } from "@/components/ui/section-badge"

const TOTAL_CARDS = 5
const PX_PER_CARD = 200  // px of scroll needed to reveal each card

// ── Card positions — radiating from center browser mock ───────────────────────
const CARDS = [
  { id: "highlight",  pos: "top-[6%] right-[4%]",    accent: SLATE,  w: "w-[280px]" },
  { id: "annotation", pos: "top-[16%] right-[22%]",   accent: ORANGE, w: "w-[260px]" },
  { id: "capture",    pos: "top-[62%] left-[26%]",    accent: SLATE,  w: "w-[270px]" },
  { id: "synced",     pos: "top-[40%] right-[4%]",    accent: ORANGE, w: "w-[300px]" },
  { id: "saved",      pos: "top-[68%] right-[16%]",   accent: ORANGE, w: "w-[280px]" },
] as const

// ── Card content ──────────────────────────────────────────────────────────────
const CardContent = ({ id, accent }: { id: string; accent: string }) => {
  switch (id) {
    case "highlight":
      return (
        <>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-5 h-5 rounded-md flex items-center justify-center" style={{ background: `${accent}18`, border: `1px solid ${accent}30` }}>
              <Link2 className="w-3 h-3" style={{ color: accent }} />
            </div>
            <span className="text-label font-black text-white/50 tracking-[0.2em] uppercase">Browser Highlight</span>
          </div>
          <div className="rounded-xl bg-white/3 border border-white/6 p-3 flex flex-col gap-1.5">
            <div className="w-full h-1.5 rounded-full bg-white/8" />
            <div className="rounded-md px-2 py-2" style={{ background: `${accent}18`, border: `1px solid ${accent}25` }}>
              <p className="text-caption leading-snug" style={{ color: accent }}>
                &ldquo;Intelligence is the ability to adapt to change&hellip;&rdquo;
              </p>
            </div>
            <div className="w-3/4 h-1.5 rounded-full bg-white/8" />
          </div>
        </>
      )

    case "annotation":
      return (
        <>
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-brand-orange animate-pulse" />
            <span className="text-label font-black text-white/50 tracking-[0.2em] uppercase">AI Annotation</span>
          </div>
          <div className="rounded-xl bg-white/3 border border-white/6 p-3">
            <p className="text-body-xs text-white/60 italic leading-relaxed">
              &ldquo;Intelligence is the ability to{" "}
              <span className="text-white border-b border-brand-orange not-italic font-semibold">adapt</span>
              {" "}to change.&rdquo;
            </p>
          </div>
          <div className="mt-2.5 flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
            <span className="text-label text-white/30 font-bold uppercase tracking-wider">AI enriching context</span>
          </div>
        </>
      )

    case "capture":
      return (
        <>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-5 h-5 rounded-md flex items-center justify-center" style={{ background: `${accent}18`, border: `1px solid ${accent}30` }}>
              <BrainCircuit className="w-3 h-3" style={{ color: accent }} />
            </div>
            <span className="text-label font-black text-white/50 tracking-[0.2em] uppercase">Capture UI</span>
          </div>
          <div className="rounded-xl bg-white/3 border border-white/6 p-3 mb-3">
            <p className="text-badge italic text-white/50 leading-relaxed">
              &ldquo;Intelligence is the ability to adapt&hellip;&rdquo;
            </p>
          </div>
          <div className="w-full py-2.5 rounded-xl flex items-center justify-center gap-2 font-black text-badge uppercase tracking-widest text-black" style={{ background: accent }}>
            <Bookmark className="w-3.5 h-3.5" />
            Save to MarkMind
          </div>
        </>
      )

    case "synced":
      return (
        <>
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <div className="text-label uppercase tracking-[0.2em] font-black mb-1.5" style={{ color: accent }}>
                Synced
              </div>
              <h3 className="text-body-lg font-black text-white leading-tight mb-1">Adaptability in AI</h3>
              <p className="text-caption text-white/40">Captured from Hawking&rsquo;s Archive.</p>
            </div>
            <div className="w-9 h-9 rounded-full flex items-center justify-center text-black shrink-0" style={{ background: accent }}>
              <CheckCircle2 className="w-4 h-4" />
            </div>
          </div>
          <div className="pt-3 border-t border-white/6 flex items-center gap-2">
            <Link2 className="w-3 h-3 text-white/25" />
            <span className="text-label text-white/30 font-mono">source: hawking.edu/lectures/ai</span>
          </div>
        </>
      )

    case "saved":
      return (
        <>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-5 h-5 rounded-md flex items-center justify-center" style={{ background: `${accent}18`, border: `1px solid ${accent}30` }}>
              <CheckCircle2 className="w-3 h-3" style={{ color: accent }} />
            </div>
            <span className="text-label font-black text-white/50 tracking-[0.2em] uppercase">Knowledge Saved</span>
          </div>
          <div className="rounded-xl bg-white/3 border border-white/6 p-3 mb-3">
            <p className="text-caption text-white/55 leading-relaxed">
              Bookmark enriched with context, tags auto-applied, and linked to 3 related captures.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: accent }} />
            <span className="text-label font-black uppercase tracking-[0.2em]" style={{ color: accent }}>Auto-organized</span>
          </div>
        </>
      )

    default:
      return null
  }
}

// ── Browser mock — center hub ─────────────────────────────────────────────────
const BrowserMock = () => {
  return (
    <div className="w-[175px] glass-card rounded-2xl overflow-hidden border border-white/12 shadow-[0_0_60px_-10px_rgba(255,155,81,0.18)]">
      {/* Chrome bar */}
      <div className="bg-white/4 border-b border-white/6 px-2.5 py-2 flex items-center gap-1.5">
        <div className="flex gap-1">
          {["bg-red-500/40", "bg-yellow-400/40", "bg-green-500/40"].map(c => (
            <div key={c} className={`w-1.5 h-1.5 rounded-full ${c}`} />
          ))}
        </div>
        <div className="flex-1 h-1.5 rounded-full bg-white/8 mx-1" />
      </div>

      {/* Page content */}
      <div className="p-3 flex flex-col gap-1.5">
        <div className="w-full h-1.5 rounded-full bg-white/8" />
        <div className="w-5/6 h-1.5 rounded-full bg-white/8" />
        <div className="w-full h-1.5 rounded-full bg-white/6" />
        {/* Active highlight — the thought being captured */}
        <div className="rounded-md px-2 py-1.5 animate-pulse-highlight border border-brand-orange/15">
          <div className="w-4/5 h-1.5 rounded-full bg-brand-orange/35" />
        </div>
        <div className="w-3/4 h-1.5 rounded-full bg-white/8" />
        <div className="w-full h-1.5 rounded-full bg-white/6" />
        <div className="w-2/3 h-1.5 rounded-full bg-white/5" />
      </div>

      {/* MarkMind active indicator */}
      <div className="px-3 pb-3 pt-1 border-t border-white/5 flex items-center gap-1.5">
        <div className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
        <span className="text-micro font-bold text-brand-orange/60 uppercase tracking-wider">MarkMind Active</span>
      </div>
    </div>
  )
}

// ── Section ───────────────────────────────────────────────────────────────────
export const RevealCardsSection = () => {
  // scrollRef  → outer div that creates the scrollable height
  // sectionRef → inner sticky panel (always viewport-sized when in range)
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
      // How far past the viewport top the outer container has scrolled
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

  // Outer div height = viewport + scroll room for all card reveals
  const outerHeight = `calc(100vh + ${TOTAL_CARDS * PX_PER_CARD}px)`

  return (
    <div ref={scrollRef} style={{ height: outerHeight }}>
      {/* Sticky panel — stays pinned at top:0 while outer div scrolls */}
      <div
        ref={sectionRef}
        className="sticky top-0 h-screen short:h-[600px] bg-black overflow-hidden"
      >

        {/* Background glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-brand-slate/4 blur-[120px] rounded-full" />
          <div className="absolute bottom-1/3 left-0 w-[300px] h-[300px] bg-brand-orange/4 blur-[100px] rounded-full" />
          <div className="absolute inset-0 geometric-bg opacity-20" />
        </div>

        {/* ── SVG connection lines ── */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ zIndex: 5 }}
          aria-hidden="true"
        >
          {lineData[0] && (
            <>
              <circle
                cx={lineData[0].x1} cy={lineData[0].y1}
                r="18"
                fill="none"
                stroke={ORANGE}
                strokeWidth="0.5"
                opacity={revealedCount > 0 ? 0.12 : 0.06}
                style={{ transition: "opacity 0.6s ease" }}
              />
              <circle
                cx={lineData[0].x1} cy={lineData[0].y1}
                r="4"
                fill={ORANGE}
                opacity="0.55"
              />
            </>
          )}

          {lineData.map((d, i) => {
            const revealed = i < revealedCount
            const midX = (d.x1 + d.x2) / 2
            const path = `M ${d.x1} ${d.y1} C ${midX} ${d.y1} ${midX} ${d.y2} ${d.x2} ${d.y2}`
            return (
              <g key={i}>
                <path
                  d={path}
                  fill="none"
                  stroke={CARDS[i].accent}
                  strokeWidth="1"
                  strokeLinecap="round"
                  pathLength={1}
                  style={{
                    strokeDasharray: "1",
                    strokeDashoffset: revealed ? 0 : 1,
                    opacity: revealed ? 0.28 : 0,
                    transition: `stroke-dashoffset 1s cubic-bezier(0.22,1,0.36,1) ${i * 80}ms, opacity 0.4s ease ${i * 80}ms`,
                  }}
                />
                <circle
                  cx={d.x2} cy={d.y2}
                  r="2.5"
                  fill={CARDS[i].accent}
                  style={{
                    opacity: revealed ? 0.5 : 0,
                    transition: `opacity 0.35s ease ${i * 80 + 850}ms`,
                  }}
                />
              </g>
            )
          })}
        </svg>

        {/* ── Browser mock — center hub ── */}
        <div
          ref={browserRef}
          className="absolute left-1/2 top-[44%] -translate-x-1/2 -translate-y-1/2"
          style={{ zIndex: 8 }}
        >
          <BrowserMock />
        </div>

        {/* Left text */}
        <div className="absolute top-1/2 -translate-y-1/2 left-8 md:left-16 lg:left-24 z-40 max-w-[300px] md:max-w-[360px]">
          <SectionBadge label="How it works" />
          <p className="text-2xl md:text-hero-sm lg:text-hero-md leading-[1.2] text-white/85 font-light tracking-tight">
            While you&rsquo;re reading,{" "}
            <span className="text-brand-orange italic font-semibold">ideas surface.</span>
            <br />
            <span className="text-white/45 text-xl md:text-hero-sub">
              MarkMind captures them instantly — without breaking your flow.
            </span>
          </p>
        </div>

        {/* Progress dots */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
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

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-white/5 z-50">
          <div
            className="h-full bg-brand-orange transition-all duration-300 ease-out"
            style={{ width: `${progress * 100}%` }}
          />
        </div>

        {/* Cards */}
        <div className="relative w-full h-full">
          {CARDS.map((card, i) => (
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
                <CardContent id={card.id} accent={card.accent} />
              </div>
            </div>
          ))}
        </div>

        {/* Scroll hint */}
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2 transition-opacity duration-500"
          style={{ opacity: revealedCount >= TOTAL_CARDS ? 0 : 0.5 }}
        >
          <span className="text-label uppercase tracking-[0.35em] font-bold text-white/50">
            {revealedCount === 0 ? "Scroll to reveal" : `${TOTAL_CARDS - revealedCount} more`}
          </span>
          <svg className="w-3.5 h-3.5 text-white/40 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>

        {/* Footer meta */}
        <div className="absolute bottom-6 left-0 right-0 flex items-center justify-between px-10 pointer-events-none opacity-[0.07] text-note uppercase tracking-[0.4em] text-white">
          <span>Capture Sequence</span>
          <span>{revealedCount} / {TOTAL_CARDS} steps</span>
          <span>MarkMind</span>
        </div>

      </div>
    </div>
  )
}
