import { SectionBadge } from "@/components/ui/section-badge"

const V2_HIGHLIGHTS = ["Faster capture", "Cleaner UI", "Smarter defaults"] as const

export const V2SignalSection = () => (
  <section className="relative px-4 md:px-8 lg:px-16 py-16 md:py-20 bg-black">
    <div className="absolute inset-0 geometric-bg opacity-10 pointer-events-none" />

    <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center text-center">
      <SectionBadge label="V2" />

      <p className="text-2xl md:text-3xl font-light text-white/70 leading-relaxed tracking-tight">
        MarkMind v2 focuses on{" "}
        <span className="text-gradient-gold-metallic font-medium italic">
          clarity, speed, and control
        </span>{" "}
        — shaped by real usage.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
        {V2_HIGHLIGHTS.map((label) => (
          <span
            key={label}
            className="px-3.5 py-1.5 rounded-full border border-white/8 bg-white/3 text-badge font-bold uppercase tracking-[0.2em] text-white/30"
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  </section>
)
