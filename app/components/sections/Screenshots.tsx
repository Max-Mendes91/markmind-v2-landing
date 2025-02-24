"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Reveal } from "@/components/reveal"

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

export function Screenshots() {
  return (
    <section className="container px-4 py-12 md:py-24">
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
  )
} 