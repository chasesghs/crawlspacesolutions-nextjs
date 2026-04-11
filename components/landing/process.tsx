import { Phone, Search, FileText, Wrench } from "lucide-react"

const steps = [
  {
    icon: Phone,
    number: "01",
    title: "Call or Text",
    description: "Reach out by phone or text. Send us photos if you have them—it helps us understand the situation faster."
  },
  {
    icon: Search,
    number: "02",
    title: "We Evaluate",
    description: "We come out, crawl under your home, and assess the full scope of the problem. No charge for the inspection."
  },
  {
    icon: FileText,
    number: "03",
    title: "Get Your Quote",
    description: "You'll receive a clear, written estimate. We explain what needs to happen and why—no pressure, no games."
  },
  {
    icon: Wrench,
    number: "04",
    title: "We Fix It",
    description: "Once approved, we schedule the work and get it done right. Clean jobsite, quality materials, real results."
  }
]

export function Process() {
  return (
    <section id="process" className="py-12 md:py-16 bg-muted/20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-foreground">
            How It Works
          </h2>
          <p className="mt-2 text-sm text-muted-foreground max-w-xl mx-auto">
            Simple process. No runaround. Get your crawl space fixed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step) => (
            <div key={step.number} className="relative bg-card border border-border rounded-md p-4 hover:border-primary/30 transition-colors">
              <div className="flex items-center gap-2 mb-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
                  <step.icon className="h-4 w-4" />
                </div>
                <span className="text-xl font-bold text-muted-foreground/30">{step.number}</span>
              </div>
              <h3 className="font-semibold text-sm text-foreground mb-1">{step.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
