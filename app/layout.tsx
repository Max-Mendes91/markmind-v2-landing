import type { Metadata, Viewport } from 'next'
import { headers } from 'next/headers'
import { Archivo, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { GoogleAnalytics } from '@/components/google-analytics'
import { CookieConsent } from '@/components/cookie-consent'
import { ThemeProvider } from '@/components/theme-provider'
import { safeJsonLd } from '@/lib/utils'
import './globals.css'

const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-archivo',
})
const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://markmind.xyz'),
  title: 'AI Bookmark Organizer for Chrome | MarkMind',
  description:
    'AI bookmark organizer that sorts your Chrome bookmarks into folders. Bulk organize hundreds at once. Open source, no account required. Free to install.',
  keywords: ['bookmark organizer', 'chrome extension', 'AI bookmarks', 'bookmark manager', 'organize bookmarks', 'browser extension'],
  openGraph: {
    title:       'AI Bookmark Organizer for Chrome | MarkMind',
    description: 'Sort your Chrome bookmarks into folders with AI. Bulk organize hundreds at once. Free & open source.',
    url:         'https://markmind.xyz',
    siteName:    'MarkMind',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'MarkMind — AI Bookmark Organizer' }],
    type: 'website',
  },
  twitter: {
    card:        'summary_large_image',
    title:       'AI Bookmark Organizer for Chrome | MarkMind',
    description: 'Sort your Chrome bookmarks into folders with AI. Bulk organize hundreds at once. Free & open source.',
    images:      ['/og-image.png'],
  },
}

export const viewport: Viewport = {
  themeColor: '#000000',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const nonce = (await headers()).get('x-nonce') ?? undefined

  return (
    <html lang="en" className={`${archivo.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased selection:bg-brand-orange selection:text-black">
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <Analytics />
        <GoogleAnalytics nonce={nonce} />
        <CookieConsent />
        <script
          nonce={nonce}
          suppressHydrationWarning
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: safeJsonLd({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'MarkMind',
              applicationCategory: 'BrowserApplication',
              operatingSystem: 'Chrome',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.8',
                reviewCount: '26',
              },
              description: 'AI bookmark organizer that sorts your Chrome bookmarks into folders. Bulk organize hundreds at once. Open source, no account required.',
              url: 'https://markmind.xyz',
            }),
          }}
        />
      </body>
    </html>
  )
}
