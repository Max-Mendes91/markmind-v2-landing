import { Sparkles, FolderTree, CheckCircle2, Globe, Bookmark } from "lucide-react"

interface RevealCardContentProps {
  id: string
  accent: string
}

export const RevealCardContent = ({ id, accent }: RevealCardContentProps) => {
  switch (id) {
    case "reading":
      return (
        <>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-5 h-5 rounded-md flex items-center justify-center" style={{ background: `${accent}18`, border: `1px solid ${accent}30` }}>
              <Globe className="w-3 h-3" style={{ color: accent }} />
            </div>
            <span className="text-label font-black text-white/50 tracking-[0.2em] uppercase">You&apos;re reading</span>
          </div>
          <div className="rounded-xl bg-white/3 border border-white/6 p-3 flex flex-col gap-1.5">
            <div className="w-full h-1.5 rounded-full bg-white/8" />
            <div className="rounded-md px-2 py-2" style={{ background: `${accent}18`, border: `1px solid ${accent}25` }}>
              <p className="text-caption leading-snug" style={{ color: accent }}>
                You find something worth saving.
              </p>
            </div>
            <div className="w-3/4 h-1.5 rounded-full bg-white/8" />
          </div>
        </>
      )

    case "analyze":
      return (
        <>
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-brand-orange animate-pulse" />
            <span className="text-label font-black text-white/50 tracking-[0.2em] uppercase">AI reads the page</span>
          </div>
          <div className="rounded-xl bg-white/3 border border-white/6 p-3">
            <p className="text-body-xs text-white/60 leading-relaxed">
              MarkMind extracts the{" "}
              <span className="text-white border-b border-brand-orange font-semibold">title</span>,{" "}
              <span className="text-white border-b border-brand-orange font-semibold">URL</span>,{" "}
              description, and main heading.
            </p>
          </div>
          <div className="mt-2.5 flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
            <span className="text-label text-white/55 font-bold uppercase tracking-wider">Extracting page context</span>
          </div>
        </>
      )

    case "folders":
      return (
        <>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-5 h-5 rounded-md flex items-center justify-center" style={{ background: `${accent}18`, border: `1px solid ${accent}30` }}>
              <FolderTree className="w-3 h-3" style={{ color: accent }} />
            </div>
            <span className="text-label font-black text-white/50 tracking-[0.2em] uppercase">Your folders are mapped</span>
          </div>
          <div className="rounded-xl bg-white/3 border border-white/6 p-3 mb-3">
            <p className="text-caption text-white/55 leading-relaxed">
              Your entire bookmark structure is rendered as a visual tree and sent along for context.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: accent }} />
            <span className="text-label font-black uppercase tracking-[0.2em]" style={{ color: accent }}>Mapping structure</span>
          </div>
        </>
      )

    case "suggest":
      return (
        <>
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <div className="text-label uppercase tracking-[0.2em] font-black mb-1.5" style={{ color: accent }}>
                Best-fit folder suggested
              </div>
              <h3 className="text-body-lg font-black text-white leading-tight mb-1">Suggested destination</h3>
              <p className="text-caption text-white/50">
                The AI selects an existing folder when possible. If nothing fits, it proposes a new one and clearly marks it as new.
              </p>
            </div>
            <div className="w-9 h-9 rounded-full flex items-center justify-center text-black shrink-0" style={{ background: accent }}>
              <FolderTree className="w-4 h-4" />
            </div>
          </div>
        </>
      )

    case "approve":
      return (
        <>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-5 h-5 rounded-md flex items-center justify-center" style={{ background: `${accent}18`, border: `1px solid ${accent}30` }}>
              <CheckCircle2 className="w-3 h-3" style={{ color: accent }} />
            </div>
            <span className="text-label font-black text-white/50 tracking-[0.2em] uppercase">You approve</span>
          </div>
          <div className="rounded-xl bg-white/3 border border-white/6 p-3 mb-3">
            <p className="text-caption text-white/55 leading-relaxed">
              Click accept and the bookmark is saved to the suggested folder. Or decline and nothing changes.
            </p>
          </div>
          <div className="w-full py-2.5 rounded-xl flex items-center justify-center gap-2 font-black text-badge uppercase tracking-widest text-black" style={{ background: accent }}>
            <Bookmark className="w-3.5 h-3.5" />
            Accept &amp; Save
          </div>
        </>
      )

    default:
      return null
  }
}
