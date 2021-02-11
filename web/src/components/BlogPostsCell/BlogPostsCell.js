import { Link, routes } from '@redwoodjs/router'
import BlogPost from '../BlogPost/BlogPost'

export const QUERY = gql`
  query BlogPostsQuery {
    posts {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ posts }) => {
  return posts.map((post) => (
    <article
      key={post.id}
      className="mt-5 bg-brand-dark my-5 w-full rounded-xl md:w-3/4 md:mx-auto lg:w-2/3"
    >
      <BlogPost post={post} />
    </article>
  ))
}
