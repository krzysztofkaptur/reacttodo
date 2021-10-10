import { useContext, useState } from 'react'
import ITodo from '../../interfaces/ITodo'
import { TodosContext } from '../../store/todos-context'

import styles from './Todo.module.css'

const EditTodo: React.FC<{
  title: string
  id: string
  changeMode: () => void
}> = ({ title, id, changeMode }) => {
  const [newTitle, setNewTitle] = useState(title)
  const { updateSingleTodoTitle } = useContext(TodosContext)

  const updateTodoTitle = (id: string, newTitle: string) => {
    updateSingleTodoTitle(id, newTitle)
    changeMode()
  }

  const updateTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTitle(e.target.value)
  }

  return (
    <div>
      <input type="text" value={newTitle} onChange={updateTitle} />
      <button onClick={() => updateTodoTitle(id, newTitle)}>Update</button>
    </div>
  )
}

const Todo: React.FC<{ todo: ITodo }> = ({ todo }) => {
  const { removeTodo, updateCompleted } = useContext(TodosContext)
  const [isEditMode, setEditMode] = useState(false)

  const changeMode = () => {
    setEditMode(!isEditMode)
  }

  const handleCheckboxChange = () => {
    updateCompleted(todo.id)
  }

  return (
    <article className={styles.Todo}>
      <div>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleCheckboxChange}
        />
      </div>
      <div>
        {isEditMode ? (
          <EditTodo title={todo.title} id={todo.id} changeMode={changeMode} />
        ) : (
          <h3 onDoubleClick={changeMode}>{todo.title}</h3>
        )}
      </div>
      <button onClick={() => removeTodo(todo.id)}>Delete</button>
    </article>
  )
}

export default Todo
