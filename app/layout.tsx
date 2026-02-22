import type { Metadata, Viewport } from 'next'
import { Archivo, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-archivo',
})
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MarkMind — Capture Ideas While You Browse',
  description:
    'MarkMind is a browser extension that captures highlights, annotations, and ideas from any webpage — instantly, with zero friction.',
  keywords: ['browser extension', 'reading tool', 'highlight', 'annotate', 'knowledge capture'],
  openGraph: {
    title:       'MarkMind — Capture Ideas While You Browse',
    description: 'Zero-friction idea capture for every webpage you read.',
    url:         'https://markmind.app',
    siteName:    'MarkMind',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'MarkMind' }],
    type: 'website',
  },
  twitter: {
    card:        'summary_large_image',
    title:       'MarkMind — Capture Ideas While You Browse',
    description: 'Zero-friction idea capture for every webpage you read.',
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
    <html lang="en">
      <body className="font-sans antialiased selection:bg-brand-orange selection:text-black">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
