import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar } from "lucide-react"
import Link from "next/link"

export function FAQ() {
  const faqs = [
    {
      question: "How long does a typical project take?",
      answer:
        "Typical projects take around 2-4 weeks, with delivery timelines shaped by project complexity.",
    },
    {
      question: "How much does it cost?",
      answer:
        "Pricing varies by project scope and complexity, and is defined after understanding your goals and requirements.",
    },
    {
      question: "What if I need changes or updates after launch?",
      answer:
        "Post-launch updates are supported and handled based on your needs, whether it’s refinements, improvements, or new features.",
    },

    {
        question: "What makes your approach different?",
        answer:
        "I focus on business outcomes, not just code. Every system is built to free your time and drive growth." 
    },

    {
      question: "How do I get started?",
      answer:
        "Start with a free 30-minute strategy call. We'll discuss your challenges, goals, and how I can help. No pressure - just clarity on whether we're a good fit. If we move forward, I'll provide a detailed proposal with timeline and investment.",
    }
  ]

  const leftFAQs = faqs.slice(0, 3)
  const rightFAQs = faqs.slice(3, 5)

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">FAQ</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Common Questions, <span className="text-primary">Clear Answers</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Everything you need to know before we work together. Still have questions? Let's talk.
          </p>
        </div>

        <div className="mb-12 grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Left Column - 3 questions */}
          <div>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {leftFAQs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`left-item-${index}`}
                  className="bg-card border border-border rounded-lg px-6 hover:border-primary/50 transition-colors"
                >
                  <AccordionTrigger className="text-left font-semibold py-6 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Right Column - 2 questions */}
          <div>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {rightFAQs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`right-item-${index}`}
                  className="bg-card border border-border rounded-lg px-6 hover:border-primary/50 transition-colors"
                >
                  <AccordionTrigger className="text-left font-semibold py-6 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center pt-8 border-t border-border">
          <p className="text-lg font-semibold text-foreground mb-4">
            Ready to get started?
          </p>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Book a free 30-minute strategy call to discuss your project and see how we can transform your operations.
          </p>
          <Link href="https://calendly.com/fatima-ezzahra/free-strategy-call" target="_blank">
            <Button size="lg" className="group">
              Book Your Free Call
              <Calendar className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
