import { useState } from "react"
export default function ToDoItem({ todo, setToDos }) {
    const [done, setDone] = useState(todo.done)
    function changeDone() {
        todo.done = !todo.done
        setDone(todo.done)
    }

    function deleteTodo() {
        setToDos(prev => {
            return prev.filter(item => item.task !== todo.task)
        })
    }
    return (
        <section onClick={changeDone} className={" w-4/12 min-h-2/12 bg-purple-400 text-white font-mono text-2xl " + (todo.done ? 'line-through' : '')}>
            <p className="text-center inline">{todo.task}</p>
            {done &&
                <button onClick={deleteTodo} className="bg-red-500 color-white rounded-lg inline-block ">X</button>
            }
        </section>
    )
}