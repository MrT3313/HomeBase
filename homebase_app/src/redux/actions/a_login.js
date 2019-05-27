// AXIOS
    import axios from 'axios'

// -- *** -- START CODE -- *** -- //
// -- *** -- START CODE -- *** -- //

// CREATE ACTION TYPES
    export const LOGIN_START = "LOGIN_START"
    export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
    export const LOGIN_FAILURE = "LOGIN_FAILURE"

// ACTION CREATOR
export const login = loginInfo => {
    console.log('a_login Action Creator')

    // SEND FIRST ACTION
    return dispatch => {
        dispatch({ type: LOGIN_START })

        // START AXIOS CALL
        axios
            .post('http://localhost:5000')
                .then( result => {
                    console.log(result)

                    // SET LOCAL STORAGE

                    dispatch({
                        type: LOGIN_SUCCESS,
                        payload: result.data
                    })
                })
                .catch( err => {
                    dispatch({
                        LOGIN_FAILURE,
                        payload: err
                    })
                })
    }
}
