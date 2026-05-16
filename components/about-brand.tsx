"use client"

import { motion } from "framer-motion"

export function AboutBrand() {
  return (
    <section id="sobre" className="py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-muted">
                  <img
                    src="https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=600&auto=format&fit=crop"
                    alt="Laboratório de beleza"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden bg-muted">
                  <img
                    src="https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=600&auto=format&fit=crop"
                    alt="Ingredientes naturais"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="pt-8">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-muted">
                  <img
                    src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=600&auto=format&fit=crop"
                    alt="Ritual de beleza"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
              Nossa história
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl mt-4 tracking-tight text-balance">
              Beleza que vem da natureza
            </h2>
            <div className="mt-8 space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Nascemos da paixão por criar produtos que celebram a beleza natural 
                de cada pessoa. Nossa jornada começou com uma simples pergunta: como 
                podemos oferecer o melhor da natureza em fórmulas eficazes e luxuosas?
              </p>
              <p>
                Cada produto ROSÉ é desenvolvido com ingredientes cuidadosamente 
                selecionados, combinando ciência avançada com extratos botânicos 
                premium para resultados visíveis e duradouros.
              </p>
            </div>

            {/* Features */}
            <div className="mt-12 grid grid-cols-2 gap-8">
              {[
                { icon: "🌿", title: "Ingredientes Naturais", desc: "Extratos botânicos premium" },
                { icon: "🐰", title: "Cruelty Free", desc: "Nunca testado em animais" },
                { icon: "♻️", title: "Sustentável", desc: "Embalagens recicláveis" },
                { icon: "🔬", title: "Ciência Avançada", desc: "Fórmulas dermatológicas" },
              ].map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-secondary flex items-center justify-center text-xl">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground mt-0.5">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
