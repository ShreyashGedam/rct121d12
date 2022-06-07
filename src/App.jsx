import { useDispatch, useSelector } from "react-redux"
import { Todo } from "./components/todo"
import { incrementCountAction } from "./redux/counter/action"

function App() {

  const count = useSelector( (state) => state.counter.count)
  const dispatch = useDispatch()
 

  return (
    <div >
      <h1>Count : {count}</h1>
      <button onClick={ () => dispatch(incrementCountAction(1))}>Increment</button>
      <button onClick={ () => dispatch(incrementCountAction(-1))}>Decrement</button> 
      <Todo></Todo> 
    </div>
  )
}

export default App
