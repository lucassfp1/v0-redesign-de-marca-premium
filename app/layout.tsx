import type { Metadata } from "next"
import { Cormorant_Garamond, Manrope } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
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
    default: "ROSÉ Beauty — Skin Ritual 01",
    template: "%s — ROSÉ Beauty",
  },
  description: "Uma marca conceitual de beleza sobre fórmulas essenciais, luz, textura e cuidado com intenção.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "ROSÉ Beauty — Skin Ritual 01",
    description: "Fórmulas essenciais para transformar cuidado em gesto, todos os dias.",
    url: "/",
    siteName: "ROSÉ Beauty",
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/images/rose-campaign.png", width: 1536, height: 1024, alt: "ROSÉ Beauty — Édition 01" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ROSÉ Beauty — Skin Ritual 01",
    description: "Fórmulas essenciais para transformar cuidado em gesto, todos os dias.",
    images: ["/images/rose-campaign.png"],
  },
  icons: { icon: "/brand/rose-mark.svg" },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${manrope.variable} ${cormorant.variable}`}>
      <body>
        {children}
        {process.env.NODE_ENV === "production" ? <Analytics /> : null}
      </body>
    </html>
  )
}
