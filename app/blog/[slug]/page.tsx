import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getBlogPostSlugs, getBlogPost } from "@/lib/blog"
import { BlogPostHeader } from "@/components/sections/blog-post-header"
import { BlogPostCta } from "@/components/sections/blog-post-cta"

interface PageProps {
  params: Promise<{ slug: string }>
}

export const generateStaticParams = () =>
  getBlogPostSlugs().map((slug) => ({ slug }))

export const generateMetadata = async ({
  params,
}: PageProps): Promise<Metadata> => {
  const { slug } = await params
  const post = await getBlogPost(slug)

  if (!post) return { title: "Post Not Found | MarkMind" }

  const { meta } = post
  const canonicalUrl = `https://markmind.app/blog/${meta.slug}`
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

const BlogPostPage = async ({ params }: PageProps) => {
  const { slug } = await params
  const post = await getBlogPost(slug)

  if (!post) notFound()

  const { meta, Content } = post
  const canonicalUrl = `https://markmind.app/blog/${meta.slug}`

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: meta.h1,
      description: meta.metaDescription,
      author: {
        "@type": "Organization",
        name: "MarkMind",
        url: "https://markmind.app",
      },
      publisher: {
        "@type": "Organization",
        name: "MarkMind",
        url: "https://markmind.app",
      },
      datePublished: meta.datePublished,
      dateModified: meta.dateModified ?? meta.datePublished,
      mainEntityOfPage: canonicalUrl,
      image: meta.image
        ? `https://markmind.app${meta.image}`
        : undefined,
      keywords: meta.keywords,
      inLanguage: "en",
      articleSection: "Blog",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://markmind.app",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: "https://markmind.app/blog",
        },
        { "@type": "ListItem", position: 3, name: meta.title },
      ],
    },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="relative">
        <BlogPostHeader meta={meta} />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 md:px-8 pb-12 sm:pb-16 md:pb-20">
          <div className="prose-blog">
            <Content />
          </div>
        </div>
      </article>
      <BlogPostCta />
    </>
  )
}

export default BlogPostPage
