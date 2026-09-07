import {
  BlushEdit,
  CategoryShowcase,
  FeaturedBlush,
  Journal,
  LipEdit,
  Philosophy,
  RedEdit,
} from "@/components/editorial-sections"
import { FeaturedProducts } from "@/components/featured-products"
import { Hero } from "@/components/hero"
import { Newsletter } from "@/components/newsletter"

export default function Home() {
  return (
    <main>
      <Hero />
      <CategoryShowcase />
      <RedEdit />
      <FeaturedProducts />
      <Philosophy />
      <LipEdit />
      <FeaturedBlush />
      <BlushEdit />
      <Journal />
      <Newsletter />
    </main>
  )
}
