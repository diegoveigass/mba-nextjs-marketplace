'use client'

import { type ReactNode, createContext, useContext, useState } from 'react'

interface CartItem {
  productId: number
  quantity: number
}

interface CartContextType {
  items: CartItem[]
  addToCart: (productId: number) => void
}

export const CartContext = createContext({} as CartContextType)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  function addToCart(productId: number) {
    const hasProductInCart = cartItems.find(
      item => item.productId === productId
    )

    if (hasProductInCart) {
      setCartItems(state =>
        state.map(item => {
          if (item.productId === hasProductInCart.productId) {
            return { ...item, quantity: item.quantity + 1 }
          }
          return item
        })
      )
    } else {
      setCartItems(state => [...state, { productId, quantity: 1 }])
    }
  }

  return (
    <CartContext.Provider value={{ addToCart, items: cartItems }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
