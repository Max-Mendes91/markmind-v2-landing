import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/sections/hero-section"
import { MarqueeSection } from "@/components/sections/marquee-section"
import { BentoSection } from "@/components/sections/bento-section"
import { RevealCardsSection } from "@/components/sections/reveal-cards-section"
import { SocialProofSection } from "@/components/sections/social-proof-section"
import { PhilosophySection } from "@/components/sections/philosophy-section"
import { V2SignalSection } from "@/components/sections/v2-signal-section"
import { CtaSection } from "@/components/sections/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-black overflow-x-clip">
      <Navbar />
      <HeroSection />
      <MarqueeSection />
      <BentoSection />
      <RevealCardsSection />
      <SocialProofSection />
      <PhilosophySection />
      <V2SignalSection />
      <CtaSection />
      <Footer />
    </div>
  )
}
