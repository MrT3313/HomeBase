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
    const CalendarContainer = styled.div`
        display: flex;

        border: 1px dashed black
        height: 100px;

    `;

class Calendar extends Component {

    render() {
        return (
            // <ThemeProvider>
                <CalendarContainer>
                    CALENDAR
                </CalendarContainer>
            // </ThemeProvider>

        )
    }
}
export default Calendar