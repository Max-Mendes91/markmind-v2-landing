"use client"

import { createContext, useCallback, useContext, useEffect, useState } from "react"

const STORAGE_KEY = "markmind-cookie-consent"

type Consent = "granted" | "denied" | null

interface CookieConsentContextValue {
  consent: Consent
  accept: () => void
  decline: () => void
}

const CookieConsentContext = createContext<CookieConsentContextValue>({
  consent: null,
  accept: () => {},
  decline: () => {},
})

export const useCookieConsent = () => useContext(CookieConsentContext)

export const CookieConsentProvider = ({ children }: { children: React.ReactNode }) => {
  const [consent, setConsent] = useState<Consent>(null)

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Consent
    // eslint-disable-next-line react-hooks/set-state-in-effect -- Syncing with localStorage on mount, not available during SSR
    setConsent(stored)
  }, [])

  const accept = useCallback(() => {
    localStorage.setItem(STORAGE_KEY, "granted")
    setConsent("granted")
  }, [])

  const decline = useCallback(() => {
    localStorage.setItem(STORAGE_KEY, "denied")
    setConsent("denied")
  }, [])

  return (
    <CookieConsentContext.Provider value={{ consent, accept, decline }}>
      {children}
    </CookieConsentContext.Provider>
  )
}

export const CookieConsent = () => {
  const { consent, accept, decline } = useCookieConsent()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- Standard Next.js hydration mismatch pattern
    setMounted(true)
  }, [])

  // Don't render until mounted (avoids hydration mismatch)
  // Hide if user already chose
  if (!mounted || consent !== null) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-sm z-[100] animate-in slide-in-from-bottom-4 fade-in duration-500">
      <div className="bento-card rounded-2xl p-5 shadow-lg border border-overlay-10 dark:border-overlay-6">
        <p className="text-sm text-overlay-75 dark:text-overlay-55 leading-relaxed mb-4">
          We use cookies for analytics to understand how visitors use our site.
          No personal data is collected.
        </p>
        <div className="flex items-center gap-3">
          <button
            onClick={accept}
            className="flex-1 px-4 py-2 rounded-lg bg-brand-orange text-white text-sm font-bold tracking-wide transition-opacity hover:opacity-90"
          >
            Accept
          </button>
          <button
            onClick={decline}
            className="flex-1 px-4 py-2 rounded-lg border border-overlay-15 dark:border-overlay-8 text-sm font-bold text-overlay-70 dark:text-overlay-50 tracking-wide transition-colors hover:bg-overlay-5"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  )
}
