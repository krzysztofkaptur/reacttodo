import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { TodosContext } from '../../store/todos-context'

import styles from './Nav.module.css'

const Nav: React.FC = () => {
  const { todos, removeCompleted } = useContext(TodosContext)
  const leftTodos = todos.filter(todo => !todo.completed).length

  return (
    <nav className={styles.Nav}>
      <section>
        <div>{leftTodos} items left</div>
        <NavLink to="/" exact>
          All
        </NavLink>
        <NavLink to="/active">Active</NavLink>
        <NavLink to="/completed">Completed</NavLink>
        <button onClick={removeCompleted}>Clear completed</button>
      </section>
    </nav>
  )
}

export default Nav
