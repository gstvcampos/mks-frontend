import Drawer from './Drawer'

export const Header = () => {
  return (
    <header className="mx-auto w-full bg-primary p-2 text-primary-content">
      <div className="w-full max-w-screen-2xl flex justify-between items-center mx-auto">
        <div className="flex items-end gap-1">
          <h1 className="font-semibold text-3xl">MKS</h1>
          <span className="font-light text-base">Sistemas</span>
        </div>
        <Drawer id="cart" title="Carinho de compras">
          <div>
            <ul>
              <li>ola</li>
              <li>ola</li>
              <li>ola</li>
              <li>ola</li>
            </ul>
          </div>
        </Drawer>
      </div>
    </header>
  )
}
