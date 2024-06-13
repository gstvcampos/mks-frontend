'use client'

import { CartContext } from '@/contexts/ProductContexts'
import { formatPrice } from '@/lib/ultis'
import Image from 'next/image'
import { useContext } from 'react'
import CloseCartIcon from './icons/CloseCartIcon'

export default function ShopCart() {
  const { cart, addItemToCart, removeItemFromCart, removeAllFromCart } =
    useContext(CartContext)

  return (
    <div>
      <ul className="space-y-5 p-6 h-[660px] overflow-auto">
        {cart.items.map((product) => (
          <li
            key={product.id}
            className="relative mx-auto md:h-28 bg-white rounded-lg"
          >
            <button
              onClick={() => removeAllFromCart(product.id)}
              className="absolute -top-2 -right-2"
            >
              <CloseCartIcon className="h-5 w-5" />
            </button>
            <div className="flex flex-col md:flex-row items-center justify-between p-2">
              <div className="relative block w-20 pt-[30%] md:pt-[20%]">
                <Image
                  fill
                  src={product.photo}
                  alt="imagem do produto"
                  className="object-contain object-center absolute top-0 left-0"
                />
              </div>

              <span className="text-base md:text-xs md:w-24">
                {product.name}
              </span>

              <div className="flex md:flex-col justify-between gap-1 w-full md:w-[100px] p-2 md:p-0">
                <span className="hidden md:text-[9px]">Qtd:</span>
                <div className="flex items-center justify-around w-[60px] border rounded-md p-1 text-xs">
                  <button onClick={() => removeItemFromCart(product.id)}>
                    -
                  </button>
                  <span className="border-r border-l px-2">
                    {product.quantity}
                  </span>
                  <button onClick={() => addItemToCart(product)}>+</button>
                </div>
                <span className="md:hidden bg-[#373737] text-white text-base rounded-lg font-bold p-1 h-8">
                  {formatPrice(product.price)}
                </span>
              </div>

              <span className="hidden md:block font-bold w-24">
                {formatPrice(product.price)}
              </span>
            </div>
          </li>
        ))}
      </ul>
      <div className="absolute bottom-0 w-full">
        <div className="flex justify-between px-8 text-white text-3xl pb-4 font-bold">
          <span>Total</span>
          <span>{formatPrice(cart.subtotal)}</span>
        </div>
        <button className="h-28 bg-black w-full rounded-none border-none text-white text-3xl  font-bold">
          Finalizar compra
        </button>
      </div>
    </div>
  )
}
