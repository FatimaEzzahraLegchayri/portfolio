import { Card } from "@/components/ui/card"
import { Globe, Rocket, Target, Zap } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: Globe,
      title: "Website Development",
      description:
        "Engaging, responsive websites that drive conversions. Built with modern tech and optimized for performance.",
      number: "01",
    },
    {
      icon: Zap,
      title: "MVP & Product Build",
      description:
        "Launch your product idea fast. From concept to working prototype, I build MVPs that validate your vision.",
      number: "02",
    },
    {
      icon: Target,
      title: "Automation & Systems",
      description:
        "Transform manual processes into self-running workflows. Automation sequences that liberate your schedule and amplify profits..",
      number: "03",
    },
    // {
    //   icon: Rocket,
    //   title: "Actionable Intelligence",
    //   description:
    //     "Systems that provide insights and actionable intelligence. Infrastructure that performs while you focus on scaling impact.",
    //   number: "04",
    // },
  ]

  return (
    <section id="services" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">Services</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">Digital Solutions That Operate Independently</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Whether you need a high-converting site or time-saving automation — I develop infrastructure that performs while you focus on what matters.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 lg:grid-cols-3 gap-6 ">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Card
                key={service.number}
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
