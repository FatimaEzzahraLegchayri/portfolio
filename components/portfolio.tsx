"use client"

import { Card } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import Link from "next/link"
import { useI18n } from '@/app/context/I18nContext';

export function Portfolio() {
  const { t } = useI18n()
  const projects = [
    {
      title:  "Art Space",
      category: "Website",
      description: "A structured workshop system designed to present programs, capture & registrations, and scale delivery.",
      image: "/workshop.png",
      link: "https://v0-art-space-landing-page.vercel.app",
    },
    {
      title: "My Space",
      category: "Website",
      description: "A streamlined website for promoting workshops and managing attendee sign-ups",
      image: "/my-space.png",
      link: "https://workshop-i45prfdux-project-097.vercel.app",
    },
    {
      title: "Budget Tracker Platform",
      category: "Web Application _ Coming Soon",
      description: "A clean MVP budgeting web app built to validate the idea, onboard early users, and track expenses, goals, and key financial metrics.",
      image: "/budget-app-hero.png",
      link: "https://budgetting-app-eosin.vercel.app",
    },
    {
      title: "Hugo",
      category: "Web application",
      description: "AI-powered pet healthcare with personalized insights and 24/7 access to veterinary experts.",
      image: "/pet-app.png",
      link: "https://v0-proactive-pet-care-gold.vercel.app",
    },
    {
      title: "Craft Studio",
      category: "Website",
      description: "A conversion-focused website to promote workshops, manage bookings, and fill seats efficiently.",
      image: "/workshop1.png",
      link: "https://perspective-lens-171.lovable.app",
    },
    {
      title: "Atelier Zein",
      category: "Website",
      description: "A conversion-focused website to promote workshops, manage bookings, and fill seats efficiently.",
      image: "/atelier-zein.png",
      link: "https://v0-atelier-zein.vercel.app",
    }
  ]

  return (
    <section id="projects" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">{t("portfolio.sectionLabel")}</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            {t("portfolio.title.line1")}, <span className="italic font-serif">{t("portfolio.title.highlight")}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            {t("portfolio.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-100 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5 text-black" />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <div className="text-xs font-medium text-primary mb-2 uppercase tracking-wider">{project.category}</div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
