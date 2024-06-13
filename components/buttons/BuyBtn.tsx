'use client'

import { Product } from '@/@types/product'
import { addItemToCart } from '@/lib/cart'

export default function BuyBtn({ product }: { product: Product }) {
  return (
    <button
      onClick={() => addItemToCart(product)}
      className="btn btn-primary rounded-none mt-auto"
    >
      Comprar
    </button>
  )
}
