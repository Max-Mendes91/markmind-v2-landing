export const RevealBrowserMock = () => (
  <div className="w-[175px] glass-card rounded-2xl overflow-hidden border border-white/12 shadow-[0_0_60px_-10px_rgba(255,155,81,0.18)]">
    {/* Chrome bar */}
    <div className="bg-white/4 border-b border-white/6 px-2.5 py-2 flex items-center gap-1.5">
      <div className="flex gap-1">
        {["bg-red-500/40", "bg-yellow-400/40", "bg-green-500/40"].map((c) => (
          <div key={c} className={`w-1.5 h-1.5 rounded-full ${c}`} />
        ))}
      </div>
      <div className="flex-1 h-1.5 rounded-full bg-white/8 mx-1" />
    </div>

    {/* Page content */}
    <div className="p-3 flex flex-col gap-1.5">
      <div className="w-full h-1.5 rounded-full bg-white/8" />
      <div className="w-5/6 h-1.5 rounded-full bg-white/8" />
      <div className="w-full h-1.5 rounded-full bg-white/6" />
      {/* Active highlight — the thought being captured */}
      <div className="rounded-md px-2 py-1.5 animate-pulse-highlight border border-brand-orange/15">
        <div className="w-4/5 h-1.5 rounded-full bg-brand-orange/35" />
      </div>
      <div className="w-3/4 h-1.5 rounded-full bg-white/8" />
      <div className="w-full h-1.5 rounded-full bg-white/6" />
      <div className="w-2/3 h-1.5 rounded-full bg-white/5" />
    </div>

    {/* MarkMind active indicator */}
    <div className="px-3 pb-3 pt-1 border-t border-white/5 flex items-center gap-1.5">
      <div className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
      <span className="text-micro font-bold text-brand-orange/60 uppercase tracking-wider">MarkMind Active</span>
    </div>
  </div>
)
