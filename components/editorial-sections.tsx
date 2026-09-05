import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { FeaturedBlush } from "@/components/featured-blush"
import { ProductCard } from "@/components/product-card"
import { Reveal } from "@/components/reveal"
import { categories, getProductsByCategory } from "@/lib/products"

export function CategoryShowcase() {
  return (
    <section className="category-showcase section-pad" aria-labelledby="category-title">
      <div className="section-shell">
        <Reveal className="section-heading section-heading--split">
          <div><p className="eyebrow">Encontre sua cor</p><h2 id="category-title">Shop by Category</h2></div>
          <p>Textura, pigmento e acabamento.<br />Comece por onde quiser.</p>
        </Reveal>
        <div className="category-mosaic">
          {categories.map((category, index) => (
            <Reveal className={`category-tile category-tile--${index + 1}`} delay={index * 60} key={category.slug}>
              <Link href={`/${category.slug}`}>
                <Image src={category.image} alt={`Coleção ROSÉ de ${category.label.toLowerCase()}`} fill sizes="(max-width: 767px) 92vw, 50vw" style={{ objectFit: "cover", objectPosition: category.imagePosition }} />
                <span className="category-tile__veil" />
                <span className="category-tile__copy"><small>0{index + 1}</small><strong>{category.label}</strong><em>{category.eyebrow}</em></span>
                <ArrowUpRight aria-hidden="true" />
              </Link>
            </Reveal>
          ))}
          <Reveal className="category-tile category-tile--best" delay={240}>
            <Link href="/best-sellers">
              <Image src="/images/makeup-hero.png" alt="Seleção de maquiagem ROSÉ mais desejada" fill sizes="(max-width: 767px) 92vw, 50vw" />
              <span className="category-tile__veil" />
              <span className="category-tile__copy"><small>05</small><strong>Best Sellers</strong><em>As escolhas ROSÉ</em></span>
              <ArrowUpRight aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export function RedEdit() {
  return (
    <section className="red-edit" aria-labelledby="red-edit-title">
      <Image src="/images/makeup-red-edit.png" alt="Modelo usando batom vermelho em campanha ROSÉ Red Edit" fill sizes="100vw" />
      <div className="red-edit__shade" />
      <Reveal className="red-edit__content">
        <p className="eyebrow">ROSÉ · CAMPAIGN 02</p>
        <h2 id="red-edit-title">RED<br /><em>EDIT</em></h2>
        <p>O vermelho como assinatura. Preciso, intenso, impossível de ignorar.</p>
        <Link className="button button--light" href="/labios">Explorar coleção <ArrowRight aria-hidden="true" /></Link>
      </Reveal>
    </section>
  )
}

export function Philosophy() {
  return (
    <section className="philosophy section-pad" aria-labelledby="philosophy-title">
      <div className="section-shell philosophy__grid">
        <Reveal className="philosophy__image">
          <Image src="/images/makeup-editorial.png" alt="Retrato editorial com maquiagem em tons de ameixa e blush rosado" fill sizes="(max-width: 767px) 92vw, 52vw" />
          <span>WEAR IT YOUR WAY.</span>
        </Reveal>
        <Reveal className="philosophy__copy" delay={80}>
          <p className="eyebrow">Manifesto ROSÉ</p>
          <h2 id="philosophy-title">Makeup<br /><em>without rules.</em></h2>
          <p>Maquiagem não é correção. É escolha, humor, presença. A ROSÉ cria cor para destacar personalidade — sem dizer quem você deve ser.</p>
          <Link className="arrow-link" href="#sobre">Conhecer a ROSÉ <ArrowRight aria-hidden="true" /></Link>
        </Reveal>
      </div>
    </section>
  )
}

export function LipEdit() {
  const lipProducts = getProductsByCategory("labios").slice(0, 4)
  return (
    <section className="lip-edit section-pad" aria-labelledby="lip-edit-title">
      <div className="section-shell">
        <Reveal className="lip-edit__head"><p className="eyebrow">Lábios em foco</p><h2 id="lip-edit-title">THE LIP EDIT</h2><p>Quatro texturas. Uma cor para cada versão.</p></Reveal>
        <div className="lip-edit__layout">
          <Reveal className="lip-edit__campaign"><Image src="/images/makeup-lips.png" alt="Coleção de batom, gloss, lip oil e lápis labial ROSÉ" fill sizes="(max-width: 767px) 92vw, 46vw" /></Reveal>
          <div className="lip-edit__products">
            {lipProducts.map((product, index) => (
              <Reveal delay={index * 45} key={product.id}><ProductCard product={product} /></Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function BlushEdit() {
  const finishes = [
    ["Cream", "Cor que se funde."],
    ["Liquid", "Impacto sem peso."],
    ["Soft Matte", "Difuso, nunca opaco."],
    ["Glow", "Luz na medida."],
  ]
  return (
    <section className="blush-edit section-pad" aria-labelledby="blush-title">
      <div className="section-shell blush-edit__grid">
        <Reveal className="blush-edit__copy">
          <p className="eyebrow">Quatro acabamentos</p>
          <h2 id="blush-title">BLUSH,<br /><em>YOUR WAY.</em></h2>
          <div className="finish-list">{finishes.map(([name, note], index) => <Link href="/blush" key={name}><span>0{index + 1}</span><strong>{name}</strong><em>{note}</em><ArrowRight aria-hidden="true" /></Link>)}</div>
        </Reveal>
        <Reveal className="blush-edit__image" delay={80}><Image src="/images/makeup-blush.png" alt="Quatro acabamentos de blush ROSÉ em tons rosados" fill sizes="(max-width: 767px) 92vw, 52vw" /></Reveal>
      </div>
    </section>
  )
}

export function BrandStory() {
  return (
    <section className="brand-story section-pad" id="sobre" aria-labelledby="brand-story-title">
      <div className="section-shell brand-story__grid">
        <Reveal><p className="eyebrow">Sobre a marca</p><h2 id="brand-story-title">Nascida para<br /><em>ser notada.</em></h2></Reveal>
        <Reveal className="brand-story__text" delay={80}><p>A ROSÉ nasce da ideia de que maquiagem não serve para esconder, mas para destacar personalidade.</p><p>Cor, textura e atitude em produtos criados para acompanhar mudanças — de look, de humor, de versão.</p><span>R / 2026</span></Reveal>
      </div>
    </section>
  )
}

export function Journal() {
  const articles = [
    { title: "O novo vermelho: três formas de usar", category: "The Red Edit", image: "/images/makeup-red-edit.png" },
    { title: "Blush draping voltou. E nunca foi tão livre.", category: "Beauty Notes", image: "/images/makeup-editorial.png" },
    { title: "Gloss, velvet ou satin: escolha pela sensação", category: "The Lip Edit", image: "/images/makeup-lips.png" },
  ]
  return (
    <section className="journal section-pad" id="journal" aria-labelledby="journal-title">
      <div className="section-shell">
        <Reveal className="section-heading section-heading--split"><div><p className="eyebrow">Beauty notes</p><h2 id="journal-title">ROSÉ Journal</h2></div><p>Cor, tendências e ideias para<br />experimentar sem manual.</p></Reveal>
        <div className="journal__grid">
          {articles.map((article, index) => (
            <Reveal className={`journal-card journal-card--${index + 1}`} delay={index * 60} key={article.title}>
              <Link href="#newsletter"><div className="journal-card__image"><Image src={article.image} alt="" fill sizes="(max-width: 767px) 92vw, 33vw" /></div><div className="journal-card__meta"><p><span>0{index + 1}</span>{article.category}</p><h3>{article.title}</h3><ArrowUpRight aria-hidden="true" /></div></Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export { FeaturedBlush }
