import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code2, Smartphone, Zap, MessageSquare, Clock, Shield } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import ContactForm from "@/components/ContactForm"
import { ScrollButton } from "@/components/ScrollButton"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative px-4 py-24 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-balance md:text-6xl lg:text-7xl">
            I build fast, reliable web applications for growing businesses
          </h1>
          <p className="mt-6 text-lg text-muted-foreground md:text-xl text-pretty">
            Helping companies launch MVPs, scale SaaS products, and maintain applications with clean
            code and clear communication.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <ScrollButton targetId="contact" size="lg" className="text-base">
              Start a Project <ArrowRight className="ml-2 h-4 w-4" />
            </ScrollButton>
            <ScrollButton targetId="work" variant="outline" size="lg" className="text-base bg-transparent">
              View Work
            </ScrollButton>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="border-t bg-muted/30 px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-4">Services</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            From initial concept to ongoing support, I deliver results that drive your business forward.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="p-6">
              <Code2 className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Website Development</h3>
              <p className="text-muted-foreground">
                Modern, responsive websites that convert visitors into customers. Fast loading, SEO-optimized, and built
                to scale.
              </p>
            </Card>
            <Card className="p-6">
              <Zap className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Web Applications</h3>
              <p className="text-muted-foreground">
                Custom web apps tailored to your business needs. Intuitive interfaces with robust backend systems.
              </p>
            </Card>
            <Card className="p-6">
              <Smartphone className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">MVP Development</h3>
              <p className="text-muted-foreground">
                Launch your product idea fast. I help startups build and validate their first version without
                overengineering.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Selected Work Section */}
      <section className="px-4 py-20" id="work">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-4">Selected Work</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Recent projects that delivered measurable results for clients.
          </p>
          <div className="grid gap-8 lg:gap-12">
            {/* Project 1 */}
            {/* <Card className="overflow-hidden">
              <div className="grid md:grid-cols-5">
                <div className="md:col-span-2 bg-muted p-8 flex items-center justify-center">
                  <div className="text-6xl font-bold text-muted-foreground/20">01</div>
                </div>
                <div className="md:col-span-3 p-8">
                  <Badge className="mb-3">SaaS Platform</Badge>
                  <h3 className="text-2xl font-bold mb-3">Task Management Application</h3>
                  <div className="space-y-3 text-muted-foreground">
                    <p>
                      <strong className="text-foreground">Problem:</strong> Client needed a custom project management
                      tool for their remote team of 50+ people.
                    </p>
                    <p>
                      <strong className="text-foreground">Solution:</strong> Built a real-time collaboration platform
                      with task tracking, file sharing, and team communication.
                    </p>
                    <p>
                      <strong className="text-foreground">Result:</strong> Reduced project turnaround time by 35% and
                      increased team productivity metrics by 40%.
                    </p>
                  </div>
                </div>
              </div>
            </Card> */}

            {/* Project 2*/}
            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-5">
                <div className="md:col-span-2 bg-muted flex items-center justify-center">
                  {/* <div className="text-6xl font-bold text-muted-foreground/20">03</div> */}
                  <Image src="/images/budget app.png" alt="Personal Budgeting Web App" width={500} height={500} className="rounded-lg w-full h-full object-cover" />
                </div>
                <div className="md:col-span-3 p-8">
                  <Badge className="mb-3">MVP Launch</Badge>
                  <h3 className="text-2xl font-bold mb-3">Personal Budgeting Web App</h3>
                  <div className="space-y-3 text-muted-foreground">
                    <p>
                      <strong className="text-foreground">Problem:</strong> Early-stage project 
                      needed a simple, usable budgeting product to validate the concept and onboard first users without overbuilding.
                    </p>
                    <p>
                      <strong className="text-foreground">Solution:</strong> Built a clean MVP budgeting web app with user onboarding, 
                      budget categories, expense tracking, financial goals, and advisor-facing dashboards to monitor user progress and key metrics.
                    </p>
                    <Link href="https://budgetting-app-eosin.vercel.app" target="_blank" className="text-blue-500 underline">Budgeting App</Link>
                    {/* <p>
                      <strong className="text-foreground">Result:</strong> Successfully launched on time, secured seed
                      funding, and acquired 200+ users in first month.
                    </p> */}
                  </div>
                </div>
              </div>
            </Card>

            {/* Project 3*/}
            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-5">
                <div className="md:col-span-2 bg-muted p-8 flex items-center justify-center">
                  <Image src="/images/Capture.PNG" alt="Personal Budgeting Web App" width={500} height={500} className="rounded-lg w-full h-full object-cover" />
                </div>
                <div className="md:col-span-3 p-8">
                  <Badge className="mb-3">E-commerce</Badge>
                  <h3 className="text-2xl font-bold mb-3">Online Store Redesign</h3>
                  <div className="space-y-3 text-muted-foreground">
                    <p>
                      <strong className="text-foreground">Problem:</strong> Slow website with high cart abandonment rate
                      and poor mobile experience.
                    </p>
                    <p>
                      <strong className="text-foreground">Solution:</strong> Complete rebuild with modern stack,
                      optimized checkout flow, and mobile-first design.
                    </p>
                    <Link href="https://dev-eclip.pantheonsite.io" target="_blank" className="text-blue-500 underline">Ecommerce Website</Link>

                    {/* <p>
                      <strong className="text-foreground">Result:</strong> Conversion rate increased by 60% and page
                      load time reduced from 8s to under 2s.
                    </p> */}
                  </div>
                </div>
              </div>
            </Card>
           
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="border-t bg-muted/30 px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-4">About</h2>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              I'm a freelance software developer building web applications for
              businesses. I specialize in React, Next.js, and Node.js, with a focus on creating fast,
              reliable, and scalable solutions.
            </p>
            <p>
              What sets me apart is my commitment to clear communication and delivering on time. I treat your project
              like my own business, providing regular updates and being available when you need me. No surprises, no
              excuses—just quality work and honest collaboration.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              {/* <Badge variant="secondary" className="px-3 py-1">
                3+ Years Experience
              </Badge> */}
              <Badge variant="secondary" className="px-3 py-1">
                Full-Stack Development
              </Badge>
              <Badge variant="secondary" className="px-3 py-1">
                Clear Communication
              </Badge>
              <Badge variant="secondary" className="px-3 py-1">
                On-Time Delivery
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-4">Tools & Technologies</h2>
          <p className="text-center text-muted-foreground mb-12">
            Modern tools I use to build reliable, high-performance applications.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Node.js",
              // "PostgreSQL",
              "Tailwind CSS",
              "Firebase",
              "Vercel",
              "Git",
            ].map((tech) => (
              <Badge key={tech} variant="outline" className="px-4 py-2 text-base">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Why Hire Me Section */}
      <section className="border-t bg-muted/30 px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-4">Why Hire Me</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Working with a freelancer means faster decisions, better communication, and full accountability.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="p-6 text-center">
              <MessageSquare className="h-10 w-10 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Direct Communication</h3>
              <p className="text-muted-foreground">
                Talk directly to the person building your product. No middlemen, no miscommunication.
              </p>
            </Card>
            <Card className="p-6 text-center">
              <Clock className="h-10 w-10 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Flexible & Fast</h3>
              <p className="text-muted-foreground">
                Quick iterations and adaptable to changing requirements without bureaucracy.
              </p>
            </Card>
            <Card className="p-6 text-center">
              <Shield className="h-10 w-10 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Full Accountability</h3>
              <p className="text-muted-foreground">
                One person responsible for the entire project. I take ownership of both success and challenges.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-4">How We'll Work Together</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            A simple, transparent process designed to deliver results without surprises.
          </p>
          <div className="grid gap-6 md:grid-cols-4">
            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Discovery</h3>
              <p className="text-muted-foreground">
                We discuss your goals, requirements, and timeline. I'll ask questions to fully understand your needs.
              </p>
            </div>
            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Build</h3>
              <p className="text-muted-foreground">
                I develop your project with regular check-ins and demos, ensuring we stay aligned throughout.
              </p>
            </div>
            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Review</h3>
              <p className="text-muted-foreground">
                You test the product and provide feedback. We refine together until it meets your expectations.
              </p>
            </div>
            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold mb-2">Launch</h3>
              <p className="text-muted-foreground">
                I deploy your project and provide documentation. Ongoing support available if needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="border-t bg-muted/30 px-4 py-20">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold text-center mb-4">Let's Work Together</h2>
          <p className="text-center text-muted-foreground mb-12">
            Have a project in mind? Get in touch and let's discuss how I can help bring your idea to life.
          </p>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t px-4 py-8">
        <div className="mx-auto max-w-6xl text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
