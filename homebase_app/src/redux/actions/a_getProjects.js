// AXIOS
    import axios from 'axios'

// -- *** -- START CODE -- *** -- //
// -- *** -- START CODE -- *** -- //

// CREATE ACTION TYPES
    export const GET_PROJECTS_START = "GET_PROJECTS_START"
    export const GET_PROJECTS_SUCCESS = "GET_PROJECTS_SUCCESS"
    export const GET_PROJECTS_FAILURE = "GET_PROJECTS_FAILURE"

// ACTION CREATOR
export const getProjects = (currentUser) => {
    console.log('getProjects Action Creator')
    console.log(currentUser)

    // SEND FIRST ACTION
    return dispatch => {
        dispatch({ type: GET_PROJECTS_START })

        // START AXIOS CALL
        axios
            .get(`http://localhost:5000/api/projects/user/${currentUser}`)
                .then( result => {
                    console.log(result)

                    dispatch({
                        type: GET_PROJECTS_SUCCESS, 
                        payload: result.data
                    })
                })
                .catch( err => {
                    dispatch({
                        type:GET_PROJECTS_FAILURE,
                        payload: err 
                    })
                })
    }
}