import { ORANGE, SLATE } from "@/lib/tokens"

export const BentoAIMock = () => (
  <div className="relative w-full h-full min-h-[130px]">
    {/* AI indicator */}
    <div className="absolute top-1 right-1 flex items-center gap-1">
      <div className="w-1.5 h-1.5 rounded-full bg-brand-slate animate-pulse" />
      <span className="text-micro text-white/55 font-bold uppercase tracking-wider">Sorting</span>
    </div>

    {/* Drifting chips */}
    <div className="animate-drift-a absolute top-3 left-2">
      <div className="glass-card px-2.5 py-1.5 rounded-xl border border-white/10">
        <div className="text-note text-white/55 font-semibold">Neural plasticity</div>
      </div>
    </div>
    <div className="animate-drift-b absolute top-5 right-3" style={{ animationDelay: "1.5s" }}>
      <div className="glass-card px-2.5 py-1.5 rounded-xl border border-white/10">
        <div className="text-note text-white/55 font-semibold">Figma shadows</div>
      </div>
    </div>
    <div className="animate-drift-c absolute bottom-10 left-6" style={{ animationDelay: "2.8s" }}>
      <div className="glass-card px-2.5 py-1.5 rounded-xl border border-white/10">
        <div className="text-note text-white/55 font-semibold">SaaS pricing</div>
      </div>
    </div>

    {/* Categories row at bottom */}
    <div className="absolute bottom-1 left-0 right-0 flex gap-1.5 justify-center">
      {[
        { label: "Research", color: ORANGE },
        { label: "Design", color: SLATE },
        { label: "Ideas", color: ORANGE },
      ].map(({ label, color }) => (
        <div
          key={label}
          className="px-2 py-0.5 rounded-full"
          style={{ background: `${color}12`, border: `1px solid ${color}25` }}
        >
          <span className="text-micro font-bold" style={{ color }}>{label}</span>
        </div>
      ))}
    </div>
  </div>
)
