import { createContext, useState, useEffect } from 'react'
import axios from 'axios'

import ITodosContextObject from '../interfaces/ITodosContextObject'
import ITodo from '../interfaces/ITodo'

export const TodosContext = createContext<ITodosContextObject>({
  todos: [],
  fetchTodos: async () => {},
  addTodo: () => {},
  removeTodo: () => {},
  updateSingleTodoTitle: () => {},
  updateCompleted: () => {},
  updateCompletedAll: () => {},
  removeCompleted: () => {}
})

export const TodosContextProvider: React.FC<{ children: React.ReactNode }> =
  props => {
    const [todos, setTodos] = useState<ITodo[] | []>([])

    const fetchTodos = async () => {
      let newValue: any
      try {
        const newValueData = await axios.get('/api')
        newValue = newValueData.data
      } catch (err) {
        newValue = []
      }

      setTodos(newValue)
    }

    const addTodo = async (newTodo: ITodo) => {
      let newValue: any
      try {
        const newValueData = await axios.post('/api/add/', { newTodo })
        newValue = newValueData.data
      } catch (err) {
        newValue = []
      }

      setTodos(newValue)
    }

    const removeTodo = async (id: string) => {
      let newValue: any
      try {
        const newValueData = await axios.delete(`/api/delete/${id}`)
        newValue = newValueData.data
      } catch (err) {
        newValue = []
      }

      setTodos(newValue)
    }

    const updateSingleTodoTitle = async (id: string, newTitle: string) => {
      let newValue: any
      try {
        const newValueData = await axios.patch(`/api/edit/${id}`, { newTitle })
        newValue = newValueData.data
      } catch (err) {
        newValue = []
      }

      setTodos(newValue)
    }

    const updateCompleted = async (id: string) => {
      let newValue: any
      try {
        const newValueData = await axios.patch(`/api/edit/completed/${id}`)
        newValue = newValueData.data
      } catch (err) {
        newValue = []
      }

      setTodos(newValue)
    }

    const updateCompletedAll = async (value: boolean) => {
      let newValue: any
      try {
        const newValueData = await axios.patch('/api/edit-all', {
          completed: value
        })
        newValue = newValueData.data
      } catch (err) {
        newValue = []
      }

      setTodos(newValue)
    }

    const removeCompleted = async () => {
      let newValue: any
      try {
        const newValueData = await axios.delete('/api/delete-completed')
        newValue = newValueData.data
      } catch (err) {
        newValue = []
      }

      setTodos(newValue)
    }

    const sampleContextValue = {
      todos,
      fetchTodos,
      addTodo,
      removeTodo,
      updateSingleTodoTitle,
      updateCompleted,
      updateCompletedAll,
      removeCompleted
    }

    useEffect(() => {
      fetchTodos()
    }, [])

    return (
      <TodosContext.Provider value={sampleContextValue}>
        {props.children}
      </TodosContext.Provider>
    )
  }
