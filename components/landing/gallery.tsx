"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const beforeAfterImages = [
  {
    id: 1,
    title: "Full Encapsulation",
    description: "Complete vapor barrier installation with sealed vents",
    before: "Exposed dirt floor, standing water, damaged insulation",
    after: "Clean white liner, dry conditions, sealed environment"
  },
  {
    id: 2,
    title: "Mold Remediation",
    description: "Mold removal and preventive treatment",
    before: "Visible mold growth on floor joists and subfloor",
    after: "Clean wood, treated surfaces, moisture controlled"
  },
  {
    id: 3,
    title: "Drainage Solution",
    description: "Interior perimeter drain with sump pump",
    before: "Standing water, saturated soil, water intrusion",
    after: "Dry crawl space, functional drainage, sump installed"
  }
]

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0)

  const next = () => setActiveIndex((prev) => (prev + 1) % beforeAfterImages.length)
  const prev = () => setActiveIndex((prev) => (prev - 1 + beforeAfterImages.length) % beforeAfterImages.length)

  const current = beforeAfterImages[activeIndex]

  return (
    <section className="py-12 md:py-16 bg-muted/20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-foreground">
            Before &amp; After
          </h2>
          <p className="mt-2 text-sm text-muted-foreground max-w-xl mx-auto">
            Real results from real jobs. This is what proper crawl space work looks like.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-4">
            {/* Before */}
            <div className="relative aspect-[4/3] rounded-md overflow-hidden bg-card border border-border">
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="text-center">
                  <span className="inline-block px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider bg-destructive/10 text-destructive rounded mb-2">
                    Before
                  </span>
                  <p className="text-muted-foreground text-xs">{current.before}</p>
                </div>
              </div>
            </div>

            {/* After */}
            <div className="relative aspect-[4/3] rounded-md overflow-hidden bg-card border-2 border-primary/50">
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="text-center">
                  <span className="inline-block px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider bg-primary/10 text-primary rounded mb-2">
                    After
                  </span>
                  <p className="text-muted-foreground text-xs">{current.after}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Caption */}
          <div className="mt-4 text-center">
            <h3 className="font-semibold text-sm text-foreground">{current.title}</h3>
            <p className="text-xs text-muted-foreground">{current.description}</p>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-3 mt-4">
            <Button
              variant="outline"
              size="sm"
              onClick={prev}
              className="border-border hover:bg-muted h-7 w-7 p-0"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <div className="flex gap-2">
              {beforeAfterImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === activeIndex ? 'bg-primary' : 'bg-muted-foreground/30'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={next}
              className="border-border hover:bg-muted h-7 w-7 p-0"
              aria-label="Next image"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
