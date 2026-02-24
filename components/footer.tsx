import { Mail } from "lucide-react"
import type { FooterLinkGroup } from "@/types"

const FOOTER_LINKS: FooterLinkGroup[] = [
  {
    heading: "Product",
    links: [
      { label: "Features",     href: "#features" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Pricing",      href: "#pricing" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Documentation", href: "#" },
      { label: "Changelog",     href: "#" },
      { label: "Support",       href: "#" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy",   href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  },
]

export const Footer = () => (
  <footer className="relative px-4 md:px-8 lg:px-16 py-16 bg-black border-t border-white/5">
    <div className="max-w-5xl mx-auto grid grid-cols-12 gap-8">
      {/* Brand */}
      <div className="col-span-12 md:col-span-4">
        <span className="text-card-title font-black text-white tracking-tight">
          MarkMind
        </span>
        <p className="text-body-xs text-white/30 mt-2 max-w-xs leading-relaxed">
          Capture highlights, annotations, and ideas from any webpage — instantly,
          with zero friction.
        </p>
      </div>

      {/* Link columns */}
      {FOOTER_LINKS.map(({ heading, links }) => (
        <div key={heading} className="col-span-6 md:col-span-2">
          <h3 className="text-badge font-bold uppercase tracking-[0.2em] text-white/50 mb-4">
            {heading}
          </h3>
          <ul className="flex flex-col gap-2">
            {links.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="text-body-xs text-white/30 hover:text-white/60 transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    {/* Bottom bar */}
    <div className="max-w-5xl mx-auto mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
      <span className="text-badge text-white/20">
        &copy; {new Date().getFullYear()} MarkMind. All rights reserved.
      </span>

      <a
        href="mailto:support@markmind.app"
        className="inline-flex items-center gap-2 text-body-xs text-white/30 hover:text-white/50 transition-colors"
      >
        <Mail className="w-3.5 h-3.5" />
        support@markmind.app
      </a>
    </div>
  </footer>
)
