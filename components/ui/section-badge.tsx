import type { SectionBadgeProps } from "@/types"

export const SectionBadge = ({ label }: SectionBadgeProps) => (
  <div className="mb-5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-overlay-15 dark:border-overlay-10 bg-overlay-3">
    <span className="w-1 h-1 rounded-full bg-overlay-50 dark:bg-overlay-40" />
    <span className="text-badge font-bold uppercase tracking-[0.25em] text-overlay-60 dark:text-overlay-50">{label}</span>
  </div>
)
