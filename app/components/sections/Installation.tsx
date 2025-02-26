"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { Reveal } from "@/components/reveal"
import { ArrowRight, Key, Download, Settings, X } from "lucide-react"

export function Installation() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const mockImageUrl = "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR2crW_fDtF4uvDa5X2vRPQNYJS0MrbGT5guNgCTb7CSi94DsuP";
  
  return (
    <section className="relative overflow-hidden border-y border-black/[0.02] bg-gradient-to-b from-transparent to-black/[0.02] py-12 md:py-24 dark:border-white/[0.02] dark:to-white/[0.02]" id="install">
      <div className="absolute inset-0 -z-10">
        <div className="h-full w-full">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
        </div>
      </div>

      <div className="container px-4">
        <Reveal>
          <h2 className="mb-16 text-center text-3xl font-bold tracking-tight text-black/90 dark:text-white/90 sm:text-4xl">
            Getting Started
          </h2>
        </Reveal>

        <div className="mx-auto">
          <div className="grid gap-8 md:grid-cols-3">
            {/* Step 1: Install Extension */}
            <Reveal>
              <div className="flex flex-col items-center text-center rounded-xl border border-black/10 bg-white/50 p-6 shadow-md backdrop-blur-sm transition-all hover:border-black/20 hover:bg-white/60 hover:shadow-lg dark:border-white/10 dark:bg-gray-900/50 dark:hover:border-white/20 dark:hover:bg-gray-900/60">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black">
                  <Download className="h-8 w-8" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-black/90 dark:text-white/90">1. Install Extension</h3>
                <p className="mb-6 text-black/70 dark:text-white/70">
                  Add MarkMind to Chrome from the Chrome Web Store. Click the "Add to Chrome" button and confirm the installation.
                </p>
                <button 
                  onClick={() => setSelectedImage(mockImageUrl)}
                  className="group relative h-48 w-full overflow-hidden rounded-lg border border-black/15 bg-white shadow-sm transition-all hover:shadow-md dark:border-white/15 dark:bg-gray-800"
                >
                  <Image 
                    src={mockImageUrl}
                    alt="Chrome Web Store installation example" 
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all group-hover:bg-black/20 group-hover:opacity-100">
                    <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-black">Click to enlarge</span>
                  </div>
                </button>
              </div>
            </Reveal>

            {/* Step 2: Get API Key */}
            <Reveal>
              <div className="flex flex-col items-center text-center rounded-xl border border-black/10 bg-white/50 p-6 shadow-md backdrop-blur-sm transition-all hover:border-black/20 hover:bg-white/60 hover:shadow-lg dark:border-white/10 dark:bg-gray-900/50 dark:hover:border-white/20 dark:hover:bg-gray-900/60">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black">
                  <Key className="h-8 w-8" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-black/90 dark:text-white/90">2. Get API Key</h3>
                <p className="mb-6 text-black/70 dark:text-white/70">
                  Sign up for an OpenAI account and generate an API key from your dashboard. This key powers the AI features of MarkMind.
                </p>
                <button 
                  onClick={() => setSelectedImage(mockImageUrl)}
                  className="group relative h-48 w-full overflow-hidden rounded-lg border border-black/15 bg-white shadow-sm transition-all hover:shadow-md dark:border-white/15 dark:bg-gray-800"
                >
                  <Image 
                    src={mockImageUrl}
                    alt="OpenAI API key generation example" 
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all group-hover:bg-black/20 group-hover:opacity-100">
                    <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-black">Click to enlarge</span>
                  </div>
                </button>
              </div>
            </Reveal>

            {/* Step 3: Configure Extension */}
            <Reveal>
              <div className="flex flex-col items-center text-center rounded-xl border border-black/10 bg-white/50 p-6 shadow-md backdrop-blur-sm transition-all hover:border-black/20 hover:bg-white/60 hover:shadow-lg dark:border-white/10 dark:bg-gray-900/50 dark:hover:border-white/20 dark:hover:bg-gray-900/60">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black">
                  <Settings className="h-8 w-8" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-black/90 dark:text-white/90">3. Configure Extension</h3>
                <p className="mb-6 text-black/70 dark:text-white/70">
                  Open MarkMind, go to settings, and enter your API key. Your key is stored locally and never shared with our servers.
                </p>
                <button 
                  onClick={() => setSelectedImage(mockImageUrl)}
                  className="group relative h-48 w-full overflow-hidden rounded-lg border border-black/15 bg-white shadow-sm transition-all hover:shadow-md dark:border-white/15 dark:bg-gray-800"
                >
                  <Image 
                    src={mockImageUrl}
                    alt="MarkMind extension settings example" 
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all group-hover:bg-black/20 group-hover:opacity-100">
                    <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-black">Click to enlarge</span>
                  </div>
                </button>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <div className="mt-16 rounded-3xl border border-black/15 bg-white/60 p-6 shadow-sm dark:border-white/15 dark:bg-black/60">
              <h3 className="mb-3 text-lg font-semibold text-black/90 dark:text-white/90">Important Note</h3>
              <p className="text-black/70 dark:text-white/70">
                MarkMind processes all your bookmarks locally in your browser. Your API key is only used to communicate directly with OpenAI's servers. We never see your bookmarks or your API key.
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Modal for enlarged image */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-h-[90vh] max-w-[90vw] overflow-hidden rounded-lg bg-white">
            <button 
              className="absolute right-2 top-2 z-10 rounded-full bg-black/70 p-1 text-white transition-all hover:bg-black"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X className="h-5 w-5" />
            </button>
            <Image 
              src={selectedImage}
              alt="Enlarged view"
              width={800}
              height={600}
              className="h-auto max-h-[90vh] w-auto max-w-[90vw] object-contain"
            />
          </div>
        </div>
      )}
    </section>
  )
} 