import BlogPostsCell from 'src/components/BlogPostsCell'
import BlogLayout from 'src/layouts/BlogLayout/BlogLayout'

const BlogPage = () => {
  return (
    <BlogLayout>
      <main>
        <header className="my-5">
          <h2 className="text-4xl">Savage Thoughts</h2>
          <hr className="w-20" />
        </header>
        <BlogPostsCell />
      </main>
    </BlogLayout>
  )
}

export default BlogPage
