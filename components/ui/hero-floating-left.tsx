import { Bookmark, Sparkles } from "lucide-react"

export const HeroFloatingLeft = () => (
  <>
    {/* 1 — Far outer corner: label tag */}
    <div
      className="absolute left-0 xl:left-[2%] top-[18%] lg:flex hidden lg:opacity-50 xl:opacity-100 items-center gap-2 animate-float"
      style={{ animationDelay: "0s", animationDuration: "6s" }}
    >
      <div className="glass-card flex items-center gap-2 px-3 py-1.5 rounded-full border border-overlay-10">
        <Bookmark className="w-3 h-3 text-brand-orange" />
        <span className="text-caption font-bold text-overlay-70">Current page detected</span>
        <span className="font-mono text-badge text-overlay-60 dark:text-overlay-45">[ ]</span>
      </div>
    </div>

    {/* 2 — Mid arc: capture card */}
    <div
      className="absolute left-[2%] 2xl:left-[5%] top-[37%] xl:block hidden animate-float"
      style={{ animationDelay: "1.2s", animationDuration: "7s" }}
    >
      <div className="glass-card p-3.5 rounded-2xl w-[180px] 2xl:w-[210px]">
        <div className="text-label uppercase tracking-wider text-muted-foreground font-bold mb-2 flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
          Ready to organize
        </div>
        <div className="bg-brand-orange/8 border border-brand-orange/15 rounded-xl p-2.5 mb-3">
          <p className="text-caption text-overlay-75 leading-relaxed">
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
      className="absolute left-[2%] 2xl:left-[12%] top-[76%] xl:flex hidden animate-float"
      style={{ animationDelay: "2.5s", animationDuration: "5.5s" }}
    >
      <div className="glass-card flex items-center gap-2 px-3 py-1.5 rounded-full border border-overlay-10">
        <Sparkles className="w-3.5 h-3.5 text-brand-slate" />
        <div className="flex gap-1.5">
          {[0, 0.2, 0.4].map((delay) => (
            <div
              key={delay}
              className="w-1.5 h-1.5 rounded-full bg-overlay-50 animate-bounce"
              style={{ animationDelay: `${delay}s` }}
            />
          ))}
        </div>
        <span className="text-badge text-overlay-65 dark:text-overlay-50 font-bold">Analyzing your folders&hellip;</span>
      </div>
    </div>
  </>
)
