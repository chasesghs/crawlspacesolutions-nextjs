import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How much does crawl space encapsulation cost?",
    answer: "Costs vary based on the size of your crawl space, condition, and what work is needed. Most full encapsulation projects run between $5,000 and $15,000. We provide free inspections and detailed quotes—no surprises."
  },
  {
    question: "How long does the work take?",
    answer: "Most jobs take 1-3 days depending on scope. A basic vapor barrier install might be done in a day. Full encapsulation with drainage and dehumidifier typically takes 2-3 days."
  },
  {
    question: "Do you offer financing?",
    answer: "Yes, we work with financing partners to make crawl space repair accessible. Ask about payment options when you get your quote."
  },
  {
    question: "Will this fix my musty smell?",
    answer: "In most cases, yes. The musty smell comes from moisture and mold in the crawl space. Properly sealing and controlling moisture eliminates the source of the odor."
  },
  {
    question: "Do I need a dehumidifier?",
    answer: "It depends on your crawl space. If humidity stays consistently above 60% after encapsulation, a dehumidifier is recommended. We'll assess your specific situation during the inspection."
  },
  {
    question: "What's the difference between vapor barrier and encapsulation?",
    answer: "A vapor barrier is just the liner on the floor. Full encapsulation includes the liner up the walls, sealed vents, and often a dehumidifier—creating a fully conditioned space."
  },
  {
    question: "Do you warranty your work?",
    answer: "Yes. We stand behind our workmanship. Specific warranty terms depend on the work performed—we'll cover this in your quote."
  },
  {
    question: "Can you just fix part of my crawl space?",
    answer: "Sometimes, yes. If the problem is localized—like a single drainage issue or damaged section—we can address just that area. We'll recommend the most practical solution."
  }
]

export function FAQ() {
  return (
    <section id="faq" className="py-12 md:py-16">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-foreground">
            Common Questions
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Straight answers to what homeowners want to know.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card border border-border rounded-md px-4 data-[state=open]:border-primary/30 transition-colors"
            >
              <AccordionTrigger className="text-left text-sm text-foreground hover:no-underline py-3">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-xs text-muted-foreground pb-3">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
