'use client'

import { Product } from '@/@types/product'
import { addItemToCart } from '@/lib/cart'

export default function BuyBtn({ product }: { product: Product }) {
  const handleAddToCart = () => {
    addItemToCart(product)
  }

  return (
    <button onClick={handleAddToCart} className="btn btn-primary rounded-none">
      Comprar
    </button>
  )
}
