import { ADD_NUM, ADD, SUB } from "./actions/actionsType"


const initialState = {
    counter: 12
}

export const rootReducer = (state=initialState,action)=> {
    switch (action.type) {
        case ADD:
            return {
                ...state,
                counter: state.counter+1
            }
        case SUB:
            return {
                ...state,
                counter: state.counter-1
            }
        case ADD_NUM:
            return {
                ...state,
                counter: state.counter + Number(action.payload)
            }
        
        default:
            return state
    }
         
}