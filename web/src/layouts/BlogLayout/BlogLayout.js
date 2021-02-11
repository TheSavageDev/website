import { Link, routes } from '@redwoodjs/router/dist/internal'

const BlogLayout = ({ children }) => {
  return (
    <>
      <header className="flex items-center justify-between bg-background-translucent text-white font-semibold bg-opacity-40">
        <h1 className="text-5xl text-brand-light ml-5">JS</h1>
        <nav
          id="blog-nav-header"
          className="py-5 sm:flex sm:flex-wrap sm:justify-center md:justify-end"
        >
          <Link to={routes.home()}>Home</Link>
        </nav>
      </header>
      {children}
    </>
  )
}

export default BlogLayout
