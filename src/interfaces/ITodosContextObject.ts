import ITodo from './ITodo'

export default interface ITodosContextObject {
  todos: ITodo[]
  fetchTodos: () => Promise<void>
  addTodo: (todo: ITodo) => void
  removeTodo: (id: string) => void
  updateSingleTodoTitle: (id: string, newTitle: string) => void
  updateCompleted: (id: string) => void
  updateCompletedAll: (value: boolean) => void
  removeCompleted: () => void
}
