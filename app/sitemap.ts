import type { MetadataRoute } from "next"
import { getBlogPosts } from "@/lib/blog"

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const posts = await getBlogPosts()

  const latestPostDate = posts.length > 0
    ? new Date(posts[0].dateModified ?? posts[0].datePublished)
    : new Date("2025-01-01")

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: "https://markmind.app",
      lastModified: latestPostDate,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://markmind.app/blog",
      lastModified: latestPostDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ]

  const blogPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `https://markmind.app/blog/${post.slug}`,
    lastModified: new Date(post.dateModified ?? post.datePublished),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  return [...staticPages, ...blogPages]
}

export default sitemap
