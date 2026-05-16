"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PremiumCTA() {
  return (
    <section className="py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background image */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1400&auto=format&fit=crop"
              alt="Coleção premium"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
          </div>

          {/* Content */}
          <div className="relative py-20 lg:py-32 px-8 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-xl"
            >
              <span className="inline-block text-xs tracking-[0.3em] uppercase text-background/70 mb-6">
                Lançamento exclusivo
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-background tracking-tight text-balance">
                Nova coleção de verão
              </h2>
              <p className="mt-6 text-lg text-background/80 leading-relaxed">
                Descubra nossa nova linha de produtos desenvolvidos especialmente 
                para manter sua pele hidratada e radiante durante todo o verão.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="group bg-background text-foreground hover:bg-background/90 px-8 h-14 text-base">
                  Comprar agora
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outline" size="lg" className="h-14 px-8 text-base border-background/30 text-background hover:bg-background/10">
                  Ver lookbook
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
