import { ORANGE } from "@/lib/tokens"

interface RevealProgressDotsProps {
  revealedCount: number
  totalCards:    number
}

export const RevealProgressDots = ({ revealedCount, totalCards }: RevealProgressDotsProps) => (
  <div className="absolute right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-3">
    {Array.from({ length: totalCards }).map((_, i) => (
      <div
        key={i}
        className="rounded-full transition-all duration-500"
        style={{
          width:      i < revealedCount ? "6px" : "5px",
          height:     i < revealedCount ? "6px" : "5px",
          background: i < revealedCount ? ORANGE : "rgb(var(--overlay) / 0.15)",
          transform:  i < revealedCount ? "scale(1.3)" : "scale(1)",
          boxShadow:  i < revealedCount ? "0 0 8px var(--shadow-brand-orange)" : "none",
        }}
      />
    ))}
  </div>
)
