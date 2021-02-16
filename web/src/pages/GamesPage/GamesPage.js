import { Link, routes } from '@redwoodjs/router'
import GamesLayout from 'src/layouts/GamesLayout/GamesLayout'

const GamesPage = () => {
  return (
    <GamesLayout>
      <main className="mt-28 mb-5 p-5 w-full rounded-xl bg-brand-dark m-h-full md:w-3/4 md:mx-auto lg:w-2/3">
        <header>
          <h2 className="text-2xl">Games</h2>
          <p className="text-xl">Some games and stuff I&apos;ve made</p>
          <hr className="border-accent-dark w-20" />
        </header>
        <section className="flex flex-wrap justify-between flex-shrink-0">
          <Link
            to={routes.ticTacToe()}
            className="p-5 bg-accent-dark rounded-xl m-5 hover:bg-brand"
          >
            Tic-Tac-Toe
          </Link>
          <article className="p-5 bg-accent-dark rounded-xl m-5 opacity-50 hover:bg-brand">
            Rock Paper Scissors
          </article>
          <article className="p-5 bg-accent-dark rounded-xl m-5 opacity-50 hover:bg-brand">
            Memory Game
          </article>
          <article className="p-5 bg-accent-dark rounded-xl m-5 opacity-50 hover:bg-brand">
            Whack-a-Mole
          </article>
          <article className="p-5 bg-accent-dark rounded-xl m-5 opacity-50 hover:bg-brand">
            Snake
          </article>
          <article className="p-5 bg-accent-dark rounded-xl m-5 opacity-50 hover:bg-brand">
            Connect Four
          </article>
          <article className="p-5 bg-accent-dark rounded-xl m-5 opacity-50 hover:bg-brand">
            Frog Hopper
          </article>
        </section>
      </main>
    </GamesLayout>
  )
}

export default GamesPage
