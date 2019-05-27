// IMPORT ACTION TYPES
    import {
        LOGIN_START, 
        LOGIN_SUCCESS, 
        LOGIN_FAILURE, 

    } from '../actions/a_login'


// INITIAL STATE
    const initialState = {
        currentUserID: 1,
        
        is_LoggingIn: false,
        error: ''

    }

// REDUCER
export const r_login = (state = initialState, action) => {
    switch(action.type) {
        // LOGIN
        case LOGIN_START:
            return {
                ...state,

                is_LoggingIn: true,
                error: ''

            }
        case LOGIN_SUCCESS:
            return {
                ...state,

                // REAL VERSION
                    // take data off action.payload
                
                // FAKE VERSION
                    // currentUserID: 1,

                is_LoggingIn: false,
                error:''

            }
        case LOGIN_FAILURE:
            return {
                ...state,

                is_LoggingIn: false,
                error: 'LOGIN FAILURE'
                
            }
        default:
            return state

    }
}