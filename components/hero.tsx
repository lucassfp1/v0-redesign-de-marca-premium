import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="makeup-hero" id="inicio" aria-labelledby="hero-title">
      <Image
        src="/images/makeup-hero.png"
        alt="Modelo em campanha ROSÉ com batom vinho, blush luminoso e delineado preto"
        fill
        priority
        loading="eager"
        sizes="100vw"
      />
      <div className="makeup-hero__shade" />
      <div className="makeup-hero__content">
        <p className="eyebrow">ROSÉ · COLOR COLLECTION 01</p>
        <h1 id="hero-title">Color speaks<br /><em>first.</em></h1>
        <p>Maquiagem criada para acompanhar cada versão de você.</p>
        <div className="makeup-hero__actions">
          <Link className="button button--light" href="/shop">Comprar coleção <ArrowRight aria-hidden="true" /></Link>
          <Link className="button button--ghost-light" href="/best-sellers">Best Sellers</Link>
        </div>
      </div>
      <p className="makeup-hero__caption">YOUR SHADE. YOUR RULES.</p>
    </section>
  )
}
