"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
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
    <section className="container relative flex min-h-[90vh] flex-col items-center justify-center px-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative flex flex-col items-center gap-8"
      >
        <motion.div variants={itemVariants} className="relative">
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
            className="absolute -inset-4 rounded-full bg-black/[0.02] dark:bg-white/[0.02]"
          />
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/markmind-logo-0gYhL95PSC4a6yVacyEL995je8fB2h.png"
            alt="MarkMind Logo"
            width={80}
            height={80}
            className="relative h-20 w-20 dark:invert"
          />
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-6 text-center">
          <Reveal>
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
              <span className="bg-gradient-to-b from-black to-black/70 bg-clip-text text-transparent dark:from-white dark:to-white/70">
                Your Bookmarks,
              </span>
              <br />
              <span className="bg-gradient-to-b from-black/80 to-black/50 bg-clip-text text-transparent dark:from-white/80 dark:to-white/50">
                Powered by AI
              </span>
            </h1>
          </Reveal>
          <Reveal>
            <p className="mx-auto max-w-[600px] text-lg text-gray-600 dark:text-gray-400 sm:text-xl">
              Organize, discover, and access your bookmarks intelligently. Let AI transform your browsing
              experience.
            </p>
          </Reveal>
        </motion.div>

        <motion.div variants={itemVariants} className="flex gap-4">
          <Link
            href="#install"
            className="group relative inline-flex h-12 items-center justify-center gap-2 rounded-full bg-black px-8 text-base font-medium text-white transition-all hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
          >
            <motion.span initial={{ x: 0 }} whileHover={{ x: -4 }}>
              Add to Chrome
            </motion.span>
            <motion.span initial={{ x: 0 }} whileHover={{ x: 4 }}>
              <ArrowRight className="h-4 w-4" />
            </motion.span>
          </Link>
          <Link
            href="#features"
            className="group relative inline-flex h-12 items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-8 text-base font-medium transition-all hover:bg-black/[0.02] dark:border-white/10 dark:bg-gray-900 dark:text-white dark:hover:bg-white/[0.02]"
          >
            Learn more
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
} 