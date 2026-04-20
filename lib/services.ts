// Supported services for city+service pages
export const services = [
  {
    slug: "crawl-space-encapsulation",
    name: "Crawl Space Encapsulation",
    displayName: "Crawl Space Encapsulation",
    shortName: "Encapsulation",
    description:
      "Complete sealing of your crawl space with heavy-duty vapor barrier, sealed seams, and wall coverage — creating a clean, dry, conditioned space. Encapsulation stops ground moisture from evaporating into the crawl space air, which is the primary driver of humidity, mold, and wood rot in unconditioned spaces.",
    processSteps: [
      "Free inspection and moisture assessment",
      "Old insulation and debris removal",
      "Floor preparation and grading if needed",
      "Dimpled membrane drainage layer on walls",
      "Heavy-duty vapor barrier over floor and walls",
      "Seam taping and perimeter sealing",
      "Access door sealing or replacement",
      "Optional: dehumidifier integration",
    ],
    whatYouGet: [
      "Dry, usable crawl space",
      "Reduced humidity throughout the home",
      "Eliminated mold and wood rot risk",
      "Lower energy bills",
      "No more musty smell",
      "Protected structural components",
    ],
    relatedServices: ["vapor-barrier-installation", "drainage-systems", "mold-remediation", "sump-pump-installation"],
  },
  {
    slug: "vapor-barrier-installation",
    name: "Vapor Barrier Installation",
    displayName: "Vapor Barrier Installation",
    shortName: "Vapor Barrier",
    description:
      "Professional-grade vapor barriers that stop ground moisture from evaporating into your crawl space. We use reinforced 12-20mil materials with proper seam overlap and tape — not the cheap 6mil plastic you'll find at the hardware store. Proper installation includes sealing to walls, sealing around penetrations, and correct perimeter overlap.",
    processSteps: [
      "Clear existing debris from floor",
      "Patch any holes in existing barrier",
      "Lay new heavy-duty barrier over floor",
      "Extend and seal to foundation walls",
      "Tape all seam overlaps",
      "Seal around pipe and wire penetrations",
      "Secure perimeter with Fast Grip adhesive or buried edge",
    ],
    whatYouGet: [
      "Effective moisture block at the source",
      "Clean, dry crawl space floor",
      "Reduced musty odors",
      "Long-lasting professional-grade materials",
    ],
    relatedServices: ["crawl-space-encapsulation", "drainage-systems", "sump-pump-installation"],
  },
  {
    slug: "drainage-systems",
    name: "Drainage Systems",
    displayName: "Drainage Systems",
    shortName: "Drainage",
    description:
      "Interior drainage, French drains, and sump pump systems that move water away from your foundation before it becomes a crawl space problem. We design drainage systems around your specific property's grading and soil conditions — not a one-size-fits-all approach.",
    processSteps: [
      "Site assessment — grading and soil evaluation",
      "Interior or exterior drain path design",
      "Trench installation along perimeter",
      "Connection to sump basin or daylight outlet",
      "Gravel backfill for drainage media",
      "Sump pump installation with battery backup",
      "Discharge line routing away from foundation",
    ],
    whatYouGet: [
      "Active water management",
      "No standing water after rain",
      "Protected foundation and structural wood",
      "Sump pump with reliable discharge",
    ],
    relatedServices: ["sump-pump-installation", "crawl-space-encapsulation", "vapor-barrier-installation"],
  },
  {
    slug: "mold-remediation",
    name: "Mold Remediation",
    displayName: "Mold Remediation",
    shortName: "Mold Remediation",
    description:
      "Safe removal of existing mold and treatment to stop it from coming back. We address the moisture source, not just the surface — if you remediate mold without fixing the moisture problem, it will come back. We remove mold colonies, treat the affected surfaces, and then encapsulate or dehumidify the space to prevent recurrence.",
    processSteps: [
      "Mold species identification and containment assessment",
      "HEPA containment of work area",
      "Mold removal from affected surfaces",
      "Antimicrobial treatment on all affected areas",
      "Moisture source identification and repair",
      "Encapsulation or dehumidification to prevent recurrence",
    ],
    whatYouGet: [
      "Mold-free crawl space",
      "Identified moisture source",
      "Treated surfaces to prevent regrowth",
      "Moisture management plan",
    ],
    relatedServices: ["crawl-space-encapsulation", "vapor-barrier-installation", "drainage-systems"],
  },
  {
    slug: "sump-pump-installation",
    name: "Sump Pump Installation",
    displayName: "Sump Pump Installation",
    shortName: "Sump Pump",
    description:
      "Sump pump systems that actively remove water from your crawl space before it reaches your foundation. We install reliable primary pumps with battery backup — because the time you need a sump pump most is during the power outages that come with summer storms.",
    processSteps: [
      "Basin excavation in lowest point",
      "Gravel base and basin installation",
      "Primary pump and float switch",
      "Battery backup pump (highly recommended)",
      "Check valve and discharge line",
      "Discharge routing away from foundation",
      "Lid with moisture seal",
    ],
    whatYouGet: [
      "Active water removal",
      "Battery backup for power outages",
      "Discharge routing away from foundation",
      "Peace of mind during heavy rain",
    ],
    relatedServices: ["drainage-systems", "crawl-space-encapsulation", "foundation-repair"],
    signs: [
      "Standing water in crawl space after rain",
      "Musty smell that gets worse after storms",
      "Wet floors or cold floors in rooms above",
      "Sump pit that's never been installed or is dry",
      "High humidity reading in the crawl space",
    ],
  },
  {
    slug: "foundation-repair",
    name: "Foundation Repair",
    displayName: "Foundation Repair",
    shortName: "Foundation Repair",
    description:
      "Foundation crack repair, structural stabilization, and moisture management for your foundation. We assess whether cracks are cosmetic or structural before recommending repair — and we don't recommend work you don't actually need. For structural issues, we use epoxy and polyurethane injection, and for stabilization we install adjustable jack posts where needed.",
    processSteps: [
      "Structural assessment of foundation",
      "Crack documentation and measurement",
      "Epoxy or polyurethane injection",
      "Waterproofing treatment at crack",
      "Optional: push-pier or helical pier installation",
      "Adjustable jack post installation where needed",
      "Post-repair inspection",
    ],
    whatYouGet: [
      "Stabilized foundation",
      "Sealed cracks — dry and structurally sound",
      "Clear assessment of whether further work is needed",
      "Documented repair for real estate disclosures",
    ],
    relatedServices: ["crawl-space-encapsulation", "drainage-systems", "sump-pump-installation"],
    signs: [
      "Cracks visible in interior walls or floors",
      "Doors or windows that won't close properly",
      "Gaps appearing between floor and wall",
      "Tilting or bowing foundation walls",
      "Sagging or bouncy floors",
    ],
  },
] as const

export type Service = (typeof services)[number]

export const serviceMap: Record<string, Service> = Object.fromEntries(
  services.map((s) => [s.slug, s])
)

// Services that have city-specific content
export const localizableServices = ["crawl-space-encapsulation", "vapor-barrier-installation", "drainage-systems", "mold-remediation"]
