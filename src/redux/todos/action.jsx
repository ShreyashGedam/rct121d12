import axios from "axios"

export const todoActions = {
    GET_TODO_REQUEST : "GET_TODO_REQUEST",
    GET_TODO_SUCCESS : "GET_TODO_SUCCESS",
    GET_TODO_FAILURE : "GET_TODO_FAILURE",
    POST_TODO_REQUEST : "POST_TODO_REQUEST",
    POST_TODO_SUCCESS : "POST_TODO_SUCCESS",
    POST_TODO_FAILURE : "POST_TODO_FAILURE"
}

export const getTodoRequest = () => ({
    type : todoActions.GET_TODO_REQUEST
})

export const getTodoSuccess = (data) => ({
    type : todoActions.GET_TODO_SUCCESS,
    payload : data
})

export const getTodoFailure = () => ({
    type : todoActions.GET_TODO_FAILURE
})

export const getTodo = () => (dispatch, getState ) => {

    const todoRequest = getTodoRequest()
        dispatch(todoRequest)
        console.log("Token is", getState().auth.token )

        axios( {
            url : "http://localhost:8000/todos",
            method : "GET"
        })
        .then( (res) => {
            const todoSucess = getTodoSuccess(res.data)  
            // console.log(res.data)
            dispatch(todoSucess)
        })
        .catch( (err) => {
            const todoError = getTodoFailure()
            dispatch(todoError)
        })

}


export const postTodoRequest = () => ({
    type : todoActions.GET_TODO_REQUEST
})

export const postTodoSuccess = (data) => ({
    type : todoActions.GET_TODO_SUCCESS,
    payload : data
})

export const postTodoFailure = () => ({
    type : todoActions.GET_TODO_FAILURE
})


export const postTodo = ({title,dispatch}) => {

    const todoRequest = postTodoRequest()
        dispatch(todoRequest)

        axios( {
            url : "http://localhost:8000/todos",
            method : "POST",
            data : {
                title,
                status : false
            }
        })
        .then( (res) => {
            const todoSucess = postTodoSuccess(res)  
            console.log(res)
            dispatch(todoSucess)
        })
        .catch( (err) => {
            const todoError = postTodoFailure()
            dispatch(todoError)
        })

}



