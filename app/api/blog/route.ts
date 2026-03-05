import { NextResponse } from "next/server"
import { SITE_URL } from "@/lib/tokens"
import { getBlogPosts } from "@/lib/blog"

const ALLOWED_ORIGINS = [
  "chrome-extension://bdobgdkpeffdbonfpokgkbncgnbnjnoo",
  SITE_URL,
  `https://www.${SITE_URL.replace("https://", "")}`,
]

const isAllowedOrigin = (origin: string | null): boolean => {
  if (!origin) return false
  if (ALLOWED_ORIGINS.includes(origin)) return true
  if (process.env.NODE_ENV === "development" && origin.startsWith("chrome-extension://")) return true
  return false
}

const corsHeaders = (origin: string | null) => ({
  "Access-Control-Allow-Origin": isAllowedOrigin(origin) ? origin! : "",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
})

export const GET = async (request: Request) => {
  const origin = request.headers.get("origin")
  const posts = await getBlogPosts()

  const feed = posts.map((post) => ({
    title: post.h1,
    slug: post.slug,
    url: `${SITE_URL}/blog/${post.slug}`,
    excerpt: post.excerpt,
    image: post.image ?? null,
    tags: post.tags,
    datePublished: post.datePublished,
    readingTime: post.readingTime,
    author: post.author,
  }))

  return NextResponse.json({ posts: feed }, { headers: corsHeaders(origin) })
}

export const OPTIONS = (request: Request) => {
  const origin = request.headers.get("origin")
  return new NextResponse(null, { status: 204, headers: corsHeaders(origin) })
}
