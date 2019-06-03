// IMPORT ACTION TYPES 
// -1- // getting todos

import {
    GET_USER_TODOS_START,
    GET_USER_TODOS_SUCCESS,
    GET_USER_TODOS_FAILURE,
} from '../actions/a_getUserTodos'

// INITIAL STATE
const initialState = {
    todos: [],
    error: '',

    is_gettingUserTodos: false
}

// REDUCER
export const r_todos = (state = initialState, action) => {
    switch(action.type) {
        // -1- // GETTING USER OBJECTS
            case GET_USER_TODOS_START:
                return {
                    ...state,
                    
                    is_gettingUserTodos: true, 
                    error: '',
                }
            case GET_USER_TODOS_SUCCESS:
                return {
                    ...state,

                    is_gettingUserTodos: false,
                    todos: action.payload,  
                    error: '',
                }
            case GET_USER_TODOS_FAILURE:
                return {
                    ...state,

                    is_gettingUserTodos: false, 
                    error: 'unable to get user todos',
                }
            // Default
            default:
                return state;
    }
}