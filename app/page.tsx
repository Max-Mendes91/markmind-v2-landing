import { Navbar } from "@/components/navbar"
import { ComingSoonSection } from "@/components/sections/coming-soon-section"
import { Footer } from "@/components/footer"

// ── V2 sections — uncomment when ready to launch ─────────────────────────────
// import { HeroSection } from "@/components/sections/hero-section"
// import { MarqueeSection } from "@/components/sections/marquee-section"
// import { BentoSection } from "@/components/sections/bento-section"
// import { RevealCardsSection } from "@/components/sections/reveal-cards-section"
// import { SocialProofSection } from "@/components/sections/social-proof-section"
// import { PhilosophySection } from "@/components/sections/philosophy-section"
// import { V2SignalSection } from "@/components/sections/v2-signal-section"
// import { CtaSection } from "@/components/sections/cta-section"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background overflow-x-clip">
        <ComingSoonSection />
        {/* ── V2 sections — uncomment when ready to launch ──────────────────
        <HeroSection />
        <MarqueeSection />
        <BentoSection />
        <RevealCardsSection />
        <SocialProofSection />
        <PhilosophySection />
        <V2SignalSection />
        <CtaSection />
        ────────────────────────────────────────────────────────────────── */}
      </main>
      <Footer />
    </>
  )
}
