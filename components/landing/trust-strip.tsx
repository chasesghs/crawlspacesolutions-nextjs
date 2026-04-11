import { Shield, MapPin, Clock, FileCheck, Home } from "lucide-react"

const trustItems = [
  {
    icon: MapPin,
    title: "Locally Owned & Operated",
    description: "Based in Central Missouri"
  },
  {
    icon: Home,
    title: "Crawl Space & Foundation Focused",
    description: "Not a general contractor — this is our specialty"
  },
  {
    icon: Clock,
    title: "Fast Response",
    description: "Same-week inspections available"
  },
  {
    icon: FileCheck,
    title: "Free Inspections",
    description: "No charge to assess your crawl space"
  },
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Fully covered for your protection"
  },
]

export function TrustStrip() {
  return (
    <section id="trust" className="py-10 border-y border-border/50">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {trustItems.map((item) => (
            <div key={item.title} className="flex flex-col items-center text-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 mb-2">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground text-xs">{item.title}</h3>
              <p className="text-[10px] text-muted-foreground mt-0.5">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
