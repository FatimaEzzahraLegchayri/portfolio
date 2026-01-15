"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { StickyCTA } from "@/components/sticky-cta"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Globe, Zap, Target, Settings, CheckCircle2, XCircle, LucideIcon } from "lucide-react"
import { useI18n } from '@/app/context/I18nContext';

export default function About() {
  const { t } = useI18n()

  const iconMap: Record<string, LucideIcon> = {
    Globe,
    Zap,
    Target,
    Settings,
  }

  const services = (t("about.whatIDo.services") || []) as Array<{
    icon: string
    title: string
    description: string
  }>

  const proofOfWork = (t("about.proofOfWork.items") || []) as Array<{
    client: string
    problem: string
    solution: string
    outcome: string
  }>

  const process = (t("about.howIWork.steps") || []) as Array<{
    step: string
    title: string
    description: string
  }>

  const idealClients = (t("about.whoItsFor.goodFit.items") || []) as string[]

  const notFor = (t("about.whoItsFor.notGoodFit.items") || []) as string[]

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background pt-16">
        {/* Opening Positioning Statement */}
        <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance leading-tight">
                <span className="text-primary">{t("about.opening.title.line1")}</span> <span className="text-primary">{t("about.opening.title.highlight")}</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t("about.opening.subtitle")}
            </p>
          </div>
        </section>

        {/* Perspective / Point of View */}
        <section data-section="problem-solution" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 lg:p-10 bg-card border-border">
              <p className="text-lg leading-relaxed text-pretty mb-4">
                {t("about.perspective.paragraph1")}
              </p>
              <p className="text-lg leading-relaxed text-pretty">
                {t("about.perspective.paragraph2")}
              </p>
            </Card>
          </div>
        </section>

        {/* What I Do */}
        <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">{t("about.whatIDo.title")}</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t("about.whatIDo.subtitle")}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <Card key={index} className="p-6 lg:p-8 bg-card border-border hover:border-primary/50 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{t(`about.whatIDo.services.${index}.title`)}</h3>
                        <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                      </div>
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Proof of Work */}
        <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">{t("about.proofOfWork.title")}</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t("about.proofOfWork.subtitle")}
              </p>
            </div>

            <div className="space-y-8">
              {proofOfWork.map((project, index) => (
                <Card key={index} className="p-8 lg:p-10 bg-card border-border">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">{project.client}</h3>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">{t("about.proofOfWork.labels.problem")}</p>
                        <p className="text-foreground leading-relaxed">{project.problem}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">{t("about.proofOfWork.labels.solution")}</p>
                        <p className="text-foreground leading-relaxed">{project.solution}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">{t("about.proofOfWork.labels.outcome")}</p>
                        <p className="text-foreground leading-relaxed">{project.outcome}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How I Work */}
        {/* <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">How I Work</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Structured process. Clear communication. Systems that work from day one.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((step, index) => (
                <Card key={index} className="p-6 lg:p-8 bg-card border-border">
                  <div className="flex flex-col h-full">
                    <span className="text-xs font-mono text-muted-foreground mb-4">STEP {step.step}</span>
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm flex-grow">{step.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section> */}

        {/* Who It's For / Not For */}
        <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">{t("about.whoItsFor.title")}</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t("about.whoItsFor.subtitle")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 lg:p-10 bg-card border-primary/20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{t("about.whoItsFor.goodFit.title")}</h3>
                </div>
                <ul className="space-y-3">
                  {idealClients.map((item, index) => (
                    <li key={index} className="flex gap-3 leading-relaxed">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="p-8 lg:p-10 bg-card border-destructive/20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-destructive/10">
                    <XCircle className="w-5 h-5 text-destructive" />
                  </div>
                  <h3 className="text-xl font-semibold">{t("about.whoItsFor.notGoodFit.title")}</h3>
                </div>
                <ul className="space-y-3">
                  {notFor.map((item, index) => (
                    <li key={index} className="flex gap-3 leading-relaxed text-muted-foreground">
                      <XCircle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section data-section="cta" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 sm:p-12 lg:p-16 bg-primary text-primary-foreground border-0 relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-5" />
              <div className="relative z-10 text-center space-y-6">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance leading-tight">
                  {t("about.cta.title")}
                </h2>
                <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto text-pretty leading-relaxed">
                  {t("about.cta.subtitle")}
                </p>
                <div className="pt-4">
                  <a href="https://calendly.com/fatima-ezzahra/free-strategy-call">
                    <Button
                      size="lg"
                      variant="secondary"
                      className="group bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                    >
                      {t("about.cta.button")}
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
      <StickyCTA />
    </>
  )
}
