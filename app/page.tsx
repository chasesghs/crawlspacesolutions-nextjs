import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { TrustStrip } from "@/components/landing/trust-strip"
import { Problems } from "@/components/landing/problems"
import { Services } from "@/components/landing/services"
import { WhyUs } from "@/components/landing/why-us"
import { Process } from "@/components/landing/process"
import { Recommendations } from "@/components/landing/recommendations"
import { Gallery } from "@/components/landing/gallery"
import { Testimonials } from "@/components/landing/testimonials"

import { FAQ } from "@/components/landing/faq"
import { FinalCTA } from "@/components/landing/final-cta"
import { Footer } from "@/components/landing/footer"
import { MobileCTA } from "@/components/landing/mobile-cta"

export default function Home() {
  return (
    <main className="min-h-screen pb-16 md:pb-0">
      <Header />
      <Hero />
      <TrustStrip />
      <Problems />
      <Services />
      <WhyUs />
      <Process />
      <Recommendations />
      <Gallery />
      <Testimonials />
      
      <FAQ />
      <FinalCTA />
      <Footer />
      <MobileCTA />
    </main>
  )
}
