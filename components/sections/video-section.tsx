import { Play } from "lucide-react"
import { ORANGE } from "@/lib/tokens"
import { SectionBadge } from "@/components/ui/section-badge"
import { Corners } from "@/components/ui/corners"

export const VideoSection = () => (
  <section className="relative px-4 md:px-8 lg:px-16 py-28 bg-background overflow-hidden">
    <div className="absolute inset-0 geometric-bg opacity-30 pointer-events-none" />

    {/* Section header */}
    <div className="relative z-10 flex flex-col items-center text-center mb-12 max-w-5xl mx-auto">
      <SectionBadge label="See It In Action" />
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl 2xl:text-6xl font-black text-foreground leading-tight tracking-tight mb-4">
        Watch MarkMind{" "}
        <span className="text-gradient-gold-metallic italic">work.</span>
      </h2>
      <p className="text-overlay-65 dark:text-overlay-50 text-lg max-w-md leading-relaxed">
        This is the part where it all clicks.
      </p>
    </div>

    {/* Video player placeholder */}
    <div className="relative z-10 max-w-4xl mx-auto">
      <div className="relative rounded-3xl bento-card aspect-video flex items-center justify-center overflow-hidden">
        <Corners color={ORANGE} />

        {/* Subtle background texture */}
        <div className="absolute inset-0 geometric-bg opacity-20 pointer-events-none" />

        {/* Placeholder content */}
        <div className="relative flex flex-col items-center justify-center gap-5">
          {/* Play button ring */}
          <div className="w-20 h-20 rounded-full border border-brand-orange/30 bg-brand-orange/10 flex items-center justify-center">
            <Play className="w-8 h-8 text-brand-orange ml-1" fill="currentColor" />
          </div>

          {/* Coming soon label */}
          <span className="px-4 py-1.5 rounded-full border border-brand-orange/25 bg-brand-orange/8 text-brand-orange text-xs font-bold uppercase tracking-widest">
            Coming Soon
          </span>
        </div>
      </div>
    </div>
  </section>
)
