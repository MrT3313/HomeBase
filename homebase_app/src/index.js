// REACT
    import React from 'react';
    import ReactDOM from 'react-dom';
    import { Provider } from "react-redux"
    import { BrowserRouter as Router } from 'react-router-dom'

// REDUX
    import thunk from "redux-thunk"
    import logger from 'redux-logger'
    import { createStore, applyMiddleware, compose} from 'redux' // compose needed for Dev Tools

    // Reducers
        import { rootReducer } from './redux/reducers'

// COMPONENTS
    import App from './App';

// STORE ENHANCERS
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// CREATE STORE
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk, logger))
)

// RENDER APP
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App /> 
        </Router>
    </Provider>,
    document.getElementById('root')
);

