// REACT
    import React, { Component } from "react"

// REDUX
    // import { connect } from 'react-redux

// IMPORT STYLED COMPONENTS
    import styled from 'styled-components'
    import { ThemeProvider } from 'styled-components'

    // IMPORT - STYLED COMPONENTS - INDIVIDUAL THEMES
        import theme from '../styles/header_homepage'

// ASSETS
    import menuIcon from '../assets/MenuIcon_MaterialDesign.svg'
    import genericProfileIMG from '../assets/GenericProfileIMG.svg'

// -- *** -- START CODE -- *** -- //
// -- *** -- START CODE -- *** -- //

// Styled Components - COMPONENT
    const HeaderContainer = styled.div`
        display: flex;
        justify-content: space-between;
        padding: 10px 20px;
        
        background-color: ${props => props.theme.backgroundColor};
        color: ${props => props.theme.fontColor};
    `;

class Header extends Component {

    render() {
        return (
            <ThemeProvider theme={theme}>
                <HeaderContainer>
                    <img src={menuIcon}/>
                    <img src={genericProfileIMG}/>
                </HeaderContainer>
            </ThemeProvider>
        )
    }
}
export default Header