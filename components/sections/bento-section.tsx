import { MousePointerClick, Layers2, ShieldCheck, Zap } from "lucide-react"
import { ORANGE, SLATE } from "@/lib/tokens"
import { Corners } from "@/components/ui/corners"
import { SectionBadge } from "@/components/ui/section-badge"
import { BentoChip } from "@/components/ui/bento-chip"
import { ThemedGif } from "@/components/ui/themed-gif"
import { CtaButton } from "@/components/ui/cta-button"

// ── Section ───────────────────────────────────────────────────────────────────
export const BentoSection = () => (
  <section id="features" className="relative px-4 md:px-8 lg:px-16 py-28 bg-background overflow-hidden">
    <div className="absolute inset-0 geometric-bg opacity-30 pointer-events-none" />

    {/* Section header */}
    <div className="relative z-10 flex flex-col items-center text-center mb-14 max-w-5xl mx-auto">
      <SectionBadge label="Features" />
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl 2xl:text-6xl font-black text-foreground leading-tight tracking-tight mb-4">
        A Chrome extension that sorts bookmarks{" "}
        <span className="text-gradient-gold-metallic italic">into folders.</span>
      </h2>
      <p className="text-overlay-65 dark:text-overlay-50 text-lg max-w-md leading-relaxed">
        Not another bookmarking app. This replaces Chrome&apos;s default button and adds intelligence to it.
      </p>
    </div>

    {/* Two-column flex layout */}
    <div className="relative z-10 flex flex-col md:flex-row gap-4 max-w-5xl mx-auto items-start">

      {/* ── Left column (wider) ── */}
      <div className="flex flex-col gap-4 w-full md:flex-[7]">

        {/* Card 1 — One Click */}
        <div className="bento-card relative rounded-3xl p-5 flex flex-col overflow-hidden">
          <Corners color={ORANGE} />
          <BentoChip icon={MousePointerClick} label="One Click" color={ORANGE} />
          <div className="w-full rounded-2xl overflow-hidden mb-4">
            <ThemedGif
              lightSrc="/gifs/demo-light.gif"
              darkSrc="/gifs/demo-dark.gif"
              alt="MarkMind smart bookmark suggestion demo"
              className="w-full h-auto"
            />
          </div>
          <div>
            <h3 className="text-card-title font-black text-foreground mb-1">Smart bookmark suggestions</h3>
            <p className="text-body-sm text-overlay-65 dark:text-overlay-50 leading-relaxed">
              Click the icon. MarkMind reads the page title, URL, description, and main heading. It compares that with your full bookmark tree and suggests the best matching folder.
            </p>
          </div>
        </div>

        {/* Card 4 — Private */}
        <div className="bento-card relative rounded-3xl p-5 flex flex-col overflow-hidden">
          <Corners color={SLATE} />
          <BentoChip icon={Zap} label="Private" color={SLATE} />
          <div className="w-full rounded-2xl overflow-hidden mb-4">
            <ThemedGif
              lightSrc="/gifs/private-light.gif"
              darkSrc="/gifs/private-dark.gif"
              alt="MarkMind zero backend demo"
              className="w-full h-auto"
            />
          </div>
          <div>
            <h3 className="text-card-title font-black text-foreground mb-1">Zero backend. Your API key.</h3>
            <p className="text-body-sm text-overlay-65 dark:text-overlay-50 leading-relaxed">
              All AI calls go directly from your browser to your chosen provider. No accounts. No MarkMind servers. No data collection.
            </p>
          </div>
        </div>

      </div>

      {/* ── Right column (narrower) ── */}
      <div className="flex flex-col gap-4 w-full md:flex-[5] self-stretch">

        {/* Card 2 — Bulk */}
        <div className="bento-card relative rounded-3xl p-5 flex flex-col overflow-hidden">
          <Corners color={SLATE} />
          <BentoChip icon={Layers2} label="Bulk" color={SLATE} />
          <div className="w-full rounded-2xl overflow-hidden mb-4">
            <ThemedGif
              lightSrc="/gifs/bulk-light.gif"
              darkSrc="/gifs/bulk-dark.gif"
              alt="MarkMind bulk organize demo"
              className="w-full h-auto"
            />
          </div>
          <div>
            <h3 className="text-body-md font-black text-foreground mb-1">Organize hundreds of bookmarks at once</h3>
            <p className="text-body-xs text-overlay-65 dark:text-overlay-50 leading-relaxed">
              Scan your entire bookmark library. Select folders. Let AI propose a cleaner structure. Review every move before anything changes.
            </p>
          </div>
        </div>

        {/* Card 3 — Control */}
        <div className="bento-card relative rounded-3xl p-5 flex flex-col overflow-hidden">
          <Corners color={ORANGE} />
          <BentoChip icon={ShieldCheck} label="Control" color={ORANGE} />
          <div className="w-full rounded-2xl overflow-hidden mb-4">
            <ThemedGif
              lightSrc="/gifs/control-light.gif"
              darkSrc="/gifs/control-dark.gif"
              alt="MarkMind review and control demo"
              className="w-full h-auto"
            />
          </div>
          <div>
            <h3 className="text-body-md font-black text-foreground mb-1">Full review before apply</h3>
            <p className="text-body-xs text-overlay-65 dark:text-overlay-50 leading-relaxed">
              Approve or reject folders. Approve or reject individual bookmarks. Nothing moves without your decision.
            </p>
          </div>
        </div>

        {/* Card 5 — CTA */}
        <div className="bento-card relative rounded-3xl p-6 flex flex-col justify-between gap-4 overflow-hidden flex-1">
          <Corners color={ORANGE} />
          <div>
            <h3 className="text-card-title font-black text-foreground mb-2">Free. Open source. No account.</h3>
            <p className="text-body-xs text-overlay-65 dark:text-overlay-50 leading-relaxed">
              Install in seconds. Works with OpenAI, Gemini, OpenRouter and more. Your bookmarks, your rules.
            </p>
          </div>
          <CtaButton
            href="https://chromewebstore.google.com/detail/markmind/bdobgdkpeffdbonfpokgkbncgnbnjnoo"
            size="sm"
          >
            Add to Chrome - Free
          </CtaButton>
        </div>

      </div>
    </div>

    <div className="relative z-10 mt-14 text-center text-overlay-65 dark:text-overlay-50 text-badge tracking-[0.4em] uppercase font-bold">
      Used by people with 200, 2,000, even 10,000+ bookmarks
    </div>
  </section>
)
