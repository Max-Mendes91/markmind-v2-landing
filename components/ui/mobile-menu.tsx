import Link from "next/link"
import type { NavLink } from "@/types"

interface MobileMenuProps {
  links: NavLink[]
  onClose: () => void
}

export const MobileMenu = ({ links, onClose }: MobileMenuProps) => (
  <div className="md:hidden mt-2 bg-background/80 backdrop-blur-xl border border-overlay-10 rounded-3xl px-6 py-4 flex flex-col gap-4">
    {links.map((link) => (
      <Link
        key={link.label}
        href={link.href}
        onClick={onClose}
        className="text-sm font-bold text-muted-foreground hover:text-foreground transition-all uppercase tracking-[0.15em]"
      >
        {link.label}
      </Link>
    ))}
  </div>
)
