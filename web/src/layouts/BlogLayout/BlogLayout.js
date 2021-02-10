const { routes } = require('@redwoodjs/router/dist/internal')
const { Link } = require('@redwoodjs/router/dist/links')

const BlogLayout = ({ children }) => {
  return (
    <>
      <header>
        <nav>
          <ul className="flex">
            <li className="mx-5 hover:shadow transition">
              <Link to={routes.home()}>Home</Link>
            </li>
            <li className="mx-5 hover:shadow transition">
              <Link to={routes.about()}>About</Link>
            </li>
            <li className="mx-5 hover:shadow transition">
              <Link to={routes.service()}>Service</Link>
            </li>
            <li className="mx-5 hover:shadow transition">
              <Link to={routes.work()}>Work</Link>
            </li>
            <li className="mx-5 hover:shadow transition">
              <Link to={routes.contact()}>Contact</Link>
            </li>
            <li className="mx-5 hover:shadow transition">
              <Link to={routes.blog()}>Blog</Link>
            </li>
          </ul>
        </nav>
      </header>
      {children}
    </>
  )
}

export default BlogLayout
