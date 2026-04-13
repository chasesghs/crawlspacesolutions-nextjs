import Image from "next/image"
import gallery01 from "@/public/images/gallery/gallery-01.jpg"
import gallery02 from "@/public/images/gallery/gallery-02.jpg"
import gallery03 from "@/public/images/gallery/gallery-03.jpg"
import gallery04 from "@/public/images/gallery/gallery-04.jpg"
import gallery05 from "@/public/images/gallery/gallery-05.jpg"
import gallery06 from "@/public/images/gallery/gallery-06.jpg"
import gallery07 from "@/public/images/gallery/gallery-07.jpg"
import gallery08 from "@/public/images/gallery/gallery-08.jpg"
import gallery09 from "@/public/images/gallery/gallery-09.jpg"
import gallery10 from "@/public/images/gallery/gallery-10.jpg"
import gallery11 from "@/public/images/gallery/gallery-11.jpg"
import gallery12 from "@/public/images/gallery/gallery-12.jpg"
import gallery13 from "@/public/images/gallery/gallery-13.jpg"
import gallery14 from "@/public/images/gallery/gallery-14.jpg"

const photos = [
  { src: gallery01, alt: "Complete encapsulation with vapor barrier and white liner fully installed over crawlspace floor", caption: "Complete Encapsulation", location: "Cole Camp, MO", category: "Encapsulation" },
  { src: gallery02, alt: "Encapsulated HVAC system with white liner and proper ductwork routing in crawlspace", caption: "Encapsulated HVAC", location: "Richland, MO", category: "Encapsulation" },
  { src: gallery03, alt: "Dimpled membrane drainage layer over crawlspace floor before vapor barrier installation", caption: "Dimpled Membrane", location: "Barnett, MO", category: "Encapsulation" },
  { src: gallery04, alt: "Professional access door installation into encapsulated crawlspace", caption: "Access Door", location: "Cole Camp, MO", category: "Encapsulation" },
  { src: gallery05, alt: "Heavy-duty encapsulation with complete floor coverage and sealed walls", caption: "Heavy-Duty Installation", location: "Jefferson City, MO", category: "Encapsulation" },
  { src: gallery06, alt: "Stone foundation wall in dry encapsulated crawlspace", caption: "Stone Foundation", location: "Jefferson City, MO", category: "Foundation" },
  { src: gallery07, alt: "Dehumidifier installation during encapsulation project", caption: "Dehumidifier Install", location: "Sedalia, MO", category: "Encapsulation" },
  { src: gallery08, alt: "Dimpled membrane and perimeter drainage layer being installed", caption: "Dimpled Membrane Install", location: "Barnett, MO", category: "Encapsulation" },
  { src: gallery09, alt: "Concrete pad installation for support or equipment", caption: "Concrete Pad", location: "Warsaw, MO", category: "Foundation" },
  { src: gallery10, alt: "HVAC ductwork properly encapsulated and insulated in crawlspace", caption: "HVAC Ductwork", location: "California, MO", category: "HVAC" },
  { src: gallery11, alt: "AlorAir commercial dehumidifier installed in encapsulated crawlspace", caption: "AlorAir Dehumidifier", location: "Warsaw, MO", category: "Encapsulation" },
  { src: gallery12, alt: "French drain installation along crawlspace perimeter", caption: "French Drain", location: "Waynesville, MO", category: "Drainage" },
  { src: gallery13, alt: "Interior drain pipe installation for water management", caption: "Drain Pipe", location: "Versailles, MO", category: "Drainage" },
  { src: gallery14, alt: "Vapor barrier coverage over crawlspace floor with sealed seams", caption: "Vapor Barrier", location: "Richland, MO", category: "Encapsulation" },
]

export function GalleryGrid() {
  return (
    <div className="space-y-8">
      {/* Encapsulation */}
      <div>
        <h2 className="text-lg font-semibold text-foreground mb-4">Encapsulation</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {photos.filter(p => p.category === "Encapsulation").map((photo, i) => (
            <PhotoCard key={i} photo={photo} priority={i < 2} />
          ))}
        </div>
      </div>

      {/* Foundation */}
      <div>
        <h2 className="text-lg font-semibold text-foreground mb-4">Foundation</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {photos.filter(p => p.category === "Foundation").map((photo, i) => (
            <PhotoCard key={i} photo={photo} priority={false} />
          ))}
        </div>
      </div>

      {/* Drainage */}
      <div>
        <h2 className="text-lg font-semibold text-foreground mb-4">Drainage</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {photos.filter(p => p.category === "Drainage").map((photo, i) => (
            <PhotoCard key={i} photo={photo} priority={false} />
          ))}
        </div>
      </div>
    </div>
  )
}

function PhotoCard({ photo, priority }: { photo: typeof photos[0]; priority: boolean }) {
  return (
    <div className="relative rounded-md overflow-hidden bg-card border border-border">
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 50vw, 33vw"
          priority={priority}
        />
      </div>
      <div className="p-2.5">
        <p className="text-xs font-semibold text-foreground leading-tight">{photo.caption}</p>
        <p className="text-[10px] text-muted-foreground mt-0.5">{photo.location}</p>
      </div>
    </div>
  )
}
