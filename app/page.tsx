import {
  BlushEdit,
  BrandStory,
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
      <FeaturedProducts />
      <RedEdit />
      <Philosophy />
      <LipEdit />
      <BlushEdit />
      <FeaturedBlush />
      <BrandStory />
      <Journal />
      <Newsletter />
    </main>
  )
}
