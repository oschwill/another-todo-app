import { useState } from "react"
import ToDoForm from "./components/ToDoForm"
import ToDoList from "./components/ToDoList"

function App() {
  const [toDos, setToDos] = useState([])
  return (
    <>
      <h1 className="text-4xl">Christian's wichtige Aufgaben</h1>
      <ToDoForm setToDos={setToDos} />
      <ToDoList items={toDos} setToDos={setToDos} />
    </>
  )
}

export default App
