import { Card } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah El Ouakil",
      role: "Founder, Artisan Workshop Co.",
      content:
        "The automation system freed up 15+ hours per week. I went from managing every booking manually to focusing on scaling my business. Revenue increased 40% in the first quarter.",
      rating: 5,
    },
    {
      name: "Mohammed El Ouali",
      role: "CEO, Budget Tracker Platform",
      content:
        "From concept to launch in 6 weeks. The MVP validated our idea faster than we imagined, and the infrastructure handles growth seamlessly. Best investment we made.",
      rating: 5,
    },
    {
      name: "Loubna El Boussiri",
      role: "Business Owner, Craft Studio",
      content:
        "Our website went from a brochure to a selling engine. Bookings increased 200% in the first month. The system runs itself — I check in weekly, not daily.",
      rating: 5,
    },
    {
      name: "Karima Alami",
      role: "Entrepreneur, My Space",
      content:
        "Finally, a developer who understands business outcomes, not just code. The automation replaced 3 manual processes and cut operational costs by 30%. Game changer.",
      rating: 5,
    },
    {
      name: "Ayoub Zein",
      role: "Founder, Atelier Zein",
      content:
        "Professional, results-driven, and genuinely invested in our success. The website converts visitors into clients consistently. We've scaled without adding staff.",
      rating: 5,
    },
    {
      name: "Zineb Motaki",
      role: "Startup Founder",
      content:
        "The systems work 24/7 without supervision. I can focus on strategy instead of operations. This is exactly what I needed to scale — reliable infrastructure that performs.",
      rating: 5,
    },
  ]

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">Testimonials</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Trusted by Business Owners Who <span className="text-primary">Scale Without Chaos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Real results from entrepreneurs who transformed their operations and accelerated growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 lg:p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="flex flex-col h-full">
                {/* Quote icon */}
                <div className="mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 w-fit">
                    <Quote className="w-5 h-5 text-primary" />
                  </div>
                </div>

                {/* Rating stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Testimonial content */}
                <p className="text-foreground leading-relaxed mb-6 flex-grow text-pretty">
                  {testimonial.content}
                </p>

                {/* Author info */}
                <div className="pt-4 border-t border-border">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust indicator */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground">
            Join <span className="font-semibold text-foreground">30+</span> business owners who've transformed their operations
          </p>
        </div>
      </div>
    </section>
  )
}
