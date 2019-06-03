// AXIOS
    import axios from 'axios'

// -- *** -- START CODE -- *** -- //
// -- *** -- START CODE -- *** -- //

// CREATE ACTION TYPES
    export const DELETE_OBJECTIVE_START = "DELETE_OBJECTIVE_START"
    export const DELETE_OBJECTIVE_SUCCESS = "DELETE_OBJECTIVE_SUCCESS"
    export const DELETE_OBJECTIVE_FAILURE = "DELETE_OBJECTIVE_FAILURE"

// ACTION CREATOR
export const delete_objective = (id) => {
    console.log(id)
    
    // Send First Action
    return dispatch => {
        dispatch({ type: DELETE_OBJECTIVE_START})
        // START AXIOS CALL
        axios
            .delete(`http://localhost:5000/api/objectives/${id}`)
                .then( res => {
                    console.log('RESULT', res)
                    dispatch({
                        type: DELETE_OBJECTIVE_SUCCESS,
                        payload: res.data
                    })
                })  
                .catch(err => {
                    dispatch({
                        type: DELETE_OBJECTIVE_FAILURE,
                        payload: err
                    })
                })
    }
}
