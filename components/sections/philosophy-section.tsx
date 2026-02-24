import { SectionBadge } from "@/components/ui/section-badge"
import { CyclingText } from "@/components/ui/cycling-text"
import type { PhilosophyPrinciple } from "@/types"

const CYCLING_WORDS = ["folder clutter.", "your guesswork.", "manual sorting.", "decision chaos."]

const PRINCIPLES: PhilosophyPrinciple[] = [
  {
    keyword:   "Simplicity",
    statement:
      "One clear action: click, review, confirm. No dashboards. No complex setup.",
  },
  {
    keyword:   "Intent",
    statement:
      "Your existing folders matter. The AI works with your structure instead of replacing it with its own system.",
  },
  {
    keyword:   "Restraint",
    statement:
      "We avoided accounts, subscriptions, and unnecessary data collection. If it doesn\u2019t improve bookmarking, it stays out.",
  },
]

export const PhilosophySection = () => (
  <section id="philosophy" className="relative px-4 md:px-8 lg:px-16 py-28 bg-black overflow-hidden">
    <div className="absolute inset-0 geometric-bg opacity-20 pointer-events-none" />

    {/* Header */}
    <div className="relative z-10 flex flex-col items-center text-center mb-16">
      <SectionBadge label="Philosophy" />
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-4">
        We build a bookmark organizer
        <br />
        <span className="text-gradient-gold-metallic italic">
          that removes{" "}
          <span className="relative inline-block px-4">
            <span className="absolute w-5 h-5 border-brand-orange/55 corner-pulse -top-2 -left-1 border-t border-l" style={{ animationDelay: "0s" }} />
            <span className="absolute w-5 h-5 border-brand-orange/55 corner-pulse -top-2 -right-1 border-t border-r" style={{ animationDelay: "0.3s" }} />
            <span className="absolute w-5 h-5 border-brand-orange/55 corner-pulse -bottom-1 -left-1 border-b border-l" style={{ animationDelay: "0.6s" }} />
            <span className="absolute w-5 h-5 border-brand-orange/55 corner-pulse -bottom-1 -right-1 border-b border-r" style={{ animationDelay: "0.9s" }} />
            <CyclingText words={CYCLING_WORDS} className="text-gradient-gold-metallic italic" />
          </span>
        </span>
      </h2>
      <p className="text-white/50 text-base max-w-md leading-relaxed">
        Bookmarks fail when they rely on discipline. We designed MarkMind to
        handle the sorting part so you can focus on what you&apos;re reading.
      </p>
    </div>

    {/* Principles */}
    <div className="relative z-10 max-w-2xl mx-auto flex flex-col gap-10">
      {PRINCIPLES.map(({ keyword, statement }) => (
        <div key={keyword} className="border-l-2 border-brand-orange/30 pl-6">
          <h3 className="text-card-title-lg font-black text-white mb-2">
            {keyword}
          </h3>
          <p className="text-body text-white/55 leading-relaxed">
            {statement}
          </p>
        </div>
      ))}
    </div>

    {/* Closing */}
    <p className="relative z-10 mt-16 text-center italic text-white/55 text-body-md max-w-lg mx-auto">
      &ldquo;The best organization system is the one that doesn&apos;t ask for attention.&rdquo;
    </p>
  </section>
)
