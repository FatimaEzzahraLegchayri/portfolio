"use client"

import React from "react"
import { Card } from "@/components/ui/card"
import { Globe, Rocket, Target, Zap, LucideIcon } from "lucide-react"
import { useI18n } from '@/app/context/I18nContext';

type ServiceItem = {
  icon: string
  title: string
  description: string
  number: string
}

export function Services() {
  const { t } = useI18n()

  // Icon mapping from string names to icon components
  const iconMap: Record<string, LucideIcon> = {
    Globe,
    Zap,
    Target,
    Rocket,
  }

  const services = (t("service.items") || []) as ServiceItem[]

  return (
    <section id="services" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">{t("service.sectionLabel")}</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">{t("service.title")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            {t("service.subtitle")}
          </p>
        </div>

        <div className="grid sm:grid-cols-3 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Globe
            return (
              <Card
                key={service.number || index}
                className="p-6 lg:p-8 bg-card hover:bg-accent/50 transition-all duration-300 group cursor-pointer border-border hover:border-primary/50"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-sm font-mono text-muted-foreground">{service.number}</span>
                  </div>

                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed text-sm">{service.description}</p>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
