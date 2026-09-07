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
          <div><p className="eyebrow">Encontre sua cor</p><h2 id="category-title">Compre por categoria</h2></div>
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
              <Image src="/images/categories/best-sellers.png" alt="Seleção de produtos ELORA mais desejados da ROSÉ Beauty" fill sizes="(max-width: 767px) 92vw, 50vw" />
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
      <Image src="/images/home/campaign.png" alt="Campanha ELORA da ROSÉ Beauty com maquiagem em tons rosados" fill sizes="100vw" />
      <div className="red-edit__shade" />
      <Reveal className="red-edit__content">
        <p className="eyebrow">CAMPANHA ROSÉ</p>
        <h2 id="red-edit-title">A COR<br />MUDA TUDO.</h2>
        <p>Uma leitura precisa de tons, texturas e acabamentos.</p>
        <Link className="button button--light" href="/shop">Explorar produtos <ArrowRight aria-hidden="true" /></Link>
      </Reveal>
    </section>
  )
}

export function Philosophy() {
  return (
    <section className="philosophy section-pad" aria-labelledby="philosophy-title">
      <div className="section-shell philosophy__grid">
        <Reveal className="philosophy__image">
          <Image src="/images/home/manifesto.png" alt="Retrato do manifesto ELORA, marca da ROSÉ Beauty" fill sizes="(max-width: 767px) 92vw, 52vw" />
        </Reveal>
        <Reveal className="philosophy__copy" delay={80}>
          <p className="eyebrow">Manifesto ROSÉ</p>
          <h2 id="philosophy-title">Maquiagem como gesto, cor e presença.</h2>
          <p>A ROSÉ transforma textura e acabamento em uma linguagem pessoal. Cada escolha é precisa; o resultado, inteiramente seu.</p>
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
        <Reveal className="lip-edit__head"><p className="eyebrow">Lábios em foco</p><h2 id="lip-edit-title">THE LIP EDIT</h2><p>Do veludo ao brilho, quatro formas de marcar presença.</p></Reveal>
        <div className="lip-edit__layout">
          <Reveal className="lip-edit__campaign">
            <div className="lip-edit__campaign-image">
              <Image src="/images/home/lip-edit.png" alt="Seleção de produtos para lábios ELORA da ROSÉ Beauty" fill sizes="(max-width: 767px) 92vw, 46vw" />
            </div>
          </Reveal>
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
          <h2 id="blush-title">COR QUE<br />ENCONTRA<br />A PELE.</h2>
          <div className="finish-list">{finishes.map(([name, note], index) => <Link href="/blush" key={name}><span>0{index + 1}</span><strong>{name}</strong><em>{note}</em><ArrowRight aria-hidden="true" /></Link>)}</div>
        </Reveal>
        <Reveal className="blush-edit__image" delay={80}><Image src="/images/home/blush-edit.png" alt="Quatro acabamentos de blush ELORA da ROSÉ Beauty" fill sizes="(max-width: 767px) 92vw, 52vw" /></Reveal>
      </div>
    </section>
  )
}

export function BrandStory() {
  return (
    <section className="brand-story section-pad" id="sobre" aria-labelledby="brand-story-title">
      <div className="section-shell brand-story__grid">
        <Reveal><p className="eyebrow">Sobre a marca</p><h2 id="brand-story-title">Beleza com presença.</h2></Reveal>
        <Reveal className="brand-story__text" delay={80}><p>A ROSÉ nasce da ideia de que maquiagem não serve para esconder, mas para destacar personalidade.</p><p>Cor, textura e atitude em produtos criados para acompanhar mudanças — de look, de humor, de versão.</p><span>R / 2026</span></Reveal>
      </div>
    </section>
  )
}

export function Journal() {
  const articles = [
    { title: "O gesto do batom", category: "Lábios", description: "Cor e contorno em primeiro plano.", image: "/images/journal/lip.png" },
    { title: "Onde a cor encontra o rosto", category: "Blush", description: "Textura e acabamento na medida do movimento.", image: "/images/journal/blush.png" },
    { title: "A dimensão do brilho", category: "Textura", description: "Luz, transparência e presença sem excesso.", image: "/images/journal/gloss.png" },
  ]
  return (
    <section className="journal section-pad" id="journal" aria-labelledby="journal-title">
      <div className="section-shell">
        <Reveal className="section-heading section-heading--split"><div><p className="eyebrow">Notas de cor</p><h2 id="journal-title">ROSÉ Journal</h2></div><p>Cor, textura e referências para<br />olhar a maquiagem de perto.</p></Reveal>
        <div className="journal__grid">
          {articles.map((article, index) => (
            <Reveal className={`journal-card journal-card--${index + 1}`} delay={index * 60} key={article.title}>
              <Link href="#newsletter"><div className="journal-card__image"><Image src={article.image} alt={`Editorial ${article.category.toLowerCase()} da ROSÉ Beauty`} fill sizes="(max-width: 767px) 92vw, 33vw" /></div><div className="journal-card__meta"><p><span>0{index + 1}</span>{article.category}</p><h3>{article.title}</h3><small>{article.description}</small><ArrowUpRight aria-hidden="true" /></div></Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export { FeaturedBlush }
