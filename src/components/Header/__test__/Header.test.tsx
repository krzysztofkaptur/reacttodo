import { render, screen } from '@testing-library/react'
import Header from '../Header'

describe('Header', () => {
  it('shows title', () => {
    const sampleTitle = 'sample title'
    render(<Header title={sampleTitle} />)
    const titleEl = screen.getByText(sampleTitle)
    expect(titleEl).toHaveTextContent(sampleTitle)
  })
})
