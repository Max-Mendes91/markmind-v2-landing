"use client"

import Image from "next/image"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"

interface ThemedGifProps {
  lightSrc: string
  darkSrc: string
  alt: string
  width: number
  height: number
  className?: string
}

export const ThemedGif = ({ lightSrc, darkSrc, alt, width, height, className }: ThemedGifProps) => {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const src = !mounted || resolvedTheme !== "light" ? darkSrc : lightSrc

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading="lazy"
      unoptimized
    />
  )
}
