import { ArrowRight } from "lucide-react"
import { SectionBadge } from "@/components/ui/section-badge"
import { CtaButton } from "@/components/ui/cta-button"

export const CtaSection = () => (
  <section className="relative px-4 md:px-8 lg:px-16 py-28 bg-black overflow-hidden">
    <div className="absolute inset-0 geometric-bg opacity-20 pointer-events-none" />

    {/* Ambient glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-orange/6 blur-[150px] rounded-full pointer-events-none" />

    <div className="relative z-10 flex flex-col items-center text-center">
      <SectionBadge label="Get Started" />

      <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-4">
        Start capturing ideas{" "}
        <span className="text-gradient-gold-metallic italic">today.</span>
      </h2>

      <p className="text-white/35 text-base max-w-md leading-relaxed mb-10">
        Available as a browser extension. No account required. Lightweight by
        design.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <CtaButton
          href="https://chromewebstore.google.com/detail/markmind"
          variant="primary"
          size="lg"
        >
          Install MarkMind
          <ArrowRight className="w-4 h-4" />
        </CtaButton>

        <CtaButton href="#features" variant="outline" size="lg">
          Learn More
        </CtaButton>
      </div>
    </div>
  </section>
)
