"use client"

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react"
import type { Product } from "@/lib/products"

type CartItem = Product & { quantity: number }

type ShopContextValue = {
  items: CartItem[]
  count: number
  cartOpen: boolean
  setCartOpen: (open: boolean) => void
  addItem: (product: Product) => void
  decrementItem: (id: string) => void
  removeItem: (id: string) => void
}

const ShopContext = createContext<ShopContextValue | null>(null)

export function ShopProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [cartOpen, setCartOpen] = useState(false)

  const addItem = (product: Product) => {
    setItems((current) => {
      const found = current.find((item) => item.id === product.id)
      if (found) {
        return current.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        )
      }
      return [...current, { ...product, quantity: 1 }]
    })
    setCartOpen(true)
  }

  const decrementItem = (id: string) => {
    setItems((current) =>
      current.flatMap((item) => {
        if (item.id !== id) return [item]
        return item.quantity > 1 ? [{ ...item, quantity: item.quantity - 1 }] : []
      }),
    )
  }

  const removeItem = (id: string) => {
    setItems((current) => current.filter((item) => item.id !== id))
  }

  const count = useMemo(
    () => items.reduce((total, item) => total + item.quantity, 0),
    [items],
  )

  return (
    <ShopContext.Provider
      value={{
        items,
        count,
        cartOpen,
        setCartOpen,
        addItem,
        decrementItem,
        removeItem,
      }}
    >
      {children}
    </ShopContext.Provider>
  )
}

export function useShop() {
  const context = useContext(ShopContext)
  if (!context) throw new Error("useShop must be used inside ShopProvider")
  return context
}
