'use client'

import { Cart } from '@/@types/cart'
import { Product } from '@/@types/product'
import { ReactNode, createContext, useEffect, useState } from 'react'

interface CartContextType {
  cart: Cart
  addItemToCart: (product: Product, quantity?: number) => void
  removeItemFromCart: (productId: number, quantity?: number) => void
  removeAllFromCart: (productId: number) => void
}

export const CartContext = createContext({} as CartContextType)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Cart>({ items: [], subtotal: 0 })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedCart = window.localStorage.getItem('shopCart')
      if (storedCart) {
        const parsedCart = JSON.parse(storedCart)
        if (parsedCart && parsedCart.items) {
          setCart(parsedCart)
        }
      }
    }
  }, [])

  const updateCart = (newCart: Cart) => {
    newCart.subtotal = newCart.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    )
    setCart(newCart)
    localStorage.setItem('shopCart', JSON.stringify(newCart))
  }

  const addItemToCart = (product: Product): void => {
    const updatedCart = { ...cart }
    const existingItemIndex = updatedCart.items.findIndex(
      (item) => item.id === product.id,
    )

    if (existingItemIndex !== -1) {
      updatedCart.items[existingItemIndex].quantity++
    } else {
      updatedCart.items.push({ ...product, quantity: 1 })
    }

    updateCart(updatedCart)
  }

  const removeItemFromCart = (productId: number): void => {
    const updatedCart = { ...cart }
    const itemIndex = updatedCart.items.findIndex(
      (item) => item.id === productId,
    )
    if (itemIndex !== -1) {
      const currentQuantity = updatedCart.items[itemIndex].quantity

      if (currentQuantity > 1) {
        updatedCart.items[itemIndex].quantity--
      } else {
        updatedCart.items.splice(itemIndex, 1)
      }

      updateCart(updatedCart)
    }
  }

  const removeAllFromCart = (productId: number): void => {
    const updatedCart = { ...cart }
    updatedCart.items = updatedCart.items.filter(
      (item) => item.id !== productId,
    )

    updateCart(updatedCart)
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addItemToCart,
        removeItemFromCart,
        removeAllFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
