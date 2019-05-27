// REDUX
    import { combineReducers } from "redux"

// REDUCERS
    import { r_login } from "./r_login";
    import { r_projects } from "./r_projects";

// -- *** -- START CODE -- *** -- //
// -- *** -- START CODE -- *** -- //

export const rootReducer = combineReducers({
    r_login,
    r_projects,
})