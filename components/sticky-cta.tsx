"use client"

import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"
import { useEffect, useState } from "react"
import Link from "next/link"
import { useI18n } from '@/app/context/I18nContext';

export function StickyCTA() {
  const { t } = useI18n()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Get the second section (ProblemSolution) position
      const problemSection = document.querySelector('[data-section="problem-solution"]')
      const ctaSection = document.querySelector('[data-section="cta"]')

      if (problemSection && ctaSection) {
        const problemTop = problemSection.getBoundingClientRect().top
        const ctaTop = ctaSection.getBoundingClientRect().top
        const windowHeight = window.innerHeight

        // Show when problem section is reached and hide when CTA section is in view
        const shouldShow = problemTop < windowHeight * 0.5 && ctaTop > windowHeight * 0.3
        setIsVisible(shouldShow)
      }
    }

    handleScroll() // Check on mount
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-background/95 backdrop-blur-lg border-t border-border shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-center">
            <Link href="https://calendly.com/fatima-ezzahra/free-strategy-call">
              <Button size="lg" className="group whitespace-nowrap">
                <Calendar className="w-4 h-4 mr-2" />
                {t("stickyCta.button")}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
