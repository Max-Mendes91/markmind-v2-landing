"use client"

import { useState, useEffect, useRef } from "react"

const CYCLING_WORDS = [
  "that actually sorts your bookmarks.",
  "that respects your existing folders.",
  "that cleans up years of chaos.",
]

// Duplicate first word at end so the wrap-around reset is invisible
const STRIP_WORDS = [...CYCLING_WORDS, CYCLING_WORDS[0]]
const WORD_H = "1.15em"

export const CyclingWord = () => {
  const [index, setIndex] = useState(0)
  const stripRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const id = setInterval(() => setIndex(i => i + 1), 3000)
    return () => clearInterval(id)
  }, [])

  // When we land on the duplicate (index === CYCLING_WORDS.length), snap back
  // to 0 after the transition completes — same word shown, so the snap is invisible
  useEffect(() => {
    if (index !== CYCLING_WORDS.length) return
    const t = setTimeout(() => {
      const el = stripRef.current
      if (el) el.style.transition = "none"
      setIndex(0)
      requestAnimationFrame(() => requestAnimationFrame(() => {
        if (stripRef.current) stripRef.current.style.transition = ""
      }))
    }, 550)
    return () => clearTimeout(t)
  }, [index])

  const corner = "absolute w-5 h-5 border-brand-orange/55 corner-pulse"
  return (
    <span className="relative inline-block px-4">
      {/* Corner brackets */}
      <span className={`${corner} -top-2 -left-2 border-t border-l`} style={{ animationDelay: "0s" }} />
      <span className={`${corner} -top-2 -right-2 border-t border-r`} style={{ animationDelay: "0.3s" }} />
      <span className={`${corner} -bottom-2 -left-2 border-b border-l`} style={{ animationDelay: "0.6s" }} />
      <span className={`${corner} -bottom-2 -right-2 border-b border-r`} style={{ animationDelay: "0.9s" }} />

      {/* Strip slot-machine: container shows 1 word, strip slides up on each tick */}
      <span className="relative block overflow-hidden" style={{ height: WORD_H }}>
        <span
          ref={stripRef}
          className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{ transform: `translateY(calc(-${index} * ${WORD_H}))` }}
        >
          {STRIP_WORDS.map((word, i) => (
            <span
              key={i}
              className="block italic text-gradient-gold-metallic whitespace-nowrap"
              style={{ height: WORD_H, lineHeight: WORD_H }}
            >
              {word}
            </span>
          ))}
        </span>
      </span>
    </span>
  )
}
