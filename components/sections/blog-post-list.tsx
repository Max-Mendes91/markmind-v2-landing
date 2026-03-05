import { BlogPostCard } from "@/components/ui/blog-post-card"
import type { BlogPostMeta } from "@/types"

interface BlogPostListProps {
  posts: BlogPostMeta[]
}

export const BlogPostList = ({ posts }: BlogPostListProps) => (
  <section className="relative px-4 sm:px-6 md:px-8 lg:px-16 pb-16 sm:pb-20">
    <div className="max-w-4xl mx-auto">
      {posts.length === 0 ? (
        <p className="text-center text-white/40 text-sm sm:text-base py-20">
          No posts yet. Check back soon!
        </p>
      ) : (
        <div className="flex flex-col gap-4 sm:gap-6 md:gap-8">
          {posts.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  </section>
)
