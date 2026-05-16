"use client"

import Link from "next/link"
import { Instagram, Facebook, Youtube, Twitter } from "lucide-react"

const footerLinks = {
  shop: [
    { name: "Skincare", href: "#" },
    { name: "Maquiagem", href: "#" },
    { name: "Corpo", href: "#" },
    { name: "Kits", href: "#" },
    { name: "Novidades", href: "#" },
  ],
  company: [
    { name: "Nossa História", href: "#" },
    { name: "Ingredientes", href: "#" },
    { name: "Sustentabilidade", href: "#" },
    { name: "Carreiras", href: "#" },
    { name: "Imprensa", href: "#" },
  ],
  help: [
    { name: "Contato", href: "#" },
    { name: "FAQ", href: "#" },
    { name: "Envio", href: "#" },
    { name: "Trocas e Devoluções", href: "#" },
    { name: "Rastrear Pedido", href: "#" },
  ],
}

const socialLinks = [
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Youtube", icon: Youtube, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
]

export function Footer() {
  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-block">
              <span className="font-serif text-2xl tracking-tight">ROSÉ</span>
            </Link>
            <p className="mt-4 text-sm text-accent-foreground/70 leading-relaxed">
              Beleza de luxo que celebra sua essência natural. Fórmulas exclusivas 
              com ingredientes premium.
            </p>
            <div className="mt-6 flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="p-2 rounded-full bg-accent-foreground/10 hover:bg-accent-foreground/20 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Shop links */}
          <div>
            <h3 className="text-sm font-medium tracking-wide uppercase mb-4">
              Loja
            </h3>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-accent-foreground/70 hover:text-accent-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h3 className="text-sm font-medium tracking-wide uppercase mb-4">
              Empresa
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-accent-foreground/70 hover:text-accent-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help links */}
          <div>
            <h3 className="text-sm font-medium tracking-wide uppercase mb-4">
              Ajuda
            </h3>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-accent-foreground/70 hover:text-accent-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-accent-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-accent-foreground/60">
              © 2024 ROSÉ Beauty. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-sm text-accent-foreground/60 hover:text-accent-foreground transition-colors">
                Termos de Uso
              </Link>
              <Link href="#" className="text-sm text-accent-foreground/60 hover:text-accent-foreground transition-colors">
                Privacidade
              </Link>
              <Link href="#" className="text-sm text-accent-foreground/60 hover:text-accent-foreground transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
