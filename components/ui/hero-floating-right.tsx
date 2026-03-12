import { Zap } from "lucide-react"

const SUPPORTED_BROWSERS = ["Chrome", "Brave", "Edge", "Opera"] as const

export const HeroFloatingRight = () => (
  <>
    {/* 1 — Far outer corner: label tag */}
    <div
      className="absolute right-0 xl:right-[2%] top-[18%] lg:flex hidden lg:opacity-50 xl:opacity-100 items-center gap-2 animate-float"
      style={{ animationDelay: "0.7s", animationDuration: "6.5s" }}
    >
      <div className="glass-card flex items-center gap-2 px-3 py-1.5 rounded-full border border-overlay-10">
        <span className="text-caption font-bold text-overlay-70">AI suggestion</span>
        <Zap className="w-3 h-3 text-brand-slate" />
      </div>
    </div>

    {/* 2 — Mid arc: note organized card */}
    <div
      className="absolute right-[2%] 2xl:right-[5%] top-[37%] xl:block hidden animate-float"
      style={{ animationDelay: "2s", animationDuration: "8s" }}
    >
      <div className="glass-card p-3.5 rounded-2xl w-[170px] 2xl:w-[200px]">
        <div className="flex items-center gap-2 mb-2.5">
          <div className="w-2 h-2 rounded-full bg-emerald-400" />
          <span className="text-badge font-bold text-overlay-60 uppercase tracking-wider">Destination</span>
        </div>
        <div className="text-body-xs font-bold text-foreground mb-1">Learning</div>
        <div className="text-caption text-overlay-65 dark:text-overlay-50 mb-2.5">Development › Frontend › React</div>
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
      className="absolute right-[2%] 2xl:right-[10%] top-[76%] xl:block hidden animate-float"
      style={{ animationDelay: "3.5s", animationDuration: "7.5s" }}
    >
      <div className="glass-card px-3.5 py-2.5 rounded-2xl border border-overlay-10">
        <div className="text-label uppercase tracking-wider text-muted-foreground font-bold mb-2 flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Compatible browsers
        </div>
        <div className="flex gap-1.5 flex-wrap">
          {SUPPORTED_BROWSERS.map((name) => (
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
