import { cities } from "@/lib/cities"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

type Props = {
  children: React.ReactNode
  params: Promise<{ city: string }>
}

export async function generateStaticParams() {
  return cities.map((city) => ({ city: city.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: citySlug } = await params
  const { cityMap } = await import("@/lib/cities")
  const city = cityMap[citySlug]
  if (!city) return {}
  return {
    title: `${city.name} | Crawl Space Solutions MO`,
    description: `Crawl space services in ${city.name}, ${city.region}. Encapsulation, drainage, and foundation repair. Free inspection.`,
  }
}

export default async function CityLayout({ children, params }: Props) {
  const { city: citySlug } = await params
  const { cityMap } = await import("@/lib/cities")
  const city = cityMap[citySlug]
  if (!city) notFound()
  return <>{children}</>
}
