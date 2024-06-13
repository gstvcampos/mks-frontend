import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(price: number | string) {
  const numericPrice = typeof price === 'string' ? parseFloat(price) : price
  return numericPrice.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  })
}
