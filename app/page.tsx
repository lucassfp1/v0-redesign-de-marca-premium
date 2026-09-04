import { BrandStory, Campaign, Ingredients, Journal, Manifesto, ProductFeature } from "@/components/editorial-sections"
import { FeaturedProducts } from "@/components/featured-products"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Newsletter } from "@/components/newsletter"
import { ShopProvider } from "@/components/shop-provider"

export default function Home() {
  return (
    <ShopProvider>
      <Header />
      <main>
        <Hero />
        <Manifesto />
        <FeaturedProducts />
        <ProductFeature />
        <Ingredients />
        <BrandStory />
        <Campaign />
        <Journal />
        <Newsletter />
      </main>
      <Footer />
    </ShopProvider>
  )
}
