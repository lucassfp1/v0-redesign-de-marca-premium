import type { Metadata } from "next"
import { CatalogPage } from "@/components/catalog-page"
import { bestSellers } from "@/lib/products"

export const metadata: Metadata = {
  title: "Best Sellers",
  description: "Os produtos de maquiagem ROSÉ mais desejados.",
  alternates: { canonical: "/best-sellers" },
}

export default function BestSellersPage() {
  return <CatalogPage title="BEST SELLERS" eyebrow="As escolhas ROSÉ" description="Quatro produtos. Infinitas formas de usar." products={bestSellers} />
}
