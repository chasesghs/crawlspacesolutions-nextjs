import Image from "next/image"
import { Phone, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const PHONE_NUMBER = "(573) 607-5910"
const PHONE_HREF = "tel:+15736075910"

export function Hero() {
  return (
    <section className="relative min-h-[60vh] flex flex-col overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/crawlspace-work.jpg"
          alt="Professional crawl space encapsulation"
          fill
          className="object-cover opacity-15"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" />
      </div>

      {/* Subtle wave accent */}
      <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden pointer-events-none">
        <svg 
          className="absolute bottom-0 left-0 w-full h-full opacity-10"
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            className="fill-primary"
            d="M0,60 C200,100 400,20 600,60 C800,100 1000,20 1200,60 L1200,120 L0,120 Z"
          />
        </svg>
      </div>

      <div className="relative z-10 flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight tracking-tight">
            Fix Your Crawl Space.
            <br />
            <span className="text-primary">Protect Your Home.</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Professional crawl space repair, encapsulation, and moisture control for Central Missouri homeowners.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button size="default" asChild className="w-full sm:w-auto text-sm px-6 py-5">
              <a href="/contact">
                Schedule a Free Crawl Space Inspection
              </a>
            </Button>
            <Button size="default" variant="outline" asChild className="w-full sm:w-auto text-sm px-6 py-5 border-border hover:bg-muted">
              <a href="#services">
                Our Services
              </a>
            </Button>
          </div>

          <p className="mt-4 text-xs text-muted-foreground">
            Prefer to call or text? <a href={PHONE_HREF} className="text-primary hover:underline">{PHONE_NUMBER}</a>
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="relative z-10 pb-4 flex justify-center">
        <a href="#trust" aria-label="Scroll to learn more" className="animate-bounce">
          <ChevronDown className="h-5 w-5 text-muted-foreground" />
        </a>
      </div>
    </section>
  )
}
