"use client"

import { Card } from "@/components/ui/card"
import { Lightbulb, Map, Hammer, Rocket, LucideIcon } from "lucide-react"
import { useI18n } from '@/app/context/I18nContext';

export function Process() {
  const { t } = useI18n()

  const iconMap: Record<string, LucideIcon> = {
    Lightbulb,
    Map,
    Hammer,
    Rocket,
  }

  const steps = (t("process.steps") || []) as Array<{
    icon: string
    title: string
    description: string
    step: string
  }>

  return (
    <section id="process" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">{t("process.sectionLabel")}</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            {t("process.title.line1")} <span className="text-primary">{t("process.title.highlight")}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            {t("process.subtitle")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = iconMap[step.icon] || Lightbulb
            return (
              <div key={step.step || index} className="relative">
                {index < steps.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-border"
                    style={{ transform: "translateX(0)" }}
                  />
                )}
                <Card className="p-6 lg:p-8 bg-card border-border h-full relative z-10">
                  <div className="flex flex-col h-full">
                    <div className="mb-6">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <span className="text-xs font-mono text-muted-foreground">STEP {step.step}</span>
                    </div>

                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>

                    <p className="text-muted-foreground leading-relaxed text-sm">{step.description}</p>
                  </div>
                </Card>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
