import MainLayout from 'src/layouts/MainLayout/MainLayout'

const AboutPage = () => {
  const today = new Date()
  const month = today.getMonth()
  const age =
    month >= 10 ? today.getFullYear() - 1989 : today.getFullYear() - (1989 + 1)
  return (
    <MainLayout>
      <main>
        <section id="about">
          <header className="my-5">
            <h2 className="text-4xl">My Name is Jason A Savage</h2>
            <p className="text-xl">I am a Professional Software Engineer</p>
            <hr className="w-20" />
          </header>
          <section>
            <table>
              <tr>
                <td className="font-bold px-5 pr-10">Full Name</td>
                <td>Jason A Savage</td>
              </tr>
              <tr>
                <td className="font-bold px-5 pr-10">Age</td>
                <td>{`${age} Years`}</td>
              </tr>
              <tr>
                <td className="font-bold px-5 pr-10">Location</td>
                <td>Kansas, USA</td>
              </tr>
              <tr>
                <td className="font-bold px-5 pr-10">Email</td>
                <td>jason@thesavage.dev</td>
              </tr>
            </table>
          </section>
        </section>
      </main>
    </MainLayout>
  )
}

export default AboutPage
