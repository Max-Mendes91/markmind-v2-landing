import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact | MarkMind",
  description: "Get in touch with the MarkMind team.",
  alternates: {
    canonical: "https://markmind.xyz/contact",
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
