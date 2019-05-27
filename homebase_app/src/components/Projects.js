// REACT
import React, { Component } from "react"

// REDUX
    // import { connect } from 'react-redux

// IMPORT  STYLED COMPONENTS
    import styled from 'styled-components'
    import { ThemeProvider } from 'styled-components'

// -- *** -- START CODE -- *** -- //
// -- *** -- START CODE -- *** -- //

// Styled Components
    const ProjectsContainer = styled.div`
        display: flex;

        background-color: ${props => props.theme.backgroundColor};
        color: ${props => props.theme.fontColor};
    `;

class Projects extends Component {
    state = {
        userProjects: []
    }

    render() {
        return (
            <ThemeProvider theme={this.props.theme}>
                <ProjectsContainer>
                    {
                        
                    }
                </ProjectsContainer>
            </ThemeProvider>

        )
    }
}
export default Projects