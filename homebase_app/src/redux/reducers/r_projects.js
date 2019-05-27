// IMPORT ACTION TYPES
// -1- // getting projects
import { 
    GET_PROJECTS_START,
    GET_PROJECTS_SUCCESS,
    GET_PROJECTS_FAILURE,
} from '../actions/a_getProjects'


// INITIAL STATE
const initialState = {
    projects: [],
    error: '',

    is_gettingProjects: false,
}

// REDUCER
export const r_projects = (state = initialState, action) => {

    switch(action.type) {
        // -1- // GETTING PROJECTS
            case GET_PROJECTS_START:
                return {
                    ...state,
                    
                    is_gettingProjects: true,
                    error: ''
                }
            case GET_PROJECTS_SUCCESS:
                return {
                    ...state,

                    is_gettingProjects: false,
                    projects: action.payload,
                    error: ''

                }
            case GET_PROJECTS_FAILURE:
                return {
                    ...state,

                    is_gettingProjects: false,
                    error: 'unable to get projects'

                }

            // Default
            default:
                return state;
    }
}