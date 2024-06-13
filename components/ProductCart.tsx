import Image from 'next/image'

export const ProductCard = ({ product }) => {
  return (
    <li className="relative flex flex-col text-start w-56 h-72 shadow-lg rounded-lg">
      <div className="flex items-center justify-center h-36">
        <Image src={product.photo} alt="imagem do produto" />
      </div>

      <div className="flex flex-col items-start justify-between">
        <div>
          <h3 className="font-bold">{product.name}</h3>
          <p className="rounded-lg max-w-full bg-neutral">
            R$
            {parseFloat(product.price).toLocaleString('pt-BR', {
              minimumFractionDigits: 0,
              maximumFractionDigits: 2,
            })}
          </p>
        </div>
        <p>{product.description}</p>
        <button>comprar</button>
      </div>
    </li>
  )
}
