import { Shield, Droplets, Wind, Wrench, Bug, Thermometer } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: Shield,
    title: "Encapsulation",
    description: "Complete sealing of your crawl space with heavy-duty vapor barrier, creating a clean, dry, conditioned space.",
    href: "/services",
  },
  {
    icon: Droplets,
    title: "Drainage",
    description: "Interior drainage, sump pump installation, and grading corrections to eliminate standing water.",
    href: "/services",
  },
  {
    icon: Thermometer,
    title: "Insulation",
    description: "Removing damaged insulation and installing new, properly rated materials for your climate.",
    href: "/services",
  },
  {
    icon: Wrench,
    title: "Foundation Crack Repair",
    description: "Professional repair of foundation cracks to prevent water intrusion and structural issues.",
    href: "/services",
  },
  {
    icon: Wind,
    title: "Moisture Control",
    description: "Dehumidifier systems, vent sealing, and drainage solutions to keep humidity below 60%.",
    href: "/services",
  },
  {
    icon: Bug,
    title: "Mold Correction",
    description: "Safe removal and treatment of existing mold, plus prevention measures to stop regrowth.",
    href: "/services",
  },
]

export function Services() {
  return (
    <section id="services" className="py-12 md:py-16 bg-muted/20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-foreground">
            What We Fix
          </h2>
          <p className="mt-2 text-sm text-muted-foreground max-w-xl mx-auto">
            From minor repairs to full encapsulation, we handle every aspect of crawl space restoration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => (
            <Link key={service.title} href={service.href}>
              <Card className="bg-card border-border hover:border-primary/30 transition-colors h-full">
                <CardHeader className="pb-2 pt-4 px-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 mb-2">
                    <service.icon className="h-4 w-4 text-primary" />
                  </div>
                  <CardTitle className="text-sm">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="px-4 pb-4">
                  <p className="text-xs text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-5 py-2.5 bg-primary text-primary-foreground font-semibold text-sm rounded-lg hover:bg-primary/90 transition-colors"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}
