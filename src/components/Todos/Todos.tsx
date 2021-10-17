import { useContext } from 'react'
import { Switch, Route } from 'react-router-dom'

import Todo from '../Todo/Todo'
import { TodosContext } from '../../store/todos-context'

import styles from './Todos.module.css'

const Todos: React.FC = () => {
  const { todos } = useContext(TodosContext)

  const activeTodos = todos.filter(todo => !todo.completed)
  const completed = todos.filter(todo => todo.completed)

  return (
    <Switch>
      <Route path="/" exact>
        <section className={styles.Todos}>
          {todos.map(todo => (
            <Todo todo={todo} key={todo.id} />
          ))}
        </section>
      </Route>
      <Route path="/active">
        <section className={styles.Todos}>
          {activeTodos.map(todo => (
            <Todo todo={todo} key={todo.id} />
          ))}
        </section>
      </Route>
      <Route path="/completed" exact>
        <section className={styles.Todos}>
          {completed.map(todo => (
            <Todo todo={todo} key={todo.id} />
          ))}
        </section>
      </Route>
    </Switch>
  )
}

export default Todos
