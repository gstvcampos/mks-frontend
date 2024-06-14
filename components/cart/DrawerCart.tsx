'use client'

import { CartContext } from '@/contexts/CartContext'
import CartIcon from '@/public/CartIcon'
import { useContext } from 'react'
import CartItem from './CartItem'
import DrawerCartFooter from './DrawerCartFooter'
import DrawerHeader from './DrawerCartHeader'

export default function DrawerCart() {
  const { cart, removeAllFromCart, removeItemFromCart, addItemToCart } =
    useContext(CartContext)

  return (
    <div className="relative drawer-end z-20">
      <input id="cart" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label htmlFor="cart" aria-label="open sidebar" className="btn">
          <CartIcon className="h-5 w-5" />
          <span className="font-bold text-lg">{cart.items.length}</span>
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="cart"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="pr-4 w-[330px] h-full  md:w-[486px] min-h-full bg-primary text-base-content">
          <DrawerHeader />
          <ul className="space-y-5 p-6 overflow-auto max-h-full h-[calc(100%-300px)]">
            {cart.items.map((product) => (
              <CartItem
                key={product.id}
                product={product}
                removeAllFromCart={removeAllFromCart}
                removeItemFromCart={removeItemFromCart}
                addItemToCart={addItemToCart}
              />
            ))}
          </ul>
          <DrawerCartFooter subtotal={cart.subtotal} />
        </div>
      </div>
    </div>
  )
}
