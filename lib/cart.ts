import { Cart } from '@/@types/cart'
import { Product } from '@/@types/product'
import { revalidatePath } from 'next/cache'

const getCartFromLocalStorage = (): Cart => {
  let cartData = { items: [], subtotal: 0 }
  if (typeof window !== 'undefined') {
    const storedCart = window.localStorage.getItem('shopCart')
    if (storedCart) {
      cartData = JSON.parse(storedCart)
    }
  }
  return cartData
}

const saveCartToLocalStorage = (cart: Cart): void => {
  localStorage.setItem('shopCart', JSON.stringify(cart))
}

const addItemToCart = (product: Product, quantity: number = 1): void => {
  const cart = getCartFromLocalStorage()
  const existingItem = cart.items.find((item) => item.id === product.id)

  if (existingItem) {
    existingItem.quantity += quantity
  } else {
    cart.items.push({ ...product, quantity })
  }

  cart.subtotal += quantity * Number(product.price)
  saveCartToLocalStorage(cart)
  revalidatePath('/')
}

const removeItemFromCart = (productId: number, quantity: number = 1): void => {
  const cart = getCartFromLocalStorage()
  const itemIndex = cart.items.findIndex((item) => item.id === productId)

  if (itemIndex !== -1) {
    const item = cart.items[itemIndex]
    if (item.quantity > quantity) {
      item.quantity -= quantity
      cart.subtotal -= quantity * Number(item.price)
    } else {
      cart.subtotal -= item.quantity * item.price
      cart.items.splice(itemIndex, 1)
    }
    saveCartToLocalStorage(cart)
    revalidatePath('/')
  }
}

const removeAllToCart = (productId: number): void => {
  const cart = getCartFromLocalStorage()
  cart.items = cart.items.filter((item) => item.id !== productId)
  cart.subtotal = cart.items.reduce(
    (total, item) => total + item.quantity * item.price,
    0,
  )

  saveCartToLocalStorage(cart)
  revalidatePath('/')
}

export {
  addItemToCart,
  getCartFromLocalStorage,
  removeAllToCart,
  removeItemFromCart,
}
