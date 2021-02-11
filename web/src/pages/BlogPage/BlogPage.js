import BlogPostsCell from 'src/components/BlogPostsCell'
import BlogLayout from 'src/layouts/BlogLayout/BlogLayout'

const BlogPage = () => {
  return (
    <BlogLayout>
      <main className="h-full">
        <section className="p-5 my-2 w-full rounded-xl transition-all duration-299 md:w-3/4 md:mx-auto lg:w-2/3">
          <header className="mb-2">
            <h2 className="text-2xl">Savage Thoughts</h2>
            <hr className="w-20 border-accent-dark" />
          </header>
        </section>
        <BlogPostsCell />
      </main>
    </BlogLayout>
  )
}

export default BlogPage
