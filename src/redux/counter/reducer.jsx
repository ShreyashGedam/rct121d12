import { appActions} from "./action"

const initState = {
    count : 0
}

export const counterReducer = (state = initState , action) => {
    switch(action.type) {
        case appActions.INCREMENT_COUNT :
            return {
                ...state,
                count : state.count + action.payload
            }
            
            case appActions.DECREMENT_COUNT : 
            return {
                ...state,
                count : state.count -1
            }

            default : 
            return state
    }
}