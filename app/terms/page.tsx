import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Terms of Service | MarkMind",
  description:
    "MarkMind terms of service. Understand your rights and responsibilities when using the MarkMind browser extension.",
  alternates: {
    canonical: "https://markmind.xyz/terms",
  },
}

const TermsPage = () => (
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
            Terms of Service
          </h1>
          <p className="text-white/40 text-sm mb-10 sm:mb-12">
            Last updated: March 1, 2026
          </p>

          <div className="space-y-10 text-white/60 text-sm sm:text-base leading-relaxed">
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                Agreement
              </h2>
              <p>
                By installing or using MarkMind, you agree to these terms. If you do not agree, please uninstall the extension and stop using the service. These terms apply to the MarkMind browser extension and the website at markmind.xyz.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                What MarkMind Is
              </h2>
              <p>
                MarkMind is a free, open-source Chrome extension that helps you organize your browser bookmarks using AI. It runs locally in your browser. There are no accounts, no subscriptions, and no server-side data processing by MarkMind.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                Your API Key
              </h2>
              <p className="mb-3">
                MarkMind requires an API key from a third-party AI provider (such as OpenAI) to use AI-powered features. By providing your API key, you acknowledge that:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex gap-2">
                  <span className="text-brand-orange">&#8226;</span>
                  <span>You are responsible for obtaining and managing your own API key</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-brand-orange">&#8226;</span>
                  <span>Any costs incurred through the AI provider are your responsibility</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-brand-orange">&#8226;</span>
                  <span>Your use of the AI provider is subject to their own terms of service</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-brand-orange">&#8226;</span>
                  <span>MarkMind does not store, proxy, or have access to your API key beyond your local browser</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                Your Data
              </h2>
              <p>
                MarkMind accesses your Chrome bookmarks locally to provide its organizing features. When you use AI features, bookmark titles and URLs are sent directly from your browser to the AI provider. MarkMind does not operate servers that receive, store, or process your bookmark data. You remain in full control of your data at all times. For full details, see our <Link href="/privacy" className="text-brand-orange hover:underline">Privacy Policy</Link>.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                Open Source License
              </h2>
              <p>
                MarkMind is released under an open-source license. The source code is available on <a href="https://github.com/migsilva89/MarkMind" className="text-brand-orange hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a>. You are free to inspect, fork, and contribute to the project in accordance with the license terms in the repository.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                Acceptable Use
              </h2>
              <p>You agree not to:</p>
              <ul className="space-y-2 ml-4 mt-3">
                <li className="flex gap-2">
                  <span className="text-brand-orange">&#8226;</span>
                  <span>Use MarkMind for any illegal purpose</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-brand-orange">&#8226;</span>
                  <span>Attempt to reverse-engineer any closed components of the service</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-brand-orange">&#8226;</span>
                  <span>Redistribute modified versions of MarkMind under the same name without permission</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-brand-orange">&#8226;</span>
                  <span>Abuse the API endpoint provided by markmind.xyz</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                Disclaimer of Warranties
              </h2>
              <p>
                MarkMind is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, either express or implied. We do not guarantee that the extension will be error-free, uninterrupted, or compatible with all systems. AI-generated bookmark categorizations may not always be accurate.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by applicable law, including EU consumer protection regulations, MarkMind and its contributors shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the extension. This includes but is not limited to loss of data, loss of bookmarks, or costs incurred through third-party AI providers.
              </p>
              <p className="mt-3">
                Nothing in these terms excludes or limits liability for matters that cannot be excluded under applicable EU law, including liability for fraud or gross negligence.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                Governing Law
              </h2>
              <p>
                These terms are governed by the laws of the European Union and the applicable national laws of Portugal, where the project is primarily maintained. If you are a consumer in the EU, you also benefit from any mandatory provisions of the law of your country of residence. Any disputes shall be submitted to the competent courts, without prejudice to your right as an EU consumer to bring proceedings in your country of residence.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                Changes to These Terms
              </h2>
              <p>
                We may update these terms from time to time. Changes will be posted on this page with an updated date. Continued use of MarkMind after changes constitutes acceptance of the updated terms. For significant changes, we will provide notice through the extension or our website.
              </p>
            </section>

            <section className="border-t border-white/10 pt-8">
              <p>
                Questions about these terms? Contact us at <a href="mailto:themarkmind@gmail.com" className="text-brand-orange hover:underline">themarkmind@gmail.com</a>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </>
)

export default TermsPage
