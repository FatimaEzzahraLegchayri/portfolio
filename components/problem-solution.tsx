"use client"

import { AlertCircle, CheckCircle2 } from "lucide-react"
import { Card } from "@/components/ui/card"
import { useI18n } from '@/app/context/I18nContext';

export function ProblemSolution() {
  const { t } = useI18n()
  

  return (
    <section data-section="problem-solution" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">{t("problem.sectionLabel")}</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">{t("problem.title")}</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Problems */}
          <Card className="p-8 lg:p-10 bg-card border-destructive/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-destructive/10">
                <AlertCircle className="w-5 h-5 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold">{t("problem.card.title")}</h3>
            </div>
            <ul className="space-y-4">
              {(t("problem.card.items") || []).map((problem: string, index: number) => (
                <li key={index} className="flex gap-3 text-muted-foreground leading-relaxed">
                  <span className="text-destructive mt-1">×</span>
                  <span>{problem}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Solutions */}
          <Card className="p-8 lg:p-10 bg-card border-primary/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10">
                <CheckCircle2 className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">{t("problem.solution.title")}</h3>
            </div>
            <ul className="space-y-4">
              {(t("problem.solution.items") || []).map((solution: string, index: number) => (
                <li key={index} className="flex gap-3 leading-relaxed">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>{solution}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* Narrative section */}
        <div className="mt-16 max-w-3xl mx-auto">
          <Card className="p-8 lg:p-10 bg-accent/30 border-border">
            <p className="text-lg leading-relaxed text-pretty">
              {t("problem.narrative.text")}{" "}
              <strong className="font-semibold text-foreground">{t("problem.narrative.highlight")}</strong>
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
