import { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { MobileCTA } from "@/components/landing/mobile-cta"
import { Star, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Customer Reviews | Crawl Space Solutions",
  description:
    "Read verified reviews from Central Missouri homeowners on Angi and Google. Crawl Space Solutions — honest work, real results for crawl space repair and encapsulation.",
  alternates: { canonical: "https://crawlspacesolutionsmo.com/reviews" },
  openGraph: {
    title: "Customer Reviews | Crawl Space Solutions",
    description: "Verified homeowner reviews on Angi and Google for crawl space repair and encapsulation in Central Missouri.",
    url: "/reviews",
    siteName: "Crawl Space Solutions",
    type: "website",
  },
}

const ANGI_URL = "https://www.angi.com/companylist/us/mo/osage-beach/safeguard-home-solutions-reviews-1.htm"
const GOOGLE_URL = "https://www.google.com/maps?cid=3113788047082069089"

export default function ReviewsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="py-12 sm:py-16 border-b border-border/50">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                Customer Reviews
              </h1>
              <p className="mt-3 text-sm text-muted-foreground max-w-xl mx-auto">
                Read verified homeowner reviews on Angi and Google from Central Missouri customers.
              </p>
            </div>
          </div>
        </section>

        {/* Review Platform Hub */}
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Angi Card */}
              <a
                href={ANGI_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="bg-card/50 border border-border rounded-md p-6 hover:border-primary/40 transition-colors h-full flex flex-col items-center text-center gap-4">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">Angi</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Read verified reviews from Angi homeowners
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-primary font-medium group-hover:underline">
                    <span>View Angi profile</span>
                    <ExternalLink className="h-3 w-3" />
                  </div>
                </div>
              </a>

              {/* Google Card */}
              <a
                href={GOOGLE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="bg-card/50 border border-border rounded-md p-6 hover:border-primary/40 transition-colors h-full flex flex-col items-center text-center gap-4">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">Google</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Read our Google reviews
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-primary font-medium group-hover:underline">
                    <span>View Google reviews</span>
                    <ExternalLink className="h-3 w-3" />
                  </div>
                </div>
              </a>
            </div>

            <div className="mt-8 text-center">
              <p className="text-xs text-muted-foreground max-w-md mx-auto">
                Our reviews cover crawl space repair, encapsulation, drainage, and waterproofing across Lake of the Ozarks, Jefferson City, Columbia, and surrounding Central Missouri areas.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 border-t border-border/50">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Ready to add your review or get an inspection?
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button size="sm" asChild>
                <Link href="/contact">Get Free Inspection</Link>
              </Button>
              <Button size="sm" variant="outline" asChild>
                <a href={GOOGLE_URL} target="_blank" rel="noopener noreferrer">
                  Leave a Google Review
                  <ExternalLink className="ml-2 h-3 w-3" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileCTA />
    </div>
  )
}
