// REACT
    import React, { Component } from "react"

// REDUX
    // import { connect } from 'react-redux

// IMPORT STYLED COMPONENTS
    import styled from 'styled-components'

// -- *** -- START CODE -- *** -- //
// -- *** -- START CODE -- *** -- //

// Styled Components
    const HeaderContainer = styled.div`
        display: flex;
    `;

class Header extends Component {

    render() {
        return (
            <HeaderContainer>
                HEADER
            </HeaderContainer>
        )
    }
}
export default Header