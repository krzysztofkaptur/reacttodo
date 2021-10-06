import { v4 as uuidv4 } from 'uuid'
import { setupWorker, rest } from 'msw'

import ITodo from './interfaces/ITodo'

const sampleTodos: ITodo[] = [
  {
    id: uuidv4(),
    title: 'Sample title',
    completed: false
  }
]

const worker = setupWorker(
  rest.get('/', (req, res, ctx) => {
    return res(ctx.json(sampleTodos))
  })
)

worker.start()
