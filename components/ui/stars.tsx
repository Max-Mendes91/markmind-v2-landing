import { Star } from "lucide-react"

export const Stars = () => (
  <div className="flex gap-0.5" aria-hidden="true">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className="w-2.5 h-2.5 fill-brand-orange/80 text-brand-orange/80 dark:fill-brand-orange/55 dark:text-brand-orange/55" />
    ))}
  </div>
)
