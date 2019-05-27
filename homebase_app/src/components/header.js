// REACT
    import React, { Component } from "react"

// REDUX
    // import { connect } from 'react-redux

// IMPORT STYLED COMPONENTS
    import styled from 'styled-components'
    import { ThemeProvider } from 'styled-components'

    // IMPORT - STYLED COMPONENTS - INDIVIDUAL THEMES
        import theme from '../styles/header_homepage'

// -- *** -- START CODE -- *** -- //
// -- *** -- START CODE -- *** -- //

// Styled Components - COMPONENT
    const HeaderContainer = styled.div`
        display: flex;
        
        background-color: ${props => props.theme.backgroundColor};
        color: ${props => props.theme.fontColor};
    `;

class Header extends Component {

    render() {
        return (
            <ThemeProvider theme={theme}>
                <HeaderContainer>
                    HEADER
                </HeaderContainer>
            </ThemeProvider>
        )
    }
}
export default Header