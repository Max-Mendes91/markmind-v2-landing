"use client"

import { useState, useCallback } from "react"
import { Menu, X } from "lucide-react"
import { CtaButton } from "@/components/ui/cta-button"
import type { NavLink } from "@/types"

const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
]

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)

  const toggleMobile  = useCallback(() => setMobileOpen(prev => !prev), [])
  const closeMobile   = useCallback(() => setMobileOpen(false), [])

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl">
      <div className="bg-black/40 backdrop-blur-[20px] border border-white/10 rounded-full px-5 py-3 flex items-center justify-between shadow-[0_0_25px_-5px_rgba(255,155,81,0.15)] ring-1 ring-brand-orange/20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 pl-1 shrink-0">
          <img
            src="https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/brand-assets/www.markmind.xyz/logo-1771684912530.png"
            alt="MarkMind Logo"
            className="w-7 h-7 brightness-110"
          />
          <span className="text-base font-black tracking-tight text-white hidden sm:block">
            MarkMind
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 px-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-badge font-bold text-muted-foreground hover:text-white transition-all uppercase tracking-[0.25em]"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-2 pr-1">
          <CtaButton
            href="#"
            size="sm"
            className="bg-gradient-to-r from-brand-slate to-brand-orange"
          >
            Install Extension
          </CtaButton>
          <button
            className="md:hidden flex items-center justify-center w-8 h-8 text-white ml-2"
            onClick={toggleMobile}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden mt-2 bg-black/80 backdrop-blur-xl border border-white/10 rounded-3xl px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={closeMobile}
              className="text-sm font-bold text-muted-foreground hover:text-white transition-all uppercase tracking-[0.15em]"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
