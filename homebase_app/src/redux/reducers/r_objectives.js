// IMPROT ACTION TYPES
// -1- // getting objectives
import {
    GET_USER_OBJECTIVES_START,
    GET_USER_OBJECTIVES_SUCCESS,
    GET_USER_OBJECTIVES_FAILURE,
} from '../actions/a_getUserObjectives'

// INITIAL STATE
const initialState = {
    objectives: [],
    error: '',

    is_gettingObjectives: false
}

// REDUCER
export const r_objectives = (state = initialState, action) => {
    switch(action.type) {
        // -1- // GETTING USER OBJECTIVES
            case GET_USER_OBJECTIVES_START: 
                return {
                    ...state,

                    is_gettingObjectives: true,
                    error: ''

                }
            case GET_USER_OBJECTIVES_SUCCESS: 
                return {
                    ...state,

                    is_gettingObjectives: false,
                    objectives: action.payload,
                    error: '',

                }
            case GET_USER_OBJECTIVES_FAILURE: 
                return {
                    ...state,

                    is_gettingObjectives: false,
                    error: 'unable to get Objectives'

                }
            // Default
            default:
                return state;
    }
}