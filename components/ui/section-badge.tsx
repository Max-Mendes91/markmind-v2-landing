interface SectionBadgeProps {
  label: string
}

export const SectionBadge = ({ label }: SectionBadgeProps) => (
  <div className="mb-5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/3">
    <span className="w-1 h-1 rounded-full bg-white/40" />
    <span className="text-badge font-bold uppercase tracking-[0.25em] text-white/40">{label}</span>
  </div>
)
