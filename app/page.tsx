import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { ProblemSolution } from "@/components/problem-solution"
import { Services } from "@/components/services"
import { Process } from "@/components/process"
import { Portfolio } from "@/components/portfolio"
import { Testimonials } from "@/components/testimonials"
import { Stats } from "@/components/stats"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import { StickyCTA } from "@/components/sticky-cta"
import { FAQ } from "@/components/faq"

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background">
        <Hero />
        <ProblemSolution />
        <Services />
        <Process />
        <Stats />
        <Portfolio />
        <FAQ />
        <Testimonials />
        <CTA />
        <Footer />
      </main>
      <StickyCTA />
    </>
  )
}
