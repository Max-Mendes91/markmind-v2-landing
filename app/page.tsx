"use client"

import { useState, useEffect } from "react"
import { useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Moon, Sun, ArrowRight, Search, Tag, Brain } from "lucide-react"
import { Reveal } from "../components/reveal"
import { AnimatedGradient } from "../components/animated-gradient"
import { AnimatedBackground } from "../components/animated-background"



const MotionImage = motion(Image)

export default function Page() {
  const [theme, setTheme] = useState<"light" | "dark">("light")
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  // Animation variants
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

      {/* Header */}
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

      <main className="flex-1 pt-20">
        {/* Hero Section */}
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

        {/* Features Section with Motion Background */}
        <section className="relative overflow-hidden border-y border-black/[0.02] bg-gradient-to-b from-transparent to-black/[0.02] py-24 dark:border-white/[0.02] dark:to-white/[0.02]">
          <div className="absolute inset-0 -z-10">
            <div className="h-full w-full">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
              <motion.div
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{
                  duration: 20,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "linear-gradient(45deg, transparent 45%, rgba(120, 119, 198, 0.1) 50%, transparent 55%)",
                  backgroundSize: "300% 300%",
                }}
              />
            </div>
          </div>

          <div className="container px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-3"
            >
              {features.map((feature, index) => (
                <Reveal key={feature.title}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="group relative overflow-hidden rounded-3xl bg-white/50 p-8 backdrop-blur-sm transition-all hover:bg-white/60 dark:bg-white/5 dark:hover:bg-white/[0.07]"
                  >
                    <motion.div
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.1 }}
                      className="mb-5 inline-flex rounded-2xl bg-black/[0.02] p-3 text-black/70 dark:bg-white/[0.02] dark:text-white/70"
                    >
                      {feature.icon}
                    </motion.div>
                    <h3 className="mb-2 text-lg font-semibold tracking-tight dark:text-white">{feature.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
                  </motion.div>
                </Reveal>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Screenshots Section */}
        <section className="container px-4 py-24">
          <Reveal>
            <h2 className="mb-16 text-center text-3xl font-bold tracking-tight dark:text-white sm:text-4xl">
              Experience the Future of Bookmarking
            </h2>
          </Reveal>

          <div className="relative mx-auto max-w-[1300px]">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid gap-8 md:grid-cols-2"
            >
              {screenshots.map((screenshot, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -10 }}
                  className="group relative aspect-[16/10] overflow-hidden rounded-2xl bg-white/50 p-4 shadow-xl shadow-black/[0.02] backdrop-blur-sm transition-all dark:bg-white/5 dark:shadow-white/[0.02]"
                >
                  <div className="absolute left-4 top-4 flex gap-1.5">
                    <div className="h-2.5 w-2.5 rounded-full bg-black/20 dark:bg-white/20" />
                    <div className="h-2.5 w-2.5 rounded-full bg-black/20 dark:bg-white/20" />
                    <div className="h-2.5 w-2.5 rounded-full bg-black/20 dark:bg-white/20" />
                  </div>
                  <Image
                    src={screenshot.url || "/placeholder.svg"}
                    alt={screenshot.title}
                    width={800}
                    height={450}
                    className="rounded-lg object-cover transition-all duration-500 group-hover:scale-105"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative border-t border-black/[0.02] bg-gradient-to-b from-transparent to-black/[0.01] dark:border-white/[0.02] dark:to-white/[0.01]">
          <div className="container flex min-h-[50vh] items-center justify-center px-4 py-24">
            <Reveal>
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight dark:text-white sm:text-4xl">
                  Transform Your Browsing
                </h2>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  Join thousands of users experiencing the future of bookmark management
                </p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mt-8"
                >
                  <Link
                    href="#install"
                    className="group relative inline-flex h-12 items-center justify-center gap-2 rounded-full bg-black px-8 text-base font-medium text-white transition-all hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
                  >
                    <motion.span initial={{ x: 0 }} whileHover={{ x: -4 }}>
                      Get Started
                    </motion.span>
                    <motion.span initial={{ x: 0 }} whileHover={{ x: 4 }}>
                      <ArrowRight className="h-4 w-4" />
                    </motion.span>
                  </Link>
                </motion.div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/[0.02] transition-colors dark:border-white/[0.02]">
        <div className="container flex h-20 items-center justify-between px-4">
          <p className="text-sm text-gray-500 dark:text-gray-400">© 2024 MarkMind</p>
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
    </div>
  )
}

const features = [
  {
    title: "Smart Organization",
    description: "AI automatically categorizes and tags your bookmarks for effortless organization.",
    icon: <Brain className="h-5 w-5" />,
  },
  {
    title: "Instant Search",
    description: "Find any bookmark instantly with powerful AI-powered search capabilities.",
    icon: <Search className="h-5 w-5" />,
  },
  {
    title: "Smart Tags",
    description: "AI generates relevant tags to make your bookmarks more discoverable.",
    icon: <Tag className="h-5 w-5" />,
  },
]

const screenshots = [
  {
    url: "/placeholder.svg?height=450&width=800",
    title: "Smart Organization View",
  },
  {
    url: "/placeholder.svg?height=450&width=800",
    title: "Quick Search Interface",
  },
]

