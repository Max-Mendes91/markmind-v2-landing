"use client"

import { useCallback, useRef } from "react"
import { SectionBadge } from "@/components/ui/section-badge"
import { SocialAtmoCard } from "@/components/ui/social-atmo-card"
import { SocialQuoteCard } from "@/components/ui/social-quote-card"
import { SocialMiniCard } from "@/components/ui/social-mini-card"
import type { MiniTestimonial } from "@/types"

// ── Mini card data (duplicated for seamless marquee loop) ─────────────────────
const MINI_TESTIMONIAL_ITEMS: MiniTestimonial[] = [
  { handle: "@mkkumar",    role: "Writer",           accent: "orange"  as const, snippet: <>Finally an extension that respects my <strong className="text-white/65 font-semibold">reading flow</strong>.</> },
  { handle: "@techbrief",  role: "Engineer",         accent: "slate"   as const, snippet: <><strong className="text-white/65 font-semibold">Zero friction</strong> capture. This is what I&rsquo;ve been waiting for.</> },
  { handle: "@curator22",  role: "Content Curator",  accent: "neutral" as const, snippet: <>Everything I learn, <strong className="text-white/65 font-semibold">in one place</strong>. No effort.</> },
  { handle: "@readwise_j", role: "Knowledge Worker", accent: "orange"  as const, snippet: <>MarkMind is the <strong className="text-white/65 font-semibold">missing layer</strong> between reading and remembering.</> },
  { handle: "@buildinpub", role: "Founder",          accent: "slate"   as const, snippet: <>Captured <strong className="text-white/65 font-semibold">three product ideas</strong> in one reading session.</> },
  { handle: "@deepdive99", role: "Researcher",       accent: "neutral" as const, snippet: <>It just <strong className="text-white/65 font-semibold">gets out of the way</strong> — that&rsquo;s rare.</> },
]
const MINI_TESTIMONIAL_TRACK = [...MINI_TESTIMONIAL_ITEMS, ...MINI_TESTIMONIAL_ITEMS]

// ── Section ────────────────────────────────────────────────────────────────────
export const SocialProofSection = () => {
  const trackRef = useRef<HTMLDivElement>(null)
  const rafRef   = useRef<number | null>(null)

  const slowDown = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
    const step = () => {
      const anim = trackRef.current?.getAnimations()[0]
      if (!anim) return
      const next = Math.max(anim.playbackRate * 0.88, 0.25)
      anim.playbackRate = next
      if (next > 0.26) rafRef.current = requestAnimationFrame(step)
    }
    rafRef.current = requestAnimationFrame(step)
  }, [])

  const speedUp = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
    const step = () => {
      const anim = trackRef.current?.getAnimations()[0]
      if (!anim) return
      const next = Math.min(anim.playbackRate * 1.12, 1)
      anim.playbackRate = next
      if (next < 0.99) rafRef.current = requestAnimationFrame(step)
      else anim.playbackRate = 1
    }
    rafRef.current = requestAnimationFrame(step)
  }, [])

  return (
    <section className="relative px-4 md:px-8 lg:px-16 py-28 bg-black overflow-hidden">
      <div className="absolute inset-0 geometric-bg opacity-20 pointer-events-none" />

      {/* Section header */}
      <div className="relative z-10 flex flex-col items-center text-center mb-14">
        <SectionBadge label="Users" />
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-4">
          Used by people who{" "}
          <span className="text-gradient-gold-metallic italic">think on the web.</span>
        </h2>
        <p className="text-white/35 text-base max-w-sm leading-relaxed">
          400+ users. No hype. Real feedback from people who read and think for a living.
        </p>
      </div>

      {/* Masonry grid */}
      <div className="relative z-10 grid grid-cols-12 gap-4 max-w-5xl mx-auto">
        <div className="col-span-12 md:col-span-5 md:row-span-2 min-h-[280px] md:min-h-0">
          <SocialAtmoCard accent="orange" />
        </div>

        <div className="col-span-12 md:col-span-7">
          <SocialQuoteCard
            badge="Daily User"
            quote={<>MarkMind changed how I research. I used to lose every good idea I found online — now <strong className="text-white font-semibold">they&rsquo;re all there</strong>, organized, waiting.</>}
            handle="@kylemarc"
            role="Product Designer"
            accent="orange"
          />
        </div>

        <div className="col-span-12 md:col-span-7">
          <SocialQuoteCard
            badge="Since v1"
            quote={<>It&rsquo;s the <strong className="text-white font-semibold">first extension</strong> I haven&rsquo;t uninstalled after a week. It stays out of the way until you actually need it.</>}
            handle="@n_writer"
            role="Researcher"
            accent="slate"
          />
        </div>

        <div className="col-span-12 md:col-span-7">
          <SocialQuoteCard
            badge="Deep Thinker"
            quote={<>I capture <strong className="text-white font-semibold">10x more</strong> than I used to. Not because I try harder — because MarkMind{" "}<strong className="text-white font-semibold">removes the friction</strong> of trying at all.</>}
            handle="@jayworks"
            role="Indie Hacker"
            accent="orange"
          />
        </div>

        <div className="col-span-12 md:col-span-5 md:row-span-2 min-h-[280px] md:min-h-0">
          <SocialAtmoCard accent="slate" />
        </div>

        <div className="col-span-12 md:col-span-7">
          <SocialQuoteCard
            badge="Power User"
            quote={<>My reading workflow is{" "}<strong className="text-white font-semibold">completely different</strong> now. Everything feeds into one place, automatically tagged, ready when I need it.</>}
            handle="@alex_phd"
            role="PhD Student"
            accent="slate"
          />
        </div>
      </div>

      {/* Mini testimonial marquee */}
      <div
        className="relative z-10 max-w-5xl mx-auto mt-4 overflow-hidden"
        onMouseEnter={slowDown}
        onMouseLeave={speedUp}
      >
        <div className="pointer-events-none absolute left-0 top-0 h-full w-16 z-10 bg-linear-to-r from-black to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 z-10 bg-linear-to-l from-black to-transparent" />

        <div ref={trackRef} className="flex w-max animate-marquee-smooth" style={{ animationDirection: "reverse" }}>
          {MINI_TESTIMONIAL_TRACK.map((item, i) => (
            <div key={i} className="mx-3">
              <SocialMiniCard {...item} />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom stat */}
      <div className="relative z-10 mt-14 text-center text-white/15 text-badge tracking-[0.4em] uppercase font-bold">
        400+ users · Built in public · Improved by real feedback
      </div>
    </section>
  )
}
