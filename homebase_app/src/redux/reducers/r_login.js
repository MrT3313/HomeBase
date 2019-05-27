// IMPORT ACTION TYPES
    // import {
    //     LOGIN_START, 
    //     LOGIN_SUCCESS, 
    //     LOGIN_FAILURE, 
// 
    // } from './'


// INITIAL STATE
    const initialState = {
        currentUserID: undefined,
        
        is_LoggingIn: false,
        error: ''

    }

// REDUCER
export const r_login = (state = initialState, action) => {
    switch(action.type) {
        // LOGIN
        case LOGIN_START:
            return {
                ...state

            }
        case LOGIN_SUCCESS:
            return {
                ...state

            }
        case LOGIN_FAILURE:
            return {
                ...state
                
            }
        default:
            return state

    }
}