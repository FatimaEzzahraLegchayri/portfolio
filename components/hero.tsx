"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Code2 } from "lucide-react"
import { InteractiveParticles } from "./interactive-particles"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-16">
      <InteractiveParticles />

      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="max-w-7xl mx-auto w-full py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Top badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/50 border border-border">
            <Code2 className="w-4 h-4 text-foreground" />
            <span className="text-sm font-medium text-foreground">Developer & Systems Builder</span>
          </div>

          {/* Main headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance leading-tight">
            Systems That <span className="text-primary">Work While You Sleep</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
          Turn your business into a self-running engine that frees your time and drives growth — so you can focus on what matters most.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            
         
            <a 
            href="https://calendly.com/fatima-ezzahra/free-strategy-call" 
            >
              <Button 
              size="lg" 
              className="w-full sm:w-auto text-base group hover:cursor-pointer"
                >
                Free Project Call
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              
              </Button>
            </a>
            <a href="#process">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-base bg-transparent">
                How It Works
              </Button>
            </a>
          </div>

          {/* Trust indicator */}
          <div className="pt-12 text-sm text-muted-foreground">
          <p>For business owners who want growth without operational chaos.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
