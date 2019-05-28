// REDUX
    import { combineReducers } from "redux"

// REDUCERS
    import { r_login } from "./r_login";
    import { r_projects } from "./r_projects";
    import { r_objectives } from "./r_objectives";
    import { r_todos } from "./r_todos";

// -- *** -- START CODE -- *** -- //
// -- *** -- START CODE -- *** -- //

export const rootReducer = combineReducers({
    r_login,
    r_projects,
    r_objectives,
    r_todos,
})