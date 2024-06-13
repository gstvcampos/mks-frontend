import { Product } from '@/@types/product'
import { ProductCard } from '@/components/ProductCard'

export default async function Home() {
  const response = await fetch(
    'https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=name&orderBy=ASC',
    {
      cache: 'no-store',
    },
  )

  const data = await response.json()
  const products: Product[] = data.products

  return (
    <main className="max-w-screen-xl px-10 py-5 md:py-16 md:px-20 mx-auto">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 w-full">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </ul>
    </main>
  )
}
