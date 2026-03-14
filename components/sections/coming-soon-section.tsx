import Image from "next/image"
import { Sparkles, Layers, Cpu, RotateCcw } from "lucide-react"
import { CtaButton } from "@/components/ui/cta-button"
import { Corners } from "@/components/ui/corners"
import { ORANGE, SLATE, GITHUB_URL } from "@/lib/tokens"

const TEASER_ITEMS = [
  { Icon: Layers,    label: "Bulk organize hundreds of bookmarks at once" },
  { Icon: Cpu,       label: "Choose your AI — Gemini, OpenAI, Claude, or OpenRouter" },
  { Icon: RotateCcw, label: "Resume anytime — even after closing the popup" },
  { Icon: Sparkles,  label: "Smarter folder matching with multi-provider support" },
]

export const ComingSoonSection = () => (
  <section className="relative flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4 sm:px-6 md:px-8 py-20 bg-background overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0 geometric-bg opacity-15 pointer-events-none" />
    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-orange/6 blur-[150px] rounded-full pointer-events-none" />
    <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[200px] bg-brand-slate/4 blur-[120px] rounded-full pointer-events-none" />

    <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto">
      {/* Logo */}
      <div className="relative p-6 mb-8">
        <Corners color={SLATE} />
        <Image
          src="/logo.png"
          alt="MarkMind Logo"
          width={80}
          height={80}
          className="brightness-110"
        />
      </div>

      {/* Badge */}
      <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-orange/20 bg-brand-orange/5 text-brand-orange text-body-xs font-bold uppercase tracking-[0.25em] mb-6">
        <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
        V2 Coming Soon
      </span>

      {/* Headline */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-foreground leading-[1.1] mb-4">
        MarkMind
      </h1>
      <p className="text-lg sm:text-xl text-overlay-65 dark:text-overlay-50 leading-relaxed mb-10 max-w-lg">
        AI bookmark organizer for Chrome. A major update is on the way.
      </p>

      {/* Teaser features */}
      <div className="relative w-full max-w-md mb-12">
        <div className="relative bento-card rounded-2xl p-6 sm:p-8">
          <Corners color={ORANGE} />
          <ul className="space-y-4 text-left">
            {TEASER_ITEMS.map(({ Icon, label }) => (
              <li key={label} className="flex items-start gap-3">
                <Icon className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-body-sm text-overlay-75 dark:text-overlay-60 leading-relaxed">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
        <CtaButton href="https://chromewebstore.google.com/detail/markmind/bdobgdkpeffdbonfpokgkbncgnbnjnoo">
          Add to Chrome — Free
        </CtaButton>
        <CtaButton href={GITHUB_URL} variant="outline">
          View on GitHub
        </CtaButton>
      </div>

      <p className="text-body-xs text-overlay-50 dark:text-overlay-40 mt-6">
        Free &amp; open source. No account required.
      </p>
    </div>
  </section>
)
