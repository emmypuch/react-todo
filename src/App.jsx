import { useEffect } from "react"
import { useState } from "react"
import "./styles.css"
import { TodoForm } from "./TodoForm"
import { TodoList } from "./TodoList"

export default function App() {
  const [todos, setTodos] = useState(() => {
    // Retrieving todos from localStorage when the component mounts
    const localValue = localStorage.getItem('ITEMS')
    if (localValue == null) return []
    return JSON.parse(localValue)
  })

  // Storing Items in localStorage when the todos state changes
  useEffect(() => {
    localStorage.setItem('ITEMS', JSON.stringify(todos))
  }, [todos])

  // Adding Todo lists
  function addTodo(title) {
     setTodos(currentTodos => {
        return [
            ...currentTodos, 
            {id: crypto.randomUUID(), title, completed: false}
        ]
      })
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }

        return todo
      })
    })
  }

  // Deleting Todo Lists
  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
      <TodoForm onSubmit={addTodo}/>
      <h1 className="header">Todo Lists</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </>
  )
}
