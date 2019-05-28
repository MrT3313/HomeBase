// REACT
import React, { Component } from "react"

// REDUX
    // import { connect } from 'react-redux

// IMPORT  STYLED COMPONENTS
    import styled from 'styled-components'
    import { ThemeProvider } from 'styled-components'

    // IMPORT - STYLED COMPONENTS - INDIVIDUAL THEMES
        import theme from '../styles/footer_homepage'

// ASSETS
    import USAflag from '../assets/USAflagIcon.svg'
    import GitHubIcon from '../assets/GitHubIcon.svg'
    import LinkedInIcon from '../assets/LinkedInIcon.svg'

// -- *** -- START CODE -- *** -- //
// -- *** -- START CODE -- *** -- //

// Styled Components
    const FooterContainer = styled.div`
        display: flex;
        justify-content: space-around;
        padding: 10px 20px;

        background-color: ${props => props.theme.backgroundColor};
        color: ${props => props.theme.fontColor};

        img {

            max-height: 20px;
        }
    `;

class Footer extends Component {

    render() {
        return (
            <ThemeProvider theme={theme}>
                <FooterContainer>
                    <img src={USAflag}/>
                    <img src={GitHubIcon}/>
                    <img src={LinkedInIcon}/>
                </FooterContainer>
            </ThemeProvider>

        )
    }
}
export default Footer