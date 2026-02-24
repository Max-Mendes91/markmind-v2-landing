"use client";

import { useCallback, useRef } from "react";
import { SectionBadge } from "@/components/ui/section-badge";
import { SocialAtmoCard } from "@/components/ui/social-atmo-card";
import { SocialQuoteCard } from "@/components/ui/social-quote-card";
import { SocialMiniCard } from "@/components/ui/social-mini-card";
import type { MiniTestimonial } from "@/types";

// ── Mini card data (duplicated for seamless marquee loop) ─────────────────────
const MINI_TESTIMONIAL_ITEMS: MiniTestimonial[] = [
  {
    handle: "Andres N.",
    role: "Chrome Web Store",
    accent: "orange" as const,
    snippet: (
      <>
        My anxiety is gone — yours is a{" "}
        <strong className="text-white/65 font-semibold">life saver</strong>.
        Thank you!
      </>
    ),
  },
  {
    handle: "Fernando A.",
    role: "Chrome Web Store",
    accent: "slate" as const,
    snippet: (
      <>
        Easy to use. Nice instructions to get{" "}
        <strong className="text-white/65 font-semibold">
          set up with the API key
        </strong>
        .
      </>
    ),
  },
  {
    handle: "Capin D.",
    role: "Chrome Web Store",
    accent: "neutral" as const,
    snippet: (
      <>
        Excellent idea, very{" "}
        <strong className="text-white/65 font-semibold">
          helpful and easy
        </strong>{" "}
        to use.
      </>
    ),
  },
  {
    handle: "Telmo C.",
    role: "Chrome Web Store",
    accent: "orange" as const,
    snippet: (
      <>
        Never thought I needed this until I had{" "}
        <strong className="text-white/65 font-semibold">+2000 bookmarks</strong>
        !
      </>
    ),
  },
  {
    handle: "Stefano J.",
    role: "Chrome Web Store",
    accent: "slate" as const,
    snippet: (
      <>
        My folder is now{" "}
        <strong className="text-white/65 font-semibold">clean</strong>. Would
        highly recommend.
      </>
    ),
  },
  {
    handle: "Bruno DS.",
    role: "Chrome Web Store",
    accent: "neutral" as const,
    snippet: (
      <>
        <strong className="text-white/65 font-semibold">Finally</strong> someone
        did this.
      </>
    ),
  },
];
const MINI_TESTIMONIAL_TRACK = [
  ...MINI_TESTIMONIAL_ITEMS,
  ...MINI_TESTIMONIAL_ITEMS,
];

// ── Section ────────────────────────────────────────────────────────────────────
export const SocialProofSection = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  const slowDown = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    const step = () => {
      const anim = trackRef.current?.getAnimations()[0];
      if (!anim) return;
      const next = Math.max(anim.playbackRate * 0.88, 0.25);
      anim.playbackRate = next;
      if (next > 0.26) rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
  }, []);

  const speedUp = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    const step = () => {
      const anim = trackRef.current?.getAnimations()[0];
      if (!anim) return;
      const next = Math.min(anim.playbackRate * 1.12, 1);
      anim.playbackRate = next;
      if (next < 0.99) rafRef.current = requestAnimationFrame(step);
      else anim.playbackRate = 1;
    };
    rafRef.current = requestAnimationFrame(step);
  }, []);

  return (
    <section
      id="reviews"
      className="relative px-4 md:px-8 lg:px-16 py-28 bg-black overflow-hidden"
    >
      <div className="absolute inset-0 geometric-bg opacity-20 pointer-events-none" />

      {/* Section header */}
      <div className="relative z-10 flex flex-col items-center text-center mb-14">
        <SectionBadge label="Users" />
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-4">
          A bookmark organizer people keep{" "}
          <span className="text-gradient-gold-metallic italic">
            after trying it once.
          </span>
        </h2>
        <p className="text-white/50 text-base max-w-sm leading-relaxed">
          Real reviews from the Chrome Web Store. 4.8 stars from people who
          finally cleaned up their bookmarks.
        </p>
      </div>

      {/* Masonry grid */}
      <div className="relative z-10 grid grid-cols-12 gap-4 max-w-5xl mx-auto">
        <div className="col-span-12 md:col-span-5 md:row-span-2 min-h-[280px] md:min-h-0">
          <SocialAtmoCard accent="orange" />
        </div>

        <div className="col-span-12 md:col-span-7">
          <SocialQuoteCard
            badge="2,000+ bookmarks"
            quote={
              <>
                Never thought I needed this until I had +2000 bookmarks!{" "}
                <strong className="text-white font-semibold">THE BEST!</strong>
              </>
            }
            handle="Telmo C."
            role="Chrome Web Store · Verified Review"
            accent="orange"
          />
        </div>

        <div className="col-span-12 md:col-span-7">
          <SocialQuoteCard
            badge="200 bookmarks"
            quote={
              <>
                I&rsquo;ve organized some random folders with 200 bookmarks.
                From now on I&rsquo;ll use MarkMind over{" "}
                <strong className="text-white font-semibold">
                  Chrome&rsquo;s native bookmark button
                </strong>
                .
              </>
            }
            handle="Elja S."
            role="Chrome Web Store · Verified Review"
            accent="slate"
          />
        </div>

        <div className="col-span-12 md:col-span-7">
          <SocialQuoteCard
            badge="Verified User"
            quote={
              <>
                Amazing, my folder is now{" "}
                <strong className="text-white font-semibold">
                  clean, it&rsquo;s perfect
                </strong>
                , organized everything literally. Would highly recommend.
              </>
            }
            handle="Stefano J."
            role="Chrome Web Store · Verified Review"
            accent="orange"
          />
        </div>

        <div className="col-span-12 md:col-span-5 md:row-span-2 min-h-[280px] md:min-h-0">
          <SocialAtmoCard accent="slate" />
        </div>

        <div className="col-span-12 md:col-span-7">
          <SocialQuoteCard
            badge="Finally"
            quote={
              <>
                <strong className="text-white font-semibold">Finally</strong>{" "}
                someone did this.
              </>
            }
            handle="Bruno DS."
            role="Chrome Web Store · Verified Review"
            accent="slate"
          />
        </div>
      </div>

      {/* Mini testimonial marquee */}
      <div
        className="relative z-10 max-w-5xl mx-auto mt-4 overflow-hidden"
        onMouseEnter={slowDown}
        onMouseLeave={speedUp}
      >
        <div className="pointer-events-none absolute left-0 top-0 h-full w-16 z-10 bg-linear-to-r from-black to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 z-10 bg-linear-to-l from-black to-transparent" />

        <div
          ref={trackRef}
          className="flex w-max animate-marquee-smooth"
          style={{ animationDirection: "reverse" }}
        >
          {MINI_TESTIMONIAL_TRACK.map((item, i) => (
            <div key={i} className="mx-3">
              <SocialMiniCard {...item} />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom stat */}
      <div className="relative z-10 mt-14 text-center text-white/50 text-badge tracking-[0.4em] uppercase font-bold">
        4.8 stars · 26 Chrome Web Store reviews · Open source
      </div>
    </section>
  );
};
