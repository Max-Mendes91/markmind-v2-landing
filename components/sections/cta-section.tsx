import { ArrowRight } from "lucide-react"
import { SectionBadge } from "@/components/ui/section-badge"
import { CtaButton } from "@/components/ui/cta-button"
import { Corners } from "@/components/ui/corners"
import { ORANGE, SLATE } from "@/lib/tokens"

export const CtaSection = () => (
  <section className="relative px-4 md:px-8 lg:px-16 py-28 bg-black overflow-visible">
    <div className="absolute inset-0 geometric-bg opacity-20 pointer-events-none" />

    {/* Ambient glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-orange/6 blur-[150px] rounded-full pointer-events-none" />

    {/* Side lines — continuing from V2 section above */}
    <div className="hidden md:block absolute left-[5%] lg:left-[10%] top-0 h-full w-px pointer-events-none">
      <div className="h-full bg-linear-to-b from-white/6 via-white/4 to-transparent" />
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-brand-orange/40" />
    </div>

    <div className="hidden md:block absolute right-[5%] lg:right-[10%] top-0 h-full w-px pointer-events-none">
      <div className="h-full bg-linear-to-b from-white/6 via-white/4 to-transparent" />
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-brand-slate/40" />
    </div>

    {/* SVG connector lines — curve from side rails inward */}
    <svg className="hidden md:block absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
      <path
        d="M 10% 0 Q 10% 35%, 38% 45%"
        fill="none"
        stroke="url(#line-fade-l)"
        strokeWidth="1"
      />
      <path
        d="M 90% 0 Q 90% 35%, 62% 45%"
        fill="none"
        stroke="url(#line-fade-r)"
        strokeWidth="1"
      />
      <defs>
        <linearGradient id="line-fade-l" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="white" stopOpacity="0.06" />
          <stop offset="60%" stopColor="#FF9B51" stopOpacity="0.12" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="line-fade-r" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="white" stopOpacity="0.06" />
          <stop offset="60%" stopColor="#BFC9D1" stopOpacity="0.12" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>

    {/* Floating bracket — left */}
    <div className="hidden lg:block absolute left-[3%] xl:left-[7%] bottom-[25%] animate-float-reverse pointer-events-none">
      <div className="relative w-12 h-12 rounded-lg glass-card">
        <Corners color={SLATE} />
      </div>
    </div>

    {/* Floating bracket — right */}
    <div className="hidden lg:block absolute right-[3%] xl:right-[7%] top-[25%] animate-float-slow pointer-events-none">
      <div className="relative w-12 h-12 rounded-lg glass-card">
        <Corners color={ORANGE} />
      </div>
    </div>

    <div className="relative z-10 flex flex-col items-center text-center">
      <SectionBadge label="Get Started" />

      <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-4">
        Start capturing ideas{" "}
        <span className="text-gradient-gold-metallic italic">today.</span>
      </h2>

      <p className="text-white/50 text-base max-w-md leading-relaxed mb-10">
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
