import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { CatalogPage } from "@/components/catalog-page"
import { categories, getCategory, getProductsByCategory, type CategorySlug } from "@/lib/products"

type CategoryPageProps = { params: Promise<{ category: string }> }

export function generateStaticParams() {
  return categories.map((category) => ({ category: category.slug }))
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category: slug } = await params
  const category = getCategory(slug)
  if (!category) return {}
  return {
    title: category.label,
    description: category.description,
    alternates: { canonical: `/${category.slug}` },
  }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: slug } = await params
  const category = getCategory(slug)
  if (!category) notFound()

  return (
    <CatalogPage
      title={category.label.toUpperCase()}
      eyebrow={category.eyebrow}
      description={category.description}
      products={getProductsByCategory(category.slug as CategorySlug)}
    />
  )
}
