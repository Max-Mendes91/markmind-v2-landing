"use client"

import { useCallback, useEffect, useRef, useState } from "react"

const TOTAL_CARDS = 5
const PX_PER_CARD = 200

interface LineCoord {
  x1: number
  y1: number
  x2: number
  y2: number
}

export const useRevealScroll = () => {
  const scrollRef  = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const browserRef = useRef<HTMLDivElement>(null)
  const cardRefs   = useRef<(HTMLDivElement | null)[]>([])

  const [revealedCount, setRevealedCount] = useState(0)
  const [lineData, setLineData] = useState<LineCoord[]>([])

  // Scroll-driven reveal — no wheel hijacking
  useEffect(() => {
    const onScroll = () => {
      const outer = scrollRef.current
      if (!outer) return
      const scrolled = Math.max(0, -outer.getBoundingClientRect().top)
      const next = Math.min(TOTAL_CARDS, Math.floor(scrolled / PX_PER_CARD))
      setRevealedCount(next)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Compute SVG line coordinates
  const computeLines = useCallback(() => {
    const section = sectionRef.current
    const browser = browserRef.current
    if (!section || !browser) return

    const sRect = section.getBoundingClientRect()
    const bRect = browser.getBoundingClientRect()
    const bx = bRect.left - sRect.left + bRect.width  / 2
    const by = bRect.top  - sRect.top  + bRect.height / 2

    setLineData(
      cardRefs.current.map(el => {
        if (!el) return { x1: bx, y1: by, x2: bx, y2: by }
        const r = el.getBoundingClientRect()
        return {
          x1: bx,
          y1: by,
          x2: r.left - sRect.left + r.width  / 2,
          y2: r.top  - sRect.top  + r.height / 2,
        }
      })
    )
  }, [])

  useEffect(() => {
    const t = setTimeout(computeLines, 150)
    window.addEventListener("resize", computeLines)
    return () => { clearTimeout(t); window.removeEventListener("resize", computeLines) }
  }, [computeLines])

  const progress = revealedCount / TOTAL_CARDS
  const outerHeight = `calc(100vh + ${TOTAL_CARDS * PX_PER_CARD}px)`

  return {
    scrollRef,
    sectionRef,
    browserRef,
    cardRefs,
    revealedCount,
    lineData,
    progress,
    outerHeight,
    totalCards: TOTAL_CARDS,
  }
}
