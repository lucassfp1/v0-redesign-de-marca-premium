import Image from "next/image"
import Link from "next/link"
import { ArrowDown, ArrowUpRight } from "lucide-react"

export function Hero() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="hero__copy">
        <p className="eyebrow hero__eyebrow">ROSÉ / SKIN RITUAL 01</p>
        <h1 id="hero-title">
          Beleza que começa
          <em>com a sua pele.</em>
        </h1>
        <p className="hero__description">
          Fórmulas essenciais para transformar cuidado em gesto — todos os dias,
          sem excessos.
        </p>
        <Link className="button button--dark" href="#produtos">
          Descobrir a coleção <ArrowUpRight aria-hidden="true" />
        </Link>
        <Link className="scroll-cue" href="#filosofia">
          <span>Continuar</span>
          <ArrowDown aria-hidden="true" />
        </Link>
      </div>
      <div className="hero__image image-reveal">
        <Image
          src="/images/rose-hero.png"
          alt="Frascos de sérum e creme ROSÉ sobre pedra, junto à pele iluminada por luz natural"
          fill
          priority
          loading="eager"
          sizes="(max-width: 767px) 100vw, 61vw"
        />
        <div className="hero__image-note">
          <span>01</span>
          <p>Textura leve<br />absorção gradual</p>
        </div>
      </div>
    </section>
  )
}
