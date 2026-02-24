import type { LucideIcon } from "lucide-react"

interface BentoChipProps {
  icon: LucideIcon
  label: string
  color: string
}

export const BentoChip = ({ icon: Icon, label, color }: BentoChipProps) => (
  <div className="inline-flex items-center gap-1.5 mb-3">
    <div
      className="w-5 h-5 rounded-md flex items-center justify-center"
      style={{ background: `${color}18`, border: `1px solid ${color}30` }}
    >
      <Icon className="w-3 h-3" style={{ color }} />
    </div>
    <span className="text-label font-black uppercase tracking-[0.2em]" style={{ color }}>
      {label}
    </span>
  </div>
)
