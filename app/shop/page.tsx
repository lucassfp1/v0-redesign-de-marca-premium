import type { Metadata } from "next"
import { CatalogPage } from "@/components/catalog-page"
import { products } from "@/lib/products"

export const metadata: Metadata = {
  title: "Shop All",
  description: "Conheça a coleção completa de maquiagem ROSÉ.",
  alternates: { canonical: "/shop" },
}

export default function ShopPage() {
  return <CatalogPage title="SHOP ALL" eyebrow="Coleção completa" description="Lábios, rosto, olhos e blush. Cor para usar sem manual." products={products} />
}
