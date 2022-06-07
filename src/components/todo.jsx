import axios from "axios"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getTodo, getTodoFailure, getTodoRequest, getTodoSuccess } from "../redux/todos/action"
import { Todoinput } from "./todoinput"
import { Todolistme } from "./todolist"

export const Todo = () => {
    
    const dispatch = useDispatch()
    const token = useSelector(state => state.auth.token)
 
    useEffect( () => {
        
        // getTodo(dispatch,token)
        dispatch(getTodo())

    },[])

    return (
        <div>
            <Todoinput></Todoinput>
            <br></br>
            <Todolistme></Todolistme>
        </div>
    )
}

