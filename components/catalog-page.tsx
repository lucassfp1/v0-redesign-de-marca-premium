"use client"

import Link from "next/link"
import { SlidersHorizontal } from "lucide-react"
import { useMemo, useState } from "react"
import { ProductGrid } from "@/components/product-grid"
import type { Product } from "@/lib/products"

type CatalogPageProps = {
  title: string
  eyebrow: string
  description: string
  products: Product[]
}

export function CatalogPage({ title, eyebrow, description, products }: CatalogPageProps) {
  const [finish, setFinish] = useState("Todos")
  const [sort, setSort] = useState("featured")
  const finishes = ["Todos", ...Array.from(new Set(products.map((product) => product.finish)))]

  const visibleProducts = useMemo(() => {
    const filtered = finish === "Todos" ? products : products.filter((product) => product.finish === finish)
    return [...filtered].sort((a, b) => {
      if (sort === "price-asc") return a.price - b.price
      if (sort === "price-desc") return b.price - a.price
      if (sort === "new") return Number(Boolean(b.isNew)) - Number(Boolean(a.isNew))
      return Number(Boolean(b.bestseller)) - Number(Boolean(a.bestseller))
    })
  }, [finish, products, sort])

  return (
    <main className="catalog-page">
      <header className="catalog-hero">
        <div className="section-shell">
          <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Início</Link><span>/</span><span>{title}</span></nav>
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <div className="catalog-hero__bottom"><p>{description}</p><span>{products.length} produtos</span></div>
        </div>
      </header>
      <section className="catalog-content section-pad" aria-label={`Catálogo ${title}`}>
        <div className="section-shell">
          <div className="catalog-tools">
            <div className="filter-row" aria-label="Filtrar por acabamento">
              <span><SlidersHorizontal aria-hidden="true" /> Acabamento</span>
              {finishes.map((item) => <button type="button" className={finish === item ? "is-active" : ""} onClick={() => setFinish(item)} key={item}>{item}</button>)}
            </div>
            <label className="sort-select"><span>Ordenar</span><select value={sort} onChange={(event) => setSort(event.target.value)}><option value="featured">Mais vendidos</option><option value="new">Novidades</option><option value="price-asc">Menor preço</option><option value="price-desc">Maior preço</option></select></label>
          </div>
          <p className="catalog-result-count">{visibleProducts.length} {visibleProducts.length === 1 ? "resultado" : "resultados"}</p>
          <ProductGrid products={visibleProducts} />
        </div>
      </section>
    </main>
  )
}
