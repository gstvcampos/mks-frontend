'use client'

import { CartContext } from '@/contexts/ProductContexts'
import { useContext } from 'react'
import CartIcon from './icons/CartIcon'
import CloseCartIcon from './icons/CloseCartIcon'

export default function Drawer({
  id,
  children,
}: {
  id: string
  children: React.ReactNode
}) {
  const { cart } = useContext(CartContext)

  return (
    <div className="relative drawer-end z-20">
      <input id={id} type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label htmlFor={id} aria-label="open sidebar" className="btn">
          <CartIcon className="h-5 w-5" />
          <span className="font-bold text-lg">{cart.items.length}</span>
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor={id}
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="pr-4 w-[330px] md:w-[486px] min-h-full bg-primary text-base-content">
          <div className="flex justify-between items-center px-6 pt-6">
            <h3 className="font-bold uppercase text-2xl text-white">
              Carrinho <br /> de compras
            </h3>
            <label htmlFor={id} aria-label="close sidebar">
              <CloseCartIcon />
            </label>
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}
