import Image from "next/image"
import { Corners } from "@/components/ui/corners"
import { CtaButton } from "@/components/ui/cta-button"
import { SLATE } from "@/lib/tokens"
import type { FooterLink } from "@/types"

const FOOTER_NAV: FooterLink[] = [
  { label: "Features",     href: "/#features" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Reviews",      href: "/#reviews" },
  { label: "Blog",         href: "/blog" },
  { label: "Privacy",      href: "/privacy" },
  { label: "Terms",        href: "/terms" },
  { label: "Open Source",  href: "https://github.com/migsilva89/MarkMind" },
  { label: "Contact",      href: "mailto:themarkmind@gmail.com" },
]

export const Footer = () => (
  <footer className="relative px-4 md:px-8 lg:px-16 pt-24 pb-10 bg-black overflow-hidden">
    {/* Geometric background */}
    <div className="absolute inset-0 geometric-bg opacity-10 pointer-events-none" />

    {/* Ambient glow */}
    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-brand-orange/5 blur-[120px] rounded-full pointer-events-none" />

    <div className="relative z-10 flex flex-col items-center text-center">
      {/* Logo lockup with corner brackets */}
      <div className="relative p-6 mb-6">
        <Corners color={SLATE} />
        <div className="flex items-center gap-3">
          <Image
            src="https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/brand-assets/www.markmind.xyz/logo-1771684912530.png"
            alt="MarkMind Logo"
            width={48}
            height={48}
            className="brightness-110"
          />
          <span className="text-4xl md:text-5xl font-black text-white tracking-tight">
            MarkMind
          </span>
        </div>
      </div>

      {/* Tagline */}
      <p className="text-white/50 text-base max-w-md leading-relaxed mb-8">
        An AI bookmark organizer that keeps
        <br />
        your Chrome folders clean without
        <br />
        taking control away from you.
      </p>

      {/* CTA */}
      <CtaButton href="https://chromewebstore.google.com/detail/markmind/bdobgdkpeffdbonfpokgkbncgnbnjnoo" size="sm" variant="outline">
        Install for Free
      </CtaButton>

      {/* Navigation links */}
      <nav className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
        {FOOTER_NAV.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className="text-body-xs text-white/50 underline underline-offset-4 decoration-white/15 hover:text-white/70 hover:decoration-white/40 transition-colors"
          >
            {label}
          </a>
        ))}
      </nav>

      {/* Copyright */}
      <span className="mt-8 text-badge text-white/50">
        MarkMind &copy; {new Date().getFullYear()}
      </span>
    </div>
  </footer>
)
