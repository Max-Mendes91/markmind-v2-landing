import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { MarqueeSection } from "@/components/marquee-section"
import { BentoSection } from "@/components/bento-section"
import { RevealCardsSection } from "@/components/reveal-cards-section"
import { SocialProofSection } from "@/components/social-proof-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <MarqueeSection />
      <BentoSection />
      <RevealCardsSection />
      <SocialProofSection />
    </div>
  )
}
