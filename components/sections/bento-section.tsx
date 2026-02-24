import { Bookmark, BrainCircuit, Layers2, Zap } from "lucide-react"
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
  <section className="relative px-4 md:px-8 lg:px-16 py-28 bg-black overflow-hidden">
    <div className="absolute inset-0 geometric-bg opacity-30 pointer-events-none" />

    {/* Section header */}
    <div className="relative z-10 flex flex-col items-center text-center mb-14">
      <SectionBadge label="Features" />
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-4">
        Built for how you{" "}
        <span className="text-gradient-gold-metallic italic">actually think.</span>
      </h2>
      <p className="text-white/50 text-lg max-w-md leading-relaxed">
        Every feature removes a layer of friction between your brain and the web.
      </p>
    </div>

    {/* Editorial grid — varied shapes */}
    <div className="relative z-10 grid grid-cols-12 gap-4 max-w-5xl mx-auto">

      {/* ── Card 1 — TALL featured left (spans 2 rows) ── */}
      <div className="col-span-12 md:col-span-7 md:row-span-2 bento-card relative rounded-3xl p-5 flex flex-col overflow-hidden min-h-[420px]">
        <Corners color={ORANGE} />
        <BentoChip icon={Bookmark} label="Capture" color={ORANGE} />
        <div className="flex-1 rounded-2xl bg-white/2 border border-white/5 p-4 overflow-hidden mb-4">
          <BentoCaptureMock />
        </div>
        <div>
          <h3 className="text-card-title font-black text-white mb-1">Instant Capture</h3>
          <p className="text-body-sm text-white/50 leading-relaxed">
            Highlight any text and save it in one click — without leaving the page.
          </p>
        </div>
      </div>

      {/* ── Card 2 — Top right ── */}
      <div className="col-span-12 md:col-span-5 bento-card relative rounded-3xl p-5 flex flex-col overflow-hidden min-h-[200px]">
        <Corners color={SLATE} />
        <BentoChip icon={BrainCircuit} label="AI" color={SLATE} />
        <div className="flex-1 rounded-2xl bg-white/2 border border-white/5 p-4 overflow-hidden mb-4">
          <BentoAIMock />
        </div>
        <div>
          <h3 className="text-body-md font-black text-white mb-1">AI Organization</h3>
          <p className="text-body-xs text-white/50 leading-relaxed">
            Notes auto-categorize the moment you capture them.
          </p>
        </div>
      </div>

      {/* ── Card 3 — Bottom right ── */}
      <div className="col-span-12 md:col-span-5 bento-card relative rounded-3xl p-5 flex flex-col overflow-hidden min-h-[200px]">
        <Corners color={ORANGE} />
        <BentoChip icon={Layers2} label="Collections" color={ORANGE} />
        <div className="flex-1 rounded-2xl bg-white/2 border border-white/5 p-4 overflow-hidden mb-4">
          <BentoCollectionsMock />
        </div>
        <div>
          <h3 className="text-body-md font-black text-white mb-1">Smart Collections</h3>
          <p className="text-body-xs text-white/50 leading-relaxed">
            Related ideas cluster automatically. Find anything in seconds.
          </p>
        </div>
      </div>

      {/* ── Card 4 — WIDE full-width banner ── */}
      <div className="col-span-12 bento-card relative rounded-3xl p-5 flex flex-col md:flex-row gap-6 overflow-hidden min-h-[200px]">
        <Corners color={SLATE} />
        {/* Left: text */}
        <div className="md:w-2/5 flex flex-col justify-center">
          <BentoChip icon={Zap} label="Native" color={SLATE} />
          <h3 className="text-card-title-lg font-black text-white mb-2">Browser-Native Flow</h3>
          <p className="text-body-sm text-white/50 leading-relaxed">
            The extension lives in your browser. No new tabs, no logins, no context switching — ever.
          </p>
        </div>
        {/* Right: animated mock */}
        <div className="flex-1 rounded-2xl bg-white/2 border border-white/5 p-4 overflow-hidden min-h-[140px]">
          <BentoFlowMock />
        </div>
      </div>
    </div>

    <div className="relative z-10 mt-14 text-center text-white/35 text-badge tracking-[0.4em] uppercase font-bold">
      Trusted by 10,000+ deep thinkers worldwide
    </div>
  </section>
)
