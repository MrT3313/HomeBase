// REACT
import React, { Component } from "react"

// REDUX
    // import { connect } from 'react-redux

// IMPORT  STYLED COMPONENTS
    import styled from 'styled-components'
    // import { ThemeProvider } from 'styled-components'

    // IMPORT - STYLED COMPONENTS - INDIVIDUAL THEMES
        import theme from '../styles/footer_homepage'

// ASSETS
    import USAflag from '../assets/USAflagIcon.svg'
    import GitHubIcon from '../assets/GitHubIcon.svg'
    import LinkedInIcon from '../assets/LinkedInIcon.svg'

// -- *** -- START CODE -- *** -- //
// -- *** -- START CODE -- *** -- //

// Styled Components
    const ObjectiveContainer = styled.div`
        display: flex;
    `;

class Objective extends Component {

    render() {
        return (
            // <ThemeProvider theme={theme}>
                <ObjectiveContainer>
                    {this.props.objective.objectiveTitle}
                </ObjectiveContainer>
            // </ThemeProvider>

        )
    }
}
export default Objective