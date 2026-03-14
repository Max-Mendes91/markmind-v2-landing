"use client"

import { useState, useEffect, useRef } from "react"

interface CyclingTextProps {
  words: string[]
  interval?: number
  className?: string
}

export const CyclingText = ({ words, interval = 3000, className = "" }: CyclingTextProps) => {
  const [index, setIndex] = useState(0)
  const stripRef = useRef<HTMLSpanElement>(null)

  const strip = [...words, words[0]]
  const wordH = "1.15em"

  useEffect(() => {
    const id = setInterval(() => setIndex(i => i + 1), interval)
    return () => clearInterval(id)
  }, [interval])

  useEffect(() => {
    if (index !== words.length) return
    const t = setTimeout(() => {
      const el = stripRef.current
      if (el) el.style.transition = "none"
      setIndex(0)
      requestAnimationFrame(() => requestAnimationFrame(() => {
        if (stripRef.current) stripRef.current.style.transition = ""
      }))
    }, 550)
    return () => clearTimeout(t)
  }, [index, words.length])

  return (
    <span className="relative inline-block overflow-hidden align-bottom" style={{ height: wordH }}>
      <span
        ref={stripRef}
        className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{ transform: `translateY(calc(-${index} * ${wordH}))` }}
      >
        {strip.map((word, i) => (
          <span
            key={i}
            className={`block whitespace-nowrap ${className}`}
            style={{ height: wordH, lineHeight: wordH }}
          >
            {word}
          </span>
        ))}
      </span>
    </span>
  )
}
