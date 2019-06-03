// REACT
import React, { Component } from "react"

// REDUX
    // import { connect } from 'react-redux

// IMPORT  STYLED COMPONENTS
    import styled from 'styled-components'
    // import { ThemeProvider } from 'styled-components'

    // IMPORT - STYLED COMPONENTS - INDIVIDUAL THEMES
        // import theme from '../styles/footer_homepage'

// COMPONENTS

// ASSETS


// -- *** -- START CODE -- *** -- //
// -- *** -- START CODE -- *** -- //

// Styled Components
    const GoalsContainer = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-around;

        border: 1px dashed black

        .goals {
            flex-direction: column;
        }
        .stakes {

        }

    `;

class Goals extends Component {

    render() {
        return (
            // <ThemeProvider>
                <GoalsContainer>
                    <div className='goals'>
                        <div>WORK</div>
                        <div>HEALTH</div>
                        <div>PLAY</div>
                    </div>
                    <div className='stakes'>
                    </div>

                </GoalsContainer>
            // </ThemeProvider>

        )
    }
}
export default Goals