import { useState } from 'react'
import GamesLayout from 'src/layouts/GamesLayout/GamesLayout'

const WINNING_CONDITIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]

const TicTacToePage = () => {
  const Square = ({ value, onClick }) => (
    <button
      onClick={onClick}
      className="cursor-pointer outline-none bg-brand-translucent border-4 font-semibold text-6xl border-accent-dark"
    >
      {value}
    </button>
  )

  const calculateWinner = (squares) => {
    for (let i = 0; i < WINNING_CONDITIONS.length; i++) {
      const [a, b, c] = WINNING_CONDITIONS[i]
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a]
      }
      return
    }
  }

  const [board, setBoard] = useState(Array(9).fill(null))
  const [xIsNext, setXisNext] = useState(true)
  const winner = calculateWinner(board)

  const boardStyle = {
    width: '25rem',
    height: '25rem',
    gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)',
  }

  const Board = ({ squares, onClick }) => (
    <article
      style={boardStyle}
      className="rounded-xl grid mx-auto border-white"
    >
      {squares.map((square, i) => (
        <Square key={i} value={square} onClick={() => onClick(i)} />
      ))}
    </article>
  )

  const handleClick = (i) => {
    const boardCopy = [...board]

    if (winner || boardCopy[i]) return
    boardCopy[i] = xIsNext ? 'X' : 'O'
    setBoard(boardCopy)
    setXisNext(!xIsNext)
  }

  const resetBoard = () => {
    setBoard(Array(9).fill(null))
    setXisNext(true)
  }
  return (
    <GamesLayout>
      <main className="mt-28 flex justify-center items-center flex-col">
        <h1 className="text-5xl text-center mb-5">Tic-Tac-Toe</h1>
        <Board squares={board} onClick={handleClick} />
        <p className="text-2xl mt-2">
          {winner ? `Winner ${winner}` : `Next Player: ${xIsNext ? 'X' : 'O'}`}
        </p>
        <button
          className="rounded-xl bg-brand text-accent-dark p-5 mt-5 text-xl font-semibold hover:text-brand hover:bg-accent-dark"
          onClick={resetBoard}
        >
          Reset Board
        </button>
      </main>
    </GamesLayout>
  )
}

export default TicTacToePage
