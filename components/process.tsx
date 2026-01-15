import { Card } from "@/components/ui/card"
import { Lightbulb, Map, Hammer, Rocket } from "lucide-react"

export function Process() {
  const steps = [
    {
      icon: Lightbulb,
      title: "Discovery",
      description:
        "We start by understanding your vision, goals, and target audience. Every great project begins with clarity.",
      step: "01",
    },
    {
      icon: Map,
      title: "Strategy",
      description: "I develop a clear roadmap with milestones, timelines, and technical specifications. No surprises.",
      step: "02",
    },
    {
      icon: Hammer,
      title: "Build",
      description: "Clean code, modern tech, and constant communication. You'll see progress every step of the way.",
      step: "03",
    },
    {
      icon: Rocket,
      title: "Launch",
      description:
        "We deploy your project with confidence, ensuring everything works perfectly and you're set up for success.",
      step: "04",
    },
  ]

  return (
    <section id="process" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">Process</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            From <span className="text-primary">Concept to Cash Flow</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            A systematic approach that transforms your vision into self-running systems that generate results.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={step.step} className="relative">
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
