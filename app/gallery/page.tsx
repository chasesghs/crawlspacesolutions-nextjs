import type { Metadata } from "next"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { MobileCTA } from "@/components/landing/mobile-cta"
import { GalleryGrid } from "@/components/gallery/gallery-grid"

export const metadata: Metadata = {
  title: "Our Work — Crawl Space & Foundation Projects | Crawl Space Solutions MO",
  description:
    "Real job photos from crawl space encapsulation, foundation repair, and moisture control projects across Central Missouri — Eldon, Lake Ozark, Jefferson City, and more.",
  alternates: { canonical: "https://crawlspacesolutionsmo.com/gallery" },
}

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="py-12 md:py-16 bg-secondary/30">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h1 className="font-[family-name:var(--font-display)] text-2xl md:text-4xl font-bold text-foreground mb-3">
              Our Work
            </h1>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
              Real photos from jobs across Central Missouri — Eldon, Lake of the Ozarks, Jefferson City, Versailles, and more. Encapsulation, foundation repair, water intrusion, and mold remediation. These are actual job sites, not stock photos.
            </p>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-12 md:py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <GalleryGrid />
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-secondary/30">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-[family-name:var(--font-display)] text-xl sm:text-2xl font-bold text-foreground mb-2">
              Need help with your crawl space?
            </h2>
            <p className="text-sm text-muted-foreground mb-6 max-w-xl mx-auto">
              Every job starts with a free inspection. We&apos;ll tell you exactly what&apos;s going on and give you a straightforward price.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-semibold text-sm rounded-lg hover:bg-primary/90 transition-colors"
              >
                Schedule a Free Inspection
              </a>
              <a
                href="tel:+15736075910"
                className="inline-flex items-center justify-center px-6 py-3 bg-card text-foreground font-medium text-sm rounded-lg border border-border hover:border-primary/30 transition-colors"
              >
                Call (573) 607-5910
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileCTA />
    </div>
  )
}