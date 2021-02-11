import { Link, routes } from '@redwoodjs/router'

const BlogPost = ({ post }) => {
  return (
    <article className="p-5 mt-5 bg-brand-dark my-5 w-full rounded-xl transition-all duration-299 md:w-3/4 md:mx-auto lg:w-2/3">
      <header className="mb-5">
        <h2 className="text-2xl">
          <Link to={routes.blogPost({ id: post.id })}>{post.title}</Link>
        </h2>
        <hr className="w-20 border-accent-dark" />
      </header>
      <div>{post.body}</div>
    </article>
  )
}

export default BlogPost
