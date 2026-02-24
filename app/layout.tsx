import type { Metadata, Viewport } from 'next'
import { Archivo, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
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
  metadataBase: new URL('https://markmind.app'),
  title: 'MarkMind — AI Bookmark Organizer for Chrome',
  description:
    'AI bookmark organizer that sorts your Chrome bookmarks into folders. Bulk organize hundreds at once. Open source, no account required. Free to install.',
  keywords: ['bookmark organizer', 'chrome extension', 'AI bookmarks', 'bookmark manager', 'organize bookmarks', 'browser extension'],
  openGraph: {
    title:       'MarkMind — AI Bookmark Organizer for Chrome',
    description: 'Sort your Chrome bookmarks into folders with AI. Bulk organize hundreds at once. Free & open source.',
    url:         'https://markmind.app',
    siteName:    'MarkMind',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'MarkMind — AI Bookmark Organizer' }],
    type: 'website',
  },
  twitter: {
    card:        'summary_large_image',
    title:       'MarkMind — AI Bookmark Organizer for Chrome',
    description: 'Sort your Chrome bookmarks into folders with AI. Bulk organize hundreds at once. Free & open source.',
    images:      ['/og-image.png'],
  },
}

export const viewport: Viewport = {
  themeColor: '#000000',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${archivo.variable} ${geistMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
              url: 'https://markmind.app',
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased selection:bg-brand-orange selection:text-black">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
