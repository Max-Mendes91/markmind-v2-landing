"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Reveal } from "@/components/reveal"

export function CTA() {
  return (
    <section className="relative border-t border-black/[0.02] bg-gradient-to-b from-transparent to-black/[0.01] dark:border-white/[0.02] dark:to-white/[0.01]">
      <div className="container flex min-h-[40vh] md:min-h-[50vh] items-center justify-center px-4 py-12 md:py-24">
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
  )
} 