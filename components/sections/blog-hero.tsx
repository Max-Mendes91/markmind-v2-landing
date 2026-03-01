import { SectionBadge } from "@/components/ui/section-badge"

export const BlogHero = () => (
  <section className="relative px-4 sm:px-6 md:px-8 lg:px-16 pt-6 sm:pt-8 pb-10 sm:pb-12 md:pb-16">
    {/* Geometric background — hidden on XS mobile */}
    <div className="hidden sm:block absolute inset-0 geometric-bg opacity-10 pointer-events-none" />

    {/* Ambient glow — hidden on XS mobile */}
    <div className="hidden sm:block absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-brand-orange/5 blur-[120px] rounded-full pointer-events-none" />

    <div className="relative z-10 flex flex-col items-center text-center">
      <SectionBadge label="Blog" />

      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-3 sm:mb-4">
        Thoughts on{" "}
        <span className="text-gradient-gold-metallic italic">
          bookmarks &amp; AI
        </span>
      </h1>

      <p className="text-white/50 text-sm sm:text-base max-w-md leading-relaxed">
        Tips, guides, and behind-the-scenes updates on building an AI-powered
        bookmark organizer.
      </p>
    </div>
  </section>
)
