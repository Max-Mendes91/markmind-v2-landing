import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/tokens"

// ── V2 blog sitemap — uncomment when ready to launch ────────────────────────
// import { getBlogPosts } from "@/lib/blog"

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  // ── V2 blog entries — uncomment when ready to launch ────────────────────
  // const posts = await getBlogPosts()
  //
  // const latestPostDate = posts.length > 0
  //   ? new Date(posts[0].dateModified ?? posts[0].datePublished)
  //   : new Date()

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    // ── V2 blog page — uncomment when ready to launch ───────────────────
    // {
    //   url: `${SITE_URL}/blog`,
    //   lastModified: latestPostDate,
    //   changeFrequency: "weekly",
    //   priority: 0.8,
    // },
    {
      url: `${SITE_URL}/privacy`,
      lastModified: new Date("2026-03-01"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/terms`,
      lastModified: new Date("2026-03-01"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: new Date("2026-03-01"),
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ]

  // ── V2 blog posts — uncomment when ready to launch ──────────────────────
  // const blogPages: MetadataRoute.Sitemap = posts.map((post) => ({
  //   url: `${SITE_URL}/blog/${post.slug}`,
  //   lastModified: new Date(post.dateModified ?? post.datePublished),
  //   changeFrequency: "monthly" as const,
  //   priority: 0.7,
  // }))
  //
  // return [...staticPages, ...blogPages]

  return staticPages
}

export default sitemap
