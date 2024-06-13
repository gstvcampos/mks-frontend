import { Product } from './product'

export interface ProductWithQuantity extends Product {
  quantity: number
}

export interface Cart {
  items: ProductWithQuantity[]
  subtotal: number
}
