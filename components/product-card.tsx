"use client"

import Image from "next/image"
import Link from "next/link"
import { Plus } from "lucide-react"
import { useState } from "react"
import type { CSSProperties } from "react"
import { useShop } from "@/components/shop-provider"
import { formatPrice, type Product } from "@/lib/products"

export function ProductCard({ product, priority = false }: { product: Product; priority?: boolean }) {
  const { addItem } = useShop()
  const [shadeIndex, setShadeIndex] = useState(0)
  const selectedShade = product.swatches[shadeIndex] ?? product.swatches[0]
  const imageStyle = {
    objectFit: "cover",
    objectPosition: "center",
    transformOrigin: product.imagePosition,
    "--image-scale": product.imageScale ?? 1,
  } as CSSProperties

  return (
    <article className="product-card">
      <div className="product-card__visual">
        <Image
          className="product-card__image"
          src={product.image}
          alt={`${product.name}, ${product.type}, em embalagem ROSÉ`}
          fill
          priority={priority}
          loading={priority ? "eager" : "lazy"}
          sizes="(max-width: 639px) 78vw, (max-width: 1023px) 46vw, 25vw"
          style={imageStyle}
        />
        {product.hoverImage ? (
          <Image
            className="product-card__image product-card__image--hover"
            src={product.hoverImage}
            alt=""
            fill
            sizes="(max-width: 639px) 78vw, (max-width: 1023px) 46vw, 25vw"
            style={{ objectFit: "cover" }}
          />
        ) : null}
        <div className="product-card__flags">
          {product.bestseller ? <span>Best seller</span> : null}
          {product.isNew ? <span>Novo</span> : null}
        </div>
        <button
          className="product-card__add"
          type="button"
          onClick={() => addItem(product, selectedShade)}
          aria-label={`Adicionar ${product.name}, cor ${selectedShade.name}, à sacola`}
        >
          <Plus aria-hidden="true" />
          <span>Adicionar</span>
        </button>
      </div>
      <div className="product-card__copy">
        <div className="product-card__line">
          <div>
            <p>{product.type} · {product.volume}</p>
            <h3><Link href={`/${product.category}#${product.id}`}>{product.name}</Link></h3>
          </div>
          <strong>{formatPrice(product.price)}</strong>
        </div>
        <div className="swatches" aria-label={`Cores de ${product.name}`}>
          {product.swatches.map((shade, index) => (
            <button
              type="button"
              className={index === shadeIndex ? "is-selected" : ""}
              key={shade.name}
              onClick={() => setShadeIndex(index)}
              aria-label={shade.name}
              aria-pressed={index === shadeIndex}
              title={shade.name}
            >
              <span style={{ backgroundColor: shade.color }} />
            </button>
          ))}
          <span className="swatches__name">{selectedShade.name}</span>
        </div>
      </div>
    </article>
  )
}
