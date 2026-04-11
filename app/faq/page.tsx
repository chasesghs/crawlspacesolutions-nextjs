import type { Metadata } from "next"
import Link from "next/link"
import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { MobileCTA } from "@/components/landing/mobile-cta"

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Crawl Space Solutions Missouri",
  description: "Get answers to common questions about crawl space encapsulation, vapor barriers, moisture control, and our services in Central Missouri.",
  keywords: "crawl space FAQ, encapsulation questions, vapor barrier FAQ, moisture control, Central Missouri",
  openGraph: {
    title: "Frequently Asked Questions | Crawl Space Solutions Missouri",
    description: "Get answers to common questions about crawl space encapsulation, vapor barriers, and moisture control.",
    url: "https://crawlspacesolutionsmo.com/faq",
    siteName: "Crawl Space Solutions",
    type: "website",
  },
}

const faqCategories = [
  {
    title: "General Questions",
    faqs: [
      {
        question: "Why is crawl space maintenance important?",
        answer: "Your crawl space directly affects your home's air quality, energy efficiency, and structural integrity. Up to 50% of the air you breathe on the first floor comes from your crawl space. Moisture problems can lead to mold growth, wood rot, pest infestations, and increased energy costs. Proper maintenance protects your investment and your family's health.",
      },
      {
        question: "How do I know if I have a crawl space problem?",
        answer: "Common signs include musty odors in your home, high humidity levels, sagging or uneven floors, increased allergy symptoms, visible mold or mildew, condensation on windows, higher than normal energy bills, and pest activity. If you notice any of these signs, we recommend scheduling a free inspection.",
      },
      {
        question: "Do you offer free inspections?",
        answer: "Yes! We provide free, no-obligation crawl space inspections throughout our service area. During the inspection, we'll thoroughly assess your crawl space, document any issues with photos, and provide a written estimate for recommended repairs. There's no pressure to commit - we want you to have all the information you need to make the best decision for your home.",
      },
      {
        question: "What areas do you serve?",
        answer: "We serve the Lake of the Ozarks area and Central Missouri, including Osage Beach, Camdenton, Lebanon, Jefferson City, Columbia, Eldon, Versailles, Linn Creek, Sunrise Beach, Laurie, and Gravois Mills. If you don't see your area listed, contact us - we may still be able to help!",
      },
    ],
  },
  {
    title: "Encapsulation & Vapor Barriers",
    faqs: [
      {
        question: "What is crawl space encapsulation?",
        answer: "Crawl space encapsulation is a comprehensive moisture control system that seals your crawl space from the ground and outside air. It typically includes a heavy-duty vapor barrier covering the floor and walls, sealed vents, and often a dehumidifier. This creates a clean, dry environment that protects your home from moisture-related problems.",
      },
      {
        question: "What's the difference between a vapor barrier and encapsulation?",
        answer: "A vapor barrier is a plastic sheet laid on the crawl space floor to reduce ground moisture. Encapsulation is a more comprehensive solution that includes a heavier vapor barrier (typically 20-mil) covering both the floor and foundation walls, sealed seams, closed vents, and humidity control. Encapsulation provides superior moisture protection for most homes.",
      },
      {
        question: "How long does encapsulation last?",
        answer: "A properly installed encapsulation system can last 20+ years with minimal maintenance. The vapor barrier material we use is designed to resist tears, punctures, and UV degradation. We recommend periodic inspections to ensure everything remains in good condition.",
      },
      {
        question: "Will encapsulation reduce my energy bills?",
        answer: "Yes, most homeowners see a noticeable reduction in energy costs after encapsulation. By sealing the crawl space and controlling humidity, your HVAC system doesn't have to work as hard to heat and cool your home. Many customers report savings of 10-20% on their heating and cooling costs.",
      },
    ],
  },
  {
    title: "Costs & Timeline",
    faqs: [
      {
        question: "How much does crawl space repair cost?",
        answer: "Costs vary depending on the size of your crawl space, the scope of work needed, and the materials used. A basic vapor barrier installation might start around $1,500-$3,000, while full encapsulation systems typically range from $5,000-$15,000. We provide detailed, written estimates after our free inspection so you know exactly what to expect.",
      },
      {
        question: "Do you offer financing?",
        answer: "We understand that crawl space repairs can be an unexpected expense. We can discuss payment options during your consultation. Contact us to learn about current financing availability for your project.",
      },
      {
        question: "How long does installation take?",
        answer: "Most projects are completed in 1-3 days depending on the size of your crawl space and the scope of work. Simple vapor barrier installations may take just a day, while full encapsulation with drainage systems may take 2-3 days. We'll provide a timeline estimate with your quote.",
      },
    ],
  },
  {
    title: "Technical Questions",
    faqs: [
      {
        question: "Should I close my crawl space vents?",
        answer: "In most cases, yes. Traditional vented crawl spaces were designed to let moisture escape, but research has shown they often let more moisture in, especially in humid climates like Missouri. Sealed, conditioned crawl spaces maintain better humidity levels and protect your home more effectively.",
      },
      {
        question: "Do I need a dehumidifier in my crawl space?",
        answer: "It depends on your specific situation. In Missouri's humid climate, many encapsulated crawl spaces benefit from a dehumidifier to maintain optimal humidity levels (30-50%). During our inspection, we'll assess your moisture levels and recommend whether a dehumidifier is necessary for your home.",
      },
      {
        question: "What about existing mold in my crawl space?",
        answer: "We address mold as part of our repair process. Depending on the extent of mold growth, we may recommend professional remediation before encapsulation. For minor mold issues, we can treat affected areas with antimicrobial solutions as part of the project. The key is addressing the moisture source to prevent future mold growth.",
      },
      {
        question: "Will crawl space work affect my home's foundation?",
        answer: "Our work is designed to protect and preserve your foundation, not harm it. Drainage systems help direct water away from the foundation, and vapor barriers prevent moisture from causing concrete deterioration. If we identify any foundation concerns during our inspection, we'll discuss them with you.",
      },
    ],
  },
]

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-10 md:py-14 bg-secondary/30">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h1 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-foreground mb-3">
                Frequently Asked Questions
              </h1>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Get answers to common questions about crawl space repair and encapsulation.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {faqCategories.map((category) => (
                <div key={category.title}>
                  <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-foreground mb-6">
                    {category.title}
                  </h2>
                  <Accordion type="single" collapsible className="space-y-3">
                    {category.faqs.map((faq, index) => (
                      <AccordionItem 
                        key={index} 
                        value={`${category.title}-${index}`}
                        className="bg-card border border-border rounded-lg px-6 data-[state=open]:border-primary/30"
                      >
                        <AccordionTrigger className="text-left text-foreground hover:no-underline py-4 font-medium">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-10 md:py-14 bg-secondary/30">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-[family-name:var(--font-display)] text-xl md:text-2xl font-bold text-foreground mb-2">
              Still Have Questions?
            </h2>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto mb-6">
              Contact us for a free consultation and let us help you find the best solution.
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
                  Send Us a Message
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
