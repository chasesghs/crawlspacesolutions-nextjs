import { AlertTriangle, Droplets, ThermometerSnowflake, Bug, Wind, Home } from "lucide-react"
import Link from "next/link"

const problems = [
  {
    icon: Wind,
    title: "Musty Smell",
    description: "That damp, earthy odor rising from below",
    href: "/services",
  },
  {
    icon: Bug,
    title: "Mold & Mildew",
    description: "Visible growth on joists, insulation, or vapor barrier",
    href: "/services",
  },
  {
    icon: Droplets,
    title: "Wet Insulation",
    description: "Sagging, soaked insulation falling from the floor",
    href: "/services",
  },
  {
    icon: ThermometerSnowflake,
    title: "Cold Floors",
    description: "Floors cold in winter despite running heat",
    href: "/services",
  },
  {
    icon: AlertTriangle,
    title: "Standing Water",
    description: "Puddles or saturated soil in your crawl space",
    href: "/contact",
  },
  {
    icon: Home,
    title: "High Humidity",
    description: "Excess moisture causing damage throughout your home",
    href: "/services",
  },
]

export function Problems() {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-foreground">
            Sound Familiar?
          </h2>
          <p className="mt-2 text-sm text-muted-foreground max-w-xl mx-auto">
            These are the warning signs homeowners notice before they call us.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {problems.map((problem) => (
            <Link
              key={problem.title}
              href={problem.href}
              className="flex items-start gap-3 p-4 rounded-md border border-border bg-card/50 hover:border-primary/30 hover:bg-card transition-colors group"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary/10 group-hover:bg-primary/15 transition-colors">
                <problem.icon className="h-4 w-4 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-sm text-foreground">{problem.title}</h3>
                <p className="mt-0.5 text-xs text-muted-foreground">{problem.description}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground mb-3">
            See what we can do about it — schedule a free inspection.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-5 py-2.5 bg-primary text-primary-foreground font-semibold text-sm rounded-lg hover:bg-primary/90 transition-colors"
          >
            Schedule a Free Inspection
          </Link>
        </div>
      </div>
    </section>
  )
}
