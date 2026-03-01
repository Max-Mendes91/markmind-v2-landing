import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { Corners } from "@/components/ui/corners"
import { ORANGE } from "@/lib/tokens"
import { formatDate } from "@/lib/utils"
import type { BlogPostMeta } from "@/types"

interface BlogPostCardProps {
  post: BlogPostMeta
}

const PostTags = ({ tags }: { tags: string[] }) => (
  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-2.5 sm:mb-3">
    {tags.slice(0, 4).map((tag) => (
      <span
        key={tag}
        className="px-2 sm:px-2.5 md:px-3 py-0.5 sm:py-1 rounded-full bg-white/5 border border-white/10 text-badge text-white/40 uppercase tracking-wider"
      >
        {tag}
      </span>
    ))}
  </div>
)

const PostMeta = ({ date, readingTime }: { date: string; readingTime: string }) => (
  <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-white/35 text-badge sm:text-body-xs">
    <span className="flex items-center gap-1 sm:gap-1.5">
      <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
      {formatDate(date)}
    </span>
    <span className="flex items-center gap-1 sm:gap-1.5">
      <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
      {readingTime}
    </span>
  </div>
)

export const BlogPostCard = ({ post }: BlogPostCardProps) => (
  <Link href={`/blog/${post.slug}`} className="group">
    <div className="relative bento-card rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 hover:border-white/15 transition-all">
      <Corners color={ORANGE} />

      <div className="grid grid-cols-1 md:grid-cols-[1fr,auto] gap-4 md:gap-6 lg:gap-8 items-start">
        <div className="flex flex-col">
          <PostTags tags={post.tags} />

          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold tracking-tight text-white mb-2 sm:mb-3 group-hover:text-brand-orange transition-colors leading-tight">
            {post.h1}
          </h2>

          <p className="text-white/50 text-xs sm:text-sm leading-relaxed mb-2.5 sm:mb-3 md:mb-4 line-clamp-3">
            {post.excerpt}
          </p>

          <PostMeta date={post.datePublished} readingTime={post.readingTime} />
        </div>

        {post.image && (
          <div className="relative aspect-[16/10] md:aspect-[3/2] md:w-48 lg:w-56 rounded-lg overflow-hidden bg-white/3 shrink-0 order-first md:order-last border border-white/5">
            <Image
              src={post.image}
              alt={post.h1}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 192px, 224px"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        )}
      </div>

      <div className="mt-3 sm:mt-4 md:mt-5 flex items-center gap-2 text-xs sm:text-sm text-white/40 group-hover:text-brand-orange transition-colors">
        Read article
        <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
      </div>
    </div>
  </Link>
)
