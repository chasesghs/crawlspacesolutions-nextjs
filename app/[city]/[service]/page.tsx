import { cities } from "@/lib/cities"
import { services, localizableServices } from "@/lib/services"
import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { MobileCTA } from "@/components/landing/mobile-cta"
import { CheckCircle, Droplets, Phone, ArrowRight } from "lucide-react"

type Props = {
  params: Promise<{ city: string; service: string }>
}

export async function generateStaticParams() {
  const params: { city: string; service: string }[] = []
  for (const city of cities) {
    for (const service of services) {
      params.push({ city: city.slug, service: service.slug })
    }
  }
  return params
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: citySlug, service: serviceSlug } = await params
  const { cityMap } = await import("@/lib/cities")
  const { serviceMap } = await import("@/lib/services")
  const city = cityMap[citySlug]
  const svc = serviceMap[serviceSlug]
  if (!city || !svc) return {}
  return {
    title: `${svc.name} in ${city.name} | Crawl Space Solutions MO`,
    description: `${svc.shortName} in ${city.name}, ${city.region}. ${city.name} homes face unique moisture challenges. Free inspection available. Call (573) 607-5910.`,
    alternates: {
      canonical: `https://crawlspacesolutionsmo.com/${citySlug}/${serviceSlug}`,
    },
  }
}

export default async function CityServicePage({ params }: Props) {
  const { city: citySlug, service: serviceSlug } = await params
  const { cityMap } = await import("@/lib/cities")
  const { serviceMap, localizableServices: localSvc } = await import("@/lib/services")
  const city = cityMap[citySlug]
  const svc = serviceMap[serviceSlug]
  if (!city || !svc) notFound()

  const isLocalizable = localSvc.includes(serviceSlug as typeof localSvc[number])

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Localized Hero */}
        <section className="py-12 md:py-16 bg-secondary/30">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="text-xs text-muted-foreground mb-4 flex items-center gap-2">
              <Link href="/" className="hover:text-primary">Home</Link>
              <span>/</span>
              <Link href="/services" className="hover:text-primary">Services</Link>
              <span>/</span>
              <span>{city.name}</span>
              <span>/</span>
              <span className="text-foreground">{svc.shortName}</span>
            </nav>

            <h1 className="font-[family-name:var(--font-display)] text-2xl md:text-4xl font-bold text-foreground mb-3">
              {svc.name} in {city.name}
            </h1>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl mb-6">
              {city.intro}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-semibold text-sm rounded-lg hover:bg-primary/90 transition-colors"
              >
                Schedule a Free Inspection
              </Link>
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

        {/* Service Content */}
        <section className="py-12 md:py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Main column */}
              <div className="md:col-span-2 space-y-8">
                {/* What you get */}
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">
                    {svc.shortName} — What We Do
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {svc.description}
                  </p>
                </div>

                {/* What we see in this city */}
                {isLocalizable && (
                  <div className="rounded-md border border-primary/30 bg-primary/5 p-5">
                    <h3 className="text-sm font-semibold text-foreground mb-2">
                      What We See in {city.name} Homes
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {city.whatWeSee}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                      {city.whyHappens}
                    </p>
                    {city.soilNote && (
                      <p className="text-xs text-muted-foreground/80 mt-2 italic">
                        Soil note — {city.soilNote}
                      </p>
                    )}
                  </div>
                )}

                {/* Process */}
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">
                    Our Process
                  </h2>
                  <ol className="space-y-3">
                    {svc.processSteps.map((step, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-medium mt-0.5">
                          {i + 1}
                        </span>
                        <span className="text-muted-foreground">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* What you get */}
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">
                    What You Get
                  </h2>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {svc.whatYouGet.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Signs / when to consider — shown for services that have it */}
                {"signs" in svc && Array.isArray(svc.signs) && svc.signs.length > 0 && (
                  <div>
                    <h2 className="text-xl font-semibold text-foreground mb-4">
                      Signs You May Need {svc.shortName}
                    </h2>
                    <ul className="space-y-2">
                      {svc.signs.map((sign, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          {sign}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* CTA */}
                <div className="rounded-md border border-border bg-card p-5">
                  <h3 className="text-sm font-semibold text-foreground mb-2">
                    Ready to Get Started?
                  </h3>
                  <p className="text-xs text-muted-foreground mb-4">
                    Free inspection in {city.name}. We&apos;ll tell you exactly what your crawl space needs.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex w-full items-center justify-center px-4 py-2.5 bg-primary text-primary-foreground font-semibold text-sm rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    Schedule Inspection
                  </Link>
                  <a
                    href="tel:+15736075910"
                    className="inline-flex w-full items-center justify-center px-4 py-2.5 mt-2 text-sm text-foreground font-medium border border-border rounded-lg hover:border-primary/30 transition-colors"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Call (573) 607-5910
                  </a>
                </div>

                {/* Related Services */}
                <div className="rounded-md border border-border bg-card p-5">
                  <h3 className="text-sm font-semibold text-foreground mb-3">
                    Related Services
                  </h3>
                  <ul className="space-y-2">
                    {svc.relatedServices.map((relSlug) => {
                      const relSvc = serviceMap[relSlug]
                      if (!relSvc) return null
                      return (
                        <li key={relSlug}>
                          <Link
                            href={`/${citySlug}/${relSlug}`}
                            className="flex items-center gap-2 text-xs text-primary hover:underline"
                          >
                            <ArrowRight className="h-3 w-3" />
                            {relSvc.name}
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </div>

                {/* City nav */}
                <div className="rounded-md border border-border bg-card p-5">
                  <h3 className="text-sm font-semibold text-foreground mb-3">
                    Other Areas
                  </h3>
                  <ul className="space-y-2">
                    {cities.filter((c) => c.slug !== citySlug).map((c) => (
                      <li key={c.slug}>
                        <Link
                          href={`/${c.slug}/${serviceSlug}`}
                          className="text-xs text-muted-foreground hover:text-primary"
                        >
                          {c.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-12 bg-secondary/30">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-[family-name:var(--font-display)] text-xl sm:text-2xl font-bold text-foreground mb-2">
              {svc.shortName} in {city.name} — Free Inspection
            </h2>
            <p className="text-sm text-muted-foreground mb-6 max-w-xl mx-auto">
              Every {svc.shortName.toLowerCase()} project starts with a free inspection. No obligation, no pressure — just an honest answer about what your home needs.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-semibold text-sm rounded-lg hover:bg-primary/90 transition-colors"
            >
              Schedule a Free Inspection
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <MobileCTA />
    </div>
  )
}
