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
  // AFTER / COMPLETED
  { src: gallery01, alt: "Complete crawlspace encapsulation — white vapor barrier covering floor and walls, clean sealed environment", caption: "Complete Encapsulation", location: "Barnett, MO", category: "Encapsulation", tag: "After" },
  { src: gallery02, alt: "Full vapor barrier installation covering crawlspace floor — clean white liner fully installed", caption: "Full Vapor Barrier", location: "Cole Camp, MO", category: "Encapsulation", tag: "After" },
  { src: gallery03, alt: "Clean access point into encapsulated crawlspace — organized and professional entry", caption: "Clean Access Point", location: "Versailles, MO", category: "Encapsulation", tag: "After" },
  { src: gallery04, alt: "Foundation wall inspection — clean concrete block wall in dry crawlspace", caption: "Foundation Wall", location: "Eldon, MO", category: "Foundation", tag: "After" },
  { src: gallery05, alt: "Interior drainage system in crawlspace — proper water management infrastructure", caption: "Interior Drainage", location: "Eldon, MO", category: "Drainage", tag: "After" },
  { src: gallery06, alt: "Stone foundation wall — solid structural foundation with proper moisture control", caption: "Stone Foundation", location: "Waynesville, MO", category: "Foundation", tag: "After" },
  { src: gallery07, alt: "Structural support beam with jack post — proper reinforcement in crawlspace", caption: "Structural Beam", location: "Eldon, MO", category: "Foundation", tag: "After" },
  // BEFORE / PROBLEM
  { src: gallery08, alt: "Crawlspace mold and efflorescence on wood floor joists — active moisture problem", caption: "Mold on Joists", location: "Eldon, MO", category: "Mold", tag: "Before" },
  { src: gallery09, alt: "Standing water on crawlspace floor — active water intrusion requiring drainage solution", caption: "Standing Water", location: "Versailles, MO", category: "Water Intrusion", tag: "Before" },
  { src: gallery10, alt: "Vertical foundation crack in concrete block wall — requires injection repair", caption: "Foundation Crack", location: "Sunrise Beach, MO", category: "Foundation", tag: "Before" },
  { src: gallery11, alt: "Wood rot and sill plate damage in crawlspace — structural deterioration requiring repair", caption: "Wood Rot & Sill Plate", location: "California, MO", category: "Foundation", tag: "Before" },
  { src: gallery12, alt: "Split floor joist — structural damage requiring sistering or replacement", caption: "Floor Joist Split", location: "California, MO", category: "Foundation", tag: "Before" },
  { src: gallery13, alt: "Moisture damage and deterioration in crawlspace — needs remediation before encapsulation", caption: "Moisture Damage", location: "Jefferson City, MO", category: "Mold", tag: "Before" },
  { src: gallery14, alt: "Vapor barrier coverage — partial installation showing clean materials ready for full encapsulation", caption: "Vapor Barrier Coverage", location: "Barnett, MO", category: "Encapsulation", tag: "After" },
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
        <h2 className="text-lg font-semibold text-foreground mb-4">Foundation Repair</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {photos.filter(p => p.category === "Foundation").map((photo, i) => (
            <PhotoCard key={i} photo={photo} priority={false} />
          ))}
        </div>
      </div>

      {/* Water & Mold */}
      <div>
        <h2 className="text-lg font-semibold text-foreground mb-4">Water Intrusion &amp; Mold</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {photos.filter(p => p.category === "Water Intrusion" || p.category === "Drainage" || p.category === "Mold").map((photo, i) => (
            <PhotoCard key={i} photo={photo} priority={false} />
          ))}
        </div>
      </div>
    </div>
  )
}

function PhotoCard({ photo, priority }: { photo: typeof photos[0]; priority: boolean }) {
  return (
    <div className="relative rounded-md overflow-hidden bg-card border border-border group">
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 50vw, 33vw"
          priority={priority}
        />
        {/* Tag */}
        <div className="absolute top-2 left-2">
          <span
            className={`inline-block px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider rounded ${
              photo.tag === "After"
                ? "bg-primary/10 text-primary"
                : "bg-destructive/10 text-destructive"
            }`}
          >
            {photo.tag}
          </span>
        </div>
      </div>
      <div className="p-2.5">
        <p className="text-xs font-semibold text-foreground leading-tight">{photo.caption}</p>
        <p className="text-[10px] text-muted-foreground mt-0.5">{photo.location}</p>
      </div>
    </div>
  )
}