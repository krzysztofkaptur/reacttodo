import { render, screen } from '@testing-library/react'
import Nav from '../Nav'
import { BrowserRouter } from 'react-router-dom'
import { TodosContext } from '../../../store/todos-context'

const sampleValue = {
  todos: [
    {
      id: '1234',
      title: 'test1234',
      completed: false
    }
  ],
  fetchTodos: async () => {},
  addTodo: () => {},
  removeTodo: () => {},
  updateSingleTodoTitle: () => {},
  updateCompleted: () => {},
  updateCompletedAll: () => {},
  removeCompleted: () => {}
}

const MockNav = () => (
  <BrowserRouter>
    <TodosContext.Provider value={sampleValue}>
      <Nav />
    </TodosContext.Provider>
  </BrowserRouter>
)

describe('Nav', () => {
  it('shows how many items are left uncompleted', () => {
    render(<MockNav />)
    const itemsLeftEl = screen.getByText(/1 items left/i)
    expect(itemsLeftEl).toHaveTextContent('1 items left')
  })
})
