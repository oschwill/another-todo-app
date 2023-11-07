import { useState } from 'react';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';

function App() {
  const [toDos, setToDos] = useState([]);
  return (
    <>
      <main className="bg-green-100 h-screen">
        <h1 className="text-4xl">Christian&apos;s wichtige Aufgaben</h1>
        <ToDoForm setToDos={setToDos} />
        <ToDoList items={toDos} setToDos={setToDos} />
      </main>
    </>
  );
}

export default App;
