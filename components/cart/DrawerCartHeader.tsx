export default function DrawerHeader() {
  return (
    <div className="flex justify-between items-center px-6 pt-6">
      <h3 className="font-bold uppercase text-2xl text-white">
        Carrinho <br /> de compras
      </h3>
      <label
        htmlFor="cart"
        aria-label="close sidebar"
        className="bg-black text-white text-3xl h-9 w-9 rounded-full flex items-center justify-center"
      >
        X
      </label>
    </div>
  )
}
