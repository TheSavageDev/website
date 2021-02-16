import { render } from '@redwoodjs/testing'

import GamesLayout from './GamesLayout'

describe('GamesLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GamesLayout />)
    }).not.toThrow()
  })
})
