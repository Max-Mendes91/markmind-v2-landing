"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Reveal } from "@/components/reveal"

export function CTA() {
  return (
    <section className="relative overflow-hidden border-y border-black/[0.02] bg-gradient-to-b from-transparent to-black/[0.02] py-12 md:py-24 dark:border-white/[0.02] dark:to-white/[0.02]">
      <div className="absolute inset-0 -z-10">
        <div className="h-full w-full">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
        </div>
      </div>

      <div className="container px-4">
        <div className="flex items-center justify-center">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-black/90 dark:text-white/90 sm:text-4xl">
                Life's Too Short For Messy Bookmarks!
              </h2>
              <p className="mt-4 text-black/60 dark:text-white/60">
                Install MarkMind and experience bookmark nirvana! ✨
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-8"
              >
                <a
                  href="https://chromewebstore.google.com/detail/markmind/bdobgdkpeffdbonfpokgkbncgnbnjnoo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex h-12 items-center justify-center gap-2 rounded-full bg-black px-8 text-sm font-medium text-white transition-all hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
                >
                  <motion.span initial={{ x: 0 }} whileHover={{ x: -4 }}>
                    Add to Chrome
                  </motion.span>
                  <motion.span initial={{ x: 0 }} whileHover={{ x: 4 }}>
                    <ArrowRight className="h-4 w-4" />
                  </motion.span>
                </a>
              </motion.div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
} 