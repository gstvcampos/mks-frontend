'use client'

import { Product } from '@/@types/product'

export default function BuyBtn({ product }: { product: Product }) {
  const addToCart = () => {
    console.log(product)
  }

  return (
    <button onClick={addToCart} className="btn btn-primary rounded-none">
      Comprar
    </button>
  )
}
