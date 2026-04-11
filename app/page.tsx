import type { Metadata } from "next"
import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { TrustStrip } from "@/components/landing/trust-strip"
import { Problems } from "@/components/landing/problems"
import { Services } from "@/components/landing/services"
import { WhyUs } from "@/components/landing/why-us"
import { Process } from "@/components/landing/process"
import { Recommendations } from "@/components/landing/recommendations"
import { Gallery } from "@/components/landing/gallery"
import { Testimonials } from "@/components/landing/testimonials"
import { FAQ } from "@/components/landing/faq"
import { FinalCTA } from "@/components/landing/final-cta"
import { Footer } from "@/components/landing/footer"
import { MobileCTA } from "@/components/landing/mobile-cta"

const PHONE_HREF = "tel:+15736075910"
const PHONE_NUMBER = "(573) 607-5910"

export const metadata: Metadata = {
  title: "Crawl Space Solutions | Central Missouri Crawl Space Repair & Encapsulation",
  description:
    "Professional crawl space repair, encapsulation, vapor barrier installation, and moisture control for homes across Central Missouri — Lake of the Ozarks, Jefferson City, Columbia, and surrounding areas. Licensed, insured, locally operated. Call (573) 607-5910 for a free inspection.",
  alternates: { canonical: "https://crawlspacesolutionsmo.com" },
}

export default function Home() {
  return (
    <main className="min-h-screen pb-16 md:pb-0">
      <Header />
      <Hero />
      <TrustStrip />
      <Problems />
      <Services />
      <WhyUs />
      <Process />
      <Recommendations />

      {/* Mid-page CTA */}
      <section className="py-10 bg-primary/5 border-y border-primary/20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
            Have a crawl space problem?
          </h2>
          <p className="text-sm text-muted-foreground mb-6 max-w-xl mx-auto">
            We inspect, quote, and fix crawl spaces across Central Missouri. Schedule a free inspection — we&apos;ll show you exactly what&apos;s going on.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors text-sm"
            >
              Schedule a Free Crawl Space Inspection
            </a>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center px-6 py-3 bg-card text-foreground font-medium rounded-lg border border-border hover:border-primary/30 transition-colors text-sm"
            >
              Call {PHONE_NUMBER}
            </a>
          </div>
        </div>
      </section>

      <Gallery />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
      <MobileCTA />
    </main>
  )
}