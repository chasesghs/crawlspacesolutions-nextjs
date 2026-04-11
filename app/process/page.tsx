import type { Metadata } from "next"
import Link from "next/link"
import { Phone, Calendar, ClipboardCheck, Wrench, CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { MobileCTA } from "@/components/landing/mobile-cta"

export const metadata = {
  title: "Our Process | Crawl Space Solutions",
  description:
    "Learn how Crawl Space Solutions handles crawl space repair and encapsulation — from your first call to final walkthrough. Simple 4-step process, free inspection, honest quotes.",
  alternates: { canonical: "https://crawlspacesolutionsmo.com/process" },
  openGraph: {
    title: "Our Process | Crawl Space Solutions",
    description: "Learn how we handle crawl space repair and encapsulation — from your first call to final walkthrough.",
    url: "/process",
    siteName: "Crawl Space Solutions",
    type: "website",
  },
}

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Contact Us",
    description: "Reach out by phone, text, or through our online form. We'll discuss your concerns and schedule a convenient time for your free inspection.",
    details: [
      "Flexible scheduling around your availability",
      "No obligation consultation",
      "Answer any initial questions",
    ],
  },
  {
    number: "02",
    icon: ClipboardCheck,
    title: "Free Inspection",
    description: "Our experienced technician will thoroughly inspect your crawl space, identify any issues, and document findings with photos and notes.",
    details: [
      "Comprehensive moisture assessment",
      "Structural evaluation",
      "Photo documentation",
      "Same-day written estimate",
    ],
  },
  {
    number: "03",
    icon: Wrench,
    title: "Professional Installation",
    description: "Our skilled crew completes your project efficiently and professionally. We respect your property and clean up thoroughly when finished.",
    details: [
      "Experienced installation team",
      "Quality materials and methods",
      "Property protection protocols",
      "Typically 1-3 day completion",
    ],
  },
  {
    number: "04",
    icon: CheckCircle,
    title: "Final Walkthrough",
    description: "We walk you through the completed work, explain what was done, answer questions, and ensure you're completely satisfied with the results.",
    details: [
      "Detailed explanation of work",
      "Warranty documentation",
      "Maintenance recommendations",
      "Follow-up support",
    ],
  },
]

const promises = [
  "No high-pressure sales tactics",
  "Honest assessments and recommendations",
  "Clear, upfront pricing",
  "Quality workmanship guaranteed",
  "Local, licensed, and insured",
  "Responsive communication",
]

export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-10 md:py-14 bg-secondary/30">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h1 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-foreground mb-3">
                How It Works
              </h1>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We&apos;ve streamlined our process to make crawl space repair simple and stress-free. 
                From your first call to final walkthrough, we handle everything professionally.
              </p>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-10 md:py-14">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-10">
              {steps.map((step, index) => (
                <div key={step.number} className="relative">
                  {/* Connector line */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute left-[40px] top-[80px] w-0.5 h-[calc(100%+2rem)] bg-border" />
                  )}
                  
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    {/* Number and Icon */}
                    <div className="flex-shrink-0 flex flex-col items-center">
                      <div className="relative">
                        <div className="flex h-[80px] w-[80px] items-center justify-center rounded-full bg-card border-2 border-primary/30">
                          <step.icon className="h-8 w-8 text-primary" />
                        </div>
                        <span className="absolute -top-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-xs">
                          {step.number}
                        </span>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-grow">
                      <h2 className="font-[family-name:var(--font-display)] text-lg md:text-xl font-bold text-foreground mb-2">
                        {step.title}
                      </h2>
                      <p className="text-xs text-muted-foreground leading-relaxed mb-4 max-w-xl">
                        {step.description}
                      </p>
                      <ul className="grid sm:grid-cols-2 gap-2">
                        {step.details.map((detail) => (
                          <li key={detail} className="flex items-center gap-2 text-foreground/80">
                            <ArrowRight className="h-3 w-3 text-primary flex-shrink-0" />
                            <span className="text-xs">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Promise */}
        <section className="py-10 md:py-14 bg-secondary/30">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="font-[family-name:var(--font-display)] text-xl md:text-2xl font-bold text-foreground mb-2">
                Our Promise to You
              </h2>
              <p className="text-sm text-muted-foreground max-w-xl mx-auto">
                We believe in doing business the right way.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-3xl mx-auto">
              {promises.map((promise) => (
                <div key={promise} className="flex items-center gap-2 p-3 bg-card rounded-md border border-border">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-foreground text-xs">{promise}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-10 md:py-14">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-[family-name:var(--font-display)] text-xl md:text-2xl font-bold text-foreground mb-2">
              Start with a Free Inspection
            </h2>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto mb-6">
              Contact us today to schedule your free, no-obligation crawl space inspection.
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
                  <Calendar className="mr-2 h-4 w-4" />
                  Schedule Online
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
