import { render } from '@redwoodjs/testing'

import TicTacToePage from './TicTacToePage'

describe('TicTacToePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TicTacToePage />)
    }).not.toThrow()
  })
})
