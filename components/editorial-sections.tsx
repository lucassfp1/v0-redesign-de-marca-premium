import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { Reveal } from "@/components/reveal"

export function Manifesto() {
  return (
    <section className="manifesto section-pad" id="filosofia" aria-labelledby="manifesto-title">
      <div className="section-shell manifesto__grid">
        <Reveal><p className="eyebrow">Nossa filosofia</p></Reveal>
        <Reveal className="manifesto__copy" delay={80}>
          <h2 id="manifesto-title">Menos excessos.<br /><em>Mais intenção.</em></h2>
          <div className="manifesto__body">
            <p>
              A ROSÉ nasce do encontro entre fórmulas essenciais e o tempo de cuidar.
              Criamos uma rotina enxuta, guiada por textura, função e transparência.
            </p>
            <span className="signature" aria-hidden="true">R / 01</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export function ProductFeature() {
  const benefits = [
    ["01", "Luminosidade", "Aparência uniforme e viçosa"],
    ["02", "Hidratação", "Conforto que acompanha o dia"],
    ["03", "Barreira da pele", "Suporte para uma rotina equilibrada"],
  ]

  return (
    <section className="feature section-pad" id="serum-01" aria-labelledby="feature-title">
      <div className="section-shell feature__grid">
        <Reveal className="feature__image image-reveal">
          <Image
            src="/images/rose-serum-01.png"
            alt="Sérum Nº01 em frasco vinho sobre pedestal de pedra cercado por água"
            fill
            sizes="(max-width: 767px) 100vw, 50vw"
          />
          <span className="feature__vertical">ROSÉ — FORMULA 01</span>
        </Reveal>
        <Reveal className="feature__content" delay={100}>
          <p className="eyebrow">Fórmula em foco</p>
          <h2 id="feature-title">Sérum<br /><em>Nº01</em></h2>
          <p className="feature__intro">
            Uma emulsão sérum de toque leve, pensada para integrar manhã e noite
            sem sobrecarregar a pele.
          </p>
          <ol className="benefit-list">
            {benefits.map(([number, title, text]) => (
              <li key={number}>
                <span>{number}</span>
                <div><h3>{title}</h3><p>{text}</p></div>
              </li>
            ))}
          </ol>
          <Link className="arrow-link" href="#produtos">Conhecer a fórmula <ArrowRight aria-hidden="true" /></Link>
        </Reveal>
      </div>
    </section>
  )
}

export function Ingredients() {
  const ingredients = [
    ["01", "Niacinamida", "uniformidade + barreira"],
    ["02", "Esqualano", "hidratação + maciez"],
    ["03", "Extratos botânicos", "conforto + equilíbrio"],
  ]

  return (
    <section className="ingredients section-pad" id="ingredientes" aria-labelledby="ingredients-title">
      <div className="section-shell">
        <Reveal className="ingredients__heading">
          <p className="eyebrow">Formulação</p>
          <h2 id="ingredients-title">Formulado com<br /><em>intenção.</em></h2>
          <p>Ativos reconhecidos e texturas escolhidas para uma experiência direta, sem promessas infladas.</p>
        </Reveal>
        <div className="ingredients__layout">
          <Reveal className="ingredients__image image-reveal">
            <Image
              src="/images/rose-ingredients.png"
              alt="Texturas de sérum, óleo e creme sobre pedra com folha botânica"
              fill
              sizes="(max-width: 767px) 100vw, 58vw"
            />
          </Reveal>
          <Reveal className="ingredient-list" delay={100}>
            {ingredients.map(([number, name, note]) => (
              <div className="ingredient" key={number}>
                <span>{number}</span>
                <h3>{name}</h3>
                <p>{note}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export function BrandStory() {
  const values = ["Fórmulas conscientes", "Ingredientes selecionados", "Design responsável", "Transparência"]

  return (
    <section className="story section-pad" id="sobre" aria-labelledby="story-title">
      <div className="section-shell story__grid">
        <Reveal className="story__image image-reveal">
          <Image
            src="/images/rose-campaign.png"
            alt="Mulher aplicando sérum no rosto em ambiente de luz natural"
            fill
            sizes="(max-width: 767px) 100vw, 45vw"
          />
        </Reveal>
        <Reveal className="story__content" delay={100}>
          <p className="eyebrow">Nossa história</p>
          <h2 id="story-title">Criada para transformar rotina em ritual.</h2>
          <div className="story__text">
            <p>
              ROSÉ é uma marca conceitual construída a partir de uma ideia simples:
              o cuidado pode ser preciso sem perder sensibilidade.
            </p>
            <p>
              Sua primeira edição reúne fórmulas essenciais, embalagens silenciosas
              e gestos que cabem na vida real. Cada escolha visual e sensorial existe
              para tornar o cotidiano mais consciente — não mais complicado.
            </p>
          </div>
        </Reveal>
      </div>
      <div className="section-shell values" role="region" aria-labelledby="values-title">
        <Reveal><p className="eyebrow" id="values-title">O que orienta a ROSÉ</p></Reveal>
        <div className="values__list">
          {values.map((value, index) => (
            <Reveal className="value" delay={index * 60} key={value}>
              <span>0{index + 1}</span><h3>{value}</h3><i aria-hidden="true" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Campaign() {
  return (
    <section className="campaign" aria-labelledby="campaign-title">
      <Image
        src="/images/rose-campaign.png"
        alt="Campanha Édition 01 com modelo aplicando sérum em ambiente de luz natural"
        fill
        sizes="100vw"
      />
      <div className="campaign__shade" />
      <Reveal className="campaign__content">
        <p className="eyebrow">ROSÉ — ÉDITION 01</p>
        <h2 id="campaign-title">Uma coleção sobre<br /><em>luz, textura e pele.</em></h2>
        <Link className="button button--light" href="#produtos">Conhecer a coleção <ArrowUpRight aria-hidden="true" /></Link>
      </Reveal>
    </section>
  )
}

export function Journal() {
  const articles = [
    {
      title: "O ritual essencial para uma rotina minimalista",
      category: "Rituais",
      image: "/images/rose-hero.png",
      position: "center 42%",
    },
    {
      title: "Como entender a barreira da pele",
      category: "Caderno de pele",
      image: "/images/rose-ingredients.png",
      position: "center",
    },
    {
      title: "Texturas, fórmulas e escolhas conscientes",
      category: "Formulação",
      image: "/images/rose-serum-01.png",
      position: "center 65%",
    },
  ]

  return (
    <section className="journal section-pad" id="journal" aria-labelledby="journal-title">
      <div className="section-shell">
        <Reveal className="section-heading section-heading--split">
          <div><p className="eyebrow">Leituras</p><h2 id="journal-title">ROSÉ Journal</h2></div>
          <p>Notas sobre pele, matéria e os pequenos gestos que atravessam a rotina.</p>
        </Reveal>
        <div className="journal__grid">
          {articles.map((article, index) => (
            <Reveal className={`journal-card journal-card--${index + 1}`} delay={index * 70} key={article.title}>
              <Link href="#newsletter" aria-label={`Ler ${article.title}`}>
                <div className="journal-card__image image-reveal">
                  <Image src={article.image} alt="" fill sizes="(max-width: 767px) 92vw, 33vw" style={{ objectFit: "cover", objectPosition: article.position }} />
                </div>
                <div className="journal-card__meta">
                  <p><span>0{index + 1}</span>{article.category}</p>
                  <h3>{article.title}</h3>
                  <ArrowUpRight aria-hidden="true" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
