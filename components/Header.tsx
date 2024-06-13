import CartIcon from './icons/CartIcon'

export const Header = () => {
  return (
    <div className="drawer drawer-end z-10 w-full bg-primary">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <header className="mx-auto w-full max-w-screen-2xl flex justify-between items-center bg-primary p-2 text-primary-content">
        <div className="flex items-end gap-1">
          <h1 className="font-semibold text-3xl">MKS</h1>
          <span className="font-light text-base">Sistemas</span>
        </div>
        <label
          htmlFor="my-drawer-3"
          aria-label="open sidebar"
          className="btn text-xs md:text-lg font-bold"
        >
          <CartIcon className="w-5 h-5" />
          <span>0</span>
        </label>
      </header>

      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200">
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  )
}
