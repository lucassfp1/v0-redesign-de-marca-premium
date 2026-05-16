"use client"

import { motion } from "framer-motion"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

const testimonials = [
  {
    id: 1,
    name: "Ana Carolina",
    location: "São Paulo",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    text: "Os produtos ROSÉ transformaram minha pele! O sérum luminoso virou essencial na minha rotina. Minha pele nunca esteve tão radiante.",
    product: "Sérum Luminoso",
  },
  {
    id: 2,
    name: "Juliana Santos",
    location: "Rio de Janeiro",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    text: "Finalmente encontrei uma marca que entende o que minha pele precisa. Os ingredientes naturais fazem toda a diferença.",
    product: "Hidratante Rosé",
  },
  {
    id: 3,
    name: "Maria Fernanda",
    location: "Belo Horizonte",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    text: "O batom velvet tem a textura perfeita e dura o dia todo. As cores são lindas e a embalagem é um luxo!",
    product: "Batom Velvet",
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="py-24 lg:py-32 bg-accent text-accent-foreground overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-accent-foreground/60">
            Depoimentos
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl mt-4 tracking-tight text-balance">
            O que dizem nossas clientes
          </h2>
        </motion.div>

        {/* Testimonial carousel */}
        <div className="relative">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-accent-foreground/5 rounded-3xl p-8 lg:p-12">
              {/* Stars */}
              <div className="flex gap-1 justify-center mb-8">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl lg:text-2xl text-center leading-relaxed font-serif">
                &ldquo;{testimonials[current].text}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="mt-10 flex flex-col items-center">
                <img
                  src={testimonials[current].image}
                  alt={testimonials[current].name}
                  className="h-16 w-16 rounded-full object-cover ring-2 ring-primary/20"
                />
                <div className="mt-4 text-center">
                  <p className="font-medium text-accent-foreground">
                    {testimonials[current].name}
                  </p>
                  <p className="text-sm text-accent-foreground/60">
                    {testimonials[current].location} • {testimonials[current].product}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-3 rounded-full bg-accent-foreground/10 hover:bg-accent-foreground/20 transition-colors"
              aria-label="Anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? "w-8 bg-primary" : "w-2 bg-accent-foreground/30"
                  }`}
                  aria-label={`Ir para depoimento ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-3 rounded-full bg-accent-foreground/10 hover:bg-accent-foreground/20 transition-colors"
              aria-label="Próximo"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
