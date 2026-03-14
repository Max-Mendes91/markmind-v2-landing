import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, Clock } from "lucide-react"
import { formatDate } from "@/lib/utils"
import type { BlogPostMeta } from "@/types"

interface BlogPostHeaderProps {
  meta: BlogPostMeta
}

export const BlogPostHeader = ({ meta }: BlogPostHeaderProps) => (
  <header className="relative px-4 sm:px-6 md:px-8 lg:px-16 pt-6 sm:pt-8 pb-6 sm:pb-8 md:pb-12">
    {/* Ambient glow — hidden on XS mobile */}
    <div className="hidden sm:block absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-orange/4 blur-[150px] rounded-full pointer-events-none" />

    <div className="relative z-10 max-w-3xl mx-auto">
      {/* Back link */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 text-body-xs text-overlay-40 hover:text-overlay-70 transition-colors mb-5 sm:mb-6 md:mb-8"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        Back to Blog
      </Link>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4 md:mb-5">
        {meta.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 sm:px-2.5 md:px-3 py-0.5 sm:py-1 rounded-full bg-overlay-5 border border-overlay-10 text-badge text-overlay-40 uppercase tracking-wider"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Title (H1) */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-foreground mb-3 sm:mb-4 md:mb-6 leading-tight">
        {meta.h1}
      </h1>

      {/* Meta info */}
      <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-overlay-35 text-body-xs mb-6 sm:mb-8 md:mb-10">
        <span className="flex items-center gap-1.5">
          <Calendar className="w-3.5 h-3.5" />
          {formatDate(meta.datePublished)}
        </span>
        <span className="flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5" />
          {meta.readingTime}
        </span>
      </div>

      {/* Hero image */}
      {meta.image && (
        <div className="relative aspect-video rounded-xl overflow-hidden bg-overlay-3 mb-6 sm:mb-8 md:mb-10 border border-overlay-8">
          <Image
            src={meta.image}
            alt={meta.h1}
            fill
            sizes="(max-width: 768px) 100vw, 720px"
            className="object-cover"
            priority
          />
        </div>
      )}
    </div>
  </header>
)
