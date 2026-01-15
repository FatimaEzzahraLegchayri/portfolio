"use client"

import { Card } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import { useI18n } from '@/app/context/I18nContext';

export function Testimonials() {
  const { t } = useI18n()

  const testimonials = (t("testimonials.items") || []) as Array<{
    name: string
    role: string
    content: string
    rating: number
  }>

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">{t("testimonials.sectionLabel")}</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            {t("testimonials.title.line1")} <span className="text-primary">{t("testimonials.title.highlight")}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            {t("testimonials.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 lg:p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="flex flex-col h-full">
                {/* Quote icon */}
                <div className="mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 w-fit">
                    <Quote className="w-5 h-5 text-primary" />
                  </div>
                </div>

                {/* Rating stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Testimonial content */}
                <p className="text-foreground leading-relaxed mb-6 flex-grow text-pretty">
                  {testimonial.content}
                </p>

                {/* Author info */}
                <div className="pt-4 border-t border-border">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust indicator */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground">
            {t("testimonials.trust.before")}<span className="font-semibold text-foreground">{t("testimonials.trust.number")}</span>{t("testimonials.trust.after")}
          </p>
        </div>
      </div>
    </section>
  )
}
