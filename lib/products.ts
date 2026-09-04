export type Product = {
  id: string
  name: string
  category: string
  price: number
  volume: string
  image: string
  imagePosition: string
  shade?: string
}

export const products: Product[] = [
  {
    id: "serum-01",
    name: "Sérum Nº01",
    category: "Luminosidade",
    price: 189,
    volume: "30 ml",
    image: "/images/rose-essentials.png",
    imagePosition: "7% center",
  },
  {
    id: "creme-essencial",
    name: "Creme Essencial",
    category: "Hidratação",
    price: 164,
    volume: "50 g",
    image: "/images/rose-essentials.png",
    imagePosition: "36% center",
  },
  {
    id: "cor-veludo",
    name: "Cor Veludo",
    category: "Lábios",
    price: 96,
    volume: "3,5 g",
    image: "/images/rose-essentials.png",
    imagePosition: "67% center",
    shade: "Rosé 03",
  },
  {
    id: "oleo-corporal",
    name: "Óleo de Corpo",
    category: "Nutrição",
    price: 138,
    volume: "100 ml",
    image: "/images/rose-essentials.png",
    imagePosition: "94% center",
  },
]

export function formatPrice(price: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price)
}
