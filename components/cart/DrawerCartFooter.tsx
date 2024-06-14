import { formatPrice } from '@/lib/ultis'

export default function DrawerCartFooter({ subtotal }: { subtotal: number }) {
  return (
    <div className="absolute bottom-0 w-full">
      <div className="flex justify-between px-8 text-white text-3xl pb-4 font-bold">
        <span>Total</span>
        <span>{formatPrice(subtotal)}</span>
      </div>
      <button className="h-28 bg-black w-full rounded-none border-none text-white text-3xl  font-bold">
        Finalizar compra
      </button>
    </div>
  )
}
