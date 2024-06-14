import { Product } from '@/@types/product'
import { formatPrice } from '@/lib/ultis'
import Image from 'next/image'
import BuyBtn from './buttons/BuyBtn'

export const ProductCard = ({ product }: { product: Product }) => {
  return (
    <li className="card text-sm h-full shadow-lg overflow-hidden">
      <div className="relative block w-full pt-[100%]">
        <Image
          fill
          src={product.photo}
          alt="imagem do produto"
          sizes="(min-width: 640px) 25vw, 50vw"
          className="object-contain object-center absolute top-0 left-0"
        />
      </div>

      <div className="card-body p-0">
        <div className="p-2 space-y-2">
          <div className="flex justify-between text-base">
            <h2 className="text-base line-clamp-2">{product.name}</h2>
            <span className="bg-[#373737] text-white rounded-lg font-bold p-1 h-8">
              {formatPrice(product.price)}
            </span>
          </div>
          <p className="font-light line-clamp-2">{product.description}</p>
        </div>
        <BuyBtn product={product} />
      </div>
    </li>
  )
}
