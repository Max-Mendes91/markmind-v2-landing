import { accentColor, accentTextVar } from "@/lib/tokens"
import type { Accent } from "@/lib/tokens"
import { Corners } from "@/components/ui/corners"
import { Stars } from "@/components/ui/stars"

interface SocialQuoteCardProps {
  badge: string
  quote: React.ReactNode
  handle: string
  role: string
  accent?: Exclude<Accent, "neutral">
}

export const SocialQuoteCard = ({
  badge,
  quote,
  handle,
  role,
  accent = "orange",
}: SocialQuoteCardProps) => {
  const color      = accentColor[accent]
  const accentText = accentTextVar[accent]
  const initials = handle.replace("@", "").slice(0, 2).toUpperCase()

  return (
    <div className="relative bento-card rounded-3xl p-7 h-full flex flex-col">
      <Corners color={color} />

      {/* Badge */}
      <div
        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border mb-6 self-start"
        style={{ background: `${color}18`, borderColor: `${color}40` }}
      >
        <div className="w-1 h-1 rounded-full" style={{ background: accentText }} />
        <span className="text-note font-bold uppercase tracking-[0.25em]" style={{ color: accentText }}>
          {badge}
        </span>
      </div>

      {/* Quote body */}
      <p className="text-body md:text-body-md text-overlay-80 dark:text-overlay-58 leading-[1.75] flex-1">
        &ldquo;{quote}&rdquo;
      </p>

      {/* Attribution */}
      <div className="mt-7 pt-5 border-t border-overlay-15 dark:border-overlay-6 flex items-center gap-3">
        <div
          className="w-8 h-8 rounded-xl flex items-center justify-center text-badge font-black shrink-0"
          style={{ background: `${color}18`, border: `1px solid ${color}35`, color: `${color}90` }}
        >
          {initials}
        </div>
        <div className="min-w-0">
          <div className="text-caption font-bold text-overlay-75 dark:text-overlay-50">{handle}</div>
          <div className="text-label text-overlay-75 dark:text-overlay-55 uppercase tracking-wider font-bold">{role}</div>
        </div>
        <div className="ml-auto shrink-0"><Stars /></div>
      </div>
    </div>
  )
}
