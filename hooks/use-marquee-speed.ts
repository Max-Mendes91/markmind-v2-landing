"use client"

import { useCallback, useRef } from "react"

/** Controls playback speed of a CSS animation via Web Animations API */
export const useMarqueeSpeed = () => {
  const trackRef = useRef<HTMLDivElement>(null)
  const rafRef   = useRef<number | null>(null)

  const slowDown = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
    const step = () => {
      const anim = trackRef.current?.getAnimations()[0]
      if (!anim) return
      const next = Math.max(anim.playbackRate * 0.88, 0.25)
      anim.playbackRate = next
      if (next > 0.26) rafRef.current = requestAnimationFrame(step)
    }
    rafRef.current = requestAnimationFrame(step)
  }, [])

  const speedUp = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
    const step = () => {
      const anim = trackRef.current?.getAnimations()[0]
      if (!anim) return
      const next = Math.min(anim.playbackRate * 1.12, 1)
      anim.playbackRate = next
      if (next < 0.99) rafRef.current = requestAnimationFrame(step)
      else anim.playbackRate = 1
    }
    rafRef.current = requestAnimationFrame(step)
  }, [])

  return { trackRef, slowDown, speedUp }
}
