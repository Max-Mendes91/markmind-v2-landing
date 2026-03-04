import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CONTACT_EMAIL, GITHUB_URL } from "@/lib/tokens"

export const metadata: Metadata = {
  title: "Privacy Policy | MarkMind",
  description:
    "MarkMind privacy policy. Learn how we handle your data, your rights under GDPR, and our commitment to privacy.",
  alternates: {
    canonical: "https://markmind.xyz/privacy",
  },
}

const PrivacyPage = () => (
  <>
    <Navbar />
    <main className="min-h-screen bg-black overflow-x-clip">
      <div className="relative px-4 sm:px-6 md:px-8 lg:px-16 pt-28 sm:pt-32 pb-16 sm:pb-20">
        <div className="relative z-10 max-w-3xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-white/40 hover:text-white/70 transition-colors mb-6 sm:mb-8"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Home
          </Link>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-3">
            Privacy Policy
          </h1>
          <p className="text-white/40 text-sm mb-10 sm:mb-12">
            Last updated: March 1, 2026
          </p>

          <div className="space-y-10 text-white/60 text-sm sm:text-base leading-relaxed">
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                Who We Are
              </h2>
              <p>
                MarkMind is a browser extension built by a small team based in the European Union (Poland and Portugal). We believe in privacy by design. MarkMind does not collect, store, or sell your personal data.
              </p>
              <p className="mt-3">
                Contact: <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand-orange hover:underline">{CONTACT_EMAIL}</a>
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                What Data We Process
              </h2>
              <p className="mb-3">
                MarkMind is designed to work entirely on your device. Here is what the extension accesses and what it does not:
              </p>

              <h3 className="text-lg font-semibold text-white/90 mt-6 mb-2">Data processed locally on your device</h3>
              <p className="mb-2">
                Your Chrome bookmarks (titles, URLs, and folder structure) are read by the extension to organize them. This data never leaves your browser unless you explicitly choose to send it to an AI provider for categorization.
              </p>

              <h3 className="text-lg font-semibold text-white/90 mt-6 mb-2">Data sent to third-party AI providers</h3>
              <p className="mb-2">
                When you use the AI organization feature, bookmark titles and URLs are sent to the AI provider (such as OpenAI) using your own API key. MarkMind does not proxy, intercept, or store these requests. The data flows directly from your browser to the AI provider under their privacy policy.
              </p>

              <h3 className="text-lg font-semibold text-white/90 mt-6 mb-2">Your API key</h3>
              <p className="mb-2">
                Your API key is stored locally in your browser using Chrome&apos;s built-in storage API. It is never sent to our servers because we do not operate any servers that receive user data.
              </p>

              <h3 className="text-lg font-semibold text-white/90 mt-6 mb-2">Data we do NOT collect</h3>
              <p>
                We do not collect personal information, browsing history, analytics, telemetry, cookies, IP addresses, or any form of usage tracking through the extension. There are no accounts, no sign-ups, and no user profiles.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                Website Analytics
              </h2>
              <p>
                Our website (markmind.xyz) uses Vercel Analytics, which collects anonymous, aggregated page view data. No personal data, cookies, or identifiers are used. This applies only to the website, not to the browser extension.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                Your Rights Under GDPR
              </h2>
              <p className="mb-3">
                As EU residents ourselves, we take GDPR seriously. Under the General Data Protection Regulation (EU) 2016/679, you have the right to:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex gap-2">
                  <span className="text-brand-orange">&#8226;</span>
                  <span><strong className="text-white/80">Access</strong> any personal data we hold about you (in practice, we hold none)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-brand-orange">&#8226;</span>
                  <span><strong className="text-white/80">Rectification</strong> of inaccurate data</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-brand-orange">&#8226;</span>
                  <span><strong className="text-white/80">Erasure</strong> of your data (&quot;right to be forgotten&quot;)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-brand-orange">&#8226;</span>
                  <span><strong className="text-white/80">Data portability</strong> in a machine-readable format</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-brand-orange">&#8226;</span>
                  <span><strong className="text-white/80">Object</strong> to processing of your data</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-brand-orange">&#8226;</span>
                  <span><strong className="text-white/80">Lodge a complaint</strong> with your local data protection authority</span>
                </li>
              </ul>
              <p className="mt-4">
                Since MarkMind does not collect or store personal data, most of these rights are satisfied by default. If you have questions or want to exercise any right, contact us at <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand-orange hover:underline">{CONTACT_EMAIL}</a>.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                Legal Basis for Processing
              </h2>
              <p>
                Where data is processed (sending bookmarks to an AI provider), the legal basis under GDPR Article 6(1)(a) is your explicit consent. You initiate the action, you provide your own API key, and you choose which bookmarks to process. No processing happens without your direct action.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                Data Transfers
              </h2>
              <p>
                When you use an AI provider like OpenAI, your bookmark data may be transferred to servers outside the EU. This transfer is initiated by you, using your own API key and your own agreement with the AI provider. We recommend reviewing the privacy policy of your chosen AI provider.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                Children&apos;s Privacy
              </h2>
              <p>
                MarkMind is not directed at children under 16. We do not knowingly collect data from children.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                Open Source
              </h2>
              <p>
                MarkMind is open source. You can inspect exactly what the extension does by reviewing the source code on <a href={GITHUB_URL} className="text-brand-orange hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a>. Transparency is not just a policy for us. It is the product.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                Changes to This Policy
              </h2>
              <p>
                If we update this policy, the changes will be posted on this page with an updated date. For significant changes, we will notify users through the extension or our website.
              </p>
            </section>

            <section className="border-t border-white/10 pt-8">
              <p>
                Questions? Reach out at <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand-orange hover:underline">{CONTACT_EMAIL}</a>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </>
)

export default PrivacyPage
