import { CartProvider } from '@/contexts/ProductContexts'
import Drawer from './Drawer'
import ShopCart from './ShopCart'

export const Header = () => {
  return (
    <header className="mx-auto w-full bg-primary text-primary-content">
      <div className="w-full max-w-screen-2xl flex justify-between items-center mx-auto px-5 py-2 md:py-4">
        <div className="flex items-end gap-1">
          <h1 className="font-semibold text-3xl">MKS</h1>
          <span className="font-light text-base">Sistemas</span>
        </div>
        <CartProvider>
          <Drawer id="cart">
            <ShopCart />
          </Drawer>
        </CartProvider>
      </div>
    </header>
  )
}
