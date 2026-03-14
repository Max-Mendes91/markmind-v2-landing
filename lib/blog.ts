import type { BlogPostMeta } from "@/types"
import type { Document } from "@contentful/rich-text-types"
import type { Asset, EntrySkeletonType, EntryFieldTypes } from "contentful"
import { getClient, isContentfulConfigured } from "@/lib/contentful"

const CONTENT_TYPE = "blogPost"

/** Contentful skeleton type for the blogPost content model */
interface BlogPostSkeleton extends EntrySkeletonType {
  contentTypeId: "blogPost"
  fields: {
    title: EntryFieldTypes.Text
    slug: EntryFieldTypes.Text
    metaDescription: EntryFieldTypes.Text
    keywords: EntryFieldTypes.Array<EntryFieldTypes.Symbol>
    ogTitle: EntryFieldTypes.Text
    h1: EntryFieldTypes.Text
    author: EntryFieldTypes.Text
    datePublished: EntryFieldTypes.Date
    dateModified?: EntryFieldTypes.Date
    tags: EntryFieldTypes.Array<EntryFieldTypes.Symbol>
    image?: EntryFieldTypes.AssetLink
    excerpt: EntryFieldTypes.Text
    readingTime: EntryFieldTypes.Text
    body: EntryFieldTypes.RichText
  }
}

/** Resolved field types after Contentful resolves links */
interface ResolvedBlogFields {
  title: string
  slug: string
  metaDescription: string
  keywords: string[]
  ogTitle: string
  h1: string
  author: string
  datePublished: string
  dateModified?: string
  tags: string[]
  image?: Asset
  excerpt: string
  readingTime: string
  body: Document
}

/** Transform a Contentful asset URL to an absolute HTTPS URL */
const resolveImageUrl = (asset?: Asset): string | undefined => {
  const url = asset?.fields?.file?.url
  if (!url) return undefined
  return typeof url === "string" && url.startsWith("//") ? `https:${url}` : String(url)
}

/** Map Contentful entry fields to BlogPostMeta */
const toMeta = (fields: ResolvedBlogFields): BlogPostMeta => ({
  title: fields.title,
  slug: fields.slug,
  metaDescription: fields.metaDescription,
  keywords: fields.keywords,
  ogTitle: fields.ogTitle,
  h1: fields.h1,
  author: fields.author,
  datePublished: fields.datePublished,
  dateModified: fields.dateModified,
  tags: fields.tags,
  image: resolveImageUrl(fields.image),
  excerpt: fields.excerpt,
  readingTime: fields.readingTime,
})

/** Get all blog post slugs */
export const getBlogPostSlugs = async (): Promise<string[]> => {
  if (!isContentfulConfigured()) return []
  try {
    const client = getClient()
    const entries = await client.getEntries<BlogPostSkeleton>({
      content_type: CONTENT_TYPE,
      select: ["fields.slug"],
      order: ["-fields.datePublished"],
      limit: 100,
    })
    return entries.items.map((item) => item.fields.slug as string)
  } catch {
    return []
  }
}

/** Get a single blog post by slug — returns meta + rich text document */
export const getBlogPost = async (
  slug: string,
): Promise<{ meta: BlogPostMeta; body: Document } | null> => {
  if (!isContentfulConfigured()) return null
  try {
    const client = getClient()
    const entries = await client.getEntries<BlogPostSkeleton>({
      content_type: CONTENT_TYPE,
      "fields.slug": slug,
      limit: 1,
      include: 2,
    })

    if (entries.items.length === 0) return null

    const fields = entries.items[0].fields as unknown as ResolvedBlogFields
    return {
      meta: toMeta(fields),
      body: fields.body,
    }
  } catch {
    return null
  }
}

/** Get all blog posts sorted by datePublished descending */
export const getBlogPosts = async (): Promise<BlogPostMeta[]> => {
  if (!isContentfulConfigured()) return []
  try {
    const client = getClient()
    const entries = await client.getEntries<BlogPostSkeleton>({
      content_type: CONTENT_TYPE,
      order: ["-fields.datePublished"],
      limit: 100,
      include: 1,
    })

    return entries.items.map((item) =>
      toMeta(item.fields as unknown as ResolvedBlogFields),
    )
  } catch {
    return []
  }
}
