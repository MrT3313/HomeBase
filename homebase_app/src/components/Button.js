// REACT
import React, { Component } from "react"

// REDUX
    // import { connect } from 'react-redux

// IMPORT  STYLED COMPONENTS
    import styled from 'styled-components'


// -- *** -- START CODE -- *** -- //
// -- *** -- START CODE -- *** -- //

// Styled Components
    const ButtonContainer = styled.div`
        display: flex;
    `;

class Button extends Component {

    render() {
        return (
                <ButtonContainer>
                    <button onClick={this.props.onClick}>{this.props.title}</button>
                </ButtonContainer>
        )
    }
}
export default Button