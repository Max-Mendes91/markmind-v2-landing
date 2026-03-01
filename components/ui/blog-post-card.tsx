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
  <div className="flex flex-wrap gap-1.5 sm:gap-2">
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
    <div className="relative bento-card rounded-2xl hover:border-white/15 transition-all overflow-hidden">
      <Corners color={ORANGE} />

      <div className="flex flex-col md:flex-row">
        {/* Image */}
        {post.image && (
          <div className="relative w-full md:w-56 lg:w-64 h-44 sm:h-48 md:h-auto shrink-0 bg-white/3 border-b md:border-b-0 md:border-r border-white/5">
            <Image
              src={post.image}
              alt={post.h1}
              fill
              sizes="(max-width: 768px) 100vw, 256px"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        )}

        {/* Content */}
        <div className="flex flex-col justify-between flex-1 p-4 sm:p-5 md:p-6 lg:p-8">
          <div>
            <PostTags tags={post.tags} />

            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold tracking-tight text-white mt-2.5 sm:mt-3 mb-2 sm:mb-3 group-hover:text-brand-orange transition-colors leading-tight">
              {post.h1}
            </h2>

            <p className="text-white/50 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 line-clamp-2">
              {post.excerpt}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3">
            <PostMeta date={post.datePublished} readingTime={post.readingTime} />

            <span className="flex items-center gap-2 text-xs sm:text-sm text-white/40 group-hover:text-brand-orange transition-colors">
              Read article
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </div>
    </div>
  </Link>
)
