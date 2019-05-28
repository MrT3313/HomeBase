// AXIOS
    import axios from 'axios'

 // -- *** -- START CODE -- *** -- //
 // -- *** -- START CODE -- *** -- //

 // CREATE ACTION TYPES
export const GET_USER_TODOS_START = 'GET_USER_TODOS_START'
export const GET_USER_TODOS_SUCCESS = 'GET_USER_TODOS_SUCCESS'
export const GET_USER_TODOS_FAILURE = 'GET_USER_TODOS_FAILURE'

// ACTION CREATOR
export const getUserTodos = (currentUser) => {
    console.log('getUserTodos Action Creator')
    console.log(currentUser)

    // SEND FIRST ACTION
    return dispatch => {
        dispatch({ type: GET_USER_TODOS_START})

        // START AXIOS CALL
        axios
            .get(`http://localhost:5000/api/todos/user/${currentUser}`)
                .then( result => {
                    console.log(result)

                    dispatch({
                        type: GET_USER_TODOS_SUCCESS,
                        payload: result.data
                    })
                })
                .catch( err => {
                    dispatch({
                        type: GET_USER_TODOS_FAILURE,
                        payload: err
                    })
                })
    }
}