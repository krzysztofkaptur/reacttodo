import ITodo from './ITodo'

export default interface ITodosContextObject {
  todos: ITodo[]
  addTodo: (todo: ITodo) => void
  removeTodo: (id: string) => void
  updateSingleTodo: (id: string, newTitle: string) => void
  updateCompleted: (id: string) => void
  updateCompletedAll: (value: boolean) => void
  removeCompleted: () => void
}
