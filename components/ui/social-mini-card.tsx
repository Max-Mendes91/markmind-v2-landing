import { accentColor } from "@/lib/tokens"
import type { Accent } from "@/lib/tokens"
import { Corners } from "@/components/ui/corners"
import { Stars } from "@/components/ui/stars"

interface SocialMiniCardProps {
  handle: string
  role: string
  snippet: React.ReactNode
  accent?: Accent
}

export const SocialMiniCard = ({
  handle,
  role,
  snippet,
  accent = "orange",
}: SocialMiniCardProps) => {
  const color = accentColor[accent]

  return (
    <div
      className="relative rounded-2xl p-5 flex flex-col gap-3 w-[260px] h-[155px] shrink-0"
      style={{ background: "linear-gradient(180deg, var(--surface-elevated-from) 0%, var(--surface-elevated-to) 100%)" }}
    >
      <Corners color={color} />

      <div className="flex items-center justify-between">
        <span className="text-label font-bold text-overlay-75 dark:text-overlay-60 font-mono">{handle}</span>
        <Stars />
      </div>
      <p className="text-body-xs text-overlay-65 dark:text-overlay-50 leading-relaxed flex-1">&ldquo;{snippet}&rdquo;</p>
      <div className="text-label text-overlay-65 dark:text-overlay-55 uppercase tracking-[0.2em] font-bold">{role}</div>
    </div>
  )
}
