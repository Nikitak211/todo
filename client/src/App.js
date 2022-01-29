import { useEffect, useState } from 'react'
import axios from "axios";

import CreateTodo from "./components/CreateTodo/CreateTodo";
import Todos from "./components/Todos/Todos";

import './index.css'

const App = () => {
  const [todos, setTodos] = useState([])
  const [success, setSuccess] = useState()

  useEffect(() => {
    axios.get("/todo").then(response => {
      const data = response.data
      setTodos(data.reverse())
      setSuccess()
    })
  }, [success])

  return (
    <div className="App">
      <div className="Todo">
        <CreateTodo setSuccess={setSuccess} />
      </div>
      <div className="Todos">
        {todos.map((todo) => {
          return <Todos key={todo.time} setSuccess={setSuccess} todo={todo} />
        })}
      </div>
    </div>
  );
}

export default App;
