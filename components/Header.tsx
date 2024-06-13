export const Header = () => {
  return (
    <div className="drawer drawer-end z-10 w-full h-12 md:h-24 bg-primary">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <header className="mx-auto w-full max-w-screen-2xl flex justify-between items-center bg-primary px-5 text-primary-content">
        <div className="flex items-end gap-1">
          <span className="font-semibold text-3xl">MKS</span>
          <span className="font-light text-base">Sistemas</span>
        </div>
        <label
          htmlFor="my-drawer-3"
          aria-label="open sidebar"
          className="btn btn-square btn-ghost"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-6 h-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
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
