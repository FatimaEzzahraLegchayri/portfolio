"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { useI18n } from '../app/context/I18nContext';
import { Globe } from "lucide-react"

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { t, locale, changeLocale } = useI18n()
  const navLinks = [
    { href: "/#services", label: t("navigation.links.services") },
    { href: "/#projects", label: t("navigation.links.projects") },
    { href: "/about", label: t("navigation.links.about") },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/">
          <div className="flex-shrink-0">
            <span className="text-xl font-bold text-foreground">{t("navigation.logo")}</span>
          </div>
          </a>

          {/* Desktop Navigation links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right side - Theme toggle, CTA, and Mobile menu button */}
          <div className="flex items-center gap-3">
          
          <Select value={locale} onValueChange={changeLocale}>
                <SelectTrigger className="w-[100px] h-9">
                  <Globe className="w-4 h-4 mr-2" />
                  <SelectValue>
                    {locale === 'en' ? 'EN' : locale === 'fr' ? 'FR' : 'FR'}
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">
                    <div className="flex items-center gap-2">
                      <span>🇬🇧</span>
                      <span>English</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="fr">
                    <div className="flex items-center gap-2">
                      <span>🇫🇷</span>
                      <span>Français</span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>

            <ThemeToggle />
            <a href="https://calendly.com/fatima-ezzahra/free-strategy-call" className="hidden md:block">
              <button className="cursor-pointer px-6 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
                {t("navigation.cta")}
              </button>
            </a>
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Sheet */}
      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
          <SheetHeader>
            <SheetTitle className="text-left">{t("navigation.menu")}</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col gap-4 mt-8 px-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-border">
              <a
                href="https://calendly.com/fatima-ezzahra/free-strategy-call"
                onClick={() => setMobileMenuOpen(false)}
                className="block"
              >
                <Button className="w-full">
                  {t("navigation.cta")}
                </Button>
              </a>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  )
}
