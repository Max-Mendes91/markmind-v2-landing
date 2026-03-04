import type { Metadata } from "next"
import { notFound } from "next/navigation"
import type { BlogPostMeta } from "@/types"
import { SITE_URL } from "@/lib/tokens"
import { getBlogPostSlugs, getBlogPost } from "@/lib/blog"
import { renderRichText } from "@/lib/rich-text"
import { BlogPostHeader } from "@/components/sections/blog-post-header"
import { BlogPostCta } from "@/components/sections/blog-post-cta"

export const revalidate = 3600

interface PageProps {
  params: Promise<{ slug: string }>
}

export const generateStaticParams = async () => {
  const slugs = await getBlogPostSlugs()
  return slugs.map((slug) => ({ slug }))
}

export const generateMetadata = async ({
  params,
}: PageProps): Promise<Metadata> => {
  const { slug } = await params
  const post = await getBlogPost(slug)

  if (!post) return { title: "Post Not Found | MarkMind" }

  const { meta } = post
  const canonicalUrl = `${SITE_URL}/blog/${meta.slug}`
  const ogImage = meta.image ?? "/og-image.png"

  return {
    title: meta.title,
    description: meta.metaDescription,
    keywords: meta.keywords.join(", "),
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: meta.ogTitle,
      description: meta.metaDescription,
      url: canonicalUrl,
      siteName: "MarkMind",
      type: "article",
      publishedTime: meta.datePublished,
      modifiedTime: meta.dateModified ?? meta.datePublished,
      authors: [meta.author],
      tags: meta.tags,
      images: [
        { url: ogImage, width: 1200, height: 630, alt: meta.h1 },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.ogTitle,
      description: meta.metaDescription,
      images: [ogImage],
    },
  }
}

/** Build JSON-LD structured data for a blog post */
const buildJsonLd = (meta: BlogPostMeta, canonicalUrl: string) => [
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: meta.h1,
    description: meta.metaDescription,
    author: { "@type": "Organization", name: "MarkMind", url: SITE_URL },
    publisher: { "@type": "Organization", name: "MarkMind", url: SITE_URL },
    datePublished: meta.datePublished,
    dateModified: meta.dateModified ?? meta.datePublished,
    mainEntityOfPage: canonicalUrl,
    image: meta.image ?? undefined,
    keywords: meta.keywords,
    inLanguage: "en",
    articleSection: "Blog",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: meta.title, item: canonicalUrl },
    ],
  },
]

const BlogPostPage = async ({ params }: PageProps) => {
  const { slug } = await params
  const post = await getBlogPost(slug)

  if (!post) notFound()

  const { meta, body } = post
  const canonicalUrl = `${SITE_URL}/blog/${meta.slug}`
  const jsonLd = buildJsonLd(meta, canonicalUrl)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <article className="relative">
        <BlogPostHeader meta={meta} />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 md:px-8 pb-12 sm:pb-16 md:pb-20">
          <div className="prose-blog">
            {renderRichText(body)}
          </div>
        </div>
      </article>
      <BlogPostCta />
    </>
  )
}

export default BlogPostPage
