import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ProductCard } from "@/components/product-card"
import { Reveal } from "@/components/reveal"
import { bestSellers } from "@/lib/products"

export function FeaturedProducts() {
  return (
    <section className="best-sellers section-pad" id="best-sellers" aria-labelledby="best-sellers-title">
      <div className="section-shell">
        <Reveal className="section-heading section-heading--split">
          <div><p className="eyebrow">Mais desejados</p><h2 id="best-sellers-title">Best Sellers</h2></div>
          <div><p>Os essenciais de cor que definem a coleção.</p><Link className="arrow-link" href="/best-sellers">Ver todos <ArrowRight aria-hidden="true" /></Link></div>
        </Reveal>
        <div className="best-sellers__track" role="list">
          {bestSellers.map((product, index) => (
            <div role="listitem" key={product.id}>
              <Reveal delay={index * 60}><ProductCard product={product} /></Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
