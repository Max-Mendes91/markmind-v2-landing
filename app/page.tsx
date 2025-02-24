"use client"

import { useState, useEffect } from "react"
import { AnimatedGradient } from "../components/animated-gradient"
import { AnimatedBackground } from "../components/animated-background"
import { Header } from "./components/sections/Header"
import { Hero } from "./components/sections/Hero"
import { Features } from "./components/sections/Features"
import { Screenshots } from "./components/sections/Screenshots"
import { CTA } from "./components/sections/CTA"
import { Footer } from "./components/sections/Footer"

export default function Page() {
  const [theme, setTheme] = useState<"light" | "dark">("light")

  useEffect(() => {
    const isDark = theme === "dark"
    document.documentElement.classList.toggle("dark", isDark)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"))
  }

  return (
    <div className="flex min-h-screen flex-col bg-white transition-colors duration-300 dark:bg-gray-950">
      <AnimatedGradient />
      <AnimatedBackground />
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main className="flex-1 pt-10">
        <Hero />
        <Features />
        <Screenshots />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

