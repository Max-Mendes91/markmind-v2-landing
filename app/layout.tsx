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
  title: 'MarkMind — Think on the web without friction',
  description:
    'The lightweight browser extension that expands your intent. Organize, capture, and retrieve thoughts instantly.',
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
