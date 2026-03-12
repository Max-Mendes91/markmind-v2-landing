import { Bookmark } from "lucide-react"

export const BentoCaptureMock = () => (
  <div className="relative w-full h-full flex flex-col gap-2.5 p-2 pt-10">
    {/* Section label */}
    <div className="absolute top-2 left-2 flex items-center gap-1.5">
      <div className="w-1.5 h-1.5 rounded-full bg-brand-orange/60 animate-pulse" />
      <span className="text-note font-bold uppercase tracking-widest text-overlay-55">Reading mode</span>
    </div>

    {/* Text lines */}
    <div className="w-full h-2 rounded-full bg-overlay-8" />
    <div className="w-5/6 h-2 rounded-full bg-overlay-8" />
    <div className="w-full h-2 rounded-full bg-overlay-6" />

    {/* Highlighted line */}
    <div className="relative my-0.5">
      <div className="w-4/6 h-2.5 rounded-full animate-pulse-highlight border border-brand-orange/20" />
      {/* Popup card */}
      <div className="animate-popup-cycle absolute -top-11 left-0 glass-card px-3 py-2 rounded-xl flex items-center gap-2 border border-brand-orange/30 shadow-[0_4px_20px_var(--shadow-brand-orange-sm)] whitespace-nowrap z-10">
        <div className="w-4 h-4 rounded-full bg-brand-orange flex items-center justify-center shrink-0">
          <Bookmark className="w-2.5 h-2.5 text-black" />
        </div>
        <span className="text-badge font-bold text-brand-orange">Save to MarkMind</span>
      </div>
    </div>

    <div className="w-full h-2 rounded-full bg-overlay-8" />
    <div className="w-3/4 h-2 rounded-full bg-overlay-8" />
    <div className="w-5/6 h-2 rounded-full bg-overlay-6" />
    <div className="w-2/3 h-2 rounded-full bg-overlay-6" />

    {/* Divider */}
    <div className="w-full h-px bg-overlay-5 my-2" />

    {/* Saved note appears */}
    <div className="animate-note-appear glass-card rounded-xl p-3 border border-brand-orange/15">
      <div className="text-note text-overlay-55 font-bold uppercase tracking-widest mb-1.5">Saved note</div>
      <div className="w-full h-1.5 rounded-full bg-brand-orange/20 mb-1.5" />
      <div className="w-4/5 h-1.5 rounded-full bg-brand-orange/15" />
      <div className="flex gap-1 mt-2">
        {["#research", "#brain"].map((t) => (
          <span
            key={t}
            className="px-1.5 py-0.5 rounded-full bg-brand-orange/8 border border-brand-orange/15 text-micro text-brand-orange font-bold"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  </div>
)
