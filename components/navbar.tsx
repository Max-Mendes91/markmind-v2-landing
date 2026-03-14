"use client"

import { useState, useCallback } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { CtaButton } from "@/components/ui/cta-button"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { MobileMenu } from "@/components/ui/mobile-menu"
import type { NavLink } from "@/types"

const NAV_LINKS: NavLink[] = [
  { label: "Features", href: "/#features" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Blog", href: "/blog" },
]

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)

  const toggleMobile  = useCallback(() => setMobileOpen(prev => !prev), [])
  const closeMobile   = useCallback(() => setMobileOpen(false), [])

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl">
      <div className="bg-background/40 backdrop-blur-[20px] border border-overlay-10 rounded-full px-5 py-3 flex items-center justify-between shadow-[0_0_25px_-5px_var(--shadow-brand-orange-sm)] ring-1 ring-brand-orange/20">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 pl-1 shrink-0">
          <Image
            src="/logo.png"
            alt="MarkMind Logo"
            width={28}
            height={28}
            className="brightness-110"
          />
          <span className="text-base font-black tracking-tight text-foreground hidden sm:block">
            MarkMind
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 px-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-badge font-bold text-muted-foreground hover:text-foreground transition-all uppercase tracking-[0.25em]"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-2 pr-1">
          <ThemeToggle />
          <CtaButton
            href="https://chromewebstore.google.com/detail/markmind/bdobgdkpeffdbonfpokgkbncgnbnjnoo"
            size="sm"
            className="bg-gradient-to-r from-brand-slate to-brand-orange"
          >
            <span className="sm:hidden">Install</span>
            <span className="hidden sm:inline">Add to Chrome — Free</span>
          </CtaButton>
          <button
            className="md:hidden flex items-center justify-center w-8 h-8 text-foreground ml-2"
            onClick={toggleMobile}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && <MobileMenu links={NAV_LINKS} onClose={closeMobile} />}
    </nav>
  )
}
