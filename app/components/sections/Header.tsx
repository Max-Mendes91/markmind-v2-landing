"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Moon, Sun, ArrowRight } from "lucide-react"

interface HeaderProps {
  theme: "light" | "dark"
  toggleTheme: () => void
}

export function Header({ theme, toggleTheme }: HeaderProps) {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="fixed top-0 z-50 w-full border-b border-black/[0.02] bg-white/70 backdrop-blur-xl transition-colors duration-300 dark:border-white/[0.02] dark:bg-gray-950/70"
    >
      <div className="container flex h-20 items-center justify-between px-4">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-3">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/markmind-logo-0gYhL95PSC4a6yVacyEL995je8fB2h.png"
            alt="MarkMind Logo"
            width={32}
            height={32}
            className="h-8 w-8 dark:invert"
          />
          <span className="text-lg font-medium tracking-tight dark:text-white">MarkMind</span>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/5 bg-white text-gray-600 transition-colors hover:bg-black/[0.02] dark:border-white/5 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-white/[0.02]"
          >
            {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </button>
          <Link
            href="#install"
            className="group relative inline-flex h-10 items-center justify-center gap-2 rounded-full bg-black px-6 text-sm font-medium text-white transition-all hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
          >
            Install Now
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </div>
    </motion.header>
  )
} 