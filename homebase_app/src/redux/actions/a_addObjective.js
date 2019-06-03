// AXIOS
    import axios from 'axios'

// -- *** -- START CODE -- *** -- // 
// -- *** -- START CODE -- *** -- // 

// CREATE ACTION TYPES
    export const ADD_OBJECTIVE_START = "ADD_OBJECTIVE_START"
    export const ADD_OBJECTIVE_SUCCESS = "ADD_OBJECTIVE_SUCCESS"
    export const ADD_OBJECTIVE_FAILURE = "ADD_OBJECTIVE_FAILURE"

// ACTION CREATOR
    export const add_objective = passedObject => {
        console.log(passedObject)



        // Send First Action
        return dispatch => {
            dispatch({ type: ADD_OBJECTIVE_START})

            // START AXIOS
            axios
                .post(
                    `http://localhost:5000/api/objectives`,
                    passedObject
                )
                    .then( res => {
                        console.log(res)
                        dispatch({
                            type: ADD_OBJECTIVE_SUCCESS,
                            payload: res.data
                        })
                    })
                    .catch( err => {
                        console.log(err)
                        dispatch({
                            type: ADD_OBJECTIVE_FAILURE,
                            payload: err
                        })
                    })
            
        }

    }