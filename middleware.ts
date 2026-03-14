import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export const middleware = (_request: NextRequest) => {
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64")
  const response = NextResponse.next()

  const csp = [
    "default-src 'self'",
    `script-src 'self' 'nonce-${nonce}' https://www.googletagmanager.com https://va.vercel-scripts.com`,
    // style-src 'unsafe-inline' is required by Tailwind and Next.js inline styles
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' https://images.ctfassets.net data:",
    "font-src 'self' https://fonts.gstatic.com",
    "connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com https://va.vercel-scripts.com",
    "frame-src 'none'",
    "object-src 'none'",
    "base-uri 'self'",
  ].join("; ")

  response.headers.set("Content-Security-Policy", csp)
  response.headers.set("x-nonce", nonce)

  return response
}

export const config = {
  matcher: [
    // Match all routes except static files and _next internals
    { source: "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|txt|xml)$).*)" },
  ],
}
