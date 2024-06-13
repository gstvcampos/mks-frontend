'use client'

import { Product } from '@/@types/product'
import { CartContext } from '@/contexts/ProductContexts'
import { useContext } from 'react'

export default function BuyBtn({ product }: { product: Product }) {
  const { addItemToCart } = useContext(CartContext)

  return (
    <button
      onClick={() => addItemToCart(product)}
      className="btn btn-primary rounded-none mt-auto"
    >
      Comprar
    </button>
  )
}
