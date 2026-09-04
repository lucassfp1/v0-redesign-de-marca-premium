"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Plus } from "lucide-react"
import { useState } from "react"
import { useShop } from "@/components/shop-provider"
import { Reveal } from "@/components/reveal"
import { formatPrice, products } from "@/lib/products"

export function FeaturedProducts() {
  const { addItem } = useShop()
  const [addedId, setAddedId] = useState<string | null>(null)

  const handleAdd = (product: (typeof products)[number]) => {
    addItem(product)
    setAddedId(product.id)
    window.setTimeout(() => setAddedId(null), 1600)
  }

  return (
    <section className="products-section section-pad" id="produtos" aria-labelledby="products-title">
      <div className="section-shell">
        <Reveal className="section-heading section-heading--split">
          <div>
            <p className="eyebrow">Coleção permanente</p>
            <h2 id="products-title">Essenciais ROSÉ</h2>
          </div>
          <div>
            <p>Quatro fórmulas. Uma rotina precisa, sensorial e simples de manter.</p>
            <Link className="arrow-link" href="#todos-os-produtos">
              Ver todos os produtos <ArrowRight aria-hidden="true" />
            </Link>
          </div>
        </Reveal>

        <div className="product-grid" role="list">
          {products.map((product, index) => (
            <Reveal className={`product ${index % 2 ? "product--offset" : ""}`} delay={index * 70} key={product.id}>
              <article role="listitem">
                <div className="product__visual">
                  <Image
                    src={product.image}
                    alt={`${product.name}, ${product.category}, em embalagem ROSÉ`}
                    fill
                    sizes="(max-width: 639px) 78vw, (max-width: 1023px) 46vw, 24vw"
                    style={{ objectFit: "cover", objectPosition: product.imagePosition }}
                  />
                  <span className="product__index">0{index + 1}</span>
                  <button
                    className="product__add"
                    type="button"
                    onClick={() => handleAdd(product)}
                    aria-label={`Adicionar ${product.name} à sacola`}
                  >
                    <Plus aria-hidden="true" />
                  </button>
                  <p className={`product__feedback ${addedId === product.id ? "is-visible" : ""}`} role="status">
                    Adicionado à sacola
                  </p>
                </div>
                <div className="product__meta">
                  <div>
                    <p className="product__category">{product.category} · {product.volume}</p>
                    <h3>{product.name}</h3>
                    {product.shade ? <span className="product__shade"><i /> {product.shade}</span> : null}
                  </div>
                  <p>{formatPrice(product.price)}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
