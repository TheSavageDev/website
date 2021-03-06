const { routes } = require('@redwoodjs/router/dist/internal')
const { Link } = require('@redwoodjs/router/dist/links')

const MainLayout = ({ children }) => {
  return (
    <>
      <header className="flex items-center justify-between bg-translucent text-white font-semibold fixed top-0 left-0 right-0 z-10 transition-all duration-500 max-w-screen overflow-hidden">
        <h1 className="text-5xl text-yellow ml-5">JS</h1>
        <nav
          id="home-nav-header"
          className="py-3 transition-all duration-500 hidden sm:flex sm:flex-wrap sm:justify-center md:justify-end"
        >
          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
          <Link to={routes.games()}>Games</Link>
          <Link to={routes.blog()}>Blog</Link>
        </nav>
      </header>
      {children}
    </>
  )
}

export default MainLayout
