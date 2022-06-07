
import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {  getTodo, postTodo, postTodoFailure, postTodoRequest, postTodoSuccess } from "../redux/todos/action"


export const Todoinput = () => {

    const [text,setText] = useState("")

    const dispatch = useDispatch()

    const handleadd = () => {

            const todoRequest = postTodoRequest()
                dispatch(todoRequest)
        
                axios( {
                    url : "http://localhost:8000/todos",
                    method : "POST",
                    data : {
                        name : text,
                        status : false
                    }
                }).then( (res) =>

                    dispatch(getTodo())
                )
    }

    return (
        <div>
            <input type="text" placeholder="Enter Todo"
            onChange={ (e) => setText(e.target.value)}
            ></input>
            <br></br>
            <button onClick={  handleadd}>Add Todo</button>  
        </div>
    )
}