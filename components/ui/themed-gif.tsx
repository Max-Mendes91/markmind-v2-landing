"use client"

import { useTheme } from "next-themes"
import { useSyncExternalStore } from "react"

interface ThemedGifProps {
  lightSrc: string
  darkSrc: string
  alt: string
  className?: string
}

const subscribe = () => () => {}
const getSnapshot = () => true
const getServerSnapshot = () => false

export const ThemedGif = ({ lightSrc, darkSrc, alt, className }: ThemedGifProps) => {
  const { resolvedTheme } = useTheme()
  const mounted = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  const src = !mounted || resolvedTheme !== "light" ? darkSrc : lightSrc

  return <img src={src} alt={alt} className={className} loading="lazy" />
}
