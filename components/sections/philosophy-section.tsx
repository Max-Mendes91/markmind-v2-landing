import { SectionBadge } from "@/components/ui/section-badge"
import { CyclingText } from "@/components/ui/cycling-text"
import type { PhilosophyPrinciple } from "@/types"

const CYCLING_WORDS = ["friction.", "clutter.", "barriers.", "hassle."]

const PRINCIPLES: PhilosophyPrinciple[] = [
  {
    keyword:   "Simplicity",
    statement:
      "Every feature we ship must reduce friction, not add it. If it creates clutter, it doesn\u2019t ship.",
  },
  {
    keyword:   "Intent",
    statement:
      "Your tools should respond to what you\u2019re trying to do \u2014 not demand that you learn a new workflow.",
  },
  {
    keyword:   "Restraint",
    statement:
      "We say no to most ideas. The ones that survive earn their place by making the core experience better.",
  },
]

export const PhilosophySection = () => (
  <section className="relative px-4 md:px-8 lg:px-16 py-28 bg-black overflow-hidden">
    <div className="absolute inset-0 geometric-bg opacity-20 pointer-events-none" />

    {/* Header */}
    <div className="relative z-10 flex flex-col items-center text-center mb-16">
      <SectionBadge label="Philosophy" />
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-4">
        We don&apos;t build features.
        <br />
        <span className="text-gradient-gold-metallic italic">
          We remove{" "}
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
        MarkMind exists because most tools ask too much of you. We believe the
        best software disappears into your workflow.
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
    <p className="relative z-10 mt-16 text-center italic text-white/40 text-body-md max-w-lg mx-auto">
      &ldquo;The best tool is the one you forget you&apos;re using.&rdquo;
    </p>
  </section>
)
