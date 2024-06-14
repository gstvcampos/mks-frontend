import { ProductWithQuantity } from '@/@types/cart'
import { Product } from '@/@types/product'
import { formatPrice } from '@/lib/ultis'
import Image from 'next/image'

export interface CartItemProps {
  product: ProductWithQuantity
  addItemToCart: (product: Product) => void
  removeItemFromCart: (id: number) => void
  removeAllFromCart: (id: number) => void
}

export default function CartItem({
  product,
  addItemToCart,
  removeItemFromCart,
  removeAllFromCart,
}: CartItemProps) {
  return (
    <li className="relative mx-auto md:h-28 bg-white rounded-lg">
      <button
        onClick={() => removeAllFromCart(product.id)}
        className="absolute top-2 right-2 md:-top-2 md:-right-2 bg-white md:bg-black text-black md:text-white text-3xl md:text-sm rounded-full w-6 h-6 flex items-center justify-center z-10"
      >
        X
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

        <span className="text-base md:text-xs md:w-24">{product.name}</span>

        <div className="flex md:flex-col justify-between gap-1 w-full md:w-[100px] p-2 md:p-0">
          <span className="hidden md:text-[9px]">Qtd:</span>
          <div className="flex items-center justify-around w-[60px] border rounded-md p-1 text-xs">
            <button onClick={() => removeItemFromCart(product.id)}>-</button>
            <span className="border-r border-l px-2">{product.quantity}</span>
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
  )
}
