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

// -3- // delete objective
import { 
    DELETE_OBJECTIVE_START,
    DELETE_OBJECTIVE_SUCCESS,
    DELETE_OBJECTIVE_FAILURE,
} from '../actions/a_deleteObjective'

// -4- // update redux store with objective current total completed 
import {
    CLICK_OBJECTIVE_POSITIVE_START,
    CLICK_OBJECTIVE_POSITIVE_SUCCESS,
    CLICK_OBJECTIVE_POSITIVE_FAILURE,
} from '../actions/a_objectiveClick_Positive'

// INITIAL STATE
const initialState = {
    objectives: [],
    error: '',

    is_gettingUserObjectives: false,
    is_addingObjective: false,
    is_deletingObjective: false,
    is_updatingTotalCompleted: false

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
                    error: 'unable to GET objectives'

                }
        // -2- // ADD OBJECTIVE
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
                    error: 'unable to ADD objectives',

                }
        // -3- // DELETE OBJECTIVE
            case DELETE_OBJECTIVE_START: 
                return {
                    ...state,

                    is_deletingObjective: true,
                    error: ''
                }
            case DELETE_OBJECTIVE_SUCCESS:
                return {
                    ...state,

                    is_deletingObjective: false,
                    objectives: action.payload,
                    error: ''
                }
            case DELETE_OBJECTIVE_FAILURE:
                return {
                    ...state,

                    is_deletingObjective: false,
                    error: 'unable to DELETE objective'
                }
            // Default

        // -4- // Update Current Total For Objective
            case CLICK_OBJECTIVE_POSITIVE_START: 
                return {
                    ...state,

                    is_updatingTotalCompleted: true,
                    error: ''
                }
            case CLICK_OBJECTIVE_POSITIVE_SUCCESS: 
                return {
                    ...state,

                    is_updatingTotalCompleted: false,
                    


                    
                    error: ''
                }
            case CLICK_OBJECTIVE_POSITIVE_FAILURE:
                return {
                    ...state,

                    is_updatingTotalCompleted: false,
                    error: 'unable to update Redux Store with objective total'
                }
            default:
                return state;
    }
}