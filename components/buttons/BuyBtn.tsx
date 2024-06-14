'use client'

import { Product } from '@/@types/product'
import { CartContext } from '@/contexts/CartContext'
import BuyIcon from '@/public/BuyIcon'
import { useContext } from 'react'

export default function BuyBtn({ product }: { product: Product }) {
  const { addItemToCart } = useContext(CartContext)

  return (
    <button
      onClick={() => addItemToCart(product)}
      className="btn btn-primary mt-auto rounded-b-xl rounded-t-none font-semibold"
    >
      <BuyIcon />
      COMPRAR
    </button>
  )
}
