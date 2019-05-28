// REACT
import React, { Component } from "react"

// REDUX
    // import { connect } from 'react-redux

// IMPORT  STYLED COMPONENTS
    import styled from 'styled-components'
    // import { ThemeProvider } from 'styled-components'

    // IMPORT - STYLED COMPONENTS - INDIVIDUAL THEMES
        // import theme from '../styles/footer_homepage'

// ASSETS


// -- *** -- START CODE -- *** -- //
// -- *** -- START CODE -- *** -- //

// Styled Components
    const TodosContainer = styled.div`
        display: flex;

        border: 1px dashed black

    `;

class Todos extends Component {

    render() {
        return (
            // <ThemeProvider>
                <TodosContainer>
                    TODOS
                </TodosContainer>
            // </ThemeProvider>

        )
    }
}
export default Todos