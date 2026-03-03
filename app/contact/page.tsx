"use client"

import Link from "next/link"
import { ArrowLeft, Mail, Copy, Check, Github } from "lucide-react"
import { useCallback, useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Corners } from "@/components/ui/corners"
import { ORANGE, CONTACT_EMAIL, GITHUB_URL } from "@/lib/tokens"

const ContactPage = () => {
  const [copied, setCopied] = useState(false)

  const handleCopy = useCallback(async () => {
    await navigator.clipboard.writeText(CONTACT_EMAIL)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [])

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black overflow-x-clip">
        <div className="relative px-4 sm:px-6 md:px-8 lg:px-16 pt-28 sm:pt-32 pb-16 sm:pb-20">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-brand-orange/4 blur-[150px] rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm text-white/40 hover:text-white/70 transition-colors mb-6 sm:mb-8"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to Home
            </Link>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-3">
              Get in Touch
            </h1>
            <p className="text-white/50 text-sm sm:text-base max-w-lg leading-relaxed mb-10 sm:mb-12">
              Have a question, found a bug, or just want to say hi? We read every message.
            </p>

            <div className="space-y-4">
              {/* Email card */}
              <div className="group relative bento-card rounded-2xl p-5 sm:p-6">
                <Corners color={ORANGE} />
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                    <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center">
                      <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-brand-orange" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-white/40 text-xs sm:text-sm mb-0.5">Email</p>
                      <p className="text-white text-sm sm:text-base font-medium truncate">
                        {CONTACT_EMAIL}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={handleCopy}
                    className="shrink-0 flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/8 transition-all text-xs sm:text-sm text-white/60 hover:text-white/90 cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-green-400" />
                        <span className="hidden sm:inline text-green-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* GitHub card */}
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bento-card rounded-2xl p-5 sm:p-6 block hover:border-white/15 transition-all"
              >
                <Corners color={ORANGE} />
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <Github className="w-5 h-5 sm:w-6 sm:h-6 text-white/70" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs sm:text-sm mb-0.5">Open Source</p>
                    <p className="text-white text-sm sm:text-base font-medium group-hover:text-brand-orange transition-colors">
                      Report issues or contribute on GitHub
                    </p>
                  </div>
                </div>
              </a>
            </div>

            <p className="text-white/30 text-xs sm:text-sm mt-8 sm:mt-10">
              We&apos;re a small team based in the EU (Poland &amp; Portugal). We typically respond within 48 hours.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default ContactPage
