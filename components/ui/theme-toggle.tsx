"use client"

import { useCallback, useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark")
  }, [theme, setTheme])

  if (!mounted) {
    return <div className="w-14 h-7" aria-hidden />
  }

  const isDark = theme === "dark"

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      className="relative flex items-center w-14 h-7 rounded-full border border-overlay-10 bg-overlay-5 transition-colors duration-300 hover:bg-overlay-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/50"
    >
      <span
        className={`absolute top-0.5 flex items-center justify-center w-6 h-6 rounded-full bg-brand-orange shadow-sm transition-transform duration-300 ${
          isDark ? "translate-x-[calc(100%+2px)]" : "translate-x-0.5"
        }`}
      >
        {isDark ? (
          <Moon className="w-3.5 h-3.5 text-black" />
        ) : (
          <Sun className="w-3.5 h-3.5 text-black" />
        )}
      </span>
    </button>
  )
}
