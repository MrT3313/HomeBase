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
    const StakesContainer = styled.div`
        display: flex;

        border: 1px dashed black

    `;

class Stakes extends Component {

    render() {
        return (
            // <ThemeProvider>
                <StakesContainer>
                    STAKES
                </StakesContainer>
            // </ThemeProvider>

        )
    }
}
export default Stakes