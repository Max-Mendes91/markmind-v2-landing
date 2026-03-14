import { ORANGE, accentColor } from "@/lib/tokens"
import type { Accent } from "@/lib/tokens"

interface RevealCard {
  id:     string
  pos:    string
  accent: Exclude<Accent, "neutral">
  w:      string
}

interface RevealSvgLinesProps {
  lineData:      Array<{ x1: number; y1: number; x2: number; y2: number }>
  revealedCount: number
  cards:         RevealCard[]
}

export const RevealSvgLines = ({ lineData, revealedCount, cards }: RevealSvgLinesProps) => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block" style={{ zIndex: 5 }} aria-hidden="true">
    {lineData[0] && (
      <>
        <circle
          cx={lineData[0].x1} cy={lineData[0].y1} r="18"
          fill="none" stroke={ORANGE} strokeWidth="0.5"
          opacity={revealedCount > 0 ? 0.12 : 0.06}
          style={{ transition: "opacity 0.6s ease" }}
        />
        <circle cx={lineData[0].x1} cy={lineData[0].y1} r="4" fill={ORANGE} opacity="0.55" />
      </>
    )}
    {lineData.map((d, i) => {
      const revealed = i < revealedCount
      const midX = (d.x1 + d.x2) / 2
      const path = `M ${d.x1} ${d.y1} C ${midX} ${d.y1} ${midX} ${d.y2} ${d.x2} ${d.y2}`
      return (
        <g key={i}>
          <path
            d={path} fill="none" stroke={accentColor[cards[i].accent]}
            strokeWidth="1" strokeLinecap="round" pathLength={1}
            style={{
              strokeDasharray: "1",
              strokeDashoffset: revealed ? 0 : 1,
              opacity: revealed ? 0.28 : 0,
              transition: `stroke-dashoffset 1s cubic-bezier(0.22,1,0.36,1) ${i * 80}ms, opacity 0.4s ease ${i * 80}ms`,
            }}
          />
          <circle
            cx={d.x2} cy={d.y2} r="2.5" fill={accentColor[cards[i].accent]}
            style={{ opacity: revealed ? 0.5 : 0, transition: `opacity 0.35s ease ${i * 80 + 850}ms` }}
          />
        </g>
      )
    })}
  </svg>
)
