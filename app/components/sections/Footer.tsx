"use client"

import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-black/[0.02] transition-colors dark:border-white/[0.02]">
      <div className="container flex h-20 items-center justify-between px-4">
        <p className="text-sm text-gray-500 dark:text-gray-400">© 2025 MarkMind</p>
        <div className="flex items-center gap-6">
          <Link
            href="#"
            className="text-sm text-gray-500 transition-colors hover:text-black dark:text-gray-400 dark:hover:text-white"
          >
            Privacy
          </Link>
          <Link
            href="#"
            className="text-sm text-gray-500 transition-colors hover:text-black dark:text-gray-400 dark:hover:text-white"
          >
            Terms
          </Link>
        </div>
      </div>
    </footer>
  )
} 