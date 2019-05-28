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
    const WeekdaysContainer = styled.div`
        display: flex;
        flex-direction: row;

        div {
            margin-right: 10px;
            
        }
    `;

class Weekdays extends Component {

    render() {
        return (
                <WeekdaysContainer>
                    <div>MON</div>
                    <div>TUE</div>
                    <div>WED</div>
                    <div>THU</div>
                    <div>FRI</div>
                    <div>SAT</div>
                    <div>SUN</div>
                </WeekdaysContainer>
        
        )
    }
}
export default Weekdays