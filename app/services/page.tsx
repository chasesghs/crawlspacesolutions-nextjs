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
  CheckCircle,
  AlertTriangle,
  Eye,
  ThumbsDown,
  Clock,
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

// ─── Shared content building blocks ───────────────────────────────────────────

function FieldObservations({ items }: { items: string[] }) {
  return (
    <div className="bg-card border border-border rounded-md p-4">
      <div className="flex items-center gap-2 mb-3">
        <Eye className="h-4 w-4 text-primary shrink-0" />
        <h4 className="text-sm font-semibold text-foreground">What we actually see under homes</h4>
      </div>
      <ul className="space-y-1.5">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground">
            <span className="text-primary mt-0.5 shrink-0">→</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

function LocalCauses({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-primary/5 border border-primary/20 rounded-md p-4">
      <div className="flex items-center gap-2 mb-2">
        <AlertTriangle className="h-4 w-4 text-primary shrink-0" />
        <h4 className="text-sm font-semibold text-foreground">Why this happens in Lake of the Ozarks & Central Missouri</h4>
      </div>
      <div className="text-xs text-muted-foreground leading-relaxed space-y-1">
        {children}
      </div>
    </div>
  )
}

function CommonMistakes({ items }: { items: string[] }) {
  return (
    <div className="border border-orange-200 bg-orange-50/50 rounded-md p-4">
      <div className="flex items-center gap-2 mb-3">
        <ThumbsDown className="h-4 w-4 text-orange-600 shrink-0" />
        <h4 className="text-sm font-semibold text-foreground">Common mistakes we see — and fix</h4>
      </div>
      <ul className="space-y-1.5">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground">
            <span className="text-orange-500 mt-0.5 shrink-0">✗</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

function WhenYouDontNeed({ children }: { children: React.ReactNode }) {
  return (
    <div className="border border-blue-200 bg-blue-50/50 rounded-md p-4">
      <div className="flex items-center gap-2 mb-2">
        <CheckCircle className="h-4 w-4 text-blue-600 shrink-0" />
        <h4 className="text-sm font-semibold text-foreground">When you probably don&apos;t need this — yet</h4>
      </div>
      <p className="text-xs text-muted-foreground leading-relaxed">{children}</p>
    </div>
  )
}

function ProcessSteps({ steps }: { steps: string[] }) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <Clock className="h-4 w-4 text-primary shrink-0" />
        <h4 className="text-sm font-semibold text-foreground">What our process actually looks like</h4>
      </div>
      <ol className="space-y-1.5">
        {steps.map((step, i) => (
          <li key={step} className="flex items-start gap-2.5 text-xs text-muted-foreground">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary font-bold text-[10px] mt-0.5">
              {i + 1}
            </span>
            {step}
          </li>
        ))}
      </ol>
    </div>
  )
}

function AfterFix({ items }: { items: string[] }) {
  return (
    <div className="bg-green-50/50 border border-green-200 rounded-md p-4">
      <h4 className="text-sm font-semibold text-foreground mb-2">
        What you&apos;ll notice after it&apos;s done
      </h4>
      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground">
            <CheckCircle className="h-3.5 w-3.5 text-green-600 mt-0.5 shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

// ─── Service detail section template ──────────────────────────────────────────

function ServiceSection({
  id,
  icon: Icon,
  title,
  whatWeSee,
  localCauses,
  commonMistakes,
  whenYouDontNeed,
  processSteps,
  afterFix,
}: {
  id: string
  icon: React.ElementType
  title: string
  whatWeSee: string[]
  localCauses: React.ReactNode
  commonMistakes: string[]
  whenYouDontNeed: React.ReactNode
  processSteps: string[]
  afterFix: string[]
}) {
  return (
    <section id={id} className="scroll-mt-20 py-12 md:py-16 border-t border-border">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 shrink-0">
            <Icon className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-xl sm:text-2xl font-bold text-foreground">
              {title}
            </h2>
          </div>
        </div>

        {/* 2-column layout for content blocks */}
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <FieldObservations items={whatWeSee} />
          <LocalCauses>{localCauses}</LocalCauses>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <CommonMistakes items={commonMistakes} />
          <WhenYouDontNeed>{whenYouDontNeed}</WhenYouDontNeed>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <ProcessSteps steps={processSteps} />
          <AfterFix items={afterFix} />
        </div>

        {/* Inline CTA */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-5 py-2.5 bg-primary text-primary-foreground font-semibold text-sm rounded-lg hover:bg-primary/90 transition-colors"
          >
            Schedule a Free Inspection
          </Link>
          <a
            href="tel:+15736075910"
            className="inline-flex items-center justify-center px-5 py-2.5 bg-card text-foreground font-medium text-sm rounded-lg border border-border hover:border-primary/30 transition-colors"
          >
            <Phone className="h-4 w-4 mr-2" />
            Call (573) 607-5910
          </a>
        </div>
      </div>
    </section>
  )
}

// ─── Services data ────────────────────────────────────────────────────────────

const services = [
  {
    id: "encapsulation",
    icon: Shield,
    title: "Crawl Space Encapsulation",
    description:
      "Complete moisture barrier system that seals your crawl space from ground moisture and humidity. Our heavy-duty encapsulation system includes reinforced vapor barriers, sealed seams, and proper ventilation management.",
    features: [
      "20-mil reinforced vapor barrier",
      "Sealed seams and penetrations",
      "Foundation wall coverage",
      "Humidity control integration",
    ],
    whatWeSee: [
      "Bare soil with no covering — ground moisture just evaporating up constantly",
      "Pink fiberglass batting hanging out of joists, soaked through and heavy",
      "White powder on block walls — efflorescence from water wicking up",
      "Band boards — the wood at the outside edge of the foundation — soft and crumbling",
      "Sump pits that were installed but never connected to anything",
    ],
    localCauses: (
      <>
        <p className="mb-2">
          Mid-Missouri summers are humid. That moisture finds its way under your house through the path of least resistance. Combined with clay soil that holds water rather than draining it, you've got a perpetual moisture source sitting under your living space.
        </p>
        <p>
          In the Lake area, properties near the water table or with poor exterior grading see the worst of it. Water pools instead of running off, and gravity does the rest.
        </p>
      </>
    ),
    commonMistakes: [
      "Throwing down 6-mil plastic sheeting without sealing edges or seams — it curls up in months",
      "Insulation installed with the paper facing the wrong direction (should face living space, not dirt)",
      "Fitting a dehumidifier without fixing the water source first — it's fighting a losing battle",
      "Closing off all vents at once without addressing humidity — traps moisture inside",
    ],
    whenYouDontNeed: (
      <>
        If your crawl space has no moisture issues — no damp smell, no condensation, no
        history of standing water — you may not need full encapsulation. Sometimes proper
        exterior grading and functioning gutters solve the problem. We&apos;ll tell you
        straight: if you don&apos;t need it, we won&apos;t sell it to you.
      </>
    ),
    processSteps: [
      "We measure the space and assess moisture sources — where is water getting in?",
      "We document condition with photos so you can see exactly what we're working with",
      "We recommend targeted fixes — encapsulation if needed, not always the full job",
      "We install the vapor barrier with sealed seams, wall coverage, and proper transitions",
      "We clean up completely — no debris left in your crawl space",
    ],
    afterFix: [
      "No ground moisture evaporating up into the home",
      "Insulation stays dry and performs the way it's supposed to",
      "Reduced musty smell, often within days",
      "More stable indoor humidity levels",
      "Better HVAC performance — your system isn't working against moisture from below",
    ],
  },
  {
    id: "vapor-barrier",
    icon: Droplets,
    title: "Vapor Barrier Installation",
    description:
      "Professional-grade vapor barriers prevent ground moisture from entering your home. We use only the highest quality materials designed to last for decades with proper maintenance.",
    features: [
      "Heavy-duty polyethylene barriers",
      "UV and puncture resistant",
      "Custom fit to your space",
      "Warranty-backed installation",
    ],
    whatWeSee: [
      "Thin 6-mil plastic scattered across the floor, torn and bunched up",
      "Previous barrier installed but seams never sealed — just overlapping sheets",
      "Barriers that were installed but not brought up the walls or sealed to the foundation",
      "Water pooling on top of an old barrier — no drainage plan underneath",
    ],
    localCauses: (
      <>
        <p className="mb-2">
          The ground in Central Missouri holds moisture well into spring and starts absorbing it again by early summer. That&apos;s 4–6 months of constant evaporation into a vented crawl space.
        </p>
        <p>
          In Lake of the Ozarks properties with sloped lots, surface water often sheets across the crawl space floor during heavy rain. Without a properly installed barrier and drainage, it just sits there.
        </p>
      </>
    ),
    commonMistakes: [
      "Installing a barrier without sealing seams — water vapor passes right through the gaps",
      "Using cheaper thin plastic that tears easily and degrades within a season",
      "Not bringing the barrier up and sealing it to the foundation walls",
      "No strategy for water that already gets in — barrier alone isn't enough for some situations",
    ],
    whenYouDontNeed: (
      <>
        If water has been getting in through bulk entry points (foundation cracks, failed cove joint, exterior grading) — a vapor barrier alone won&apos;t solve it. You need to address the water source first. We&apos;ll inspect and explain what we find before recommending anything.
      </>
    ),
    processSteps: [
      "We assess the space and check for water entry points that need addressing first",
      "We lay and cut the barrier to fit your specific floor plan — no cookie-cutter sheets",
      "We seal all seams with tape rated for below-grade use",
      "We extend and seal the barrier up the foundation walls — not just the floor",
      "We document the installation with photos before we leave",
    ],
    afterFix: [
      "Ground moisture no longer evaporates directly into the crawl space air",
      "Barrier directs any incidental water toward drainage",
      "Clean, traversable floor surface in the crawl space",
      "Noticeably less humid air coming up from below",
    ],
  },
  {
    id: "drainage",
    icon: Wind,
    title: "Drainage Systems",
    description:
      "Interior drainage solutions that capture and redirect water away from your foundation. Our systems work with your existing structure to eliminate standing water and moisture buildup.",
    features: [
      "French drain installation",
      "Sump pump systems",
      "Discharge line routing",
      "Battery backup options",
    ],
    whatWeSee: [
      "Puddles of standing water that don't drain after a day or two",
      "Sump pits that were cut into the floor but never connected to a pump",
      "Discharge lines that exit too close to the foundation — water drains back in",
      "Clay soil that prevents exterior drainage from working properly",
      "Water marks on block walls showing past high-water events",
    ],
    localCauses: (
      <>
        <p className="mb-2">
          Missouri clay holds water like a sponge. When it saturates, water sits against your foundation instead of draining away. Combine that with the rolling terrain around the Lake and you get properties where surface water naturally wants to flow toward the house, not away from it.
        </p>
        <p>
          Poor lot grading from construction is common — builders often don't slope soil properly, and over time it settles toward the foundation.
        </p>
      </>
    ),
    commonMistakes: [
      "Installing a sump pit but no pump, or a pump with no discharge line",
      "Running discharge water out too close to the house — it cycles back",
      "Interior French drain without a functioning pump to actually evacuate the water",
      "Gutters and downspouts draining into underground pipes that are crushed or clogged",
    ],
    whenYouDontNeed: (
      <>
        If your only issue is humidity and you have no standing water history, drainage may be overkill. We see situations where fixing gutters, adjusting exterior grading, and running a dehumidifier solves the problem at a fraction of the cost. We&apos;ll give you the options.
      </>
    ),
    processSteps: [
      "We identify where water is coming from and where it pools",
      "We determine whether interior drainage, exterior drainage, or both are appropriate",
      "We install the system with the correct slope and pitch toward the outlet",
      "We route discharge to a location that moves water well away from the foundation",
      "We test the system before we finish",
    ],
    afterFix: [
      "No standing water in the crawl space after rain",
      "Foundation stays drier through wet seasons",
      "Reduced hydrostatic pressure against foundation walls",
      "Sump pump runs only when needed — not constantly fighting incoming water",
    ],
  },
  {
    id: "mold",
    icon: Wrench,
    title: "Mold Remediation",
    description:
      "Safe and effective removal of mold and mildew from your crawl space. We address the root cause of moisture problems to prevent future mold growth and improve your indoor air quality.",
    features: [
      "Professional mold assessment",
      "Safe removal procedures",
      "Anti-microbial treatment",
      "Prevention solutions",
    ],
    whatWeSee: [
      "Black mold growing on the underside of the subfloor — visible from below",
      "Mold on floor joists and sill plates, often starting in corners where air doesn't circulate",
      "Mold on insulation that got wet and stayed wet",
      "A musty smell that gets stronger when the AC runs — mold is sporulating into the air",
      "White mold on wood that looks fuzzy and active",
    ],
    localCauses: (
      <>
        <p className="mb-2">
          Mold needs three things: moisture, organic material, and time. Your crawl space has all three in abundance. In Mid-Missouri humidity, even a slightly damp joist can grow mold within a week or two.
        </p>
        <p>
          Properties with past flooding or long-standing water issues always have mold. It doesn&apos;t die when things dry out — it goes dormant and waits for the next moisture event.
        </p>
      </>
    ),
    commonMistakes: [
      "Spraying bleach on mold — it kills surface mold but doesn't reach root hyphae, and bleach can damage wood",
      "Encapsulating over mold without treating it — the mold keeps growing under the new barrier",
      "Using a fogger or spray that claims to prevent mold — temporary at best, sometimes makes it worse",
      "Ignoring it and hoping it goes away — mold doesn't leave on its own",
    ],
    whenYouDontNeed: (
      <>
        If there&apos;s very minor surface dust or discoloration on dry wood with no history of moisture, you may not need remediation. We&apos;ll tell you honestly. But if you can smell it, it&apos;s probably worth addressing — mold doesn&apos;t get better by itself.
      </>
    ),
    processSteps: [
      "We identify the mold type and assess how extensive it is — photos and documentation",
      "We treat the affected areas with professional-grade antimicrobial products",
      "We remove heavily damaged insulation and wood as needed",
      "We address the moisture source so it doesn&apos;t come back",
      "We encapsulate with a clean, dry barrier — mold needs moisture to return",
    ],
    afterFix: [
      "Mold smell eliminated or drastically reduced — usually noticeable within days",
      "Active mold growth stopped at the source",
      "Better air quality in the home — less mold spore circulation",
      "No recurrence if the moisture source is properly addressed",
    ],
  },
  {
    id: "insulation",
    icon: Thermometer,
    title: "Insulation Services",
    description:
      "Energy-efficient insulation solutions for your crawl space that reduce heating and cooling costs. Proper insulation also helps prevent pipes from freezing and reduces condensation.",
    features: [
      "Closed-cell spray foam",
      "Rigid foam board options",
      "Old insulation removal",
      "Energy efficiency focus",
    ],
    whatWeSee: [
      "Pink fiberglass batting pinned to joists with wire staples — hanging down in big sections",
      "Insulation that got wet from above (plumbing leak or HVAC condensation) and is now heavy and matted",
      "Insulation installed with no vapor retarder facing the wrong direction",
      "Foam board insulation cut poorly around wires and pipes, leaving big gaps",
    ],
    localCauses: (
      <>
        <p className="mb-2">
          In Central Missouri, we see insulation fail most often because it got wet first. Poor ventilation in vented crawl spaces means humid summer air hits cold surfaces and condenses. The insulation soaks it up and loses its R-value.
        </p>
        <p>
          Winter is a different problem — pipes freeze in unconditioned crawl spaces, and the cold floor above makes the heating bill higher than it should be.
        </p>
      </>
    ),
    commonMistakes: [
      "Replacing wet insulation with new fiberglass without fixing the moisture source first",
      "Spray foam applied to wet or unseasoned wood — it traps moisture and causes rot underneath",
      "Using open-cell foam in a crawl space that will stay damp seasonally",
      "Failing to air-seal before insulating — air leaks through the insulation itself",
    ],
    whenYouDontNeed: (
      <>
        If your crawl space is properly encapsulated and conditioned (sealed, with a dehumidifier), the air above it is already dry and insulation performance improves dramatically. In some cases we recommend encapsulating first, then insulating, rather than throwing insulation at a damp problem.
      </>
    ),
    processSteps: [
      "We assess current insulation condition and identify what needs to come out",
      "We remove wet, moldy, or compressed insulation properly — not just covered up",
      "We air-seal gaps and penetrations before adding new insulation",
      "We install the right type for your situation — closed-cell foam, rigid board, or both",
      "We verify coverage with no gaps around wires, pipes, and ductwork",
    ],
    afterFix: [
      "Floors feel warmer in winter — no cold spots above the crawl space",
      "Lower heating and cooling bills when the crawl space is properly insulated",
      "Pipes less likely to freeze in cold snaps",
      "Insulation that stays dry and performs year after year",
    ],
  },
  {
    id: "foundation",
    icon: Home,
    title: "Foundation Crack Repair",
    description:
      "Professional repair of foundation cracks to prevent water intrusion and structural issues. We use proven methods to seal cracks and reinforce your foundation walls.",
    features: [
      "Epoxy injection repair",
      "Polyurethane foam sealing",
      "Structural assessment",
      "Waterproofing integration",
    ],
    whatWeSee: [
      "Vertical cracks in block foundation walls — the most common type, usually from curing/shrinkage",
      "Step cracks in brick facades above the foundation line",
      "Horizontal cracks in block walls — more serious, can indicate foundation movement",
      "Water weeping through cracks during or after rain — easy to see from inside",
      "Efflorescence (white chalky deposits) around cracks — water is passing through",
    ],
    localCauses: (
      <>
        <p className="mb-2">
          Missouri has expansive clay soil that swells when wet and shrinks when dry. That cycle puts pressure on foundation walls year after year. Around the Lake, properties with poor drainage see the most cracking because water sits against the foundation longer.
        </p>
        <p>
          Most cracks we see are cosmetic at first but let water in, which widens the problem over time. Freeze-thaw cycles in winter push water into cracks, and the ice expands — causing cracks to grow.
        </p>
      </>
    ),
    commonMistakes: [
      "Filling a crack with hydraulic cement from the inside — it often falls out because the wall is still moving",
      "Doing cosmetic repair without addressing why the crack is there — it comes back",
      "Waiting too long — a crack that leaks a little now will be a bigger problem in five years",
      "Installing a dehumidifier in the crawl space without fixing the crack that's letting water in",
    ],
    whenYouDontNeed: (
      <>
        If a crack is hairline, dry, and has been stable for years — it may not need immediate repair. We document cracks when we see them and monitor whether they&apos;re changing. Not every crack is an emergency. We&apos;ll tell you when to worry and when to watch.
      </>
    ),
    processSteps: [
      "We assess the crack — type, direction, whether it's active, and what's causing it",
      "We photograph and document for your records",
      "We inject the crack with epoxy (structural) or polyurethane foam (flexible sealing) from inside",
      "We address exterior grading or drainage if that's contributing to water pressure on the wall",
      "We verify the repair holds before we leave",
    ],
    afterFix: [
      "No water coming through the crack — confirmed on the next rain",
      "Crack is structurally reinforced or properly sealed from inside",
      "Reduced risk of further crack propagation",
      "Documentation for home sale or refinance if needed",
    ],
  },
]

// ─── Services overview cards ───────────────────────────────────────────────────

const serviceCards = [
  {
    id: "encapsulation",
    icon: Shield,
    title: "Crawl Space Encapsulation",
    description:
      "Complete moisture barrier system that seals your crawl space from ground moisture and humidity. Our heavy-duty encapsulation system includes reinforced vapor barriers, sealed seams, and proper ventilation management.",
    features: [
      "20-mil reinforced vapor barrier",
      "Sealed seams and penetrations",
      "Foundation wall coverage",
      "Humidity control integration",
    ],
  },
  {
    id: "vapor-barrier",
    icon: Droplets,
    title: "Vapor Barrier Installation",
    description:
      "Professional-grade vapor barriers prevent ground moisture from entering your home. We use only the highest quality materials designed to last for decades with proper maintenance.",
    features: [
      "Heavy-duty polyethylene barriers",
      "UV and puncture resistant",
      "Custom fit to your space",
      "Warranty-backed installation",
    ],
  },
  {
    id: "drainage",
    icon: Wind,
    title: "Drainage Systems",
    description:
      "Interior drainage solutions that capture and redirect water away from your foundation. Our systems work with your existing structure to eliminate standing water and moisture buildup.",
    features: [
      "French drain installation",
      "Sump pump systems",
      "Discharge line routing",
      "Battery backup options",
    ],
  },
  {
    id: "mold",
    icon: Wrench,
    title: "Mold Remediation",
    description:
      "Safe and effective removal of mold and mildew from your crawl space. We address the root cause of moisture problems to prevent future mold growth and improve your indoor air quality.",
    features: [
      "Professional mold assessment",
      "Safe removal procedures",
      "Anti-microbial treatment",
      "Prevention solutions",
    ],
  },
  {
    id: "insulation",
    icon: Thermometer,
    title: "Insulation Services",
    description:
      "Energy-efficient insulation solutions for your crawl space that reduce heating and cooling costs. Proper insulation also helps prevent pipes from freezing and reduces condensation.",
    features: [
      "Closed-cell spray foam",
      "Rigid foam board options",
      "Old insulation removal",
      "Energy efficiency focus",
    ],
  },
  {
    id: "foundation",
    icon: Home,
    title: "Foundation Crack Repair",
    description:
      "Professional repair of foundation cracks to prevent water intrusion and structural issues. We use proven methods to seal cracks and reinforce your foundation walls.",
    features: [
      "Epoxy injection repair",
      "Polyurethane foam sealing",
      "Structural assessment",
      "Waterproofing integration",
    ],
  },
]

// ─── Page ────────────────────────────────────────────────────────────────────

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
                Crawl Space Repair & Encapsulation Services
              </h1>
              <p className="text-sm text-muted-foreground leading-relaxed">
                From heavy-duty encapsulation to targeted repairs — we handle every crawl space issue across Lake of the Ozarks, Jefferson City, Columbia, and Central Missouri. Scroll down to learn about each service, or{" "}
                <a href="/contact" className="text-primary font-medium hover:underline">
                  schedule a free inspection
                </a>
                {" "}to find out what your home actually needs.
              </p>
            </div>
          </div>
        </section>

        {/* Services Overview Grid — anchor links to detail sections */}
        <section className="py-10 md:py-14">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {serviceCards.map((service) => (
                <a key={service.id} href={`#${service.id}`}>
                  <Card className="bg-card border-border hover:border-primary/40 transition-colors h-full">
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
                          <li key={feature} className="flex items-center gap-2 text-xs text-foreground/70">
                            <ArrowRight className="h-2.5 w-2.5 text-primary shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── Detailed service sections ────────────────────────────── */}
        {services.map((service) => (
          <ServiceSection key={service.id} {...service} />
        ))}

        {/* Related Services */}
        <section className="pb-10 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <h3 className="text-sm font-semibold text-foreground mb-3">Explore Related Services</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { label: "Crawl Space Encapsulation", sub: "Full sealing with vapor barrier" },
                { label: "Moisture Control", sub: "Humidity management & drainage" },
                { label: "Mold Remediation", sub: "Safe removal and prevention" },
                { label: "Foundation Repair", sub: "Crack repair & stabilization" },
              ].map((s) => (
                <div key={s.label} className="p-3 rounded border border-border bg-card text-center">
                  <span className="text-xs font-semibold text-foreground block">{s.label}</span>
                  <span className="text-[11px] text-muted-foreground">{s.sub}</span>
                </div>
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
              Contact us today for a free inspection and honest quote — we&apos;ll tell you exactly what your crawl space needs.
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
                  Schedule a Free Inspection
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
