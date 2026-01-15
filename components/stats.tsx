"use client"

import { useEffect, useRef, useState } from "react"
import { useI18n } from '@/app/context/I18nContext';

export function Stats() {
  const { t } = useI18n()
  const [animatedValues, setAnimatedValues] = useState([10, 10, 10])
  const hasAnimatedRef = useRef(false)
  const sectionRef = useRef<HTMLElement>(null)

  const stats = (t("stats.items") || []) as Array<{
    value: string
    label: string
    description: string
    numericValue: number
    suffix: string
  }>

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimatedRef.current) {
            hasAnimatedRef.current = true

            const duration = 2000 // 2 seconds
            const startTime = Date.now()
            const startValues = [10, 10, 10]
            const targetValues = stats.map((stat) => stat.numericValue)

            const animate = () => {
              const elapsed = Date.now() - startTime
              const progress = Math.min(elapsed / duration, 1)

              // Easing function (ease-out)
              const easeOut = 1 - Math.pow(1 - progress, 3)

              const currentValues = targetValues.map((target, index) => {
                const start = startValues[index]
                const difference = target - start
                return Math.floor(start + difference * easeOut)
              })

              setAnimatedValues(currentValues)

              if (progress < 1) {
                requestAnimationFrame(animate)
              } else {
                setAnimatedValues(targetValues)
              }
            }

            animate()
          }
        })
      },
      {
        threshold: 0.3,
      }
    )

    const currentSection = sectionRef.current
    if (currentSection) {
      observer.observe(currentSection)
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">{t("stats.sectionLabel")}</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">{t("stats.title")}</h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-2">
              <div className="text-5xl sm:text-6xl font-bold text-primary">
                {animatedValues[index]}
                {stat.suffix}
              </div>
              <div className="text-xl font-semibold">{stat.label}</div>
              <p className="text-muted-foreground text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
