import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Mike R.",
    location: "Lake Ozark, MO",
    text: "Finally called after dealing with musty smell for two years. Wish I'd done it sooner. Crawl space is completely dry now and the odor is gone.",
    rating: 5
  },
  {
    name: "Sarah T.",
    location: "Osage Beach, MO",
    text: "No pressure, showed up when they said they would, and explained everything clearly. The crew was professional and cleaned up after themselves.",
    rating: 5
  },
  {
    name: "Dennis K.",
    location: "Camdenton, MO",
    text: "Had standing water every time it rained. They installed a sump and sealed everything up. Haven't had water since—even through heavy storms.",
    rating: 5
  },
  {
    name: "Linda M.",
    location: "Eldon, MO",
    text: "Other companies wanted to sell me stuff I didn't need. These guys told me exactly what the problem was and fixed only that. Fair and honest.",
    rating: 5
  }
]

export function Testimonials() {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-foreground">
            What Homeowners Say
          </h2>
          <p className="mt-2 text-sm text-muted-foreground max-w-xl mx-auto">
            Real feedback from real customers in Central Missouri.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/30 transition-colors">
              <CardContent className="p-4">
                <Quote className="h-5 w-5 text-primary/30 mb-3" />
                <p className="text-xs text-foreground leading-relaxed mb-3">{testimonial.text}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-xs text-foreground">{testimonial.name}</p>
                    <p className="text-[10px] text-muted-foreground">{testimonial.location}</p>
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
