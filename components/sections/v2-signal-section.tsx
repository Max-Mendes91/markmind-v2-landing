import { SectionBadge } from "@/components/ui/section-badge"
import { Corners } from "@/components/ui/corners"
import { ORANGE, SLATE } from "@/lib/tokens"

const V2_HIGHLIGHTS = ["Organize hundreds at once", "Gemini, OpenAI, Anthropic, or OpenRouter", "Resume anytime — even after closing the popup"] as const

export const V2SignalSection = () => (
  <section id="whats-new" className="relative px-4 md:px-8 lg:px-16 py-16 md:py-20 bg-background overflow-visible">
    <div className="absolute inset-0 geometric-bg opacity-10 pointer-events-none" />

    {/* Shared ambient glow — positioned to bleed across both this and CTA section */}
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[700px] h-[500px] bg-brand-orange/5 blur-[180px] rounded-full pointer-events-none" />

    {/* Side lines — tall enough to span both sections */}
    <div className="hidden md:block absolute left-[5%] lg:left-[10%] top-0 h-[250%] w-px pointer-events-none">
      <div className="h-full bg-linear-to-b from-transparent via-overlay-6 to-transparent" />
      {/* Node dot */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-brand-orange/40" />
      <div className="absolute top-2/3 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-brand-slate/30" />
    </div>

    <div className="hidden md:block absolute right-[5%] lg:right-[10%] top-0 h-[250%] w-px pointer-events-none">
      <div className="h-full bg-linear-to-b from-transparent via-overlay-6 to-transparent" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-brand-slate/30" />
      <div className="absolute top-2/3 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-brand-orange/40" />
    </div>

    {/* Floating bracket — left */}
    <div className="hidden lg:block absolute left-[3%] xl:left-[7%] top-[30%] animate-float-slow pointer-events-none">
      <div className="relative w-12 h-12 rounded-lg glass-card">
        <Corners color={ORANGE} />
      </div>
    </div>

    {/* Floating bracket — right */}
    <div className="hidden lg:block absolute right-[3%] xl:right-[7%] top-[50%] animate-float-reverse pointer-events-none">
      <div className="relative w-12 h-12 rounded-lg glass-card">
        <Corners color={SLATE} />
      </div>
    </div>

    <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center text-center">
      <SectionBadge label="V2" />

      <h2 className="text-2xl md:text-3xl font-light text-overlay-70 leading-relaxed tracking-tight">
        Now a bulk bookmark organizer with
        <br />
        <span className="text-gradient-gold-metallic font-medium italic">
          multi-provider AI support.
        </span>
      </h2>

      <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
        {V2_HIGHLIGHTS.map((label) => (
          <span
            key={label}
            className="px-3.5 py-1.5 rounded-full border border-overlay-8 bg-overlay-3 text-badge font-bold uppercase tracking-[0.2em] text-overlay-60"
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  </section>
)
