import { ProductCard } from "@/components/product-card"
import type { Product } from "@/lib/products"

export function ProductGrid({ products, className = "" }: { products: Product[]; className?: string }) {
  return (
    <div className={`catalog-grid ${className}`} role="list">
      {products.map((product, index) => (
        <div role="listitem" id={product.id} key={product.id}>
          <ProductCard product={product} priority={index < 4} />
        </div>
      ))}
    </div>
  )
}
