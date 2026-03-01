import { ArrowRight } from "lucide-react"
import { SectionBadge } from "@/components/ui/section-badge"
import { CtaButton } from "@/components/ui/cta-button"
import { Corners } from "@/components/ui/corners"
import { ORANGE } from "@/lib/tokens"

export const BlogPostCta = () => (
  <section className="relative px-4 sm:px-6 md:px-8 lg:px-16 py-12 sm:py-16 md:py-20 lg:py-24 short:py-10 bg-black">
    {/* Geometric background — hidden on XS mobile */}
    <div className="hidden sm:block absolute inset-0 geometric-bg opacity-10 pointer-events-none" />

    {/* Ambient glow — hidden on XS mobile */}
    <div className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-brand-orange/5 blur-[120px] rounded-full pointer-events-none" />

    <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto">
      <div className="relative p-6 mb-4 sm:mb-6">
        <Corners color={ORANGE} />
        <SectionBadge label="Try MarkMind" />
      </div>

      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white leading-tight tracking-tight mb-3 sm:mb-4">
        Ready to organize your bookmarks?
      </h2>

      <p className="text-white/50 text-sm sm:text-base max-w-md leading-relaxed mb-6 sm:mb-8">
        Free to install. Bring your own API key. No account required.
      </p>

      <CtaButton
        href="https://chromewebstore.google.com/detail/markmind/bdobgdkpeffdbonfpokgkbncgnbnjnoo"
        variant="primary"
        size="lg"
      >
        Add MarkMind to Chrome
        <ArrowRight className="w-4 h-4" />
      </CtaButton>
    </div>
  </section>
)
