"use client"

import { useState, useEffect } from "react"
import { AnimatedGradient } from "../components/animated-gradient"
import { AnimatedBackground } from "../components/animated-background"
import { Header } from "./components/sections/Header"
import { Hero } from "./components/sections/Hero"
import { Features } from "./components/sections/Features"
import { Screenshots } from "./components/sections/Screenshots"
import { Installation } from "./components/sections/Installation"
import { CTA } from "./components/sections/CTA"
import { Footer } from "./components/sections/Footer"
import { motion } from "framer-motion"

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-white transition-colors duration-300 dark:bg-gray-950">
      <AnimatedGradient />
      <AnimatedBackground />
      <Header />
      <main className="flex-1 pt-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ 
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1]
          }}
        >
          <Hero />
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              duration: 0.8, 
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            <Features />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              duration: 0.8, 
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            <Screenshots />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              duration: 0.8, 
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            <Installation />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              duration: 0.8, 
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            <CTA />
          </motion.div>
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}

