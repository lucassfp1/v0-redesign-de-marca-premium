import type { Metadata } from "next"
import { Cormorant_Garamond, Manrope } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { ShopProvider } from "@/components/shop-provider"
import "./globals.css"

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://v0-redesign-de-marca-premium.vercel.app"),
  title: {
    default: "ROSÉ Beauty — Cor, textura e presença",
    template: "%s — ROSÉ Beauty",
  },
  description: "Maquiagem contemporânea para usar do seu jeito. Descubra lábios, rosto, olhos e blush ROSÉ.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "ROSÉ Beauty — Cor, textura e presença",
    description: "Maquiagem contemporânea em cores, texturas e acabamentos escolhidos com precisão.",
    url: "/",
    siteName: "ROSÉ Beauty",
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/images/home/hero.png", width: 1536, height: 1024, alt: "Campanha de maquiagem ROSÉ Beauty" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ROSÉ Beauty — Cor, textura e presença",
    description: "Maquiagem contemporânea em cores, texturas e acabamentos escolhidos com precisão.",
    images: ["/images/home/hero.png"],
  },
  icons: { icon: "/brand/rose-favicon.svg" },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${manrope.variable} ${cormorant.variable}`}>
      <body>
        <ShopProvider>
          <Header />
          {children}
          <Footer />
        </ShopProvider>
        {process.env.VERCEL ? <Analytics /> : null}
      </body>
    </html>
  )
}
