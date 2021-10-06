import { createContext, useState } from 'react'

import ITodosContextObject from '../interfaces/ITodosContextObject'
import ITodo from '../interfaces/ITodo'

export const TodosContext = createContext<ITodosContextObject>({
  todos: [],
  addTodo: () => {},
  removeTodo: () => {},
  updateSingleTodo: () => {},
  updateCompleted: () => {},
  updateCompletedAll: () => {},
  removeCompleted: () => {}
})

export const TodosContextProvider: React.FC<{ children: React.ReactNode }> =
  props => {
    const [todos, setTodos] = useState<ITodo[] | []>([])

    const addTodo = (newTodo: ITodo) => {
      setTodos([...todos, newTodo])
    }

    const removeTodo = (id: string) => {
      const filteredTodos = todos.filter(todo => todo.id !== id)
      setTodos(filteredTodos)
    }

    const updateSingleTodo = (id: string, newTitle: string) => {
      const updatedTodos = todos.map(todo =>
        todo.id === id ? { ...todo, title: newTitle } : todo
      )
      setTodos(updatedTodos)
    }

    const updateCompleted = (id: string) => {
      const updatedTodos = todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
      setTodos(updatedTodos)
    }

    const updateCompletedAll = (value: boolean) => {
      const updatedTodos = todos.map(todo => ({ ...todo, completed: value }))
      setTodos(updatedTodos)
    }

    const removeCompleted = () => {
      const updatedTodos = todos.filter(todo => !todo.completed)
      setTodos(updatedTodos)
    }

    const sampleContextValue = {
      todos,
      addTodo,
      removeTodo,
      updateSingleTodo,
      updateCompleted,
      updateCompletedAll,
      removeCompleted
    }

    return (
      <TodosContext.Provider value={sampleContextValue}>
        {props.children}
      </TodosContext.Provider>
    )
  }
