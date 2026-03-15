import Link from "next/link"
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
  primary: "bg-brand-orange [color:black] shadow-[0_0_30px_-8px_var(--shadow-brand-orange)] hover:opacity-90",
  outline: "border border-overlay-15 text-foreground hover:border-overlay-30 hover:bg-overlay-5",
}

const SIZES: Record<CtaSize, string> = {
  lg: "px-6 py-3 sm:px-8 sm:py-4 text-body-sm sm:text-body",
  sm: "px-4 py-2 sm:px-5 sm:py-2.5 text-body-xs sm:text-body-sm",
}

export const CtaButton = ({
  variant = "primary",
  size    = "lg",
  href,
  className,
  children,
}: CtaButtonProps) => {
  const cls = cn(BASE, VARIANTS[variant], SIZES[size], className)
  if (href) {
    const isInternal = href.startsWith("/")
    if (isInternal) return <Link href={href} className={cls}>{children}</Link>
    return <a href={href} className={cls} target="_blank" rel="noopener noreferrer">{children}</a>
  }
  return <button className={cls}>{children}</button>
}
