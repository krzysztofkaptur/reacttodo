import { setupWorker, rest } from 'msw'

import ITodo from './interfaces/ITodo'

interface TodoBody {
  newTodo: {
    id: string
    title: string
    completed: boolean
  }
}

interface Title {
  newTitle: string
}

interface Completed {
  completed: boolean
}

let sampleTodos: ITodo[] = [
  {
    id: '111',
    title: 'dupa',
    completed: false
  }
]

export const worker = setupWorker(
  rest.get('/api', (req, res, ctx) => {
    console.log('/api')
    return res(ctx.json(sampleTodos))
  }),

  rest.post<TodoBody>('/api/add/', (req, res, ctx) => {
    console.log('/api/add/')
    const { newTodo } = req.body

    sampleTodos = [...sampleTodos, newTodo]
    return res(ctx.json(sampleTodos))
  }),

  rest.delete('/api/delete/:id', (req, res, ctx) => {
    console.log('/api/delete/:id')
    const { id } = req.params

    sampleTodos = sampleTodos.filter(item => item.id !== id)
    return res(ctx.json(sampleTodos))
  }),

  rest.patch<Title>('/api/edit/:id', (req, res, ctx) => {
    console.log('/api/edit/:id')
    const { newTitle } = req.body
    const { id } = req.params

    sampleTodos = sampleTodos.map(item =>
      item.id === id ? { ...item, title: newTitle } : item
    )
    return res(ctx.json(sampleTodos))
  }),

  rest.patch('/api/edit/completed/:id', (req, res, ctx) => {
    console.log('/api/edit/completed/:id')
    const { id } = req.params

    sampleTodos = sampleTodos.map(item =>
      item.id === id ? { ...item, completed: !item.completed } : item
    )
    return res(ctx.json(sampleTodos))
  }),

  rest.patch<Completed>('/api/edit-all', (req, res, ctx) => {
    const { completed } = req.body
    sampleTodos = sampleTodos.map(item => ({ ...item, completed }))

    return res(ctx.json(sampleTodos))
  }),

  rest.delete('/api/delete-completed', (req, res, ctx) => {
    sampleTodos = sampleTodos.filter(item => !item.completed)

    return res(ctx.json(sampleTodos))
  })
)
