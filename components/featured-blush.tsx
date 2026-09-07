"use client"

import Image from "next/image"
import { ShoppingBag } from "lucide-react"
import { useState } from "react"
import { Reveal } from "@/components/reveal"
import { useShop } from "@/components/shop-provider"
import { formatPrice, products } from "@/lib/products"

const product = products.find((item) => item.id === "liquid-blush")!

export function FeaturedBlush() {
  const [shadeIndex, setShadeIndex] = useState(1)
  const { addItem } = useShop()
  const shade = product.swatches[shadeIndex]

  return (
    <section className="featured-blush section-pad" aria-labelledby="featured-blush-title">
      <div className="section-shell featured-blush__grid">
        <Reveal className="featured-blush__image">
          <Image className="media-contain" src="/images/home/liquid-blush-feature.png" alt="Liquid Blush Nº02 ELORA, marca da ROSÉ Beauty, em vidro rosado com aplicador" fill sizes="(max-width: 767px) 92vw, 48vw" />
        </Reveal>
        <Reveal className="featured-blush__copy" delay={80}>
          <p className="eyebrow">Produto em destaque</p>
          <h2 id="featured-blush-title">LIQUID BLUSH<br />Nº02</h2>
          <p className="featured-blush__statement">Cor em estado líquido, apresentada em um gesto preciso.</p>
          <div className="featured-blush__swatches">
            <span>Escolha a cor · <strong>{shade.name}</strong></span>
            <div className="swatches">{product.swatches.map((item, index) => <button type="button" className={index === shadeIndex ? "is-selected" : ""} key={item.name} onClick={() => setShadeIndex(index)} aria-label={item.name} aria-pressed={index === shadeIndex}><span style={{ backgroundColor: item.color }} /></button>)}</div>
          </div>
          <button className="button button--light" type="button" onClick={() => addItem(product, shade)}>
            <ShoppingBag aria-hidden="true" /> Adicionar à sacola · {formatPrice(product.price)}
          </button>
        </Reveal>
      </div>
    </section>
  )
}
