// AXIOS
    import axios from 'axios'

// -- *** -- START CODE -- *** -- //
// -- *** -- START CODE -- *** -- //

// CREATE ACTION TYPES
export const GET_USER_OBJECTIVES_START = 'GET_USER_OBJECTIVES_START' 
export const GET_USER_OBJECTIVES_SUCCESS = 'GET_USER_OBJECTIVES_SUCCESS' 
export const GET_USER_OBJECTIVES_FAILURE = 'GET_USER_OBJECTIVES_FAILURE' 

// ACTION CREATOR
export const getUserObjectives = (currentUser) => {
    console.log('getUserObjectives Action Creator')
    console.log(currentUser)

    // SEND FIRST ACTION
    return dispatch => {
        dispatch({ type: GET_USER_OBJECTIVES_START })

        // START AXIOS CALL
        axios
            .get(`http://localhost:5000/api/objectives/user/${currentUser}`)
                .then( result => {
                    console.log(result)

                    dispatch({
                        type: GET_USER_OBJECTIVES_SUCCESS,
                        payload: result.data
                    })
                })
                .catch( err => {
                    dispatch({
                        type: GET_USER_OBJECTIVES_FAILURE,
                        payload: err
                    })
                })
    }
}