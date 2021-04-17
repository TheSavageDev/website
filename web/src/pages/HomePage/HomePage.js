import { useEffect } from 'react'
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
import headshot from '../../assets/images/headshot.png'
import trendySavages from '../../assets/images/ts.png'
import orthoAthletic from '../../assets/images/orthoathletic.png'
import ftc from '../../assets/images/ftc.png'

const HomePage = () => {
  const onSubmit = (data) => {
    console.log(data)
  }

  const handleScroll = () => {
    if (window.scrollY > 20) {
      document
        .querySelector('#home-nav-header')
        .classList.remove('sm:justify-end')
      document
        .querySelector('#home-nav-header')
        .classList.add('md:justify-center')
    }

    if (window.scrollY < 20) {
      document.querySelector('#home-nav-header').classList.add('sm:justify-end')
      document
        .querySelector('#home-nav-header')
        .classList.remove('md:justify-center')
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  })
  return (
    <MainLayout>
      <main id="home-main" className="w-full m-0 bg-gray-900 text-white">
        <section
          id="home"
          className="relative bg-center bg-no-repeat bg-cover bg-cross w-screen h-screen"
        >
          <section className="bg-overlay w-full h-full flex flex-col justify-center items-center">
            <header>
              <h2 id="title" className="text-4xl font-semibold text-white">
                I am Jason A Savage
              </h2>
            </header>
            <section className="flex flex-wrap justify-between">
              <article className="jobs">
                <span id="catholic" className="text-lg mx-2">
                  Catholic
                </span>
                <span id="father" className="text-lg mx-2">
                  Father
                </span>
                <span id="husband" className="text-lg mx-2">
                  Husband
                </span>
                <span id="se" className="text-lg mx-2">
                  Software Engineer
                </span>
              </article>
            </section>
          </section>
        </section>

        <section className="text-gray-100 body-font mx-auto max-w-screen-xl">
          <section className="container px-5 py-24 mx-auto">
            <article className="flex flex-wrap w-full mb-20">
              <header className="lg:w-1/2 w-full mb-6 lg:mb-0">
                <h2 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-100">
                  Work
                </h2>
                <aside className="h-1 w-20 bg-yellow rounded"></aside>
              </header>
              <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
                Here are some of the projects I have worked on and built. Click
                on the images to visit them.
              </p>
            </article>
            <article className="flex flex-wrap -m-4">
              <article className="xl:w-1/4 md:w-1/2 p-4 ">
                <article className="bg-primary p-6 rounded-xl shadow-lg hover:shadow-2xl">
                  <a
                    href="https://shoptrendysavages.com"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    <img
                      className="h-40 rounded w-full object-cover object-center mb-6"
                      src={trendySavages}
                      alt="Trendy Savages"
                      title="Trendy Savages"
                    />
                  </a>
                  <h3 className="tracking-widest text-yellow text-xs font-medium title-font uppercase">
                    Shopify Website
                  </h3>
                  <h2 className="text-lg text-gray-100 font-medium title-font mb-4">
                    Trendy Savages
                  </h2>
                  <p className="leading-relaxed text-base">Test</p>
                </article>
              </article>
              <article className="xl:w-1/4 md:w-1/2 p-4">
                <article className="bg-primary p-6 rounded-xl shadow-lg hover:shadow-2xl">
                  <a
                    href="https://www.orthoathleticedu.com/"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    <img
                      className="h-40 rounded w-full object-cover object-center mb-6"
                      src={orthoAthletic}
                      alt="OrthoAthletic Education, LLC"
                      title="OrthoAthletic Education, LLC"
                    />
                  </a>
                  <h3 className="tracking-widest text-yellow text-xs font-medium title-font uppercase">
                    WordPress Website
                  </h3>
                  <h2 className="text-lg text-gray-100 font-medium title-font mb-4">
                    OrthoAthletic Education
                  </h2>
                  <p className="leading-relaxed text-base">Test</p>
                </article>
              </article>
              <article className="xl:w-1/4 md:w-1/2 p-4">
                <article className="bg-primary p-6 rounded-xl shadow-lg hover:shadow-2xl">
                  <a
                    href="https://foldawaytrailer.com/"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    <img
                      className="h-40 rounded w-full object-cover object-center mb-6"
                      src={ftc}
                      alt="Foldaway Trailer Company"
                      title="Foldaway Trailer Company"
                    />
                  </a>
                  <h3 className="tracking-widest text-yellow text-xs font-medium title-font uppercase">
                    Gatsby Website
                  </h3>
                  <h2 className="text-lg text-gray-100 font-medium title-font mb-4">
                    Foldaway Trailer Company
                  </h2>
                  <p className="leading-relaxed text-base">Test</p>
                </article>
              </article>
            </article>
          </section>
        </section>

        <section className="flex flex-wrap items-center justify-center lg:flex-col">
          <section
            id="services"
            className="p-5 max-h-full my-5 w-full rounded-xl transition-all duration-200 md:w-3/4 md:mx-auto lg:w-9/12"
          >
            <header className="mb-5">
              <h2 className="text-2xl">Services</h2>
              <hr />
            </header>
            <section className="flex flex-wrap justify-between md:flex-nowrap">
              <article className="my-1 text-white p-5 bg-primary mx-5 rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl">
                <header>
                  <h3 className="text-2xl underline my-2 text-center">
                    Research
                  </h3>
                </header>
                <p>
                  I can preform and provide a presentation for the most
                  affordable and most recommended platforms to use for your
                  business. For example, if you wanted to build a storefront
                  with a blog along side it I would research options and provide
                  you a detailed report on what is the most affordable (up front
                  and over time) and what I would most recommend. Please see my
                  works page for an example of a report and presentation.
                </p>
              </article>
              <article className="my-1 text-white p-5 bg-primary mx-5 rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl">
                <header>
                  <h3 className="text-2xl underline my-2 text-center">
                    Develop
                  </h3>
                </header>
                <p>
                  I am available for part-time project work at an hourly rate. I
                  would especially be interested in a Catholic or other
                  Christian organization&apos;s website or any Veteran related
                  website. These preferred projects would be at a steeply
                  reduced rate. Please see my works page for examples.
                </p>
              </article>
              <article className="my-1 text-white p-5 bg-primary mx-5 rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl">
                <header>
                  <h3 className="text-2xl underline my-2 text-center">
                    WordPress, Shopify, Gatsby
                  </h3>
                </header>
                <p>
                  I can build your business presence with WordPress or provide
                  alternatives that could cost you considerably less. I accept
                  these contracts at a very selective rate and will only provide
                  administration for these sites with very select circumstances.
                  I will provide training and documentation for you to easily
                  administrate or to provide to an employee to handle it. Please
                  see my works page for examples of sites I&apos;ve worked on.
                </p>
              </article>
            </section>
          </section>
        </section>
      </main>

      <footer className="w-full bg-gray-900 text-white flex flex-col">
        <div className="relative mt-16 bg-yellow">
          <svg
            className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-yellow"
            preserveAspectRatio="none"
            viewBox="0 0 1440 54"
          >
            <path
              fill="currentColor"
              d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
            />
          </svg>
          <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-5">
              <section className="md:max-w-md lg:col-span-2 rounded-xl w-full p-8 sm:flex sm:space-x-6 text-gray-100">
                <aside className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
                  <img
                    src={headshot}
                    alt=""
                    className="object-cover object-center w-full h-full rounded-xl"
                  />
                </aside>
                <article className="flex flex-col space-y-4">
                  <header>
                    <h2 className="text-2xl font-semibold">Jason A Savage</h2>
                    <span className="text-sm text-gray-400">
                      Savage Webmancer
                    </span>
                  </header>
                  <article className="space-y-1">
                    <span className="flex items-center space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        aria-label="Email address"
                        className="w-4 h-4"
                      >
                        <path
                          fill="currentColor"
                          d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"
                        ></path>
                      </svg>
                      <a
                        href="mailto:jason@thesavage.dev"
                        className="text-white"
                      >
                        jason@thesavage.dev
                      </a>
                    </span>
                    <span className="flex items-center space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        aria-label="Location Pin"
                        className="w-4 h-4"
                        fill="#fff"
                      >
                        <path d="M256,0C156.748,0,76,80.748,76,180c0,33.534,9.289,66.26,26.869,94.652l142.885,230.257 c2.737,4.411,7.559,7.091,12.745,7.091c0.04,0,0.079,0,0.119,0c5.231-0.041,10.063-2.804,12.75-7.292L410.611,272.22 C427.221,244.428,436,212.539,436,180C436,80.748,355.252,0,256,0z M384.866,256.818L258.272,468.186l-129.905-209.34 C113.734,235.214,105.8,207.95,105.8,180c0-82.71,67.49-150.2,150.2-150.2S406.1,97.29,406.1,180 C406.1,207.121,398.689,233.688,384.866,256.818z" />
                        <path d="M256,90c-49.626,0-90,40.374-90,90c0,49.309,39.717,90,90,90c50.903,0,90-41.233,90-90C346,130.374,305.626,90,256,90z M256,240.2c-33.257,0-60.2-27.033-60.2-60.2c0-33.084,27.116-60.2,60.2-60.2s60.1,27.116,60.1,60.2 C316.1,212.683,289.784,240.2,256,240.2z" />
                      </svg>

                      <a
                        href="https://en.wikipedia.org/wiki/Kansas"
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="text-white"
                      >
                        Kansas, USA
                      </a>
                    </span>
                  </article>
                </article>
              </section>
              <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-3 md:grid-cols-3">
                <div>
                  <p className="font-bold tracking-wide text-brick">Projects</p>
                  <ul className="mt-2 space-y-2">
                    <li>
                      <a
                        href="/"
                        className="transition-colors duration-300 text-gray-300 hover:text-brick"
                      >
                        Trendy Savages
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="transition-colors duration-300 text-gray-300 hover:text-brick"
                      >
                        OrthoAthletic
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="transition-colors duration-300 text-gray-300 hover:text-brick"
                      >
                        Foldaway Tailer Company
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="font-bold tracking-wide text-brick">Services</p>
                  <ul className="mt-2 space-y-2">
                    <li>
                      <a
                        href="/"
                        className="transition-colors duration-300 text-gray-300 hover:text-brick"
                      >
                        Research
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="transition-colors duration-300 text-gray-300 hover:text-brick"
                      >
                        Develop
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="transition-colors duration-300 text-gray-300 hover:text-brick"
                      >
                        WordPress, Shopify, Gatsby
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="font-bold tracking-wide text-brick">Games</p>
                  <ul className="mt-2 space-y-2">
                    <li>
                      <a
                        href="/"
                        className="transition-colors duration-300 text-gray-300 hover:text-brick"
                      >
                        Tic-Tac-Toe
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="transition-colors duration-300 text-gray-300 hover:text-brick"
                      >
                        Rock Paper Scissors
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="transition-colors duration-300 text-gray-300 hover:text-brick"
                      >
                        Memory Game
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="transition-colors duration-300 text-gray-300 hover:text-brick"
                      >
                        Snake
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between pt-5 pb-10 border-t-2 border-primary sm:flex-row">
              <small className="text-sm text-gray-100">
                &copy; The Savage Dev 2021. Made with Redwoodjs and TailwindCSS
              </small>
              <div className="flex items-center mt-4 space-x-4 sm:mt-0">
                <a
                  href="/"
                  className="transition-colors duration-300 text-gray-300 hover:text-brick"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                    <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                  </svg>
                </a>
                <a
                  href="/"
                  className="transition-colors duration-300 text-gray-300 hover:text-brick"
                >
                  <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                    <circle cx="15" cy="15" r="4" />
                    <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
                  </svg>
                </a>
                <a
                  href="/"
                  className="transition-colors duration-300 text-gray-300 hover:text-brick"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                    <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </MainLayout>
  )
}

export default HomePage
