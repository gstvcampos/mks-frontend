'use client'

import { Cart } from '@/@types/cart'
import {
  addItemToCart,
  getCartFromLocalStorage,
  removeAllToCart,
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
          <button
            onClick={() => removeAllToCart(product.id)}
            className="absolute -top-2 -right-2"
          >
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

            <span className="text-xs w-24">{product.name}</span>

            <div className="flex flex-col gap-1 w-[100px]">
              <span className="text-[9px]">Qtd:</span>
              <div className="flex justify-around w-[60px] border rounded-md p-1 text-xs">
                <button onClick={() => removeItemFromCart(product.id)}>
                  -
                </button>
                <span className="border-r border-l px-2">
                  {product.quantity}
                </span>
                <button onClick={() => addItemToCart(product)}>+</button>
              </div>
            </div>

            <span className="font-bold w-24">{formatPrice(product.price)}</span>
          </div>
        </li>
      ))}
    </ul>
  )
}
