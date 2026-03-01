"use client"

import { useState, useEffect, useRef } from "react"
import { ArrowRight, Play, Sparkles, Bookmark, Zap } from "lucide-react"
import { CtaButton } from "@/components/ui/cta-button"

const LOGO_URL =
  "https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/brand-assets/www.markmind.xyz/logo-1771684912530.png"

const CYCLING_WORDS = [
  "that actually sorts your bookmarks.",
  "that respects your existing folders.",
  "that cleans up years of chaos.",
]

// Duplicate first word at end so the wrap-around reset is invisible
const STRIP_WORDS = [...CYCLING_WORDS, CYCLING_WORDS[0]]
const WORD_H = "1.15em"

const CyclingWord = () => {
  const [index, setIndex] = useState(0)
  const stripRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const id = setInterval(() => setIndex(i => i + 1), 3000)
    return () => clearInterval(id)
  }, [])

  // When we land on the duplicate (index === CYCLING_WORDS.length), snap back
  // to 0 after the transition completes — same word shown, so the snap is invisible
  useEffect(() => {
    if (index !== CYCLING_WORDS.length) return
    const t = setTimeout(() => {
      const el = stripRef.current
      if (el) el.style.transition = "none"
      setIndex(0)
      requestAnimationFrame(() => requestAnimationFrame(() => {
        if (stripRef.current) stripRef.current.style.transition = ""
      }))
    }, 550)
    return () => clearTimeout(t)
  }, [index])

  const corner = "absolute w-5 h-5 border-brand-orange/55 corner-pulse"
  return (
    <span className="relative inline-block px-4">
      {/* Corner brackets */}
      <span className={`${corner} -top-2 -left-2 border-t border-l`} style={{ animationDelay: "0s" }} />
      <span className={`${corner} -top-2 -right-2 border-t border-r`} style={{ animationDelay: "0.3s" }} />
      <span className={`${corner} -bottom-2 -left-2 border-b border-l`} style={{ animationDelay: "0.6s" }} />
      <span className={`${corner} -bottom-2 -right-2 border-b border-r`} style={{ animationDelay: "0.9s" }} />

      {/* Strip slot-machine: container shows 1 word, strip slides up on each tick */}
      <span className="relative block overflow-hidden" style={{ height: WORD_H }}>
        <span
          ref={stripRef}
          className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{ transform: `translateY(calc(-${index} * ${WORD_H}))` }}
        >
          {STRIP_WORDS.map((word, i) => (
            <span
              key={i}
              className="block italic text-gradient-gold-metallic whitespace-nowrap"
              style={{ height: WORD_H, lineHeight: WORD_H }}
            >
              {word}
            </span>
          ))}
        </span>
      </span>
    </span>
  )
}

// Corner bracket frame around the logo mark
const CornerFrame = ({ children }: { children: React.ReactNode }) => {
  const corner = "absolute w-4 h-4 border-brand-orange/60"
  return (
    <div className="relative inline-flex items-center justify-center p-3">
      <span className={`${corner} top-0 left-0 border-t border-l corner-pulse`} style={{ animationDelay: "0s" }} />
      <span className={`${corner} top-0 right-0 border-t border-r corner-pulse`} style={{ animationDelay: "0.3s" }} />
      <span className={`${corner} bottom-0 left-0 border-b border-l corner-pulse`} style={{ animationDelay: "0.6s" }} />
      <span className={`${corner} bottom-0 right-0 border-b border-r corner-pulse`} style={{ animationDelay: "0.9s" }} />
      {children}
    </div>
  )
}

// ── Left floating decorations ─────────────────────────────────────────────────
const HeroFloatingLeft = () => (
  <>
    {/* 1 — Far outer corner: label tag */}
    <div
      className="absolute left-[2%] top-[18%] xl:flex hidden items-center gap-2 animate-float"
      style={{ animationDelay: "0s", animationDuration: "6s" }}
    >
      <div className="glass-card flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10">
        <Bookmark className="w-3 h-3 text-brand-orange" />
        <span className="text-caption font-bold text-white/70">Current page detected</span>
        <span className="font-mono text-badge text-white/45">[ ]</span>
      </div>
    </div>

    {/* 2 — Mid arc: capture card */}
    <div
      className="absolute left-[5%] top-[37%] xl:block hidden animate-float"
      style={{ animationDelay: "1.2s", animationDuration: "7s" }}
    >
      <div className="glass-card p-3.5 rounded-2xl w-[210px]">
        <div className="text-label uppercase tracking-wider text-muted-foreground font-bold mb-2 flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
          Ready to organize
        </div>
        <div className="bg-brand-orange/8 border border-brand-orange/15 rounded-xl p-2.5 mb-3">
          <p className="text-caption text-white/75 leading-relaxed">
            &ldquo;Understanding React Server Components in Production&rdquo;
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-brand-orange flex items-center justify-center shrink-0">
            <Bookmark className="w-2.5 h-2.5 text-black" />
          </div>
          <span className="text-badge font-bold text-brand-orange">Suggest folder</span>
        </div>
      </div>
    </div>

    {/* 3 — Inner, closest to text: AI dots */}
    <div
      className="absolute left-[20%] top-[76%] xl:flex hidden animate-float"
      style={{ animationDelay: "2.5s", animationDuration: "5.5s" }}
    >
      <div className="glass-card flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10">
        <Sparkles className="w-3.5 h-3.5 text-brand-slate" />
        <div className="flex gap-1.5">
          {[0, 0.2, 0.4].map((delay) => (
            <div
              key={delay}
              className="w-1.5 h-1.5 rounded-full bg-white/50 animate-bounce"
              style={{ animationDelay: `${delay}s` }}
            />
          ))}
        </div>
        <span className="text-badge text-white/50 font-bold">Analyzing your folders&hellip;</span>
      </div>
    </div>
  </>
)

// ── Right floating decorations ────────────────────────────────────────────────
const HeroFloatingRight = () => (
  <>
    {/* 1 — Far outer corner: label tag */}
    <div
      className="absolute right-[2%] top-[18%] xl:flex hidden items-center gap-2 animate-float"
      style={{ animationDelay: "0.7s", animationDuration: "6.5s" }}
    >
      <div className="glass-card flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10">
        <span className="text-caption font-bold text-white/70">AI suggestion</span>
        <Zap className="w-3 h-3 text-brand-slate" />
      </div>
    </div>

    {/* 2 — Mid arc: note organized card */}
    <div
      className="absolute right-[5%] top-[37%] xl:block hidden animate-float"
      style={{ animationDelay: "2s", animationDuration: "8s" }}
    >
      <div className="glass-card p-3.5 rounded-2xl w-[200px]">
        <div className="flex items-center gap-2 mb-2.5">
          <div className="w-2 h-2 rounded-full bg-emerald-400" />
          <span className="text-badge font-bold text-white/60 uppercase tracking-wider">Destination</span>
        </div>
        <div className="text-body-xs font-bold text-white mb-1">Learning</div>
        <div className="text-caption text-white/50 mb-2.5">Development › Frontend › React</div>
        <div className="flex gap-1 flex-wrap">
          {["#react", "#tutorial", "#reference"].map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-full bg-brand-slate/10 border border-brand-slate/20 text-label text-brand-slate font-bold"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>

    {/* 3 — Inner, closest to text: compatible browsers card */}
    <div
      className="absolute right-[18%] top-[76%] xl:block hidden animate-float"
      style={{ animationDelay: "3.5s", animationDuration: "7.5s" }}
    >
      <div className="glass-card px-3.5 py-2.5 rounded-2xl border border-white/10">
        <div className="text-label uppercase tracking-wider text-muted-foreground font-bold mb-2 flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Compatible browsers
        </div>
        <div className="flex gap-1.5 flex-wrap">
          {["Chrome", "Brave", "Edge", "Opera"].map((name) => (
            <span
              key={name}
              className="px-2 py-0.5 rounded-full bg-brand-slate/10 border border-brand-slate/20 text-label text-brand-slate font-bold"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  </>
)

// ── Section ───────────────────────────────────────────────────────────────────
export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black geometric-bg pt-20">

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
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto w-full">

        {/* Logo mark with corner bracket animation */}
        <div className="mb-6">
          <CornerFrame>
            <img
              src={LOGO_URL}
              alt="MarkMind"
              className="w-10 h-10 brightness-110"
            />
          </CornerFrame>
        </div>

        {/* Pill badge */}
        <div className="mb-8 inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-brand-orange/30 bg-brand-orange/5">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
          <span className="text-brand-orange text-caption font-bold uppercase tracking-[0.25em]">
            AI Bookmark Organizer · V2
          </span>
        </div>

        {/* Main headline */}
        <h1 className="font-black tracking-tight leading-[0.92] mb-6">
          <span className="block text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            AI bookmark organizer for people
          </span>
          <span className="block text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            with too many tabs
          </span>
          <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-1">
            <CyclingWord />
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base md:text-lg text-muted-foreground max-w-[520px] leading-relaxed mb-10">
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
            <Play className="w-4 h-4 fill-white" />
            See how it works
          </CtaButton>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-20">
        <div className="w-px h-12 bg-linear-to-b from-white to-transparent" />
        <span className="text-label uppercase tracking-[0.4em] font-bold text-white">See it in action</span>
      </div>
    </section>
  )
}
