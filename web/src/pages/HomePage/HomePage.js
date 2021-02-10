import { useEffect, useState } from 'react'
import {
  Form,
  Label,
  Submit,
  TextAreaField,
  TextField,
  FieldError,
  CheckboxField,
} from '@redwoodjs/forms'
import MainLayout from 'src/layouts/MainLayout/MainLayout'

const HomePage = () => {
  const [title, setTitle] = useState('a Savage')
  const today = new Date()
  const month = today.getMonth()
  const age =
    month >= 10 ? today.getFullYear() - 1989 : today.getFullYear() - (1989 + 1)
  const onSubmit = (data) => {
    console.log(data)
  }

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setTitle('Jason A Savage')
      document.querySelector('#nav-header').classList.remove('justify-end')
      document.querySelector('#nav-header').classList.add('justify-center')
      document.querySelector('#catholic').classList.remove('hidden')
    }

    if (window.scrollY > 30) {
      document.querySelector('#father').classList.remove('hidden')
    }
    if (window.scrollY > 40) {
      document.querySelector('#husband').classList.remove('hidden')
    }
    if (window.scrollY > 50) {
      document.querySelector('#se').classList.remove('hidden')
    }

    if (window.scrollY < 20) {
      setTitle('a Savage')
      document.querySelector('#nav-header').classList.add('justify-end')
      document.querySelector('#nav-header').classList.remove('justify-center')
      document.querySelector('#catholic').classList.add('hidden')
    }
    if (window.scrollY < 30) {
      document.querySelector('#father').classList.add('hidden')
    }
    if (window.scrollY < 40) {
      document.querySelector('#husband').classList.add('hidden')
    }
    if (window.scrollY < 50) {
      document.querySelector('#se').classList.add('hidden')
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  })
  return (
    <MainLayout>
      <main>
        <section id="home">
          <header>
            <h2 id="title">I am {title}</h2>
          </header>
          <section className="m-5 flex flex-wrap justify-between">
            <ul className="jobs">
              <li id="catholic" className="text-lg mx-2 hidden">
                Catholic
              </li>
              <li id="father" className="text-lg mx-2 hidden">
                Father
              </li>
              <li id="husband" className="text-lg mx-2 hidden">
                Husband
              </li>
              <li id="se" className="text-lg mx-2 hidden">
                Software Engineer
              </li>
            </ul>
          </section>
        </section>
        <section id="about">
          <header>
            <h2>My Name is Jason A Savage</h2>
            <p className="text-xl">I am a Professional Software Engineer</p>
            <hr />
          </header>
          <section>
            <table>
              <tbody>
                <tr>
                  <td className="text-lg font-bold px-5 pr-10">Full Name</td>
                  <td>
                    <a
                      href="https://books.google.com/books?id=MU5RKM6ekl4C&printsec=frontcover&source=gbs_ge_summary_r&cad=0#v=onepage&q&f=true"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="underline"
                    >
                      Jason A Savage
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="text-lg font-bold px-5 pr-10">Age</td>
                  <td>
                    <a
                      href={`https://www.calculateme.com/time/years/to-days/${age}`}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="underline"
                    >
                      {`${age} Years`}
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="text-lg font-bold px-5 pr-10">Location</td>
                  <td>
                    <a
                      href="https://en.wikipedia.org/wiki/Kansas"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="underline"
                    >
                      Kansas, USA
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="text-lg font-bold px-5 pr-10">Email</td>
                  <td>
                    <a href="mailto:jason@thesavage.dev" className="underline">
                      jason@thesavage.dev
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
        </section>
        <section id="services">
          <header>
            <h2>Services</h2>
            <hr />
          </header>
          <section className="flex justify-between">
            <article className="service-card">
              <header>
                <h3>Research</h3>
              </header>
              <p>
                I can preform and provide a presentation for the most affordable
                and most recommended platforms to use for your business. For
                example, if you wanted to build a storefront with a blog along
                side it I would research options and provide you a detailed
                report on what is the most affordable (up front and over time)
                and what I would most recommend. Please see my works page for an
                example of a report and presentation.
              </p>
            </article>
            <article className="service-card">
              <header>
                <h3>Develop</h3>
              </header>
              <p>
                I am available for part-time project work at an hourly rate. I
                would especially be interested in a Catholic or other Christian
                organization&apos;s website or any Veteran related website.
                These preferred projects would be at a steeply reduced rate.
                Please see my works page for examples.
              </p>
            </article>
            <article className="service-card">
              <header>
                <h3>WordPress, Shopify, Gatsby</h3>
              </header>
              <p>
                I can build your business presence with WordPress or provide
                alternatives that could cost you considerably less. I accept
                these contracts at a very selective rate and will only provide
                administration for these sites with very select circumstances. I
                will provide training and documentation for you to easily
                administrate or to provide to an employee to handle it. Please
                see my works page for examples of sites I&apos;ve worked on.
              </p>
            </article>
          </section>
        </section>
        <section id="work">
          <header>
            <h2>Work</h2>
            <hr />
          </header>
          <section className="flex">
            <article className="mx-5">Trendy Savages</article>
            <article className="mx-5">OrthoAthletic</article>
          </section>
        </section>
      </main>
      <footer className="border-t-2 pt-5">
        <section id="contact" className="w-2/3 mx-auto">
          <header>
            <h2 className="text-3xl pl-2">Contact Me</h2>
          </header>
          <section>
            <Form onSubmit={onSubmit} className="contact-form">
              <Label name="name" errorClassName="error">
                Name
              </Label>
              <TextField
                name="name"
                validation={{ required: true }}
                errorClassName="error"
              />
              <FieldError name="name" className="error" />
              <Label name="email" errorClassName="error">
                Email
              </Label>
              <TextField
                name="email"
                validation={{ required: true }}
                errorClassName="error"
              />
              <FieldError name="email" className="error" />
              <Label name="message" errorClassName="error">
                Message
              </Label>
              <TextAreaField
                name="message"
                validation={{ required: true }}
                errorClassName="error"
              />
              <FieldError name="message" className="error" />
              <Label name="preferred" className="inline mt-2">
                <CheckboxField name="preferred" className="inline mr-4" />
                Do you have a Preferred Project?
              </Label>
              <Submit className="mt-5 hover:bg-accent-dark active:bg-accent-dark">
                Save
              </Submit>
            </Form>
          </section>
        </section>
      </footer>
    </MainLayout>
  )
}

export default HomePage