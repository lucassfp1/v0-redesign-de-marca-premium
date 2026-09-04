"use client"

import Image from "next/image"
import Link from "next/link"
import { Menu, Minus, Plus, Search, ShoppingBag, User, X } from "lucide-react"
import { useEffect, useState } from "react"
import { BrandMark } from "@/components/brand-mark"
import { useShop } from "@/components/shop-provider"
import { formatPrice } from "@/lib/products"

const navItems = [
  { name: "Shop", href: "#produtos" },
  { name: "Skincare", href: "#serum-01" },
  { name: "Maquiagem", href: "#produtos" },
  { name: "Sobre", href: "#sobre" },
  { name: "Journal", href: "#journal" },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const { items, count, cartOpen, setCartOpen, addItem, decrementItem, removeItem } = useShop()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const hasOverlay = menuOpen || searchOpen || cartOpen
    document.body.classList.toggle("overlay-open", hasOverlay)
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false)
        setSearchOpen(false)
        setCartOpen(false)
      }
    }
    document.addEventListener("keydown", onKeyDown)
    return () => {
      document.body.classList.remove("overlay-open")
      document.removeEventListener("keydown", onKeyDown)
    }
  }, [cartOpen, menuOpen, searchOpen, setCartOpen])

  const closeAll = () => {
    setMenuOpen(false)
    setSearchOpen(false)
    setCartOpen(false)
  }

  return (
    <>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <nav className="site-header__inner" aria-label="Navegação principal">
          <div className="site-header__left">
            <button
              type="button"
              className="icon-button mobile-only"
              onClick={() => setMenuOpen(true)}
              aria-label="Abrir menu"
              aria-expanded={menuOpen}
            >
              <Menu aria-hidden="true" />
            </button>
            <div className="desktop-nav">
              {navItems.map((item) => (
                <Link className="nav-link" href={item.href} key={item.name}>
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <BrandMark />

          <div className="site-actions">
            <button type="button" className="text-action desktop-action" onClick={() => setSearchOpen(true)}>
              <Search aria-hidden="true" />
              <span>Pesquisa</span>
            </button>
            <button type="button" className="text-action desktop-action" onClick={() => setSearchOpen(true)}>
              <User aria-hidden="true" />
              <span>Conta</span>
            </button>
            <button
              type="button"
              className="text-action cart-trigger"
              onClick={() => setCartOpen(true)}
              aria-label={`Abrir sacola, ${count} ${count === 1 ? "item" : "itens"}`}
            >
              <ShoppingBag aria-hidden="true" />
              <span className="desktop-action">Sacola</span>
              <span className="cart-count" aria-hidden="true">{String(count).padStart(2, "0")}</span>
            </button>
          </div>
        </nav>
      </header>

      <div className={`overlay ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
        <button className="overlay__backdrop" onClick={closeAll} aria-label="Fechar menu" />
        <div className="mobile-menu" role="dialog" aria-modal="true" aria-label="Menu de navegação">
          <div className="drawer-head">
            <BrandMark />
            <button className="icon-button" onClick={closeAll} aria-label="Fechar menu"><X aria-hidden="true" /></button>
          </div>
          <div className="mobile-menu__nav">
            {navItems.map((item, index) => (
              <Link href={item.href} key={item.name} onClick={closeAll}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item.name}
              </Link>
            ))}
          </div>
          <div className="mobile-menu__footer">
            <p>ROSÉ / SKIN RITUAL 01</p>
            <button type="button" onClick={() => { setMenuOpen(false); setSearchOpen(true) }}>
              <Search aria-hidden="true" /> Pesquisar no universo ROSÉ
            </button>
          </div>
        </div>
      </div>

      <div className={`overlay ${searchOpen ? "is-open" : ""}`} aria-hidden={!searchOpen}>
        <button className="overlay__backdrop" onClick={closeAll} aria-label="Fechar pesquisa" />
        <div className="search-panel" role="dialog" aria-modal="true" aria-label="Pesquisa">
          <div className="drawer-head">
            <p className="eyebrow">Pesquisa</p>
            <button className="icon-button" onClick={closeAll} aria-label="Fechar pesquisa"><X aria-hidden="true" /></button>
          </div>
          <label className="search-field">
            <span className="sr-only">O que você procura?</span>
            <input autoFocus={searchOpen} type="search" placeholder="O que você procura?" />
            <Search aria-hidden="true" />
          </label>
          <div className="search-suggestions">
            <span>Sugestões</span>
            <Link href="#serum-01" onClick={closeAll}>Sérum Nº01</Link>
            <Link href="#ingredientes" onClick={closeAll}>Ingredientes</Link>
            <Link href="#journal" onClick={closeAll}>Rituais essenciais</Link>
          </div>
        </div>
      </div>

      <div className={`overlay ${cartOpen ? "is-open" : ""}`} aria-hidden={!cartOpen}>
        <button className="overlay__backdrop" onClick={closeAll} aria-label="Fechar sacola" />
        <aside className="cart-drawer" role="dialog" aria-modal="true" aria-label="Sua sacola">
          <div className="drawer-head">
            <div>
              <p className="eyebrow">Sua sacola</p>
              <p className="drawer-count">{count} {count === 1 ? "item" : "itens"}</p>
            </div>
            <button className="icon-button" onClick={closeAll} aria-label="Fechar sacola"><X aria-hidden="true" /></button>
          </div>
          {items.length === 0 ? (
            <div className="empty-cart">
              <ShoppingBag aria-hidden="true" />
              <h2>Seu ritual começa aqui.</h2>
              <p>Selecione um essencial para visualizar a experiência da sacola.</p>
              <button className="button button--dark" type="button" onClick={closeAll}>Conhecer os essenciais</button>
            </div>
          ) : (
            <>
              <div className="cart-items">
                {items.map((item) => (
                  <div className="cart-item" key={item.id}>
                    <div className="cart-item__image">
                      <Image src={item.image} alt="" fill sizes="92px" style={{ objectFit: "cover", objectPosition: item.imagePosition }} />
                    </div>
                    <div className="cart-item__info">
                      <p>{item.name}</p>
                      <span>{item.volume}</span>
                      <div className="quantity-control" aria-label={`Quantidade de ${item.name}`}>
                        <button onClick={() => decrementItem(item.id)} aria-label="Diminuir quantidade"><Minus /></button>
                        <span>{item.quantity}</span>
                        <button onClick={() => addItem(item)} aria-label="Aumentar quantidade"><Plus /></button>
                      </div>
                    </div>
                    <div className="cart-item__aside">
                      <p>{formatPrice(item.price * item.quantity)}</p>
                      <button onClick={() => removeItem(item.id)}>Remover</button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="cart-summary">
                <div><span>Subtotal</span><strong>{formatPrice(items.reduce((sum, item) => sum + item.price * item.quantity, 0))}</strong></div>
                <p>Experiência conceitual — nenhuma compra será processada.</p>
                <button className="button button--dark" type="button">Visualizar checkout conceitual</button>
              </div>
            </>
          )}
        </aside>
      </div>
    </>
  )
}
