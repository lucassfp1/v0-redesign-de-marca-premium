"use client"

import { createContext, useContext, useMemo, useState, type ReactNode } from "react"
import type { Product, Shade } from "@/lib/products"

export type CartItem = Product & {
  cartId: string
  quantity: number
  selectedShade: Shade
}

type ShopContextValue = {
  items: CartItem[]
  count: number
  cartOpen: boolean
  setCartOpen: (open: boolean) => void
  addItem: (product: Product, shade?: Shade) => void
  decrementItem: (cartId: string) => void
  removeItem: (cartId: string) => void
}

const ShopContext = createContext<ShopContextValue | null>(null)

export function ShopProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [cartOpen, setCartOpen] = useState(false)

  const addItem = (product: Product, shade = product.swatches[0]) => {
    const cartId = `${product.id}-${shade.name}`
    setItems((current) => {
      const found = current.find((item) => item.cartId === cartId)
      if (found) {
        return current.map((item) =>
          item.cartId === cartId ? { ...item, quantity: item.quantity + 1 } : item,
        )
      }
      return [...current, { ...product, cartId, selectedShade: shade, quantity: 1 }]
    })
    setCartOpen(true)
  }

  const decrementItem = (cartId: string) => {
    setItems((current) =>
      current.flatMap((item) => {
        if (item.cartId !== cartId) return [item]
        return item.quantity > 1 ? [{ ...item, quantity: item.quantity - 1 }] : []
      }),
    )
  }

  const removeItem = (cartId: string) => {
    setItems((current) => current.filter((item) => item.cartId !== cartId))
  }

  const count = useMemo(() => items.reduce((total, item) => total + item.quantity, 0), [items])

  return (
    <ShopContext.Provider value={{ items, count, cartOpen, setCartOpen, addItem, decrementItem, removeItem }}>
      {children}
    </ShopContext.Provider>
  )
}

export function useShop() {
  const context = useContext(ShopContext)
  if (!context) throw new Error("useShop must be used inside ShopProvider")
  return context
}
