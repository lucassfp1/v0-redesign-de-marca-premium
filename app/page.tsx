import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { FeaturedProducts } from "@/components/featured-products"
import { AboutBrand } from "@/components/about-brand"
import { Testimonials } from "@/components/testimonials"
import { PremiumCTA } from "@/components/premium-cta"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <FeaturedProducts />
      <AboutBrand />
      <Testimonials />
      <PremiumCTA />
      <Newsletter />
      <Footer />
    </main>
  )
}
