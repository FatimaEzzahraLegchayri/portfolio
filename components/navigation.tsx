"use client"

import { ThemeToggle } from "./theme-toggle"

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-xl font-bold text-foreground">FZ.</span>
          </div>

          {/* Navigation links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/#services" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="/#projects" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Projects
            </a>
            <a href="/about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              About
            </a>
          </div>

          {/* Right side - Theme toggle and CTA */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a href="https://calendly.com/fatima-ezzahra/free-strategy-call">
            <button className="cursor-pointer px-6 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
              Get In Touch
            </button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
