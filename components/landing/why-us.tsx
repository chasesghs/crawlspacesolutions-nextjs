import { Check, Phone } from "lucide-react"

const PHONE_HREF = "tel:+15736075910"
const PHONE_NUMBER = "(573) 607-5910"

const reasons = [
  "You've tried ignoring it—but the smell keeps getting worse.",
  "Other contractors quoted you but couldn't explain what they'd actually do.",
  "You want someone local who will show up and do the job right.",
  "Your energy bills are climbing and your floors are always cold.",
  "You're tired of worrying about mold affecting your family's health.",
  "You need a real solution, not a quick patch that fails in a year."
]

export function WhyUs() {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* 2-col grid: col 1 = heading, col 2 = reasons */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-6 lg:mb-8">
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-foreground">
              Why Homeowners Call Us
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Most people don&apos;t wake up excited about crawl space repair. They call us because they&apos;ve hit a breaking point.
            </p>
          </div>

          <div className="space-y-2">
            {reasons.map((reason, index) => (
              <div key={index} className="flex items-start gap-3 p-3 rounded-md border border-border bg-card/50 hover:border-primary/30 transition-colors">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 mt-0.5">
                  <Check className="h-3 w-3 text-primary" />
                </div>
                <p className="text-xs text-foreground leading-relaxed">{reason}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA nudge — full width, natural placement */}
        <div className="flex flex-col sm:flex-row gap-3">
          <a href="/contact" className="inline-flex items-center justify-center px-5 py-2.5 bg-primary text-primary-foreground font-semibold text-sm rounded-lg hover:bg-primary/90 transition-colors">
            Schedule a Free Inspection
          </a>
          <a href={PHONE_HREF} className="inline-flex items-center justify-center px-5 py-2.5 bg-card text-foreground font-medium text-sm rounded-lg border border-border hover:border-primary/30 transition-colors">
            <Phone className="h-4 w-4 mr-2" />
            Call {PHONE_NUMBER}
          </a>
        </div>
      </div>
    </section>
  )
}
