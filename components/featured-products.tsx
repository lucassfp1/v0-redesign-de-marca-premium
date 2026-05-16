"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Sérum Luminoso",
    category: "Skincare",
    price: "R$ 189",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=600&auto=format&fit=crop",
    tag: "Bestseller",
  },
  {
    id: 2,
    name: "Hidratante Rosé",
    category: "Skincare",
    price: "R$ 149",
    image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?q=80&w=600&auto=format&fit=crop",
    tag: "Novo",
  },
  {
    id: 3,
    name: "Batom Velvet",
    category: "Maquiagem",
    price: "R$ 89",
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=600&auto=format&fit=crop",
    tag: null,
  },
  {
    id: 4,
    name: "Óleo Corporal",
    category: "Corpo",
    price: "R$ 129",
    image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?q=80&w=600&auto=format&fit=crop",
    tag: "Favorito",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export function FeaturedProducts() {
  return (
    <section id="produtos" className="py-24 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
            Coleção exclusiva
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl mt-4 tracking-tight text-balance">
            Produtos em destaque
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubra nossa seleção de produtos mais amados, formulados para transformar 
            sua rotina de beleza.
          </p>
        </motion.div>

        {/* Products grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {products.map((product) => (
            <motion.article
              key={product.id}
              variants={itemVariants}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-muted mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {product.tag && (
                  <span className="absolute top-4 left-4 bg-card/90 backdrop-blur-sm text-xs tracking-wide px-3 py-1.5 rounded-full text-card-foreground">
                    {product.tag}
                  </span>
                )}
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
                <button className="absolute bottom-4 left-4 right-4 bg-card/95 backdrop-blur-sm text-card-foreground py-3 rounded-xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 text-sm font-medium">
                  Adicionar ao carrinho
                </button>
              </div>
              <div className="space-y-1">
                <p className="text-xs tracking-wide text-muted-foreground uppercase">
                  {product.category}
                </p>
                <h3 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-foreground/80">{product.price}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* View all button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors group"
          >
            <span className="text-sm tracking-wide">Ver todos os produtos</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
