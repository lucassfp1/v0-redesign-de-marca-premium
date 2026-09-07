import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="makeup-hero" id="inicio" aria-labelledby="hero-title">
      <Image
        src="/images/home/hero.png"
        alt="Modelo apresenta o Liquid Blush ELORA, marca da ROSÉ Beauty"
        fill
        priority
        loading="eager"
        sizes="100vw"
      />
      <div className="makeup-hero__shade" />
      <div className="makeup-hero__content">
        <p className="eyebrow">ROSÉ BEAUTY · NOVA COLEÇÃO</p>
        <h1 id="hero-title">Beleza,<br />sem ruído.</h1>
        <p>Cor, textura e presença em uma edição contemporânea.</p>
        <div className="makeup-hero__actions">
          <Link className="button button--light" href="/best-sellers">Conheça a seleção <ArrowRight aria-hidden="true" /></Link>
          <Link className="button button--ghost-light" href="/shop">Ver produtos</Link>
        </div>
      </div>
    </section>
  )
}
