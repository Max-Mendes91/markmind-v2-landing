"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Reveal } from "@/components/reveal"

const screenshots = [
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screenshot-1-NXPxQPVZPPPPPPPPPPPPPPPPPPPPPPPP.png",
    title: "Add Current Page",
    description: "Say goodbye to Chrome's boring bookmark button! One click and your new bookmark finds its perfect home - automatically organized on the fly!",
  },
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screenshot-2-NXPxQPVZPPPPPPPPPPPPPPPPPPPPPPPP.png",
    title: "Organize Multiple",
    description: "Organize hundreds of bookmarks while you grab coffee! Our AI examines your bookmarks without judgment and understands what they're actually about.",
  },
]

export function Screenshots() {
  return (
    <section className="relative overflow-hidden border-y border-black/[0.02] bg-gradient-to-b from-transparent to-black/[0.02] py-12 md:py-24 dark:border-white/[0.02] dark:to-white/[0.02]">
      <div className="absolute inset-0 -z-10">
        <div className="h-full w-full">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
        </div>
      </div>

      <div className="container px-4">
        <Reveal>
          <h2 className="mb-4 text-left text-3xl font-bold tracking-tight text-black/90 dark:text-white/90 sm:text-4xl">
            Experience the Future of Bookmarking
          </h2>
          <p className="mb-16 max-w-2xl text-left text-lg text-black/60 dark:text-white/60">
            See how MarkMind transforms your browser's bookmarking experience with AI-powered organization and instant search.
          </p>
        </Reveal>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid gap-8 md:grid-cols-2"
        >
          {screenshots.map((screenshot, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              <motion.div
                whileHover={{ 
                  y: -5, 
                  scale: 1.02,
                  transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
                }}
                className="group relative flex flex-col gap-4 rounded-3xl border border-black/10 bg-black p-6 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all dark:border-white/10 dark:bg-white"
              >
                <div className="overflow-hidden rounded-xl">
                  <div className="flex items-center gap-1.5 mb-3 px-2 py-1.5 bg-gray-800 rounded-t-lg w-fit dark:bg-gray-200">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                    <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                    <div className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.4 }}
                    className="relative overflow-hidden rounded-lg"
                  >
                    <Image
                      src={screenshot.url}
                      alt={screenshot.title}
                      width={800}
                      height={450}
                      className="w-full h-auto object-cover rounded-lg"
                      style={{ 
                        boxShadow: "0 0 0 1px rgba(0,0,0,0.05), 0 2px 8px rgba(0,0,0,0.08)",
                        backgroundColor: "#f8f9fa"
                      }}
                    />
                    <div className="absolute inset-0 rounded-lg shadow-inner pointer-events-none border border-white/10" />
                  </motion.div>
                </div>
                <div className="mt-2 px-1">
                  <h3 className="mb-2 text-lg font-semibold tracking-tight text-white dark:text-black">
                    {screenshot.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/70 dark:text-black/70">
                    {screenshot.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 