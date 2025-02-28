import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from './components/theme-provider'

export const metadata: Metadata = {
  title: 'MarkMind - AI-Powered Bookmark Organization',
  description: 'MarkMind is a Chrome extension that uses AI to organize your bookmarks automatically.',
  icons: {
    icon: [
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/markmind-logo-0gYhL95PSC4a6yVacyEL995je8fB2h.png',
        sizes: '32x32',
        type: 'image/png',
      }
    ],
    shortcut: [
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/markmind-logo-0gYhL95PSC4a6yVacyEL995je8fB2h.png',
        type: 'image/png'
      }
    ],
    apple: [
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/markmind-logo-0gYhL95PSC4a6yVacyEL995je8fB2h.png',
        type: 'image/png'
      }
    ]
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider defaultTheme="system">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
