import { useState } from "react"
import ToDoForm from "./components/ToDoForm"
import ToDoList from "./components/ToDoList"

function App() {
  const [toDos, setToDos] = useState([])
  return (
    <>
      <ToDoForm setToDos={setToDos} />
      <ToDoList items={toDos} setToDos={setToDos} />
    </>
  )
}

export default App
