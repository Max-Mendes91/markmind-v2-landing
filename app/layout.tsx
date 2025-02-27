import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from './components/theme-provider'

export const metadata: Metadata = {
  title: 'MarkMind - AI-Powered Bookmark Organization',
  description: 'MarkMind is a Chrome extension that uses AI to organize your bookmarks automatically.',

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
