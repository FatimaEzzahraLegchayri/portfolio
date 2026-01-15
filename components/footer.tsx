import { Code2 } from "lucide-react"

export function Footer() {
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
              <span className="text-xl font-bold">Developer</span>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              I equip business owners with systems that liberate their schedule and amplify their profits. Engineering digital solutions that operate independently — so you can focus on scaling your impact, not managing your infrastructure.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 md:justify-self-end">
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#process" className="text-muted-foreground hover:text-foreground transition-colors">
                    Process
                  </a>
                </li>
                <li>
                  <a href="#work" className="text-muted-foreground hover:text-foreground transition-colors">
                    Portfolio
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Book a Call
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:hello@example.com"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Email
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>All rights reserved. ©{currentYear}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
