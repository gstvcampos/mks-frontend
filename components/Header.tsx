export const Header = () => {
  return (
    <header className="w-full h-12 md:h-24 flex items-center bg-primary">
      <div className="container flex justify-between mx-auto p-1">
        <div className="flex items-end gap-1">
          <span className="font-semibold text-3xl">MKS</span>
          <span className="font-light text-base">Sistemas</span>
        </div>

        <div className="drawer drawer-end">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label
              htmlFor="my-drawer-4"
              className="drawer-button btn btn-primary"
            >
              Open drawer
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-4"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
              {/* Sidebar content here */}
              <li>
                <a>Sidebar Item 1</a>
              </li>
              <li>
                <a>Sidebar Item 2</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}
