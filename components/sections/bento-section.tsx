import { MousePointerClick, Layers2, ShieldCheck, Zap } from "lucide-react"
import { ORANGE, SLATE } from "@/lib/tokens"
import { Corners } from "@/components/ui/corners"
import { SectionBadge } from "@/components/ui/section-badge"
import { BentoChip } from "@/components/ui/bento-chip"
import { BentoCaptureMock } from "@/components/ui/bento-capture-mock"
import { BentoAIMock } from "@/components/ui/bento-ai-mock"
import { BentoCollectionsMock } from "@/components/ui/bento-collections-mock"
import { BentoFlowMock } from "@/components/ui/bento-flow-mock"

// ── Section ───────────────────────────────────────────────────────────────────
export const BentoSection = () => (
  <section id="features" className="relative px-4 md:px-8 lg:px-16 py-28 bg-black overflow-hidden">
    <div className="absolute inset-0 geometric-bg opacity-30 pointer-events-none" />

    {/* Section header */}
    <div className="relative z-10 flex flex-col items-center text-center mb-14">
      <SectionBadge label="Features" />
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-4">
        A Chrome extension that sorts bookmarks{" "}
        <span className="text-gradient-gold-metallic italic">into folders.</span>
      </h2>
      <p className="text-white/50 text-lg max-w-md leading-relaxed">
        Not another bookmarking app. This replaces Chrome&apos;s default button and adds intelligence to it.
      </p>
    </div>

    {/* Editorial grid — varied shapes */}
    <div className="relative z-10 grid grid-cols-12 gap-4 max-w-5xl mx-auto">

      {/* ── Card 1 — TALL featured left (spans 2 rows) ── */}
      <div className="col-span-12 md:col-span-7 md:row-span-2 bento-card relative rounded-3xl p-5 flex flex-col overflow-hidden min-h-[420px]">
        <Corners color={ORANGE} />
        <BentoChip icon={MousePointerClick} label="One Click" color={ORANGE} />
        <div className="flex-1 rounded-2xl bg-white/2 border border-white/5 p-4 overflow-hidden mb-4">
          <BentoCaptureMock />
        </div>
        <div>
          <h3 className="text-card-title font-black text-white mb-1">Smart bookmark suggestions</h3>
          <p className="text-body-sm text-white/50 leading-relaxed">
            Click the icon. MarkMind reads the page title, URL, description, and main heading. It compares that with your full bookmark tree and suggests the best matching folder.
          </p>
        </div>
      </div>

      {/* ── Card 2 — Top right ── */}
      <div className="col-span-12 md:col-span-5 bento-card relative rounded-3xl p-5 flex flex-col overflow-hidden min-h-[200px]">
        <Corners color={SLATE} />
        <BentoChip icon={Layers2} label="Bulk" color={SLATE} />
        <div className="flex-1 rounded-2xl bg-white/2 border border-white/5 p-4 overflow-hidden mb-4">
          <BentoAIMock />
        </div>
        <div>
          <h3 className="text-body-md font-black text-white mb-1">Organize hundreds of bookmarks at once</h3>
          <p className="text-body-xs text-white/50 leading-relaxed">
            Scan your entire bookmark library. Select folders. Let AI propose a cleaner structure. Review every move before anything changes.
          </p>
        </div>
      </div>

      {/* ── Card 3 — Bottom right ── */}
      <div className="col-span-12 md:col-span-5 bento-card relative rounded-3xl p-5 flex flex-col overflow-hidden min-h-[200px]">
        <Corners color={ORANGE} />
        <BentoChip icon={ShieldCheck} label="Control" color={ORANGE} />
        <div className="flex-1 rounded-2xl bg-white/2 border border-white/5 p-4 overflow-hidden mb-4">
          <BentoCollectionsMock />
        </div>
        <div>
          <h3 className="text-body-md font-black text-white mb-1">Full review before apply</h3>
          <p className="text-body-xs text-white/50 leading-relaxed">
            Approve or reject folders. Approve or reject individual bookmarks. Nothing moves without your decision.
          </p>
        </div>
      </div>

      {/* ── Card 4 — WIDE full-width banner ── */}
      <div className="col-span-12 bento-card relative rounded-3xl p-5 flex flex-col md:flex-row gap-6 overflow-hidden min-h-[200px]">
        <Corners color={SLATE} />
        {/* Left: text */}
        <div className="md:w-2/5 flex flex-col justify-center">
          <BentoChip icon={Zap} label="Private" color={SLATE} />
          <h3 className="text-card-title-lg font-black text-white mb-2">Zero backend. Your API key.</h3>
          <p className="text-body-sm text-white/50 leading-relaxed">
            All AI calls go directly from your browser to your chosen provider. No accounts. No MarkMind servers. No data collection.
          </p>
        </div>
        {/* Right: animated mock */}
        <div className="flex-1 rounded-2xl bg-white/2 border border-white/5 p-4 overflow-hidden min-h-[140px]">
          <BentoFlowMock />
        </div>
      </div>
    </div>

    <div className="relative z-10 mt-14 text-center text-white/35 text-badge tracking-[0.4em] uppercase font-bold">
      Used by people with 200, 2,000, even 10,000+ bookmarks
    </div>
  </section>
)
