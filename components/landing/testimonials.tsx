import { Star, ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const ANGI_URL = "https://www.angi.com/companylist/us/mo/osage-beach/safeguard-home-solutions-reviews-1.htm"
const GOOGLE_URL = "https://www.google.com/maps?cid=3113788047082069089"

export function Testimonials() {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-foreground">
            Read Our Reviews
          </h2>
          <p className="mt-2 text-sm text-muted-foreground max-w-xl mx-auto">
            See what Central Missouri homeowners say about our crawl space repair and encapsulation services.
          </p>
        </div>

        {/* Trust Source Block — no invented quotes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {/* Angi Card */}
          <a
            href={ANGI_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Card className="bg-card border-border hover:border-primary/40 transition-colors h-full">
              <CardContent className="p-5 flex flex-col items-center text-center gap-3">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">Angi</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Read verified reviews</p>
                </div>
                <div className="flex items-center gap-1 text-xs text-primary font-medium">
                  <span>View on Angi</span>
                  <ExternalLink className="h-3 w-3" />
                </div>
              </CardContent>
            </Card>
          </a>

          {/* Google Card */}
          <a
            href={GOOGLE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Card className="bg-card border-border hover:border-primary/40 transition-colors h-full">
              <CardContent className="p-5 flex flex-col items-center text-center gap-3">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">Google</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Read our Google reviews</p>
                </div>
                <div className="flex items-center gap-1 text-xs text-primary font-medium">
                  <span>View on Google</span>
                  <ExternalLink className="h-3 w-3" />
                </div>
              </CardContent>
            </Card>
          </a>
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs text-muted-foreground">
            Reviews cover our full range of crawl space services — repair, encapsulation, drainage, and waterproofing.
          </p>
        </div>
      </div>
    </section>
  )
}
