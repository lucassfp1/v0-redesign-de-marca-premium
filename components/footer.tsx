import Link from "next/link"
import { BrandMark } from "@/components/brand-mark"

const groups = [
  { title: "Shop", links: [["Skincare", "#serum-01"], ["Maquiagem", "#produtos"], ["Corpo", "#produtos"], ["Novidades", "#produtos"]] },
  { title: "ROSÉ", links: [["Nossa história", "#sobre"], ["Journal", "#journal"], ["Ingredientes", "#ingredientes"]] },
  { title: "Suporte", links: [["Contato", "#newsletter"], ["FAQ", "#newsletter"], ["Envios", "#newsletter"], ["Trocas", "#newsletter"]] },
  { title: "Social", links: [["Instagram", "#footer"], ["Pinterest", "#footer"], ["TikTok", "#footer"]] },
]

export function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="section-shell">
        <div className="footer__top">
          <BrandMark inverse />
          <p>Skin rituals,<br />quietly considered.</p>
        </div>
        <div className="footer__wordmark" aria-hidden="true">ROSÉ</div>
        <div className="footer__links">
          {groups.map((group) => (
            <div key={group.title}>
              <h2>{group.title}</h2>
              <ul>
                {group.links.map(([label, href]) => <li key={label}><Link href={href}>{label}</Link></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer__bottom">
          <div><p>© 2026 ROSÉ Beauty — Concept Brand</p><p>Projeto conceitual desenvolvido para fins de demonstração.</p></div>
          <div><Link href="#footer">Política de Privacidade</Link><Link href="#footer">Termos</Link></div>
        </div>
      </div>
    </footer>
  )
}
