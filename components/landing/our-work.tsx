"use client"

import Image from "next/image"

const workItems = [
  {
    src: "/images/our-work-01-after.jpg",
    alt: "Complete crawlspace encapsulation with dehumidifier installed",
    caption: "Complete Encapsulation + Dehumidifier",
    service: "Crawl Space Encapsulation",
    location: "Lake of the Ozarks, MO",
    tag: "After",
    tagType: "after",
  },
  {
    src: "/images/our-work-02-after.jpg",
    alt: "Professional vapor barrier installation on floor and walls",
    caption: "Professional Vapor Barrier Installation",
    service: "Crawl Space Encapsulation",
    location: "Central Missouri",
    tag: "After",
    tagType: "after",
  },
  {
    src: "/images/our-work-03-before.png",
    alt: "Neglected crawlspace with standing water and wet damaged insulation",
    caption: "Neglected Crawlspace — Water Damage",
    service: "Water Intrusion Remediation",
    location: "Eldon, MO",
    tag: "Before",
    tagType: "before",
  },
  {
    src: "/images/our-work-04-before-crawl-eldon.jpg",
    alt: "Crawlspace with mold and efflorescence on structural joists",
    caption: "Mold Growth — Moisture Problem",
    service: "Mold Remediation + Encapsulation",
    location: "Eldon, MO",
    tag: "Before",
    tagType: "before",
  },
]

export function OurWork() {
  return (
    <section className="py-12 md:py-16 bg-muted/20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-foreground">
            Our Work
          </h2>
          <p className="mt-2 text-sm text-muted-foreground max-w-xl mx-auto">
            Real projects across Central Missouri. We fix what others leave behind.
          </p>
        </div>

        {/* 2x2 Photo Grid */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {workItems.map((item, index) => (
            <div
              key={index}
              className="relative group rounded-md overflow-hidden bg-card border border-border"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, 25vw"
                />
                {/* Tag */}
                <div className="absolute top-2 left-2">
                  <span
                    className={`inline-block px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider rounded ${
                      item.tagType === "after"
                        ? "bg-primary/10 text-primary"
                        : "bg-destructive/10 text-destructive"
                    }`}
                  >
                    {item.tag}
                  </span>
                </div>
              </div>

              {/* Caption */}
              <div className="p-3">
                <p className="text-xs font-semibold text-foreground leading-tight">
                  {item.caption}
                </p>
                <p className="text-[11px] text-muted-foreground mt-0.5">
                  {item.service}
                </p>
                <p className="text-[10px] text-muted-foreground/70 mt-0.5">
                  {item.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer note + CTA nudge */}
        <div className="mt-6 text-center">
          <p className="text-xs text-muted-foreground">
            Photos from actual jobs in the Lake of the Ozarks &amp; Central Missouri region.
          </p>
          <a
            href="/gallery"
            className="inline-block mt-2 text-xs text-primary font-medium hover:underline"
          >
            View full gallery →
          </a>
        </div>
      </div>
    </section>
  )
}