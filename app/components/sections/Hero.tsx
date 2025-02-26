"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Github } from "lucide-react"
import { Reveal } from "@/components/reveal"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="container px-4">
        <div className="mx-auto flex max-w-7xl flex-col items-center text-center">
          <Reveal>
            <h1 className="mb-8 text-4xl font-bold tracking-tight text-black/90 dark:text-white/90 sm:text-5xl md:text-6xl">
              Organize Your Bookmarks <br className="hidden sm:block" />
              with AI
            </h1>
          </Reveal>
          <Reveal>
            <p className="mb-12 max-w-2xl text-lg text-black/60 dark:text-white/60">
              MarkMind is a Chrome extension that uses AI to automatically organize your bookmarks into smart folders, making them easier to find and manage.
            </p>
          </Reveal>
          <Reveal>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="#install"
                className="inline-flex h-12 items-center justify-center rounded-full bg-black px-8 text-sm font-medium text-white transition-colors hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 dark:bg-white dark:text-black dark:hover:bg-white/90 dark:focus:ring-white"
              >
                Add to Chrome
              </Link>
              <Link
                href="https://github.com/yourusername/markmind"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex h-12 items-center justify-center gap-2 rounded-full border border-amber-200 bg-gradient-to-r from-amber-50 to-white px-8 text-sm font-medium text-amber-900 transition-colors hover:from-amber-100 hover:to-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 dark:border-amber-800 dark:from-gray-900 dark:to-gray-950 dark:text-amber-200 dark:hover:from-gray-800 dark:hover:to-gray-900 dark:focus:ring-amber-500 overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  <Github className="h-5 w-5 mr-2 text-amber-700 dark:text-amber-300" />
                  Star on GitHub
                </span>
                <span className="absolute inset-0 rounded-full border-2 border-amber-400/70 dark:border-amber-300/70 animate-border-pulse shadow-[0_0_10px_rgba(251,191,36,0.3)] dark:shadow-[0_0_10px_rgba(252,211,77,0.3)]"></span>
                <span className="absolute inset-0 rounded-full border border-amber-300/30 dark:border-amber-200/30"></span>
              </Link>
            </div>
          </Reveal>
          
          <div className="mt-20 w-full" style={{ maxWidth: "65vw" }}>
            <motion.div 
              className="relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-xl dark:border-white/10 dark:bg-gray-900"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              style={{ width: "100%", maxWidth: "800px", margin: "0 auto" }}
            >
              <div className="flex items-center gap-1.5 bg-gray-100 px-4 py-3 dark:bg-gray-800">
                <div className="h-4 w-4 rounded-full bg-red-500" />
                <div className="h-4 w-4 rounded-full bg-yellow-500" />
                <div className="h-4 w-4 rounded-full bg-green-500" />
                <div className="ml-4 flex h-10 w-full max-w-xl items-center rounded-md bg-white px-3 dark:bg-gray-700">
                  <span className="text-sm text-gray-500 dark:text-gray-400">https://markmind.extension</span>
                </div>
              </div>
              <div className="aspect-video w-full bg-gray-50 dark:bg-gray-800">
                <video 
                  className="h-full w-full object-cover"
                  poster="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screenshot-1-NXPxQPVZPPPPPPPPPPPPPPPPPPPPPPPP.png"
                  controls
                >
                  <source src="https://example.com/markmind-demo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </motion.div>
            <p className="mt-6 text-sm text-black/50 dark:text-white/50">
              Watch how MarkMind transforms your bookmarking experience
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 