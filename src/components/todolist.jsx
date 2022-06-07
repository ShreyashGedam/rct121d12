import { useSelector } from "react-redux"

export const Todolistme = () => {

    const todos = useSelector( (state) => state.todos.todos )

    // console.log(todos)

    return (
        <div>
            <h3>Todos</h3>
            {todos.map( (item) => (
                <div key={item.id}>{item.name}</div>
                ))}
        </div>
    )

}