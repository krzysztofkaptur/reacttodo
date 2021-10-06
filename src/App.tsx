import { BrowserRouter as Router } from 'react-router-dom'

import Header from './components/Header/Header'
import Todos from './components/Todos/Todos'
import Form from './components/Form/Form'
import Nav from './components/Nav/Nav'

import { TodosContextProvider } from './store/todos-context'

import './App.css'

const App: React.FC = () => {
  return (
    <TodosContextProvider>
      <Router>
        <div className="App">
          <Header title="todos" />
          <Form />
          <Todos />
        </div>
        <Nav />
      </Router>
    </TodosContextProvider>
  )
}

export default App
