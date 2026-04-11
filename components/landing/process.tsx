import { Phone, Search, FileText, Wrench } from "lucide-react"
import Link from "next/link"

const steps = [
  {
    icon: Phone,
    number: "01",
    title: "Call or Text",
    description: "Reach out by phone or text. Send us photos if you have them—it helps us understand the situation faster.",
    href: "/contact",
  },
  {
    icon: Search,
    number: "02",
    title: "We Evaluate",
    description: "We come out, crawl under your home, and assess the full scope of the problem. No charge for the inspection.",
    href: "/services",
  },
  {
    icon: FileText,
    number: "03",
    title: "Get Your Quote",
    description: "You'll receive a clear, written estimate. We explain what needs to happen and why—no pressure, no games.",
    href: "/contact",
  },
  {
    icon: Wrench,
    number: "04",
    title: "We Fix It",
    description: "Once approved, we schedule the work and get it done right. Clean jobsite, quality materials, real results.",
    href: "/services",
  },
]

export function Process() {
  return (
    <section id="process" className="py-12 md:py-16 bg-background">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-foreground">
            How It Works
          </h2>
          <p className="mt-2 text-sm text-muted-foreground max-w-xl mx-auto">
            Simple, straightforward process from first call to finished job.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              {/* Connector line (hidden on mobile, shown between items on lg+) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-border/50 -translate-x-1/2" style={{ width: "calc(100% - 3rem)" }} />
              )}

              <div className="flex flex-col items-center text-center p-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/5 mb-4">
                  <step.icon className="h-6 w-6 text-primary" />
                </div>
                <span className="text-xs font-bold text-primary/60 uppercase tracking-wider mb-1">
                  {step.number}
                </span>
                <h3 className="font-semibold text-sm text-foreground mb-1.5">{step.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
                <Link
                  href={step.href}
                  className="mt-3 text-xs text-primary font-medium hover:underline"
                >
                  {step.href === "/contact" ? "Contact us" : "Learn how"} →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground mb-3">
            Ready to get started? Schedule your free inspection.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-2.5 bg-primary text-primary-foreground font-semibold text-sm rounded-lg hover:bg-primary/90 transition-colors"
            >
              Schedule a Free Inspection
            </Link>
            <a
              href="tel:+15736075910"
              className="inline-flex items-center justify-center px-5 py-2.5 bg-card text-foreground font-medium text-sm rounded-lg border border-border hover:border-primary/30 transition-colors"
            >
              Call (573) 607-5910
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
