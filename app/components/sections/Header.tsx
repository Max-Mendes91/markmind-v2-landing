"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Moon, Sun, Laptop } from "lucide-react"
import { useTheme } from "../../components/theme-provider"

export function Header() {
  const { theme, setTheme } = useTheme()

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
          <div className="flex items-center gap-2">
            <button
              onClick={() => setTheme("light")}
              className={`inline-flex h-9 w-9 items-center justify-center rounded-full border transition-colors ${
                theme === "light" 
                  ? "border-black/10 bg-black text-white hover:bg-black/90" 
                  : "border-black/10 bg-white/10 text-black hover:bg-white/20 dark:border-white/10 dark:text-white"
              }`}
              aria-label="Light mode"
            >
              <Sun className="h-4 w-4" />
            </button>
            <button
              onClick={() => setTheme("dark")}
              className={`inline-flex h-9 w-9 items-center justify-center rounded-full border transition-colors ${
                theme === "dark" 
                  ? "border-white/10 bg-white text-black hover:bg-white/90" 
                  : "border-black/10 bg-black/10 text-black hover:bg-black/20 dark:border-white/10 dark:text-white"
              }`}
              aria-label="Dark mode"
            >
              <Moon className="h-4 w-4" />
            </button>
            <button
              onClick={() => setTheme("system")}
              className={`inline-flex h-9 w-9 items-center justify-center rounded-full border transition-colors ${
                theme === "system" 
                  ? "border-black/10 bg-gradient-to-br from-black to-gray-700 text-white dark:border-white/10 dark:from-white dark:to-gray-300 dark:text-black" 
                  : "border-black/10 bg-gray-100 text-black hover:bg-gray-200 dark:border-white/10 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
              }`}
              aria-label="System theme"
            >
              <Laptop className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </motion.header>
  )
} 