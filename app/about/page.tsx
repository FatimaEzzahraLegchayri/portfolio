import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { StickyCTA } from "@/components/sticky-cta"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Globe, Zap, Target, Settings, CheckCircle2, XCircle } from "lucide-react"

export default function About() {
  const services = [
    {
      icon: Globe,
      title: "Custom Websites",
      description: "Conversion-focused websites built for your business. Clear structure, fast performance, and results that scale.",
    },
    {
      icon: Zap,
      title: "Business Automation",
      description: "Internal systems that eliminate manual work. Automated workflows that handle routine tasks without supervision.",
    },
    {
      icon: Target,
      title: "Conversion-Focused UX",
      description: "Every element optimized to turn visitors into clients. Data-driven design that improves outcomes, not just aesthetics.",
    },
    {
      icon: Settings,
      title: "Tool & System Integration",
      description: "Connect your existing tools into seamless workflows. CRMs, booking systems — working together.",
    },
  ]

  const proofOfWork = [
    {
      client: "Workshop Business",
      problem: "Manual booking management consumed 15+ hours weekly",
      solution: "Automated booking system with payment processing and email confirmations",
      outcome: "Time reduced to 30 minutes per week. Bookings increased 40% in first quarter.",
    },
    {
      client: "Local Service Provider",
      problem: "Website looked good but generated zero leads",
      solution: "Redesigned conversion flow with clear value proposition and streamlined booking",
      outcome: "Website now converts 8% of visitors into booked appointments.",
    },
    {
      client: "Small Retail Business",
      problem: "Three separate systems requiring manual data entry",
      solution: "Integrated inventory, POS, and online store into single automated workflow",
      outcome: "Eliminated 10 hours of weekly admin work. Errors reduced by 95%.",
    },
  ]

  const process = [
    {
      step: "01",
      title: "Understand Your Operations",
      description: "I review your current processes, identify friction points, and map what needs to change.",
    },
    {
      step: "02",
      title: "Design the Solution",
      description: "Clear plan outlining the system, integrations, and workflows. No surprises, just clarity.",
    },
    {
      step: "03",
      title: "Build & Integrate",
      description: "Develop the system, connect your tools, and test thoroughly. You see progress at each stage.",
    },
    {
      step: "04",
      title: "Launch & Document",
      description: "Deploy the system, train your team, and provide documentation. Then it runs independently.",
    },
  ]

  const idealClients = [
    "Small to medium businesses with clear operations",
    "Service providers who want to scale without hiring",
    "Businesses spending significant time on manual tasks",
    "Companies ready to invest in systems that last",
  ]

  const notFor = [
    "Early-stage ideas without defined processes",
    // "Businesses seeking lowest-price solutions",
    "Projects requiring daily hands-on maintenance",
    "Companies needing extensive ongoing consulting",
  ]

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background pt-16">
        {/* Opening Positioning Statement */}
        <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance leading-tight">
              I Build Systems That <span className="text-primary">Eliminate Manual Work</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              For small and local businesses, I create websites and automation that convert visitors into clients and manual processes into self-running operations.
            </p>
          </div>
        </section>

        {/* Perspective / Point of View */}
        <section data-section="problem-solution" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 lg:p-10 bg-card border-border">
              <p className="text-lg leading-relaxed text-pretty mb-4">
                Most businesses struggle with systems, not just websites. A beautiful site that doesn't convert is useless. Manual processes that eat your time limit growth. Tools that don't talk to each other create chaos.
              </p>
              <p className="text-lg leading-relaxed text-pretty">
                I focus on efficiency, automation, and clarity. Every system I build operates independently, connects your tools seamlessly, and turns manual work into automated workflows. The result: you get time back and your business scales without adding overhead.
              </p>
            </Card>
          </div>
        </section>

        {/* What I Do */}
        <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">What I Do</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Core services for businesses that need systems, not just websites.
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
                        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
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
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">Proof of Work</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Real problems solved for real businesses. Focused on outcomes, not features.
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
                        <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">Problem</p>
                        <p className="text-foreground leading-relaxed">{project.problem}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">Solution</p>
                        <p className="text-foreground leading-relaxed">{project.solution}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">Outcome</p>
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
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">Who This Is For</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Clear fit, clear boundaries. Better outcomes for everyone.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 lg:p-10 bg-card border-primary/20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Good Fit</h3>
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
                  <h3 className="text-xl font-semibold">Not a Good Fit</h3>
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
                  Ready to Build a System That Works?
                </h2>
                <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto text-pretty leading-relaxed">
                  If your business fits the profile above, let's discuss your project. I'll provide a clear proposal with timeline and scope.
                </p>
                <div className="pt-4">
                  <a href="https://calendly.com/fatima-ezzahra/free-strategy-call">
                    <Button
                      size="lg"
                      variant="secondary"
                      className="group bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                    >
                      Start a Project
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
