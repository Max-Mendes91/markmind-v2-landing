import { cn } from "@/lib/utils"

type CtaVariant = "primary" | "outline"
type CtaSize    = "lg" | "sm"

interface CtaButtonProps {
  variant?:  CtaVariant
  size?:     CtaSize
  href?:     string
  className?: string
  children:  React.ReactNode
}

const BASE = "inline-flex items-center justify-center gap-3 rounded-full font-black transition-all whitespace-nowrap"

const VARIANTS: Record<CtaVariant, string> = {
  primary: "bg-brand-orange [color:black] shadow-[0_0_30px_-8px_rgba(255,155,81,0.5)] hover:opacity-90",
  outline: "border border-white/15 text-white hover:border-white/30 hover:bg-white/5",
}

const SIZES: Record<CtaSize, string> = {
  lg: "px-8 py-4 text-body",
  sm: "px-5 py-2.5 text-body-xs",
}

export function CtaButton({
  variant = "primary",
  size    = "lg",
  href,
  className,
  children,
}: CtaButtonProps) {
  const cls = cn(BASE, VARIANTS[variant], SIZES[size], className)
  if (href) return <a href={href} className={cls}>{children}</a>
  return <button className={cls}>{children}</button>
}
