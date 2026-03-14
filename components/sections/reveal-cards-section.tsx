"use client"

import { accentColor } from "@/lib/tokens"
import type { Accent } from "@/lib/tokens"
import { ORANGE } from "@/lib/tokens"
import { Corners } from "@/components/ui/corners"
import { SectionBadge } from "@/components/ui/section-badge"
import { RevealCardContent } from "@/components/ui/reveal-card-content"
import { RevealBrowserMock } from "@/components/ui/reveal-browser-mock"
import { RevealSvgLines } from "@/components/ui/reveal-svg-lines"
import { RevealProgressDots } from "@/components/ui/reveal-progress-dots"
import { useRevealScroll } from "@/hooks/use-reveal-scroll"

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

// ── Desktop cards ─────────────────────────────────────────────────────────────
const DesktopCards = ({ cards, revealedCount, cardRefs }: {
  cards: RevealCard[]
  revealedCount: number
  cardRefs: React.RefObject<(HTMLDivElement | null)[]>
}) => (
  <div className="relative w-full h-full hidden md:block">
    {cards.map((card, i) => (
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
)

// ── Mobile layout ─────────────────────────────────────────────────────────────
const MobileCards = ({ cards, revealedCount, totalCards }: {
  cards: RevealCard[]
  revealedCount: number
  totalCards: number
}) => (
  <div className="md:hidden flex flex-col items-center justify-center h-full px-4 pt-16 pb-20">
    <SectionBadge label="How it works" />
    <h2 className="text-2xl leading-[1.2] text-overlay-85 font-light tracking-tight text-center mb-6">
      A smart bookmark manager that works with{" "}
      <span className="text-brand-orange italic font-semibold">how you already browse.</span>
    </h2>

    <div className="flex items-center gap-2 mb-4">
      <span className="text-label uppercase tracking-[0.3em] font-bold text-overlay-55 dark:text-overlay-40">
        {revealedCount === 0 ? "Scroll to explore" : `Step ${revealedCount} of ${totalCards}`}
      </span>
    </div>

    <div className="relative w-full max-w-[320px] min-h-[180px]">
      {cards.map((card, i) => {
        const isActive = i === revealedCount - 1
        return (
          <div
            key={card.id}
            className="absolute inset-0"
            style={{
              opacity:       isActive ? 1 : 0,
              transform:     isActive ? "translateY(0) scale(1)" : "translateY(12px) scale(0.95)",
              transition:    "opacity 0.5s ease, transform 0.5s ease",
              pointerEvents: isActive ? "auto" : "none",
              willChange:    "transform, opacity",
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

    <div className="flex items-center gap-2 mt-5">
      {cards.map((card, i) => (
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
)

// ── Section ───────────────────────────────────────────────────────────────
export const RevealCardsSection = () => {
  const {
    scrollRef, sectionRef, browserRef, cardRefs,
    revealedCount, lineData, progress, outerHeight, totalCards,
  } = useRevealScroll()

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

        <RevealProgressDots revealedCount={revealedCount} totalCards={totalCards} />

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-overlay-5 z-50">
          <div className="h-full bg-brand-orange transition-all duration-300 ease-out" style={{ width: `${progress * 100}%` }} />
        </div>

        <DesktopCards cards={REVEAL_CARDS} revealedCount={revealedCount} cardRefs={cardRefs} />
        <MobileCards cards={REVEAL_CARDS} revealedCount={revealedCount} totalCards={totalCards} />

        {/* Scroll hint */}
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2 transition-opacity duration-500"
          style={{ opacity: revealedCount >= totalCards ? 0 : 0.5 }}
        >
          <span className="text-label uppercase tracking-[0.35em] font-bold text-overlay-65 dark:text-overlay-50 hidden md:block">
            {revealedCount === 0 ? "Scroll" : `${totalCards - revealedCount} more`}
          </span>
          <svg className="w-3.5 h-3.5 text-overlay-55 dark:text-overlay-40 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>

      </div>
    </div>
  )
}
