import type { Metadata } from "next"
import Link from "next/link"
import {
  Shield,
  Droplets,
  Wind,
  Wrench,
  Home,
  Thermometer,
  ArrowRight,
  Phone,
  Droplet,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { MobileCTA } from "@/components/landing/mobile-cta"

export const metadata = {
  title: "Crawl Space Repair & Encapsulation Services | Lake of the Ozarks, MO",
  description:
    "Professional crawl space repair, encapsulation, vapor barriers, and moisture control in Lake of the Ozarks, Central Missouri. Free inspection available. Call (573) 607-5910.",
  alternates: { canonical: "https://crawlspacesolutionsmo.com/services" },
}

const services = [
  {
    icon: Shield,
    title: "Crawl Space Encapsulation",
    description:
      "Complete sealing of your crawl space with heavy-duty vapor barrier, sealed seams, and wall coverage — creating a clean, dry, conditioned space.",
    href: "#encapsulation",
  },
  {
    icon: Droplets,
    title: "Vapor Barrier Installation",
    description:
      "Professional-grade barriers that stop ground moisture from evaporating into your crawl space. We use reinforced materials that last, not cheap plastic.",
    href: "#vapor-barrier",
  },
  {
    icon: Wind,
    title: "Drainage Systems",
    description:
      "Interior drainage, French drains, and sump pump systems that move water away from your foundation before it becomes a crawl space problem.",
    href: "#drainage",
  },
  {
    icon: Wrench,
    title: "Mold Remediation",
    description:
      "Safe removal of existing mold and treatment to stop it from coming back. We address the moisture source, not just the surface.",
    href: "#mold",
  },
  {
    icon: Thermometer,
    title: "Insulation Services",
    description:
      "Replacing wet or compressed insulation with properly rated materials. We air-seal first, then insulate — it has to be done in that order.",
    href: "#insulation",
  },
  {
    icon: Home,
    title: "Foundation Crack Repair",
    description:
      "Epoxy and polyurethane injection to seal foundation cracks from the inside. We assess whether the crack is cosmetic or structural before we repair.",
    href: "#foundation",
  },
]

const commonProblems = [
  { icon: Droplet, label: "Standing water", sub: "after rain" },
  { icon: Wind, label: "Musty smell", sub: "coming from below" },
  { icon: Thermometer, label: "Cold floors", sub: "no matter the thermostat" },
  { icon: Shield, label: "Wet insulation", sub: "sagging between joists" },
  { icon: Wrench, label: "Foundation cracks", sub: "visible from inside" },
  { icon: Droplets, label: "High humidity", sub: "in the whole house" },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero */}
        <section className="py-12 md:py-18 bg-secondary/30">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h1 className="font-[family-name:var(--font-display)] text-2xl md:text-4xl font-bold text-foreground mb-3">
              Crawl Space & Foundation Services
            </h1>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl mb-6">
              From heavy-duty encapsulation to targeted repairs — we handle every crawl space issue across Lake of the Ozarks, Jefferson City, Columbia, and Central Missouri. Every job starts with a free inspection so we can tell you exactly what your home needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
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
                <Phone className="h-4 w-4 mr-2" />
                Call (573) 607-5910
              </a>
            </div>
          </div>
        </section>

        {/* Services grid */}
        <section className="py-12 md:py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-[family-name:var(--font-display)] text-xl sm:text-2xl font-bold text-foreground mb-6">
              What We Do
            </h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <a key={service.title} href={service.href}>
                  <Card className="bg-card border-border hover:border-primary/40 transition-colors h-full">
                    <CardContent className="p-5">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 shrink-0">
                          <service.icon className="h-4 w-4 text-primary" />
                        </div>
                        <h3 className="font-semibold text-sm text-foreground">{service.title}</h3>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">{service.description}</p>
                      <div className="mt-3 flex items-center gap-1 text-xs text-primary font-medium">
                        <span>Learn more</span>
                        <ArrowRight className="h-3 w-3" />
                      </div>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Common problems — help people self-identify */}
        <section className="py-12 bg-muted/20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-[family-name:var(--font-display)] text-xl sm:text-2xl font-bold text-foreground mb-2">
              What&apos;s Going On?
            </h2>
            <p className="text-sm text-muted-foreground mb-6 max-w-xl">
              If one of these sounds familiar, we&apos;ve probably seen it under hundreds of homes in the Lake area.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {commonProblems.map((p) => (
                <div
                  key={p.label}
                  className="flex items-center gap-3 p-3 rounded-md border border-border bg-card"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 shrink-0">
                    <p.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground leading-tight">{p.label}</p>
                    <p className="text-[10px] text-muted-foreground">{p.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust / process reminder */}
        <section className="py-10">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              {[
                { label: "Free Inspection", sub: "No charge to assess your crawl space" },
                { label: "Honest Quotes", sub: "We recommend only what you need" },
                { label: "Locally Operated", sub: "Serving Central Missouri for years" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-sm font-semibold text-foreground">{item.label}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-12 md:py-16 bg-secondary/30">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-[family-name:var(--font-display)] text-xl sm:text-2xl font-bold text-foreground mb-2">
              Ready to Find Out What&apos;s Going On?
            </h2>
            <p className="text-sm text-muted-foreground mb-6 max-w-xl mx-auto">
              Call or text us. We&apos;ll schedule a free inspection and give you a straightforward answer — no sales pressure.
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
                <Phone className="h-4 w-4 mr-2" />
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
