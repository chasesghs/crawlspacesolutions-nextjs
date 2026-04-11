import type { Metadata } from "next"
import Link from "next/link"
import { Shield, Droplets, Wind, Wrench, Home, Thermometer, ArrowRight, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { MobileCTA } from "@/components/landing/mobile-cta"

export const metadata = {
  title: "Crawl Space Repair & Encapsulation | Central Missouri",
  description:
    "Crawl Space Solutions provides professional repair, encapsulation, vapor barriers, and moisture control for homes across Central Missouri — Lake of the Ozarks, Jefferson City, Columbia, and surrounding areas. Licensed, insured, and locally operated.",
  alternates: { canonical: "https://crawlspacesolutionsmo.com" },
}

const services = [
  {
    icon: Shield,
    title: "Crawl Space Encapsulation",
    description: "Complete moisture barrier system that seals your crawl space from ground moisture and humidity. Our heavy-duty encapsulation system includes reinforced vapor barriers, sealed seams, and proper ventilation management.",
    features: [
      "20-mil reinforced vapor barrier",
      "Sealed seams and penetrations",
      "Foundation wall coverage",
      "Humidity control integration",
    ],
  },
  {
    icon: Droplets,
    title: "Vapor Barrier Installation",
    description: "Professional-grade vapor barriers prevent ground moisture from entering your home. We use only the highest quality materials designed to last for decades with proper maintenance.",
    features: [
      "Heavy-duty polyethylene barriers",
      "UV and puncture resistant",
      "Custom fit to your space",
      "Warranty-backed installation",
    ],
  },
  {
    icon: Wind,
    title: "Drainage Systems",
    description: "Interior drainage solutions that capture and redirect water away from your foundation. Our systems work with your existing structure to eliminate standing water and moisture buildup.",
    features: [
      "French drain installation",
      "Sump pump systems",
      "Discharge line routing",
      "Battery backup options",
    ],
  },
  {
    icon: Wrench,
    title: "Mold Remediation",
    description: "Safe and effective removal of mold and mildew from your crawl space. We address the root cause of moisture problems to prevent future mold growth and improve your indoor air quality.",
    features: [
      "Professional mold assessment",
      "Safe removal procedures",
      "Anti-microbial treatment",
      "Prevention solutions",
    ],
  },
  {
    icon: Thermometer,
    title: "Insulation Services",
    description: "Energy-efficient insulation solutions for your crawl space that reduce heating and cooling costs. Proper insulation also helps prevent pipes from freezing and reduces condensation.",
    features: [
      "Closed-cell spray foam",
      "Rigid foam board options",
      "Old insulation removal",
      "Energy efficiency focus",
    ],
  },
  {
    icon: Home,
    title: "Foundation Crack Repair",
    description: "Professional repair of foundation cracks to prevent water intrusion and structural issues. We use proven methods to seal cracks and reinforce your foundation walls.",
    features: [
      "Epoxy injection repair",
      "Polyurethane foam sealing",
      "Structural assessment",
      "Waterproofing integration",
    ],
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-10 md:py-14 bg-secondary/30">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h1 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-foreground mb-3">
                Our Services
              </h1>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We provide comprehensive crawl space solutions designed to protect your home from moisture, 
                mold, and structural damage.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-10 md:py-14">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <Card key={service.title} className="bg-card border-border hover:border-primary/30 transition-colors">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary/10">
                        <service.icon className="h-4 w-4 text-primary" />
                      </div>
                      <h2 className="font-semibold text-sm text-foreground">{service.title}</h2>
                    </div>
                    <p className="text-muted-foreground text-xs leading-relaxed mb-3">
                      {service.description}
                    </p>
                    <ul className="space-y-1">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-xs text-foreground/80">
                          <ArrowRight className="h-2.5 w-2.5 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-10 md:py-14 bg-secondary/30">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-[family-name:var(--font-display)] text-xl md:text-2xl font-bold text-foreground mb-2">
              Ready to Get Started?
            </h2>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto mb-6">
              Contact us today for a free inspection and estimate.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button size="sm" asChild>
                <a href="tel:+15736075910">
                  <Phone className="mr-2 h-4 w-4" />
                  Call (573) 607-5910
                </a>
              </Button>
              <Button size="sm" variant="outline" asChild>
                <Link href="/contact">
                  Request Free Estimate
                </Link>
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
