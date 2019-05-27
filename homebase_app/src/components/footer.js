// REACT
import React, { Component } from "react"

// REDUX
    // import { connect } from 'react-redux

// IMPORT  STYLED COMPONENTS
    import styled from 'styled-components'
    import { ThemeProvider } from 'styled-components'

    // IMPORT - STYLED COMPONENTS - INDIVIDUAL THEMES
        import theme from '../styles/footer_homepage'

// -- *** -- START CODE -- *** -- //
// -- *** -- START CODE -- *** -- //

// Styled Components
    const FooterContainer = styled.div`
        display: flex;

        background-color: ${props => props.theme.backgroundColor};
        color: ${props => props.theme.fontColor};
    `;

class Footer extends Component {

    render() {
        return (
            <ThemeProvider theme={theme}>
                <FooterContainer>
                    FOOTER
                </FooterContainer>
            </ThemeProvider>

        )
    }
}
export default Footer