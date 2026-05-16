"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Menu, X, ShoppingBag, Search, User } from "lucide-react"
import { useState } from "react"

const navItems = [
  { name: "Skincare", href: "#produtos" },
  { name: "Maquiagem", href: "#produtos" },
  { name: "Corpo", href: "#produtos" },
  { name: "Sobre", href: "#sobre" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50"
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 -ml-2 text-foreground/70 hover:text-foreground transition-colors"
            aria-label="Menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:gap-x-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm tracking-wide text-foreground/70 hover:text-foreground transition-colors duration-300"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Logo */}
          <Link href="/" className="absolute left-1/2 -translate-x-1/2">
            <span className="font-serif text-2xl lg:text-3xl tracking-tight text-foreground">
              ROSÉ
            </span>
          </Link>

          {/* Right actions */}
          <div className="flex items-center gap-4">
            <button className="hidden sm:block p-2 text-foreground/70 hover:text-foreground transition-colors" aria-label="Buscar">
              <Search className="h-5 w-5" />
            </button>
            <button className="hidden sm:block p-2 text-foreground/70 hover:text-foreground transition-colors" aria-label="Conta">
              <User className="h-5 w-5" />
            </button>
            <button className="p-2 text-foreground/70 hover:text-foreground transition-colors relative" aria-label="Carrinho">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-0.5 -right-0.5 h-4 w-4 rounded-full bg-primary text-[10px] font-medium text-primary-foreground flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden py-4 border-t border-border/50"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg text-foreground/70 hover:text-foreground transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  )
}
