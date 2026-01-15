"use client"

import { Code2 } from "lucide-react"
import { useI18n } from '@/app/context/I18nContext';

export function Footer() {
  const { t } = useI18n()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-primary/10">
                <Code2 className="w-5 h-5 text-primary" />
              </div>
              <span className="text-xl font-bold">{t("footer.brand")}</span>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              {t("footer.description")}
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 md:justify-self-end">
            <div>
              <h3 className="font-semibold mb-4">{t("footer.quickLinks.title")}</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
                    {t("footer.quickLinks.services")}
                  </a>
                </li>
                <li>
                  <a href="#process" className="text-muted-foreground hover:text-foreground transition-colors">
                    {t("footer.quickLinks.process")}
                  </a>
                </li>
                <li>
                  <a href="#work" className="text-muted-foreground hover:text-foreground transition-colors">
                    {t("footer.quickLinks.portfolio")}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">{t("footer.contact.title")}</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://calendly.com/fatima-ezzahra/free-strategy-call" className="text-muted-foreground hover:text-foreground transition-colors">
                    {t("footer.contact.bookCall")}
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:fatimaezzahra.legchayri@gmail.com"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {t("footer.contact.email")}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    {t("footer.contact.linkedin")}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>{t("footer.rights")} ©{currentYear}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">
              {t("footer.privacy")}
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              {t("footer.terms")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
