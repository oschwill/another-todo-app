import ToDoItem from "./ToDoItem";

export default function ToDoList(props) {
    return (
        <section className="flex flex-col items-center w-full gap-5 ">
            {props.items?.map((item, key) => <ToDoItem todo={item} key={key + item.task} setToDos={props.setToDos} />)}
        </section>
    )
}