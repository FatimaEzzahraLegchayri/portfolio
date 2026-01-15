"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar } from "lucide-react"
import Link from "next/link"
import { useI18n } from '@/app/context/I18nContext';

export function FAQ() {
  const { t } = useI18n()

  const faqs = (t("faq.items") || []) as Array<{
    question: string
    answer: string
  }>

  const leftFAQs = faqs.slice(0, 3)
  const rightFAQs = faqs.slice(3, 5)

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">{t("faq.sectionLabel")}</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            {t("faq.title.line1")}, <span className="text-primary">{t("faq.title.highlight")}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            {t("faq.subtitle")}
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
            {t("faq.cta.title")}
          </p>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            {t("faq.cta.subtitle")}
          </p>
          <Link href="https://calendly.com/fatima-ezzahra/free-strategy-call" target="_blank">
            <Button size="lg" className="group">
              {t("faq.cta.button")}
              <Calendar className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
