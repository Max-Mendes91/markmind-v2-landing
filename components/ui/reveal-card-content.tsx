import { Sparkles, BrainCircuit, CheckCircle2, Link2, Bookmark } from "lucide-react"

interface RevealCardContentProps {
  id: string
  accent: string
}

export const RevealCardContent = ({ id, accent }: RevealCardContentProps) => {
  switch (id) {
    case "highlight":
      return (
        <>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-5 h-5 rounded-md flex items-center justify-center" style={{ background: `${accent}18`, border: `1px solid ${accent}30` }}>
              <Link2 className="w-3 h-3" style={{ color: accent }} />
            </div>
            <span className="text-label font-black text-white/50 tracking-[0.2em] uppercase">Browser Highlight</span>
          </div>
          <div className="rounded-xl bg-white/3 border border-white/6 p-3 flex flex-col gap-1.5">
            <div className="w-full h-1.5 rounded-full bg-white/8" />
            <div className="rounded-md px-2 py-2" style={{ background: `${accent}18`, border: `1px solid ${accent}25` }}>
              <p className="text-caption leading-snug" style={{ color: accent }}>
                &ldquo;Intelligence is the ability to adapt to change&hellip;&rdquo;
              </p>
            </div>
            <div className="w-3/4 h-1.5 rounded-full bg-white/8" />
          </div>
        </>
      )

    case "annotation":
      return (
        <>
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-brand-orange animate-pulse" />
            <span className="text-label font-black text-white/50 tracking-[0.2em] uppercase">AI Annotation</span>
          </div>
          <div className="rounded-xl bg-white/3 border border-white/6 p-3">
            <p className="text-body-xs text-white/60 italic leading-relaxed">
              &ldquo;Intelligence is the ability to{" "}
              <span className="text-white border-b border-brand-orange not-italic font-semibold">adapt</span>
              {" "}to change.&rdquo;
            </p>
          </div>
          <div className="mt-2.5 flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
            <span className="text-label text-white/30 font-bold uppercase tracking-wider">AI enriching context</span>
          </div>
        </>
      )

    case "capture":
      return (
        <>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-5 h-5 rounded-md flex items-center justify-center" style={{ background: `${accent}18`, border: `1px solid ${accent}30` }}>
              <BrainCircuit className="w-3 h-3" style={{ color: accent }} />
            </div>
            <span className="text-label font-black text-white/50 tracking-[0.2em] uppercase">Capture UI</span>
          </div>
          <div className="rounded-xl bg-white/3 border border-white/6 p-3 mb-3">
            <p className="text-badge italic text-white/50 leading-relaxed">
              &ldquo;Intelligence is the ability to adapt&hellip;&rdquo;
            </p>
          </div>
          <div className="w-full py-2.5 rounded-xl flex items-center justify-center gap-2 font-black text-badge uppercase tracking-widest text-black" style={{ background: accent }}>
            <Bookmark className="w-3.5 h-3.5" />
            Save to MarkMind
          </div>
        </>
      )

    case "synced":
      return (
        <>
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <div className="text-label uppercase tracking-[0.2em] font-black mb-1.5" style={{ color: accent }}>
                Synced
              </div>
              <h3 className="text-body-lg font-black text-white leading-tight mb-1">Adaptability in AI</h3>
              <p className="text-caption text-white/40">Captured from Hawking&rsquo;s Archive.</p>
            </div>
            <div className="w-9 h-9 rounded-full flex items-center justify-center text-black shrink-0" style={{ background: accent }}>
              <CheckCircle2 className="w-4 h-4" />
            </div>
          </div>
          <div className="pt-3 border-t border-white/6 flex items-center gap-2">
            <Link2 className="w-3 h-3 text-white/25" />
            <span className="text-label text-white/30 font-mono">source: hawking.edu/lectures/ai</span>
          </div>
        </>
      )

    case "saved":
      return (
        <>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-5 h-5 rounded-md flex items-center justify-center" style={{ background: `${accent}18`, border: `1px solid ${accent}30` }}>
              <CheckCircle2 className="w-3 h-3" style={{ color: accent }} />
            </div>
            <span className="text-label font-black text-white/50 tracking-[0.2em] uppercase">Knowledge Saved</span>
          </div>
          <div className="rounded-xl bg-white/3 border border-white/6 p-3 mb-3">
            <p className="text-caption text-white/55 leading-relaxed">
              Bookmark enriched with context, tags auto-applied, and linked to 3 related captures.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: accent }} />
            <span className="text-label font-black uppercase tracking-[0.2em]" style={{ color: accent }}>Auto-organized</span>
          </div>
        </>
      )

    default:
      return null
  }
}
