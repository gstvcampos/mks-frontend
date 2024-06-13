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
          className="object-cover object-center absolute top-0 left-0"
        />
      </div>

      <div className="card-body p-0">
        <h2 className="font-bold text-base line-clamp-2 min-h-[2.5rem]">
          {product.name}
        </h2>
        <p className="font-bold self-end">{formatPrice(product.price)}</p>
        <BuyBtn product={product} />
      </div>
    </li>
  )
}
