import CartIcon from './icons/CartIcon'
import CloseCartIcon from './icons/CloseCartIcon'

export default function Drawer({
  id,
  label,
  title,
  children,
}: {
  id: string
  label?: string
  title?: string
  children: React.ReactNode
}) {
  return (
    <div className="relative drawer-end z-20">
      <input id={id} type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label htmlFor={id} aria-label="open sidebar" className="btn">
          <CartIcon className="h-5 w-5" />
          {label && <span>{label}</span>}
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor={id}
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="p-4 w-[330px] md:w-[486px] min-h-full bg-primary text-base-content">
          <div className="flex justify-between">
            <h3 className="font-bold p-4 uppercase">{title}</h3>
            <label
              htmlFor={id}
              aria-label="close sidebar"
              className="btn btn-ghost hover:bg-primary"
            >
              <CloseCartIcon />
            </label>
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}
