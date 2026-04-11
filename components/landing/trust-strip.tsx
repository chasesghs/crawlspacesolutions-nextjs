import { Shield, MapPin, Clock, FileCheck } from "lucide-react"

const trustItems = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Fully covered for your protection"
  },
  {
    icon: MapPin,
    title: "Local Operator",
    description: "Based in Central Missouri"
  },
  {
    icon: Clock,
    title: "Fast Response",
    description: "Same-week inspections available"
  },
  {
    icon: FileCheck,
    title: "No-Pressure Estimate",
    description: "Honest pricing, no sales tactics"
  }
]

export function TrustStrip() {
  return (
    <section id="trust" className="py-10 border-y border-border/50">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
