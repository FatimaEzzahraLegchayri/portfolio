"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Code2 } from "lucide-react"
import { InteractiveParticles } from "./interactive-particles"
import { useI18n } from '@/app/context/I18nContext';

export function Hero() {
  const { t } = useI18n()
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-16">
      <InteractiveParticles />

      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="max-w-7xl mx-auto w-full py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Top badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/50 border border-border">
            <Code2 className="w-4 h-4 text-foreground" />
            <span className="text-sm font-medium text-foreground">
              {t("hero.badge")}</span>
          </div>

          {/* Main headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance leading-tight">
            {t("hero.headline.line1")} <span className="text-primary">{t("hero.headline.highlight")}</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
          {t("hero.subheading")}
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            
         
            <a 
            href="https://calendly.com/fatima-ezzahra/free-strategy-call" 
            >
              <Button 
              size="lg" 
              className="w-full sm:w-auto text-base group hover:cursor-pointer"
                >
                {t("hero.cta.primary")}
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              
              </Button>
            </a>
            <a href="#process">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-base bg-transparent">
                {t("hero.cta.secondary")}
              </Button>
            </a>
          </div>

          {/* Trust indicator */}
          <div className="pt-12 text-sm text-muted-foreground">
          <p>{t("hero.trust")}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
