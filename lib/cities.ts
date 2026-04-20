// Supported cities for local SEO pages
export const cities = [
  {
    slug: "osage-beach",
    name: "Osage Beach",
    displayName: "Osage Beach",
    region: "Lake of the Ozarks",
    intro: "The Lake of the Ozarks area sees high humidity and moisture from the water table — crawl spaces here absorb ambient moisture year-round, not just after heavy rain. Many homes built near the shoreline have dirt-floor crawlspaces with no vapor barrier, making them especially vulnerable.",
    whatWeSee: "Homes near the lake often have crawl spaces with no vapor barrier, standing water after rain events, and ventilation that's working against them rather than for them. We also see a lot of runoff water from shoreline grading.",
    whyHappens: "Lake proximity means consistently high ambient humidity. During summer months especially, that moisture pulls into unconditioned crawl spaces and condenses on cool surfaces. Add in sometimes-poor grading that drains toward the foundation, and you have a persistent moisture problem.",
    soilNote: "The lake-area soil tends to be clay-heavy, which slows surface drainage and keeps groundwater elevated.",
  },
  {
    slug: "lake-ozark",
    name: "Lake Ozark",
    displayName: "Lake Ozark",
    region: "Lake of the Ozarks",
    intro: "Lake Ozark experiences the same lake-humidity dynamics as Osage Beach — the water body creates a consistently humid microclimate that pulls moisture into any below-grade space. Crawl spaces near the lake need to be treated differently than inland properties.",
    whatWeSee: "We see a lot of dirt-floor crawl spaces with displaced or torn vapor barriers, moisture-damaged insulation, and HVAC supply ducts running through damp spaces. Older shoreline homes often have stone or block foundations with no drainage system.",
    whyHappens: "The lake itself is the primary driver. Evaporation from the water surface creates ambient humidity that the crawl space literally breathes in. Standard cross-ventilation, which works for inland homes, actually makes things worse at the lake — it pulls more moist outdoor air through the crawl space.",
    soilNote: "Shoreline properties often have shallow bedrock, which can interfere with perimeter drainage installation.",
  },
  {
    slug: "camdenton",
    name: "Camdenton",
    displayName: "Camdenton",
    region: "Lake of the Ozarks",
    intro: "Camdenton sits at a slightly higher elevation than the immediate lake shoreline but still sees the same regional humidity patterns. Crawl spaces here often have more adequate ventilation than lake-front properties but still face seasonal moisture challenges.",
    whatWeSee: "We see crawl spaces with old, discolored fiberglass insulation that's pulling away from joists, occasional mold on sills and sub-floor, and vapor barriers that have been installed but improperly seam-taped.",
    whyHappens: "Camdenton's position relative to the lake means it's influenced by regional humidity but not as directly as shoreline properties. The main issue is typically older construction with inadequate or missing vapor barriers. Summer thunderstorms create periodic saturation events that overwhelm poorly-drained crawl spaces.",
    soilNote: "Missouri clay soil is common in this area, which creates slow surface drainage after rain.",
  },
  {
    slug: "eldon",
    name: "Eldon",
    displayName: "Eldon",
    region: "Mid-Missouri",
    intro: "Eldon is an inland market further from the lake, which reduces the direct humidity influence — but crawl space problems here are still very common. Many homes are older construction with original vapor barriers that have long since degraded, torn, or been removed for access and never replaced.",
    whatWeSee: "We see a lot of older homes with original fiberglass insulation still in place (wet, compressed, and ineffective), occasional evidence of past flooding events in the form of debris lines on foundation walls, and sump pumps that were installed but never connected to a proper discharge line.",
    whyHappens: "Eldon properties tend to have more variable soil conditions. Some areas have sandy loam that drains reasonably well, others have dense clay that doesn't drain at all. The bigger driver is often deferred maintenance — issues that were minor five years ago have compounded into significant moisture damage.",
    soilNote: "Soil quality varies significantly within Eldon. Properties on higher ground generally drain better.",
  },
  {
    slug: "jefferson-city",
    name: "Jefferson City",
    displayName: "Jefferson City",
    region: "Mid-Missouri",
    intro: "Jefferson City has a mix of older established neighborhoods with historic homes and newer construction. Both face crawl space issues but for different reasons — historic homes have old foundations and no modern moisture control, while newer homes sometimes have inadequate or incorrectly installed systems.",
    whatWeSee: "Historic homes typically show stone or brick foundations with no vapor barrier and evidence of long-term moisture exposure. Newer homes often show signs of improper installation — vapor barriers that aren't taped at seams, access doors that don't seal, insulation installed without air sealing first.",
    whyHappens: "In Jefferson City, the main driver is the age of the housing stock. Historic homes were built before vapor barrier knowledge was common. Newer homes sometimes suffer from speed of construction — things get installed without proper attention to air sealing and moisture management.",
    soilNote: "Jefferson City sits along the Missouri River, which influences the water table. Properties near the river bluffs may have different drainage characteristics than properties on the plateau.",
  },
] as const

export type City = (typeof cities)[number]

export const cityMap: Record<string, City> = Object.fromEntries(
  cities.map((c) => [c.slug, c])
)
