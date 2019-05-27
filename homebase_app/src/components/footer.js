// REACT
import React, { Component } from "react"

// REDUX
    // import { connect } from 'react-redux

// IMPORT  STYLED COMPONENTS
    import styled from 'styled-components'

// -- *** -- START CODE -- *** -- //
// -- *** -- START CODE -- *** -- //

// Styled Components
    const FooterContainer = styled.div`
        display: flex;
    `;

class Footer extends Component {

    render() {
        return (
            <FooterContainer>
                FOOTER
            </FooterContainer>
        )
    }
}
export default Footer