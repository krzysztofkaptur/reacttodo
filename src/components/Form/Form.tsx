import { useContext, useState } from 'react'
import { TodosContext } from '../../store/todos-context'
import { v4 as uuidv4 } from 'uuid'

const Form: React.FC = () => {
  const { addTodo, updateCompletedAll } = useContext(TodosContext)
  const [newTodo, createNewTodo] = useState('')
  const [isCheckedAll, setCheckedAll] = useState(false)

  const createAnotherTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    addTodo({
      id: uuidv4(),
      title: newTodo,
      completed: false
    })

    clearValue()
  }

  const updateValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    createNewTodo(e.currentTarget.value)
  }

  const clearValue = () => createNewTodo('')

  const handleCheckedAll = () => {
    setCheckedAll(!isCheckedAll)
    updateCompletedAll(!isCheckedAll)
  }

  return (
    <form onSubmit={createAnotherTodo}>
      <div>
        <input
          role="checkbox"
          type="checkbox"
          checked={isCheckedAll}
          onChange={handleCheckedAll}
        />
        <label htmlFor="">Title:</label>
        <input
          role="search"
          type="text"
          value={newTodo}
          onChange={updateValue}
        />
      </div>
      <button type="submit">Click</button>
    </form>
  )
}

export default Form
