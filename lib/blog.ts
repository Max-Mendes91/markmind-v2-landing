import fs from "fs"
import path from "path"
import type { BlogPostMeta } from "@/types"

const CONTENT_DIR = path.join(process.cwd(), "content", "blog")

/** Get all blog post slugs by reading the content/blog directory */
export const getBlogPostSlugs = (): string[] => {
  if (!fs.existsSync(CONTENT_DIR)) return []

  return fs
    .readdirSync(CONTENT_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""))
}

/** Get a single blog post's metadata + MDX content component */
export const getBlogPost = async (
  slug: string,
): Promise<{ meta: BlogPostMeta; Content: React.ComponentType } | null> => {
  try {
    const mod = await import(`@/content/blog/${slug}.mdx`)
    return {
      meta: mod.metadata as BlogPostMeta,
      Content: mod.default as React.ComponentType,
    }
  } catch {
    return null
  }
}

/** Get all blog posts sorted by datePublished descending */
export const getBlogPosts = async (): Promise<BlogPostMeta[]> => {
  const slugs = getBlogPostSlugs()
  const posts: BlogPostMeta[] = []

  for (const slug of slugs) {
    try {
      const mod = await import(`@/content/blog/${slug}.mdx`)
      posts.push(mod.metadata as BlogPostMeta)
    } catch {
      // Skip posts that fail to load
    }
  }

  return posts.sort(
    (a, b) =>
      new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime(),
  )
}
