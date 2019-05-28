// REACT
    import React, { Component, Link} from "react"


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

// COMPONENTS
    import UserProfile from '../views/UserProfile'

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
    state = {
        showMenu: false
    }

    menuIcon_clickHandler = e => {
        console.log('You Clicked The Menu')
        e.preventDefault()
        this.setState(prevState => ({
            ...prevState,
            showMenu: !prevState.showMenu
        }));
    }

    UserProfileIcon_clickHandler = e => {
        console.log('You Clicked The UserProfileIMG')
        e.preventDefault()

    }


    render() {
        return (
            <ThemeProvider theme={theme}>
                <HeaderContainer>
                    
                    <img src={menuIcon} onClick={this.menuIcon_clickHandler}/>
                    
                    <img src={genericProfileIMG}/>

                </HeaderContainer>
            </ThemeProvider>
        )
    }
}
export default Header