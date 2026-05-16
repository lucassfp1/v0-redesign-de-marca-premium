"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight } from "lucide-react"

export function Newsletter() {
  return (
    <section className="py-24 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
            Newsletter
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl mt-4 tracking-tight text-balance">
            Fique por dentro das novidades
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Cadastre-se para receber em primeira mão nossos lançamentos, 
            dicas de beleza e ofertas exclusivas.
          </p>

          <form className="mt-10 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Seu melhor e-mail"
              className="h-14 px-5 bg-card border-border/50 text-base"
            />
            <Button size="lg" className="group bg-accent text-accent-foreground hover:bg-accent/90 h-14 px-8">
              Inscrever
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </form>

          <p className="mt-4 text-xs text-muted-foreground">
            Ao se inscrever, você concorda com nossa política de privacidade. 
            Prometemos não enviar spam.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
