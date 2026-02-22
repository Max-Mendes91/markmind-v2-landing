"use client"

import { useRef } from "react"
import { Quote } from "lucide-react"
import { ORANGE, SLATE } from "@/lib/tokens"
import { Corners } from "@/components/ui/corners"
import { Stars } from "@/components/ui/stars"
import { SectionBadge } from "@/components/ui/section-badge"

// ── Atmospheric visual card (replaces photos) ──────────────────────────────────
function AtmoCard({ accent }: { accent: "orange" | "slate" }) {
  const isOrange = accent === "orange"
  const color  = isOrange ? ORANGE : SLATE
  const from   = isOrange ? "#0f0800"  : "#00091a"
  const glow1  = isOrange ? "rgba(255,155,81,0.10)"  : "rgba(191,201,209,0.08)"
  const glow2  = isOrange ? "rgba(255,155,81,0.05)"  : "rgba(191,201,209,0.04)"

  return (
    <div
      className="relative w-full h-full rounded-3xl overflow-hidden flex flex-col justify-end p-7"
      style={{ background: `linear-gradient(145deg, ${from} 0%, #000000 100%)` }}
    >
      <Corners color={color} />

      {/* Glows */}
      <div className="absolute top-0 right-0 w-[220px] h-[220px] rounded-full blur-[100px]" style={{ background: glow1 }} />
      <div className="absolute bottom-1/3 left-1/4 w-[140px] h-[140px] rounded-full blur-[70px]"  style={{ background: glow2 }} />

      {/* Subtle grid texture */}
      <div className="absolute inset-0 geometric-bg opacity-10" />

      {/* Large decorative quote mark */}
      <Quote
        className="absolute top-6 left-7 opacity-6"
        style={{ width: 80, height: 80, color }}
      />

      {/* Faded reading lines — simulates a page being read */}
      <div className="absolute inset-x-7 top-[30%] flex flex-col gap-2.5 opacity-[0.06]">
        {["w-full","w-5/6","w-full","w-4/6","w-5/6","w-full","w-3/5"].map((w, i) => (
          <div key={i} className={`${w} h-1.5 rounded-full`} style={{ background: color }} />
        ))}
        {/* Highlighted line */}
        <div className="w-4/6 h-2 rounded-full opacity-60" style={{ background: color }} />
        {["w-full","w-5/6","w-3/4"].map((w, i) => (
          <div key={i} className={`${w} h-1.5 rounded-full`} style={{ background: color }} />
        ))}
      </div>

      {/* Bottom label */}
      <div className="relative z-10 flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: color }} />
        <span className="text-note font-bold uppercase tracking-[0.3em] opacity-30" style={{ color }}>
          MarkMind User
        </span>
      </div>
    </div>
  )
}

// ── Main quote card ────────────────────────────────────────────────────────────
function QuoteCard({
  badge, quote, handle, role, accent = "orange",
}: {
  badge: string
  quote: React.ReactNode
  handle: string
  role: string
  accent?: "orange" | "slate"
}) {
  const color    = accent === "orange" ? ORANGE : SLATE
  const initials = handle.replace("@", "").slice(0, 2).toUpperCase()

  return (
    <div className="relative bento-card rounded-3xl p-7 h-full flex flex-col">
      <Corners color={color} />

      {/* Badge */}
      <div
        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border mb-6 self-start"
        style={{ background: `${color}08`, borderColor: `${color}22` }}
      >
        <div className="w-1 h-1 rounded-full" style={{ background: `${color}70` }} />
        <span className="text-note font-bold uppercase tracking-[0.25em]" style={{ color: `${color}80` }}>
          {badge}
        </span>
      </div>

      {/* Quote body */}
      <p className="text-body md:text-body-md text-white/58 leading-[1.75] flex-1">
        &ldquo;{quote}&rdquo;
      </p>

      {/* Attribution */}
      <div className="mt-7 pt-5 border-t border-white/6 flex items-center gap-3">
        <div
          className="w-8 h-8 rounded-xl flex items-center justify-center text-badge font-black shrink-0"
          style={{ background: `${color}10`, border: `1px solid ${color}20`, color: `${color}90` }}
        >
          {initials}
        </div>
        <div className="min-w-0">
          <div className="text-caption font-bold text-white/50">{handle}</div>
          <div className="text-label text-white/25 uppercase tracking-wider font-bold">{role}</div>
        </div>
        <div className="ml-auto shrink-0"><Stars /></div>
      </div>
    </div>
  )
}

// ── Mini testimonial card ─────────────────────────────────────────────────────
function MiniCard({
  handle, role, snippet, accent = "orange",
}: {
  handle: string
  role: string
  snippet: React.ReactNode
  accent?: "orange" | "slate" | "neutral"
}) {
  const color = accent === "orange" ? ORANGE : accent === "slate" ? SLATE : "rgba(255,255,255,0.35)"

  return (
    <div
      className="relative rounded-2xl p-5 flex flex-col gap-3 w-[260px] h-[155px] shrink-0"
      style={{ background: "linear-gradient(180deg, rgba(20,20,20,0.8) 0%, rgba(5,5,5,0.95) 100%)" }}
    >
      <Corners color={color} />

      <div className="flex items-center justify-between">
        <span className="text-label font-bold text-white/30 font-mono">{handle}</span>
        <Stars />
      </div>
      <p className="text-body-xs text-white/50 leading-relaxed flex-1">&ldquo;{snippet}&rdquo;</p>
      <div className="text-label text-white/20 uppercase tracking-[0.2em] font-bold">{role}</div>
    </div>
  )
}

// ── Mini card data (duplicated for seamless marquee loop) ─────────────────────
const MINI_ITEMS = [
  { handle: "@mkkumar",    role: "Writer",           accent: "orange"  as const, snippet: <>Finally an extension that respects my <strong className="text-white/65 font-semibold">reading flow</strong>.</> },
  { handle: "@techbrief",  role: "Engineer",         accent: "slate"   as const, snippet: <><strong className="text-white/65 font-semibold">Zero friction</strong> capture. This is what I&rsquo;ve been waiting for.</> },
  { handle: "@curator22",  role: "Content Curator",  accent: "neutral" as const, snippet: <>Everything I learn, <strong className="text-white/65 font-semibold">in one place</strong>. No effort.</> },
  { handle: "@readwise_j", role: "Knowledge Worker", accent: "orange"  as const, snippet: <>MarkMind is the <strong className="text-white/65 font-semibold">missing layer</strong> between reading and remembering.</> },
  { handle: "@buildinpub", role: "Founder",          accent: "slate"   as const, snippet: <>Captured <strong className="text-white/65 font-semibold">three product ideas</strong> in one reading session.</> },
  { handle: "@deepdive99", role: "Researcher",       accent: "neutral" as const, snippet: <>It just <strong className="text-white/65 font-semibold">gets out of the way</strong> — that&rsquo;s rare.</> },
]
const MINI_TRACK = [...MINI_ITEMS, ...MINI_ITEMS]

// ── Section ────────────────────────────────────────────────────────────────────
export function SocialProofSection() {
  const trackRef = useRef<HTMLDivElement>(null)
  const rafRef   = useRef<number | null>(null)

  // Web Animations API playbackRate — adjusts speed from current position,
  // no duration-recalc jump, no direction glitch.
  const slowDown = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
    const step = () => {
      const anim = trackRef.current?.getAnimations()[0]
      if (!anim) return
      const next = Math.max(anim.playbackRate * 0.88, 0.25)
      anim.playbackRate = next
      if (next > 0.26) rafRef.current = requestAnimationFrame(step)
    }
    rafRef.current = requestAnimationFrame(step)
  }

  const speedUp = () => {
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
  }

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

      {/* ── Masonry grid ── */}
      <div className="relative z-10 grid grid-cols-12 gap-4 max-w-5xl mx-auto">

        {/* Atmo card 1 — tall left (spans 2 rows) */}
        <div className="col-span-12 md:col-span-5 md:row-span-2 min-h-[280px] md:min-h-0">
          <AtmoCard accent="orange" />
        </div>

        {/* Quote 1 — top right */}
        <div className="col-span-12 md:col-span-7">
          <QuoteCard
            badge="Daily User"
            quote={
              <>
                MarkMind changed how I research. I used to lose every good idea I found online —
                now <strong className="text-white font-semibold">they&rsquo;re all there</strong>, organized, waiting.
              </>
            }
            handle="@kylemarc"
            role="Product Designer"
            accent="orange"
          />
        </div>

        {/* Quote 2 — bottom right */}
        <div className="col-span-12 md:col-span-7">
          <QuoteCard
            badge="Since v1"
            quote={
              <>
                It&rsquo;s the <strong className="text-white font-semibold">first extension</strong> I haven&rsquo;t
                uninstalled after a week. It stays out of the way until you actually need it.
              </>
            }
            handle="@n_writer"
            role="Researcher"
            accent="slate"
          />
        </div>

        {/* Quote 3 — middle left */}
        <div className="col-span-12 md:col-span-7">
          <QuoteCard
            badge="Deep Thinker"
            quote={
              <>
                I capture <strong className="text-white font-semibold">10x more</strong> than I used to.
                Not because I try harder — because MarkMind{" "}
                <strong className="text-white font-semibold">removes the friction</strong> of trying at all.
              </>
            }
            handle="@jayworks"
            role="Indie Hacker"
            accent="orange"
          />
        </div>

        {/* Atmo card 2 — tall right (spans 2 rows) */}
        <div className="col-span-12 md:col-span-5 md:row-span-2 min-h-[280px] md:min-h-0">
          <AtmoCard accent="slate" />
        </div>

        {/* Quote 4 — bottom left */}
        <div className="col-span-12 md:col-span-7">
          <QuoteCard
            badge="Power User"
            quote={
              <>
                My reading workflow is{" "}
                <strong className="text-white font-semibold">completely different</strong> now.
                Everything feeds into one place, automatically tagged, ready when I need it.
              </>
            }
            handle="@alex_phd"
            role="PhD Student"
            accent="slate"
          />
        </div>
      </div>

      {/* ── Mini testimonial marquee ── */}
      <div
        className="relative z-10 max-w-5xl mx-auto mt-4 overflow-hidden"
        onMouseEnter={slowDown}
        onMouseLeave={speedUp}
      >
        {/* Edge fades — scoped to grid width */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-16 z-10 bg-linear-to-r from-black to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 z-10 bg-linear-to-l from-black to-transparent" />

        <div
          ref={trackRef}
          className="flex w-max animate-marquee-smooth"
          style={{ animationDirection: "reverse" }}
        >
          {MINI_TRACK.map((item, i) => (
            <div key={i} className="mx-3">
              <MiniCard {...item} />
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
