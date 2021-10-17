import { render, screen } from '@testing-library/react'
import Todos from '../Todos'
import { BrowserRouter } from 'react-router-dom'
import { TodosContext } from '../../../store/todos-context'

// TODO
// removes todo
// renders completed todos
// renders active todos

const sampleValue = {
  todos: [
    {
      id: '1234',
      title: 'test1234',
      completed: false
    },
    {
      id: '12345',
      title: 'test12345',
      completed: true
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
      <Todos />
    </TodosContext.Provider>
  </BrowserRouter>
)

describe('Todos', () => {
  it('renders all todos', async () => {
    render(<MockNav />)
    const todoElements = await screen.findAllByTestId('todo')

    expect(todoElements.length).toBe(sampleValue.todos.length)
  })
})
