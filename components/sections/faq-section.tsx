"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { SectionBadge } from "@/components/ui/section-badge"
import { safeJsonLd } from "@/lib/utils"
import type { FaqItem } from "@/types"

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "What is an AI bookmark manager?",
    answer:
      "An AI bookmark manager is a browser extension that uses artificial intelligence to automatically sort your bookmarks into folders. Instead of manually dragging links into the right place, the AI reads each page and suggests the best folder based on your existing structure.",
  },
  {
    question: "How does MarkMind organize bookmarks with AI?",
    answer:
      "When you click the extension icon, it reads the current page's title, URL, and description, then analyzes your full bookmark folder structure. It suggests the best matching folder for the bookmark. You review the suggestion and confirm. Nothing moves without your approval.",
  },
  {
    question: "Can I bulk organize hundreds of bookmarks at once?",
    answer:
      "Yes. The V2 bulk organizer processes your entire collection in one pass. It generates folder proposals for each bookmark, and you review all suggestions before applying. You can even close the popup and resume later.",
  },
  {
    question: "Which AI providers are supported?",
    answer:
      "MarkMind works with OpenAI (GPT), Google Gemini, Anthropic (Claude), and OpenRouter. You bring your own API key, which means the AI calls go directly from your browser to the provider. No external servers involved.",
  },
  {
    question: "Is my bookmark data private and secure?",
    answer:
      "Yes. There is no backend, no accounts, and no data collection. Your API key and bookmarks never leave your browser except for the direct AI call to your chosen provider. The extension is fully open source so you can verify this yourself.",
  },
  {
    question: "Is it free to use?",
    answer:
      "The extension is free to install and open source. The only cost is the API usage from your chosen AI provider, which is typically fractions of a cent per bookmark organized. No subscriptions, no premium tiers, no hidden fees.",
  },
  {
    question: "Does it work with my existing Chrome bookmarks?",
    answer:
      "Yes. The extension is designed to work with your current folder structure. It reads your existing Chrome bookmark folders and suggests where new bookmarks fit. It does not replace your organization system. It builds on it.",
  },
  {
    question: "How is this different from Raindrop.io or Pocket?",
    answer:
      "Raindrop.io and Pocket are standalone apps that require you to save links into their own system. MarkMind works directly inside Chrome's native bookmarks. No separate app, no account, no sync issues. It adds AI-powered sorting to the bookmarks you already have.",
  },
  {
    question: "What is the best way to organize thousands of messy bookmarks?",
    answer:
      "Use the bulk organizer. It scans your entire bookmark collection, groups related links, and suggests folder placements using AI. You review and approve the changes in one pass instead of sorting links one by one. Users with over 2,000 bookmarks have organized their entire collection in minutes.",
  },
  {
    question: "Does it work on Firefox, Safari, or Edge?",
    answer:
      "Currently it is available as a Chrome extension from the Chrome Web Store. Since Edge and other Chromium-based browsers support Chrome extensions, it works there as well. Firefox and Safari support is not available yet.",
  },
]

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: {
      "@type": "Answer",
      text: answer,
    },
  })),
}

const FaqAccordionItem = ({ question, answer, index }: FaqItem & { index: number }) => {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-overlay-8 last:border-b-0">
      <h3>
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="flex w-full items-center justify-between gap-4 py-5 text-left cursor-pointer"
          aria-expanded={open}
          aria-controls={`faq-answer-${index}`}
        >
          <span className="text-body-md md:text-card-title font-bold text-foreground leading-snug">
            {question}
          </span>
          <ChevronDown
            className={`w-5 h-5 shrink-0 text-overlay-40 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          />
        </button>
      </h3>
      <div
        id={`faq-answer-${index}`}
        role="region"
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden">
          <p className="pb-5 text-body text-overlay-55 leading-relaxed max-w-2xl">
            {answer}
          </p>
        </div>
      </div>
    </div>
  )
}

export const FaqSection = () => (
  <section id="faq" className="relative px-4 md:px-8 lg:px-16 py-28 bg-background overflow-hidden">
    <div className="absolute inset-0 geometric-bg opacity-10 pointer-events-none" />

    <div className="relative z-10 max-w-3xl mx-auto">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-14">
        <SectionBadge label="FAQ" />
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl 2xl:text-6xl font-black text-foreground leading-tight tracking-tight mb-4">
          Frequently asked questions
        </h2>
        <p className="text-overlay-50 text-base max-w-md leading-relaxed">
          Everything you need to know about MarkMind, the AI bookmark organizer for Chrome.
        </p>
      </div>

      {/* Accordion */}
      <div className="border-t border-overlay-8">
        {FAQ_ITEMS.map((item, i) => (
          <FaqAccordionItem key={item.question} {...item} index={i} />
        ))}
      </div>
    </div>

    {/* FAQPage Schema */}
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: safeJsonLd(FAQ_SCHEMA) }}
    />
  </section>
)
