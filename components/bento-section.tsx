import { Bookmark, BrainCircuit, Layers2, Zap, ArrowUpRight } from "lucide-react"

// ── Corner brackets ────────────────────────────────────────────────────────────
function Corners({ color }: { color: string }) {
  const s = { borderColor: color }
  const b = "absolute w-3 h-3 opacity-30 group-hover:opacity-70 transition-opacity duration-500"
  return (
    <>
      <span className={`${b} top-3 left-3 border-t border-l`} style={s} />
      <span className={`${b} top-3 right-3 border-t border-r`} style={s} />
      <span className={`${b} bottom-3 left-3 border-b border-l`} style={s} />
      <span className={`${b} bottom-3 right-3 border-b border-r`} style={s} />
    </>
  )
}

// ── Card 1 mock — pulsing highlight + popup ────────────────────────────────────
function CaptureMock() {
  return (
    <div className="relative w-full h-full flex flex-col gap-2.5 p-2 pt-10">
      {/* Section label */}
      <div className="absolute top-2 left-2 flex items-center gap-1.5">
        <div className="w-1.5 h-1.5 rounded-full bg-[#fcd34d]/60 animate-pulse" />
        <span className="text-[8px] font-bold uppercase tracking-widest text-white/25">Reading mode</span>
      </div>

      {/* Text lines */}
      <div className="w-full h-2 rounded-full bg-white/8" />
      <div className="w-5/6 h-2 rounded-full bg-white/8" />
      <div className="w-full h-2 rounded-full bg-white/6" />

      {/* Highlighted line */}
      <div className="relative my-0.5">
        <div className="w-4/6 h-2.5 rounded-full animate-pulse-highlight border border-[#fcd34d]/20" />
        {/* Popup card */}
        <div className="animate-popup-cycle absolute -top-11 left-0 glass-card px-3 py-2 rounded-xl flex items-center gap-2 border border-[#fcd34d]/30 shadow-[0_4px_20px_rgba(252,211,77,0.15)] whitespace-nowrap z-10">
          <div className="w-4 h-4 rounded-full bg-[#fcd34d] flex items-center justify-center shrink-0">
            <Bookmark className="w-2.5 h-2.5 text-black" />
          </div>
          <span className="text-[10px] font-bold text-[#fcd34d]">Save to MarkMind</span>
        </div>
      </div>

      <div className="w-full h-2 rounded-full bg-white/8" />
      <div className="w-3/4 h-2 rounded-full bg-white/8" />
      <div className="w-5/6 h-2 rounded-full bg-white/6" />
      <div className="w-2/3 h-2 rounded-full bg-white/6" />

      {/* Divider */}
      <div className="w-full h-px bg-white/5 my-2" />

      {/* Saved note appears */}
      <div className="animate-note-appear glass-card rounded-xl p-3 border border-[#fcd34d]/15">
        <div className="text-[8px] text-white/30 font-bold uppercase tracking-widest mb-1.5">Saved note</div>
        <div className="w-full h-1.5 rounded-full bg-[#fcd34d]/20 mb-1.5" />
        <div className="w-4/5 h-1.5 rounded-full bg-[#fcd34d]/15" />
        <div className="flex gap-1 mt-2">
          {["#research", "#brain"].map(t => (
            <span key={t} className="px-1.5 py-0.5 rounded-full bg-[#fcd34d]/8 border border-[#fcd34d]/15 text-[7px] text-[#fcd34d] font-bold">{t}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── Card 2 mock — floating thought chips being sorted ──────────────────────────
function AIMock() {
  return (
    <div className="relative w-full h-full min-h-[130px]">
      {/* AI indicator */}
      <div className="absolute top-1 right-1 flex items-center gap-1">
        <div className="w-1.5 h-1.5 rounded-full bg-[#bfdbfe] animate-pulse" />
        <span className="text-[7px] text-white/25 font-bold uppercase tracking-wider">Sorting</span>
      </div>

      {/* Drifting chips */}
      <div className="animate-drift-a absolute top-3 left-2">
        <div className="glass-card px-2.5 py-1.5 rounded-xl border border-white/10">
          <div className="text-[8px] text-white/55 font-semibold">Neural plasticity</div>
        </div>
      </div>
      <div className="animate-drift-b absolute top-5 right-3" style={{ animationDelay: "1.5s" }}>
        <div className="glass-card px-2.5 py-1.5 rounded-xl border border-white/10">
          <div className="text-[8px] text-white/55 font-semibold">Figma shadows</div>
        </div>
      </div>
      <div className="animate-drift-c absolute bottom-10 left-6" style={{ animationDelay: "2.8s" }}>
        <div className="glass-card px-2.5 py-1.5 rounded-xl border border-white/10">
          <div className="text-[8px] text-white/55 font-semibold">SaaS pricing</div>
        </div>
      </div>

      {/* Categories row at bottom */}
      <div className="absolute bottom-1 left-0 right-0 flex gap-1.5 justify-center">
        {[
          { label: "Research", color: "#fcd34d" },
          { label: "Design",   color: "#bfdbfe" },
          { label: "Ideas",    color: "#fcd34d" },
        ].map(({ label, color }) => (
          <div key={label} className="px-2 py-0.5 rounded-full" style={{ background: `${color}12`, border: `1px solid ${color}25` }}>
            <span className="text-[7px] font-bold" style={{ color }}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Card 3 mock — floating tag cloud ──────────────────────────────────────────
function CollectionsMock() {
  const groups = [
    { name: "Research", color: "#fcd34d", tags: ["#brain", "#papers", "#notes"], delay: "0s" },
    { name: "Design",   color: "#bfdbfe", tags: ["#ux", "#figma"],               delay: "0.8s" },
  ]
  return (
    <div className="w-full flex flex-col gap-3 p-1">
      {groups.map(({ name, color, tags, delay }) => (
        <div
          key={name}
          className="animate-float"
          style={{ animationDelay: delay, animationDuration: "6s" }}
        >
          <div className="text-[8px] font-black uppercase tracking-widest mb-1.5" style={{ color, opacity: 0.5 }}>
            {name}
          </div>
          <div className="flex gap-1.5 flex-wrap">
            {tags.map(tag => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded-full text-[8px] font-bold"
                style={{ background: `${color}10`, border: `1px solid ${color}22`, color }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
      <div className="text-[7px] text-white/20 font-bold uppercase tracking-widest mt-1">
        14 notes auto-grouped
      </div>
    </div>
  )
}

// ── Card 4 mock (wide) — browser + slide-in panel ─────────────────────────────
function FlowMock() {
  return (
    <div className="relative w-full h-full overflow-hidden flex flex-col gap-2">
      {/* Address bar */}
      <div className="w-full h-6 rounded-lg bg-white/5 border border-white/8 flex items-center gap-2 px-3 shrink-0">
        <div className="flex gap-1">
          {["bg-red-500/40", "bg-yellow-500/40", "bg-green-500/40"].map(c => (
            <div key={c} className={`w-2 h-2 rounded-full ${c}`} />
          ))}
        </div>
        <div className="flex-1 h-1.5 rounded bg-white/8" />
      </div>

      {/* Content area with sliding panel */}
      <div className="relative flex-1 flex gap-2">
        {/* Page content */}
        <div className="flex-1 flex flex-col gap-2 pt-1">
          {["w-full", "w-5/6", "w-full", "w-4/6", "w-5/6", "w-3/6"].map((w, i) => (
            <div key={i} className={`${w} h-1.5 rounded-full bg-white/8`} />
          ))}
        </div>

        {/* Sliding MarkMind panel */}
        <div className="animate-panel-slide absolute top-0 right-0 bottom-0 w-[42%] glass-card rounded-xl border border-[#bfdbfe]/20 p-3 flex flex-col gap-2">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-[#bfdbfe] animate-pulse" />
            <span className="text-[8px] font-black text-[#bfdbfe] uppercase tracking-wider">MarkMind</span>
          </div>
          <div className="text-[8px] text-white/50 leading-tight">
            Saved to <span className="text-[#fcd34d] font-bold">Research</span>
          </div>
          <div className="w-full h-1.5 rounded bg-white/8" />
          <div className="w-3/4 h-1.5 rounded bg-white/8" />
          <div className="flex items-center gap-0.5 mt-auto">
            <div className="w-0.5 h-3 bg-white/40 animate-cursor rounded-full" />
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Label chip ────────────────────────────────────────────────────────────────
function Chip({ icon: Icon, label, color }: { icon: typeof Bookmark; label: string; color: string }) {
  return (
    <div className="inline-flex items-center gap-1.5 mb-3">
      <div className="w-5 h-5 rounded-md flex items-center justify-center" style={{ background: `${color}18`, border: `1px solid ${color}30` }}>
        <Icon className="w-3 h-3" style={{ color }} />
      </div>
      <span className="text-[9px] font-black uppercase tracking-[0.2em]" style={{ color }}>{label}</span>
    </div>
  )
}

// ── Section ───────────────────────────────────────────────────────────────────
export function BentoSection() {
  return (
    <section className="relative px-4 md:px-8 lg:px-16 py-28 bg-black overflow-hidden">
      <div className="absolute inset-0 geometric-bg opacity-30 pointer-events-none" />

      {/* Section header */}
      <div className="relative z-10 flex flex-col items-center text-center mb-14">
        <div className="mb-5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/3">
          <span className="w-1 h-1 rounded-full bg-white/40" />
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/40">Features</span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-4">
          Built for how you{" "}
          <span className="text-gradient-gold-metallic italic">actually think.</span>
        </h2>
        <p className="text-white/40 text-lg max-w-md leading-relaxed">
          Every feature removes a layer of friction between your brain and the web.
        </p>
      </div>

      {/* Editorial grid — varied shapes */}
      <div className="relative z-10 grid grid-cols-12 gap-4 max-w-5xl mx-auto">

        {/* ── Card 1 — TALL featured left (spans 2 rows) ── */}
        <div className="group col-span-12 md:col-span-7 md:row-span-2 bento-card relative rounded-3xl p-5 flex flex-col overflow-hidden min-h-[420px]">
          <Corners color="#fcd34d" />
          <Chip icon={Bookmark} label="Capture" color="#fcd34d" />
          <div className="flex-1 rounded-2xl bg-white/2 border border-white/5 p-4 overflow-hidden mb-4">
            <CaptureMock />
          </div>
          <div>
            <h3 className="text-[18px] font-black text-white mb-1">Instant Capture</h3>
            <p className="text-[13px] text-white/40 leading-relaxed">
              Highlight any text and save it in one click — without leaving the page.
            </p>
          </div>
          <div className="absolute bottom-5 right-5 w-7 h-7 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all group-hover:border-white/30">
            <ArrowUpRight className="w-3.5 h-3.5 text-white/50" />
          </div>
        </div>

        {/* ── Card 2 — Top right ── */}
        <div className="group col-span-12 md:col-span-5 bento-card relative rounded-3xl p-5 flex flex-col overflow-hidden min-h-[200px]">
          <Corners color="#bfdbfe" />
          <Chip icon={BrainCircuit} label="AI" color="#bfdbfe" />
          <div className="flex-1 rounded-2xl bg-white/2 border border-white/5 p-4 overflow-hidden mb-4">
            <AIMock />
          </div>
          <div>
            <h3 className="text-[16px] font-black text-white mb-1">AI Organization</h3>
            <p className="text-[12px] text-white/40 leading-relaxed">
              Notes auto-categorize the moment you capture them.
            </p>
          </div>
        </div>

        {/* ── Card 3 — Bottom right ── */}
        <div className="group col-span-12 md:col-span-5 bento-card relative rounded-3xl p-5 flex flex-col overflow-hidden min-h-[200px]">
          <Corners color="#fcd34d" />
          <Chip icon={Layers2} label="Collections" color="#fcd34d" />
          <div className="flex-1 rounded-2xl bg-white/2 border border-white/5 p-4 overflow-hidden mb-4">
            <CollectionsMock />
          </div>
          <div>
            <h3 className="text-[16px] font-black text-white mb-1">Smart Collections</h3>
            <p className="text-[12px] text-white/40 leading-relaxed">
              Related ideas cluster automatically. Find anything in seconds.
            </p>
          </div>
        </div>

        {/* ── Card 4 — WIDE full-width banner ── */}
        <div className="group col-span-12 bento-card relative rounded-3xl p-5 flex flex-col md:flex-row gap-6 overflow-hidden min-h-[200px]">
          <Corners color="#bfdbfe" />
          {/* Left: text */}
          <div className="md:w-2/5 flex flex-col justify-center">
            <Chip icon={Zap} label="Native" color="#bfdbfe" />
            <h3 className="text-[20px] font-black text-white mb-2">Browser-Native Flow</h3>
            <p className="text-[13px] text-white/40 leading-relaxed">
              The extension lives in your browser. No new tabs, no logins, no context switching — ever.
            </p>
          </div>
          {/* Right: animated mock */}
          <div className="flex-1 rounded-2xl bg-white/2 border border-white/5 p-4 overflow-hidden min-h-[140px]">
            <FlowMock />
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-14 text-center text-white/15 text-[10px] tracking-[0.4em] uppercase font-bold">
        Trusted by 10,000+ deep thinkers worldwide
      </div>
    </section>
  )
}
