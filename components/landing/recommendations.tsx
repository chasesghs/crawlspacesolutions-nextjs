import { CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

const PHONE_HREF = "tel:+15736075910"
const PHONE_NUMBER = "(573) 607-5910"

const recommendations = [
  {
    title: "Heavy-Duty Vapor Barrier",
    description: "20-mil reinforced liner to seal out ground moisture permanently."
  },
  {
    title: "Vent Sealing",
    description: "Close off exterior vents to prevent humid air and pests from entering."
  },
  {
    title: "Rim Joist Air Sealing",
    description: "Spray foam or rigid foam at the sill plate to stop air leaks."
  },
  {
    title: "Crawl Space Dehumidifier",
    description: "Commercial-grade unit to maintain humidity below 60% year-round."
  },
  {
    title: "Drainage Improvements",
    description: "Interior perimeter drains or sump pump to manage water intrusion."
  },
  {
    title: "Mold Treatment",
    description: "Safe remediation of existing mold plus preventive antimicrobial treatment."
  }
]

export function Recommendations() {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-foreground">
            What We May Recommend
          </h2>
          <p className="mt-2 text-sm text-muted-foreground max-w-xl mx-auto">
            Every crawl space is different. After our inspection, we&apos;ll recommend only what your home actually needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {recommendations.map((item) => (
            <div 
              key={item.title} 
              className="flex gap-3 p-4 rounded-md border border-border bg-card/50 hover:border-primary/30 transition-colors"
            >
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary/10 shrink-0">
                <CheckCircle className="h-3.5 w-3.5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-sm text-foreground">{item.title}</h3>
                <p className="mt-0.5 text-xs text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Inline CTA nudge */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground mb-3">
            Not sure what your crawl space needs? Schedule a free inspection — we&apos;ll tell you exactly.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground font-semibold text-sm rounded-lg hover:bg-primary/90 transition-colors"
            >
              Schedule a Free Inspection
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-card text-foreground font-medium text-sm rounded-lg border border-border hover:border-primary/30 transition-colors"
            >
              Call {PHONE_NUMBER}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
