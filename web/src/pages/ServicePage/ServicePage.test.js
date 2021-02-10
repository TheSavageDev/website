import { render } from '@redwoodjs/testing'

import ServicePage from './ServicePage'

describe('ServicePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ServicePage />)
    }).not.toThrow()
  })
})
