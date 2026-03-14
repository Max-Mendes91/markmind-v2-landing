export const BentoFlowMock = () => (
  <div className="relative w-full h-full overflow-hidden flex flex-col gap-2">
    {/* Address bar */}
    <div className="w-full h-6 rounded-lg bg-overlay-5 border border-overlay-8 flex items-center gap-2 px-3 shrink-0">
      <div className="flex gap-1">
        {["bg-red-500/40", "bg-yellow-500/40", "bg-green-500/40"].map((c) => (
          <div key={c} className={`w-2 h-2 rounded-full ${c}`} />
        ))}
      </div>
      <div className="flex-1 h-1.5 rounded bg-overlay-8" />
    </div>

    {/* Content area with sliding panel */}
    <div className="relative flex-1 flex gap-2">
      {/* Page content */}
      <div className="flex-1 flex flex-col gap-2 pt-1">
        {["w-full", "w-5/6", "w-full", "w-4/6", "w-5/6", "w-3/6"].map((w, i) => (
          <div key={i} className={`${w} h-1.5 rounded-full bg-overlay-8`} />
        ))}
      </div>

      {/* Sliding MarkMind panel */}
      <div className="animate-panel-slide absolute top-0 right-0 bottom-0 w-[42%] glass-card rounded-xl border border-brand-slate/20 p-3 flex flex-col gap-2">
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-brand-slate animate-pulse" />
          <span className="text-note font-black text-brand-slate uppercase tracking-wider">MarkMind</span>
        </div>
        <div className="text-note text-overlay-65 dark:text-overlay-50 leading-tight">
          Saved to <span className="text-brand-orange font-bold">Research</span>
        </div>
        <div className="w-full h-1.5 rounded bg-overlay-8" />
        <div className="w-3/4 h-1.5 rounded bg-overlay-8" />
        <div className="flex items-center gap-0.5 mt-auto">
          <div className="w-0.5 h-3 bg-overlay-40 animate-cursor rounded-full" />
        </div>
      </div>
    </div>
  </div>
)
