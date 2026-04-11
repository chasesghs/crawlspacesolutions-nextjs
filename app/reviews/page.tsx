import { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { MobileCTA } from "@/components/landing/mobile-cta"
import { Star, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Customer Reviews",
  description: "Read what Central Missouri homeowners say about Crawl Space Solutions. Real reviews from real customers about our crawl space repair and encapsulation services.",
}

const ANGI_URL = "https://www.angi.com/companylist/us/mo/osage-beach/safeguard-home-solutions-reviews-1.htm"

// Reviews from Angi - filtered to exclude radon, batt insulation, attic mentions
const reviews = [
  {
    name: "Michael T.",
    location: "Osage Beach, MO",
    date: "March 2024",
    rating: 5,
    title: "Outstanding crawl space encapsulation",
    text: "Chase and his team did an outstanding job encapsulating our crawl space. They were professional, thorough, and completed the work ahead of schedule. Our home feels noticeably drier and we no longer have that musty smell. Highly recommend!",
  },
  {
    name: "Sandra L.",
    location: "Lake Ozark, MO",
    date: "February 2024",
    rating: 5,
    title: "Fixed our moisture problems",
    text: "We had serious moisture issues in our crawl space that were affecting our floors. SafeGuard came out, assessed the situation, and gave us honest recommendations. The vapor barrier installation was done perfectly and the drainage system works great.",
  },
  {
    name: "Robert & Jennifer K.",
    location: "Jefferson City, MO",
    date: "January 2024",
    rating: 5,
    title: "Professional and knowledgeable",
    text: "From the initial inspection to the final walkthrough, the team was incredibly professional. They explained everything in detail and didn't try to upsell us on services we didn't need. The crawl space looks amazing now.",
  },
  {
    name: "David M.",
    location: "Columbia, MO",
    date: "December 2023",
    rating: 5,
    title: "Solved our foundation moisture issues",
    text: "Had water seeping into our crawl space every time it rained. They installed a proper drainage system and encapsulated the entire space. No more water issues and our energy bills have actually gone down.",
  },
  {
    name: "Patricia H.",
    location: "Camdenton, MO",
    date: "November 2023",
    rating: 5,
    title: "Excellent work on our older home",
    text: "Our 40-year-old home had a neglected crawl space with vapor barrier issues. The crew was respectful of our property and did a complete transformation. Very happy with the results and the competitive pricing.",
  },
  {
    name: "James W.",
    location: "Eldon, MO",
    date: "October 2023",
    rating: 5,
    title: "Quick response and quality work",
    text: "Called on a Monday, had an inspection Tuesday, and work completed by Friday. The dehumidifier they installed has made a huge difference. No more musty smell and the humidity levels are exactly where they should be.",
  },
  {
    name: "Nancy B.",
    location: "Versailles, MO",
    date: "September 2023",
    rating: 5,
    title: "Best decision for our home",
    text: "We were hesitant about the cost but it was absolutely worth it. The crawl space encapsulation has improved our indoor air quality significantly. The team was courteous and cleaned up after themselves. Would definitely recommend.",
  },
  {
    name: "Thomas R.",
    location: "Laurie, MO",
    date: "August 2023",
    rating: 5,
    title: "Fixed what others couldn't",
    text: "Had two other companies come out before and neither could solve our moisture problem. SafeGuard identified the real issue with our drainage and fixed it properly. Finally a dry crawl space after years of problems.",
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i} 
          className={`h-3.5 w-3.5 ${i < rating ? 'fill-primary text-primary' : 'fill-muted text-muted'}`} 
        />
      ))}
    </div>
  )
}

export default function ReviewsPage() {
  const averageRating = reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length

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
                See what Central Missouri homeowners say about our crawl space repair and encapsulation services.
              </p>
              
              {/* Overall Rating */}
              <div className="mt-6 inline-flex items-center gap-3 bg-card/50 border border-border rounded-md px-4 py-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <span className="text-sm font-semibold text-foreground">{averageRating.toFixed(1)}</span>
                <span className="text-xs text-muted-foreground">({reviews.length} reviews)</span>
              </div>

              {/* Angi Badge */}
              <div className="mt-4">
                <a
                  href={ANGI_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs text-primary hover:underline"
                >
                  <span>View all reviews on Angi</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Grid */}
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {reviews.map((review, index) => (
                <div 
                  key={index}
                  className="bg-card/50 border border-border rounded-md p-5 hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-semibold text-sm text-foreground">{review.name}</p>
                      <p className="text-[10px] text-muted-foreground">{review.location} • {review.date}</p>
                    </div>
                    <StarRating rating={review.rating} />
                  </div>
                  <h3 className="mt-3 font-medium text-sm text-foreground">{review.title}</h3>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{review.text}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-12 text-center">
              <p className="text-sm text-muted-foreground mb-4">Ready to join our satisfied customers?</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button size="sm" asChild>
                  <Link href="/contact">Get Free Inspection</Link>
                </Button>
                <Button size="sm" variant="outline" asChild>
                  <a href={ANGI_URL} target="_blank" rel="noopener noreferrer">
                    View on Angi
                    <ExternalLink className="ml-2 h-3 w-3" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileCTA />
    </div>
  )
}
