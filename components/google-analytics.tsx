"use client"

import Script from "next/script"
import { useCookieConsent } from "@/components/cookie-consent"

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

interface GoogleAnalyticsProps {
  nonce?: string
}

export const GoogleAnalytics = ({ nonce }: GoogleAnalyticsProps) => {
  const { consent } = useCookieConsent()

  if (!GA_ID || consent !== "granted") return null

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
        nonce={nonce}
      />
      <Script id="google-analytics" strategy="afterInteractive" nonce={nonce}>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  )
}
