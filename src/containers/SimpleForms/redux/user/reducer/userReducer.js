import { ADD_USER_ACTION, REMOVE_USER_ACTION } from "../actions/actions"


export const userInitaialState =  {
    list: []
}


export const userReducer = (state = userInitaialState, action) => {
    switch (action.type) {
        // добавление пользователя в список пользователей
        case ADD_USER_ACTION: {
            return {
                ...state,
                list: [
                    ...state.list,
                    action.payload
                ]
            }
        
        }
        // удаление пользователя из списка пользователей методом filter
        case REMOVE_USER_ACTION: {
            return {
                ...state,
                list: state.list.filter(user => user.id !== action.payload)
            };
        }
        default: {
            return state;
        }

    }
}