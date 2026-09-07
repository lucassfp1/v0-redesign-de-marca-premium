"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronDown, Menu, Minus, Plus, Search, ShoppingBag, User, X } from "lucide-react"
import { useEffect, useState } from "react"
import { BrandMark } from "@/components/brand-mark"
import { useShop } from "@/components/shop-provider"
import { formatPrice, products } from "@/lib/products"

const navItems = [
  { name: "Shop", href: "/shop" },
  { name: "Lábios", href: "/labios", children: ["Batom", "Gloss", "Lip Oil", "Lápis labial"] },
  { name: "Rosto", href: "/rosto", children: ["Base", "Corretivo", "Pó", "Bronzer"] },
  { name: "Olhos", href: "/olhos", children: ["Máscara", "Delineador", "Sombra", "Sobrancelha"] },
  { name: "Blush", href: "/blush", children: ["Cream", "Liquid", "Soft Matte", "Glow"] },
]

const mobileItems = [
  ...navItems,
  { name: "Best Sellers", href: "/best-sellers" },
  { name: "Journal", href: "/#journal" },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [accountNotice, setAccountNotice] = useState(false)
  const { items, count, cartOpen, setCartOpen, addItem, decrementItem, removeItem } = useShop()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
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

  const searchResults = query.trim().length > 1
    ? products.filter((product) =>
        [product.name, product.type, product.categoryLabel].join(" ").toLowerCase().includes(query.toLowerCase()),
      ).slice(0, 5)
    : products.filter((product) => product.bestseller)

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <nav className="site-header__inner" aria-label="Navegação principal">
          <div className="site-header__left">
            <button type="button" className="icon-button mobile-only" onClick={() => setMenuOpen(true)} aria-label="Abrir menu" aria-expanded={menuOpen}>
              <Menu aria-hidden="true" />
            </button>
            <div className="desktop-nav">
              {navItems.map((item) => (
                <div className="nav-item" key={item.name}>
                  <Link className="nav-link" href={item.href}>
                    {item.name}
                    {item.children ? <ChevronDown aria-hidden="true" /> : null}
                  </Link>
                  {item.children ? (
                    <div className="nav-dropdown">
                      <p>{item.name}</p>
                      {item.children.map((child) => <Link href={item.href} key={child}>{child}</Link>)}
                      <Link className="nav-dropdown__all" href={item.href}>Ver todos <span>→</span></Link>
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>

          <BrandMark />

          <div className="site-actions">
            <button type="button" className="text-action" onClick={() => setSearchOpen(true)} aria-label="Buscar">
              <Search aria-hidden="true" /><span className="desktop-action">Buscar</span>
            </button>
            <button type="button" className="text-action desktop-action" onClick={() => { setAccountNotice(true); window.setTimeout(() => setAccountNotice(false), 2200) }}>
              <User aria-hidden="true" /><span>Conta</span>
            </button>
            <button type="button" className="text-action cart-trigger" onClick={() => setCartOpen(true)} aria-label={`Abrir sacola, ${count} ${count === 1 ? "item" : "itens"}`}>
              <ShoppingBag aria-hidden="true" /><span className="desktop-action">Sacola</span><span className="cart-count" aria-hidden="true">({count})</span>
            </button>
          </div>
        </nav>
      </header>

      <p className={`account-notice ${accountNotice ? "is-visible" : ""}`} role="status">
        Área de conta disponível na experiência completa.
      </p>

      <div className={`overlay ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
        <button className="overlay__backdrop" onClick={closeAll} aria-label="Fechar menu" />
        <div className="mobile-menu" role="dialog" aria-modal="true" aria-label="Menu de navegação">
          <div className="drawer-head"><BrandMark /><button className="icon-button" onClick={closeAll} aria-label="Fechar menu"><X aria-hidden="true" /></button></div>
          <div className="mobile-menu__nav">
            {mobileItems.map((item) => <Link href={item.href} key={item.name} onClick={closeAll}>{item.name}<span>↗</span></Link>)}
          </div>
          <div className="mobile-menu__footer"><p>COR, TEXTURA E PRESENÇA.</p><button type="button" onClick={() => { setMenuOpen(false); setSearchOpen(true) }}><Search aria-hidden="true" /> Buscar produtos</button></div>
        </div>
      </div>

      <div className={`overlay ${searchOpen ? "is-open" : ""}`} aria-hidden={!searchOpen}>
        <button className="overlay__backdrop" onClick={closeAll} aria-label="Fechar busca" />
        <div className="search-panel" role="dialog" aria-modal="true" aria-label="Busca">
          <div className="drawer-head"><p className="eyebrow">Buscar na ROSÉ</p><button className="icon-button" onClick={closeAll} aria-label="Fechar busca"><X aria-hidden="true" /></button></div>
          <label className="search-field">
            <span className="sr-only">O que você procura?</span>
            <input autoFocus={searchOpen} value={query} onChange={(event) => setQuery(event.target.value)} type="search" placeholder="Batom, blush, gloss..." />
            <Search aria-hidden="true" />
          </label>
          <div className="search-results">
            <span>{query.trim().length > 1 ? "Resultados" : "Mais buscados"}</span>
            {searchResults.map((product) => (
              <Link href={`/${product.category}#${product.id}`} onClick={closeAll} key={product.id}>
                <span>{product.name}<small>{product.type}</small></span><strong>{formatPrice(product.price)}</strong>
              </Link>
            ))}
            {searchResults.length === 0 ? <p>Nenhum produto encontrado.</p> : null}
          </div>
        </div>
      </div>

      <div className={`overlay ${cartOpen ? "is-open" : ""}`} aria-hidden={!cartOpen}>
        <button className="overlay__backdrop" onClick={closeAll} aria-label="Fechar sacola" />
        <aside className="cart-drawer" role="dialog" aria-modal="true" aria-label="Sua sacola">
          <div className="drawer-head"><div><p className="eyebrow">Sua sacola</p><p className="drawer-count">{count} {count === 1 ? "item" : "itens"}</p></div><button className="icon-button" onClick={closeAll} aria-label="Fechar sacola"><X aria-hidden="true" /></button></div>
          {items.length === 0 ? (
            <div className="empty-cart"><ShoppingBag aria-hidden="true" /><h2>Sua sacola está vazia.</h2><p>Cor boa é aquela que você decide usar.</p><Link className="button button--wine" href="/best-sellers" onClick={closeAll}>Ver best sellers</Link></div>
          ) : (
            <>
              <div className="cart-items">
                {items.map((item) => (
                  <div className="cart-item" key={item.cartId}>
                    <div className="cart-item__image"><Image src={item.image} alt="" fill sizes="92px" style={{ objectFit: "cover", objectPosition: item.imagePosition }} /></div>
                    <div className="cart-item__info"><p>{item.name}</p><span><i style={{ backgroundColor: item.selectedShade.color }} />{item.selectedShade.name}</span><div className="quantity-control" aria-label={`Quantidade de ${item.name}`}><button onClick={() => decrementItem(item.cartId)} aria-label="Diminuir quantidade"><Minus /></button><span>{item.quantity}</span><button onClick={() => addItem(item, item.selectedShade)} aria-label="Aumentar quantidade"><Plus /></button></div></div>
                    <div className="cart-item__aside"><p>{formatPrice(item.price * item.quantity)}</p><button onClick={() => removeItem(item.cartId)}>Remover</button></div>
                  </div>
                ))}
              </div>
              <div className="cart-summary"><div><span>Subtotal</span><strong>{formatPrice(subtotal)}</strong></div><p>Demonstração de interface — nenhuma compra ou dado de pagamento será processado.</p><button className="button button--wine" type="button">Finalizar compra · Demo</button></div>
            </>
          )}
        </aside>
      </div>
    </>
  )
}
