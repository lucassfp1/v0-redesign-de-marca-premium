export type CategorySlug = "labios" | "rosto" | "olhos" | "blush"

export type Shade = {
  name: string
  color: string
}

export type Product = {
  id: string
  name: string
  category: CategorySlug
  categoryLabel: string
  type: string
  finish: string
  price: number
  volume: string
  image: string
  imagePosition: string
  imageScale?: number
  hoverImage?: string
  swatches: Shade[]
  bestseller?: boolean
  isNew?: boolean
}

export const categories = [
  { slug: "labios" as const, label: "Lábios", eyebrow: "Cor que fala primeiro", description: "Texturas confortáveis, cor precisa e acabamentos para usar do seu jeito.", image: "/images/makeup-lips.png", imagePosition: "center" },
  { slug: "blush" as const, label: "Blush", eyebrow: "Blush, your way", description: "Cream, liquid, soft matte ou glow. Cor que acompanha cada expressão.", image: "/images/makeup-blush.png", imagePosition: "center" },
  { slug: "rosto" as const, label: "Rosto", eyebrow: "Pele, sem disfarces", description: "Cobertura flexível e acabamento real para destacar, nunca esconder.", image: "/images/makeup-face.png", imagePosition: "center" },
  { slug: "olhos" as const, label: "Olhos", eyebrow: "Define your look", description: "Linhas precisas, volume e pigmentos feitos para mudar de ideia.", image: "/images/makeup-eyes.png", imagePosition: "center" },
] as const

const lipShades: Shade[] = [
  { name: "Rosewood", color: "#8f4050" },
  { name: "Cherry", color: "#a91f36" },
  { name: "Nude 02", color: "#b96f69" },
  { name: "Wine", color: "#642033" },
]

const faceShades: Shade[] = [
  { name: "Light", color: "#e8c6ad" },
  { name: "Medium", color: "#c58d68" },
  { name: "Tan", color: "#9c6242" },
  { name: "Deep", color: "#603b2c" },
]

const blushShades: Shade[] = [
  { name: "Petal", color: "#d58d98" },
  { name: "Berry", color: "#a44c64" },
  { name: "Coral", color: "#db756f" },
  { name: "Plum", color: "#7e3c54" },
]

export const products: Product[] = [
  {
    id: "lip-velvet", name: "Lip Velvet", category: "labios", categoryLabel: "Lábios",
    type: "Batom matte", finish: "Soft matte", price: 109, volume: "3,5 g",
    image: "/images/makeup-lips.png", imagePosition: "13% 62%", imageScale: 1.75,
    swatches: lipShades, bestseller: true,
  },
  {
    id: "lip-oil", name: "Lip Oil", category: "labios", categoryLabel: "Lábios",
    type: "Óleo labial", finish: "Glossy", price: 98, volume: "6 ml",
    image: "/images/makeup-lips.png", imagePosition: "42% 58%", imageScale: 1.85,
    swatches: lipShades.slice(0, 3), bestseller: true,
  },
  {
    id: "gloss-01", name: "Gloss Nº01", category: "labios", categoryLabel: "Lábios",
    type: "Gloss de alto brilho", finish: "Glass shine", price: 92, volume: "6 ml",
    image: "/images/makeup-lips.png", imagePosition: "67% 55%", imageScale: 1.8,
    swatches: lipShades.slice(1), isNew: true,
  },
  {
    id: "lip-pencil", name: "Lip Pencil", category: "labios", categoryLabel: "Lábios",
    type: "Lápis labial", finish: "Velvet line", price: 69, volume: "1,2 g",
    image: "/images/makeup-lips.png", imagePosition: "91% 55%", imageScale: 1.65,
    swatches: lipShades,
  },
  {
    id: "satin-lipstick", name: "Satin Lipstick", category: "labios", categoryLabel: "Lábios",
    type: "Batom cremoso", finish: "Satin", price: 112, volume: "3,5 g",
    image: "/images/makeup-lips.png", imagePosition: "20% 45%", imageScale: 1.45,
    hoverImage: "/images/makeup-red-edit.png", swatches: lipShades,
  },
  {
    id: "skin-tint", name: "Skin Tint", category: "rosto", categoryLabel: "Rosto",
    type: "Base leve", finish: "Natural", price: 149, volume: "30 ml",
    image: "/images/makeup-face.png", imagePosition: "12% 58%", imageScale: 1.75,
    swatches: faceShades, bestseller: true,
  },
  {
    id: "soft-concealer", name: "Soft Concealer", category: "rosto", categoryLabel: "Rosto",
    type: "Corretivo", finish: "Second skin", price: 96, volume: "7 ml",
    image: "/images/makeup-face.png", imagePosition: "34% 58%", imageScale: 1.95,
    swatches: faceShades,
  },
  {
    id: "soft-focus-powder", name: "Soft Focus Powder", category: "rosto", categoryLabel: "Rosto",
    type: "Pó compacto", finish: "Soft matte", price: 126, volume: "9 g",
    image: "/images/makeup-face.png", imagePosition: "61% 53%", imageScale: 1.75,
    swatches: faceShades,
  },
  {
    id: "sculpt-bronzer", name: "Sculpt", category: "rosto", categoryLabel: "Rosto",
    type: "Bronzer", finish: "Satin matte", price: 132, volume: "10 g",
    image: "/images/makeup-face.png", imagePosition: "86% 64%", imageScale: 1.72,
    swatches: faceShades.slice(1),
  },
  {
    id: "filter-primer", name: "Filter Primer", category: "rosto", categoryLabel: "Rosto",
    type: "Primer blur", finish: "Soft focus", price: 139, volume: "28 ml",
    image: "/images/makeup-face.png", imagePosition: "center", imageScale: 1.25,
    swatches: [{ name: "Universal", color: "#e2bfb4" }], isNew: true,
  },
  {
    id: "noir-mascara", name: "Noir Mascara", category: "olhos", categoryLabel: "Olhos",
    type: "Máscara de cílios", finish: "Intense black", price: 104, volume: "9 ml",
    image: "/images/makeup-eyes.png", imagePosition: "18% 40%", imageScale: 1.62,
    swatches: [{ name: "Noir", color: "#171416" }], bestseller: true,
  },
  {
    id: "precision-liner", name: "Precision Liner", category: "olhos", categoryLabel: "Olhos",
    type: "Delineador", finish: "Graphic matte", price: 82, volume: "1 ml",
    image: "/images/makeup-eyes.png", imagePosition: "47% 52%", imageScale: 1.78,
    swatches: [{ name: "Noir", color: "#171416" }, { name: "Wine", color: "#642033" }],
  },
  {
    id: "brow-sculpt", name: "Brow Sculpt", category: "olhos", categoryLabel: "Olhos",
    type: "Gel de sobrancelha", finish: "Flexible hold", price: 78, volume: "5 ml",
    image: "/images/makeup-eyes.png", imagePosition: "62% 50%", imageScale: 1.72,
    swatches: [{ name: "Taupe", color: "#80665b" }, { name: "Brunette", color: "#50392f" }],
  },
  {
    id: "shadow-01", name: "Shadow Nº01", category: "olhos", categoryLabel: "Olhos",
    type: "Quarteto de sombras", finish: "Multi-finish", price: 144, volume: "8 g",
    image: "/images/makeup-eyes.png", imagePosition: "84% 71%", imageScale: 1.65,
    swatches: [{ name: "Plum", color: "#714154" }, { name: "Rose", color: "#b07982" }, { name: "Champagne", color: "#dbc3ae" }],
  },
  {
    id: "eye-pencil", name: "Eye Pencil", category: "olhos", categoryLabel: "Olhos",
    type: "Lápis de olhos", finish: "Creamy matte", price: 72, volume: "1,1 g",
    image: "/images/makeup-eyes.png", imagePosition: "center", imageScale: 1.28,
    swatches: [{ name: "Noir", color: "#171416" }, { name: "Plum", color: "#714154" }], isNew: true,
  },
  {
    id: "cream-blush", name: "Cream Blush", category: "blush", categoryLabel: "Blush",
    type: "Blush cremoso", finish: "Cream", price: 119, volume: "6 g",
    image: "/images/makeup-blush.png", imagePosition: "22% 25%", imageScale: 1.62,
    swatches: blushShades,
  },
  {
    id: "liquid-blush", name: "Liquid Blush Nº02", category: "blush", categoryLabel: "Blush",
    type: "Blush líquido", finish: "Liquid", price: 116, volume: "8 ml",
    image: "/images/makeup-liquid-blush.png", imagePosition: "center", imageScale: 1,
    hoverImage: "/images/makeup-blush.png", swatches: blushShades, isNew: true,
  },
  {
    id: "soft-blush", name: "Soft Blush", category: "blush", categoryLabel: "Blush",
    type: "Blush em pó", finish: "Soft matte", price: 112, volume: "7 g",
    image: "/images/makeup-blush.png", imagePosition: "23% 80%", imageScale: 1.66,
    swatches: blushShades,
  },
  {
    id: "glow-blush", name: "Glow Blush", category: "blush", categoryLabel: "Blush",
    type: "Blush iluminador", finish: "Glow", price: 124, volume: "7 g",
    image: "/images/makeup-blush.png", imagePosition: "77% 79%", imageScale: 1.7,
    swatches: blushShades.slice(0, 3),
  },
  {
    id: "blush-stick", name: "Blush Stick", category: "blush", categoryLabel: "Blush",
    type: "Stick multiuso", finish: "Satin cream", price: 108, volume: "7 g",
    image: "/images/makeup-blush.png", imagePosition: "center", imageScale: 1.15,
    swatches: blushShades,
  },
]

export const bestSellers = products.filter((product) => product.bestseller)

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug)
}

export function getProductsByCategory(slug: CategorySlug) {
  return products.filter((product) => product.category === slug)
}

export function formatPrice(price: number) {
  return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(price)
}
