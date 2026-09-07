import Link from "next/link"
import { BrandMark } from "@/components/brand-mark"

const groups = [
  { title: "Shop", links: [["Todos", "/shop"], ["Lábios", "/labios"], ["Rosto", "/rosto"], ["Olhos", "/olhos"], ["Blush", "/blush"], ["Best Sellers", "/best-sellers"]] },
  { title: "ROSÉ", links: [["Journal", "/#journal"], ["Campanha", "/#campanha"], ["Mais desejados", "/#best-sellers"]] },
  { title: "Suporte", links: [["Contato", "/#newsletter"], ["FAQ", "/#newsletter"], ["Envios", "/#newsletter"], ["Trocas", "/#newsletter"]] },
  { title: "Social", links: [["Instagram", "#footer"], ["Pinterest", "#footer"], ["TikTok", "#footer"]] },
]

export function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="section-shell">
        <div className="footer__top"><BrandMark inverse /><p>COR, TEXTURA<br />E PRESENÇA.</p></div>
        <div className="footer__wordmark" aria-hidden="true">ROSÉ</div>
        <div className="footer__links">
          {groups.map((group) => <div key={group.title}><h2>{group.title}</h2><ul>{group.links.map(([label, href]) => <li key={label}><Link href={href}>{label}</Link></li>)}</ul></div>)}
        </div>
        <div className="footer__bottom">
          <div><p>© 2026 ROSÉ Beauty — Concept Brand</p><p>Projeto conceitual para demonstração. Produtos e preços são fictícios.</p></div>
          <div><Link href="#footer">Privacidade</Link><Link href="#footer">Termos</Link></div>
        </div>
      </div>
    </footer>
  )
}
