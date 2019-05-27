// REACT
import React, { Component } from "react"

// REDUX
    import { connect } from 'react-redux'

// IMPORT  STYLED COMPONENTS
    import styled from 'styled-components'
    import { ThemeProvider } from 'styled-components'

// IMPORT ACTION CREATORS
    import { getProjects } from '../redux/actions/a_getProjects'

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

    componentDidMount() {
        console.log('FORCED CURRENT USER', this.props.currentUserID)
        this.props.getProjects(this.props.currentUserID)
    }

    render() {
        return (
            <ThemeProvider theme={this.props.theme}>
                <ProjectsContainer>

                </ProjectsContainer>
            </ThemeProvider>

        )
    }
}

const mapStateToProps = state => {
    return {
        currentUserID: state.r_login.currentUserID
    }
}

export default connect(
    mapStateToProps, 
    {
        getProjects,
    }
)(Projects);

// export default Projects