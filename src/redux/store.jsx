import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./auth/auth";
import { counterReducer } from "./counter/reducer";
import { todoReducer } from "./todos/reducer";



const rootReducer = combineReducers({
    counter : counterReducer,
    todos : todoReducer,
    auth : authReducer
})

function logger({ getState }) {
    return next => action => {
      console.log('will dispatch', action)
  
      // Call the next dispatch method in the middleware chain.
      const returnValue = next(action)
  
      console.log('state after dispatch', getState())
  
      // This will likely be the action itself, unless
      // a middleware further in chain changed it.
      return returnValue
    }
  }

  function logger2({ getState }) {
    return next => action => {
      console.log('will dispatch logger 2', action)
  
      // Call the next dispatch method in the middleware chain.
      const returnValue = next(action)
  
      console.log('state after dispatch logger 2', getState())
  
      // This will likely be the action itself, unless
      // a middleware further in chain changed it.
      return returnValue
    }
  }

  const myCustomThunk = ({dispatch,getState}) => next => action => {
      if(typeof action === 'function'){
          return action(dispatch , getState )
      }

      return next(action)
  }

// export const store = createStore(rootReducer,
//     applyMiddleware(thunk,logger,logger2)
//     // +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() )
// )

export const store = createStore(rootReducer,
    applyMiddleware(myCustomThunk,logger,logger2)
    // +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() )
)

console.log("state" , store.getState())

