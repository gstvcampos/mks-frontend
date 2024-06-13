'use client'

import { Cart } from '@/@types/cart'
import {
  addItemToCart,
  getCartFromLocalStorage,
  removeItemFromCart,
} from '@/lib/cart'
import { formatPrice } from '@/lib/ultis'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import CloseCartIcon from './icons/CloseCartIcon'

export default function ShopCart() {
  const [cart, setCart] = useState<Cart>({ items: [], subtotal: 0 })

  useEffect(() => {
    const cartData = getCartFromLocalStorage()
    setCart(cartData)
  }, [])

  return (
    <ul className="space-y-5 py-9 px-3">
      {cart.items.map((product) => (
        <li
          key={product.id}
          className="relative mx-auto h-28 bg-white rounded-lg"
        >
          <button className="absolute -top-2 -right-2">
            <CloseCartIcon className="h-5 w-5" />
          </button>
          <div className="flex items-center justify-between p-2">
            <div className="relative block w-20 pt-[20%]">
              <Image
                fill
                src={product.photo}
                alt="imagem do produto"
                className="object-contain object-center absolute top-0 left-0"
              />
            </div>

            <span className="max-w-11">{product.name}</span>

            <div className="flex gap-3 border rounded-md p-1">
              <span>Qtd:</span>
              <div>
                <button onClick={() => removeItemFromCart(product.id)}>
                  -
                </button>
                <span>{product.quantity}</span>
                <button onClick={() => addItemToCart(product)}>+</button>
              </div>
            </div>

            <span>{formatPrice(product.price)}</span>
          </div>
        </li>
      ))}
    </ul>
  )
}
