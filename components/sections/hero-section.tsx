import Image from "next/image"
import { ArrowRight, Play } from "lucide-react"
import { CtaButton } from "@/components/ui/cta-button"
import { CyclingWord } from "@/components/ui/cycling-word"
import { CornerFrame } from "@/components/ui/corner-frame"
import { HeroFloatingLeft } from "@/components/ui/hero-floating-left"
import { HeroFloatingRight } from "@/components/ui/hero-floating-right"

// ── Section ───────────────────────────────────────────────────────────────
export const HeroSection = () => {
  return (
    <section className="relative min-h-screen short:min-h-[600px] flex items-center justify-center overflow-hidden bg-background geometric-bg pt-20">

      {/* === AMBIENT GLOWS === */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%] w-[900px] h-[420px] bg-brand-orange/6 blur-[150px] rounded-full" />
        <div className="absolute top-[28%] left-1/2 -translate-x-1/2 w-[500px] h-[220px] bg-brand-slate/5 blur-[110px] rounded-full" />
        <div className="absolute top-[25%] left-0 w-[280px] h-[500px] bg-brand-orange/3 blur-[100px] rounded-full" />
        <div className="absolute top-[25%] right-0 w-[280px] h-[500px] bg-brand-slate/3 blur-[100px] rounded-full" />
      </div>

      <HeroFloatingLeft />
      <HeroFloatingRight />

      {/* === CENTER CONTENT === */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 max-w-4xl mx-auto w-full">

        {/* Logo mark with corner bracket animation */}
        <div className="mb-6">
          <CornerFrame>
            <Image
              src="/logo.png"
              alt="MarkMind"
              width={40}
              height={40}
              className="brightness-110"
              priority
            />
          </CornerFrame>
        </div>

        {/* Pill badge */}
        <div className="mb-6 sm:mb-8 inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-brand-orange/30 bg-brand-orange/5">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
          <span className="text-brand-orange text-caption font-bold uppercase tracking-[0.25em]">
            AI Bookmark Organizer · V2
          </span>
        </div>

        {/* Main headline */}
        <h1 className="font-black tracking-tight leading-[0.92] mb-4 sm:mb-6">
          <span className="block text-foreground text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl">
            AI bookmark organizer for people
          </span>
          <span className="block text-foreground text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl">
            with too many tabs
          </span>
          <span className="block text-xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl mt-1">
            <CyclingWord />
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-[520px] leading-relaxed mb-8 sm:mb-10">
          Chrome bookmarks get messy because nobody has time to fix them. MarkMind replaces the default
          bookmark button with AI that reads the page, checks your folder structure, and suggests the
          right place. You review. You approve. Done.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <CtaButton href="https://chromewebstore.google.com/detail/markmind/bdobgdkpeffdbonfpokgkbncgnbnjnoo" variant="primary" size="lg">
            Add to Chrome — Free
            <ArrowRight className="w-4 h-4" />
          </CtaButton>
          <CtaButton href="/#how-it-works" variant="outline" size="lg">
            <Play className="w-4 h-4 fill-foreground" />
            See how it works
          </CtaButton>
        </div>
      </div>

    </section>
  )
}
