import { render, screen, fireEvent } from '@testing-library/react'
import Form from '../Form'

describe('Form', () => {
  it('should change search value', () => {
    const sampleText = 'test'
    render(<Form />)

    const inputSearch = screen.getByRole('search') as HTMLInputElement

    expect(inputSearch.value).toBe('')

    fireEvent.change(inputSearch, { target: { value: sampleText } })

    expect(inputSearch.value).toBe(sampleText)
  })

  it('checkes checkbox', () => {
    render(<Form />)

    const checkbox = screen.getByRole('checkbox') as HTMLInputElement
    expect(checkbox.checked).toBe(false)

    fireEvent.click(checkbox)

    expect(checkbox.checked).toBe(true)
  })
})
