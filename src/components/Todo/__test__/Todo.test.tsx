import { render, screen, fireEvent } from '@testing-library/react'
import Todo from '../Todo'

const sampleTodo = {
  id: '123',
  title: 'sample title',
  completed: false
}

describe('Todo', () => {
  // TODO
  // not getting checked
  xit('checks checkbox', () => {
    render(<Todo todo={sampleTodo} />)
    const checkbox = screen.getByRole('checkbox') as HTMLInputElement

    expect(checkbox.checked).toBe(false)
    fireEvent.click(checkbox)
    expect(checkbox.checked).toBe(true)
  })

  // TODO
  // does not delete TODO
  xit('renders delete button', () => {
    render(<Todo todo={sampleTodo} />)
    const buttonEl = screen.getByRole('button')

    fireEvent.click(buttonEl)
    screen.debug()
  })

  it('renders title', () => {
    render(<Todo todo={sampleTodo} />)
    const titleEl = screen.getByText(/sample title/)

    expect(titleEl.textContent).toBe(sampleTodo.title)
  })

  it('updates todo', () => {
    const sampleTitle = 'some title'
    render(<Todo todo={sampleTodo} />)
    const titleEl = screen.getByRole('heading')

    fireEvent.dblClick(titleEl)

    const inputEl = screen.getByTestId('updateInput') as HTMLInputElement
    fireEvent.change(inputEl, { target: { value: sampleTitle } })

    expect(inputEl.value).toBe(sampleTitle)
  })
})
