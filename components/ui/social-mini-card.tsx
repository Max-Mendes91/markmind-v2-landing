import { ORANGE, SLATE } from "@/lib/tokens"
import { Corners } from "@/components/ui/corners"
import { Stars } from "@/components/ui/stars"

interface SocialMiniCardProps {
  handle: string
  role: string
  snippet: React.ReactNode
  accent?: "orange" | "slate" | "neutral"
}

export const SocialMiniCard = ({
  handle,
  role,
  snippet,
  accent = "orange",
}: SocialMiniCardProps) => {
  const color = accent === "orange" ? ORANGE : accent === "slate" ? SLATE : "rgba(255,255,255,0.35)"

  return (
    <div
      className="relative rounded-2xl p-5 flex flex-col gap-3 w-[260px] h-[155px] shrink-0"
      style={{ background: "linear-gradient(180deg, rgba(20,20,20,0.8) 0%, rgba(5,5,5,0.95) 100%)" }}
    >
      <Corners color={color} />

      <div className="flex items-center justify-between">
        <span className="text-label font-bold text-white/60 font-mono">{handle}</span>
        <Stars />
      </div>
      <p className="text-body-xs text-white/50 leading-relaxed flex-1">&ldquo;{snippet}&rdquo;</p>
      <div className="text-label text-white/55 uppercase tracking-[0.2em] font-bold">{role}</div>
    </div>
  )
}
