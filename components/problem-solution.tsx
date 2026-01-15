import { AlertCircle, CheckCircle2 } from "lucide-react"
import { Card } from "@/components/ui/card"

export function ProblemSolution() {
  const problems = [
    "Time drained by manual operations",
    // "Growth stalled by inefficient workflows",
    // "Leads slipping through unclear or underperforming funnels",
    "A business that only runs when youre involved",

    "Brilliant concepts sabotaged by weak implementation",
    "Spending hours babysitting systems instead of scaling",
    // "Manual processes eating your time and limiting growth",:
    "Websites that look good but don't generate revenue",
  ]

  const solutions = [
    "Self-running operations that remove day-to-day friction",
    // "Web experiences engineered to convert consistently",
    // "Automation that replaces manual effort with leverage",
    "A reliable foundation that performs 24/7 — without supervision",

    "Self-running workflows that operate independently",
    "High-converting sites that sell while you focus elsewhere",
    // "Automation that transforms manual tasks into passive systems",
    "Intelligent infrastructure that performs 24/7",
  ]

  return (
    <section data-section="problem-solution" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">The Challenge</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">You Built a Business, Not a Job</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Problems */}
          <Card className="p-8 lg:p-10 bg-card border-destructive/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-destructive/10">
                <AlertCircle className="w-5 h-5 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold">The Problem</h3>
            </div>
            <ul className="space-y-4">
              {problems.map((problem, index) => (
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
              <h3 className="text-xl font-semibold">The Solution</h3>
            </div>
            <ul className="space-y-4">
              {solutions.map((solution, index) => (
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
            I help entrepreneurs stop managing their business manually and start 
            scaling automatically through 
              {/* After years of working with emerging companies and independent businesses, I discovered a pattern: entrepreneurs burn energy managing their systems instead of expanding their impact. That's why I specialize in converting manual processes into self-running workflows and standard websites into perpetual selling engines. My mission?  */}
              <strong className="font-semibold text-foreground"> smart websites and self-running systems.</strong>.
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
