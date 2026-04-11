import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Link from "next/link"

const faqs = [
  {
    question: "How much does crawl space encapsulation cost?",
    answer:
      "Costs vary based on the size of your crawl space, condition, and what work is needed. Most full encapsulation projects run between $5,000 and $15,000. We provide free inspections and detailed quotes—no surprises.",
    href: "/contact",
  },
  {
    question: "How long does the work take?",
    answer:
      "Most jobs take 1-3 days depending on scope. A basic vapor barrier install might be done in a day. Full encapsulation with drainage and dehumidifier typically takes 2-3 days.",
    href: null,
  },
  {
    question: "Do you offer financing?",
    answer:
      "Yes, we work with financing partners to make crawl space repair accessible. Ask about payment options when you get your quote.",
    href: "/contact",
  },
  {
    question: "Will this fix the musty smell in my house?",
    answer:
      "In most cases, yes. Once we seal the crawl space and control moisture, the source of the odor is eliminated. Most homeowners notice a significant difference within days.",
    href: "/services",
  },
  {
    question: "Do I need to be home during the work?",
    answer:
      "Not necessarily. Most work is done in the crawl space, so we primarily need access to your property and any exterior access points. We'll let you know if there are specific things we need from you.",
    href: null,
  },
  {
    question: "What is a vapor barrier and do I need one?",
    answer:
      "A vapor barrier is a heavy-duty plastic sheet installed over the soil in your crawl space. It blocks moisture from evaporating up into the space. If you have moisture problems, condensation, or mold in your crawl space, a vapor barrier is usually the first step.",
    href: "/services",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-12 md:py-16 bg-muted/20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-foreground">
            Common Questions
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Quick answers before you decide to reach out.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-sm font-medium text-foreground hover:text-primary transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                {faq.answer}
                {faq.href && (
                  <span>
                    {" "}
                    <Link href={faq.href} className="text-primary font-medium hover:underline">
                      {faq.href === "/contact" ? "Get in touch →" : "Learn more about our services →"}
                    </Link>
                  </span>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground mb-3">
            Have another question? We answer the phone.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-5 py-2.5 bg-primary text-primary-foreground font-semibold text-sm rounded-lg hover:bg-primary/90 transition-colors"
          >
            Ask a Question
          </Link>
        </div>
      </div>
    </section>
  )
}
