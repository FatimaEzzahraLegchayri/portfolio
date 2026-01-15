"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Calendar } from "lucide-react"
import { useI18n } from '@/app/context/I18nContext';

export function CTA() {
  const { t } = useI18n()
  return (
    <section data-section="cta" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Card className="p-8 sm:p-12 lg:p-16 bg-primary text-primary-foreground border-0 relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />

          <div className="relative z-10 text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm">
              <Calendar className="w-4 h-4" />
              <span className="text-sm font-medium">{t("cta.badge")}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance leading-tight">
            {t("cta.title")}
            </h2>

            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto text-pretty leading-relaxed">
            {t("cta.subtitle")}

            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a href="https://calendly.com/fatima-ezzahra/free-strategy-call">
              <Button
                size="lg"
                variant="secondary"
                className="w-full sm:w-auto text-base group bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                {t("cta.button")}
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
              </a>
              {/* <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto text-base border-primary-foreground/20 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
              >
                View My Work
              </Button> */}
            </div>

            <p className="text-sm text-primary-foreground/70 pt-4">
              {t("cta.trust")}
            </p>
          </div>
        </Card>
      </div>
    </section>
  )
}
