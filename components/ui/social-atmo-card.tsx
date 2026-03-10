import { Quote } from "lucide-react"
import { ORANGE, SLATE, ORANGE_DARK, SLATE_DARK } from "@/lib/tokens"
import { Corners } from "@/components/ui/corners"

interface SocialAtmoCardProps {
  accent: "orange" | "slate"
}

export const SocialAtmoCard = ({ accent }: SocialAtmoCardProps) => {
  const isOrange = accent === "orange"
  const color = isOrange ? ORANGE : SLATE
  const from  = isOrange ? ORANGE_DARK : SLATE_DARK
  const glow1 = isOrange ? `${ORANGE}1a` : `${SLATE}14`
  const glow2 = isOrange ? `${ORANGE}0d` : `${SLATE}0a`

  return (
    <div
      className="relative w-full h-full rounded-3xl overflow-hidden flex flex-col justify-end p-7"
      style={{ background: `linear-gradient(145deg, ${from} 0%, var(--background) 100%)` }}
    >
      <Corners color={color} />

      {/* Glows */}
      <div className="absolute top-0 right-0 w-[220px] h-[220px] rounded-full blur-[100px]" style={{ background: glow1 }} />
      <div className="absolute bottom-1/3 left-1/4 w-[140px] h-[140px] rounded-full blur-[70px]" style={{ background: glow2 }} />

      {/* Subtle grid texture */}
      <div className="absolute inset-0 geometric-bg opacity-10" />

      {/* Large decorative quote mark */}
      <Quote className="absolute top-6 left-7 opacity-6" style={{ width: 80, height: 80, color }} />

      {/* Faded reading lines — simulates a page being read */}
      <div className="absolute inset-x-7 top-[30%] flex flex-col gap-2.5 opacity-[0.06]">
        {["w-full", "w-5/6", "w-full", "w-4/6", "w-5/6", "w-full", "w-3/5"].map((w, i) => (
          <div key={i} className={`${w} h-1.5 rounded-full`} style={{ background: color }} />
        ))}
        {/* Highlighted line */}
        <div className="w-4/6 h-2 rounded-full opacity-60" style={{ background: color }} />
        {["w-full", "w-5/6", "w-3/4"].map((w, i) => (
          <div key={i} className={`${w} h-1.5 rounded-full`} style={{ background: color }} />
        ))}
      </div>

      {/* Bottom label */}
      <div className="relative z-10 flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: color }} />
        <span className="text-note font-bold uppercase tracking-[0.3em] opacity-30" style={{ color }}>
          MarkMind User
        </span>
      </div>
    </div>
  )
}
