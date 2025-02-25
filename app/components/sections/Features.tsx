"use client"

import { motion } from "framer-motion"
import { Brain, Search, Tag, Lock, Layers, FileCheck } from "lucide-react"
import { Reveal } from "@/components/reveal"

const features = [
  {
    title: "Smart Organization",
    description: "AI analyzes and categorizes your bookmarks automatically, creating an intelligent folder structure based on content and patterns.",
    icon: <Brain className="h-6 w-6" />,
  },
  {
    title: "Privacy First",
    description: "All bookmark processing happens locally in your browser. Your data never leaves your device.",
    icon: <Lock className="h-6 w-6" />,
  },
  {
    title: "Bulk Processing",
    description: "Organize multiple bookmarks at once with AI-powered categorization and smart folder suggestions.",
    icon: <Layers className="h-6 w-6" />,
  },
  {
    title: "Full Control",
    description: "Review and approve all suggested changes before they're applied to your bookmark structure.",
    icon: <FileCheck className="h-6 w-6" />,
  },
  {
    title: "Instant Search",
    description: "Find any bookmark instantly with powerful AI-powered search capabilities across your organized structure.",
    icon: <Search className="h-6 w-6" />,
  },
  {
    title: "Smart Tags",
    description: "AI generates relevant tags to make your bookmarks more discoverable and easier to find later.",
    icon: <Tag className="h-6 w-6" />,
  },
]

export function Features() {
  return (
    <section className="relative overflow-hidden border-y border-black/[0.02] bg-gradient-to-b from-transparent to-black/[0.02] py-12 md:py-24 dark:border-white/[0.02] dark:to-white/[0.02]">
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
        <Reveal>
          <h2 className="mb-16 text-center text-3xl font-bold tracking-tight text-black/90 dark:text-white/90 sm:text-4xl">
            AI-Powered Bookmark Management
          </h2>
        </Reveal>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, index) => (
            <Reveal key={feature.title}>
              <div className="rounded-3xl overflow-hidden">
                <motion.div
                  whileHover={{ 
                    y: -8,
                    scale: 1.02,
                    transition: { type: "spring", stiffness: 300, damping: 20 }
                  }}
                  className="group relative flex h-full min-h-[240px] flex-col border border-black/10 bg-black p-8 shadow-[0_4px_12px_-2px_rgba(0,0,0,0.1)] backdrop-blur-sm transition-colors dark:border-white/10 dark:bg-white"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-white text-black dark:bg-black dark:text-white">
                    {feature.icon}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold tracking-tight text-white dark:text-black">{feature.title}</h3>
                  <p className="text-sm leading-relaxed text-white/70 dark:text-black/70">{feature.description}</p>
                </motion.div>
              </div>
            </Reveal>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 