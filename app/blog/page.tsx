import type { Metadata } from "next"
import { SITE_URL } from "@/lib/tokens"
import { getBlogPosts } from "@/lib/blog"
import { BlogHero } from "@/components/sections/blog-hero"
import { BlogPostList } from "@/components/sections/blog-post-list"

export const revalidate = 3600

export const metadata: Metadata = {
  title: "Blog — AI Tips, Productivity & Browser Workflows | MarkMind",
  description:
    "Tips, guides, and updates about bookmark organization, AI-powered productivity, and getting the most out of MarkMind.",
  openGraph: {
    title: "Blog — AI Tips, Productivity & Browser Workflows | MarkMind",
    description:
      "Tips, guides, and updates about bookmark organization, AI-powered productivity, and getting the most out of MarkMind.",
    url: "https://markmind.xyz/blog",
    siteName: "MarkMind",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MarkMind Blog",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — AI Tips, Productivity & Browser Workflows | MarkMind",
    description:
      "Tips, guides, and updates about bookmark organization and AI-powered productivity.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://markmind.xyz/blog",
  },
}

const BlogPage = async () => {
  const posts = await getBlogPosts()

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "MarkMind Blog",
      description:
        "Tips, guides, and updates about bookmark organization and AI-powered productivity.",
      url: `${SITE_URL}/blog`,
      isPartOf: { "@type": "WebSite", url: SITE_URL },
      inLanguage: "en",
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: posts.map((post, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${SITE_URL}/blog/${post.slug}`,
        name: post.title,
      })),
    },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogHero />
      <BlogPostList posts={posts} />
    </>
  )
}

export default BlogPage
