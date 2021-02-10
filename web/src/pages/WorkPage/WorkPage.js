import MainLayout from 'src/layouts/MainLayout/MainLayout'

const WorkPage = () => {
  return (
    <MainLayout>
      <main>
        <section id="work">
          <header className="my-5">
            <h2 className="text-4xl">Work</h2>
            <hr className="w-20" />
          </header>
          <section className="flex">
            <article className="mx-5">Trendy Savages</article>
            <article className="mx-5">OrthoAthletic</article>
          </section>
        </section>
      </main>
    </MainLayout>
  )
}

export default WorkPage
