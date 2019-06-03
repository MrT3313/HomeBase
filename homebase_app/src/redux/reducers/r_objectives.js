// IMPORT ACTION TYPES
// -1- // getting objectives
import {
    GET_USER_OBJECTIVES_START,
    GET_USER_OBJECTIVES_SUCCESS,
    GET_USER_OBJECTIVES_FAILURE,
} from '../actions/a_getUserObjectives'

// -2- // adding objective
import {
    ADD_OBJECTIVE_START,
    ADD_OBJECTIVE_SUCCESS,
    ADD_OBJECTIVE_FAILURE,
} from '../actions/a_addObjective'

// INITIAL STATE
const initialState = {
    objectives: [],
    error: '',

    is_gettingUserObjectives: false,
    is_addingObjective: false,
}

// REDUCER
export const r_objectives = (state = initialState, action) => {
    switch(action.type) {
        // -1- // GETTING USER OBJECTIVES
            case GET_USER_OBJECTIVES_START: 
                return {
                    ...state,

                    is_gettingUserObjectives: true,
                    error: ''

                }
            case GET_USER_OBJECTIVES_SUCCESS: 
                return {
                    ...state,

                    is_gettingUserObjectives: false,
                    objectives: action.payload,
                    error: '',

                }
            case GET_USER_OBJECTIVES_FAILURE: 
                return {
                    ...state,

                    is_gettingUserObjectives: false,
                    error: 'unable to get Objectives'

                }
        // -2- // ADDING OBJECTIVE
            case ADD_OBJECTIVE_START: 
                return {
                    ...state,

                    is_addingObjective: true,
                    error: '',
                    
                }
            case ADD_OBJECTIVE_SUCCESS: 
                return {
                    ...state,

                    is_addingObjective: false,
                    objectives: action.payload,
                    error: '',
                }
            case ADD_OBJECTIVE_FAILURE: 
                return {
                    ...state,

                    is_addingObjective: false,
                    error: 'unable to add Objectives',

                }
            // Default
            default:
                return state;
    }
}