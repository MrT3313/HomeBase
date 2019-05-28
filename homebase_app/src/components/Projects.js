// REACT
import React, { Component } from "react"

// REDUX
    import { connect } from 'react-redux'

// IMPORT COMPONENTS
    import Project from '../components/Project'

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
        flex-direction: column;

        background-color: ${props => props.theme.backgroundColor};
        color: ${props => props.theme.fontColor};

        ul {
            list-style-type: none;
            padding: 0px;
        }
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
                    <div className='project_TITLE'>
                        PROJECTS:
                    </div>
                    <div className='project_LIST'>
                        <ul>
                            {
                                this.props.currentUserPROJECTS.map(project => {
                                    console.log(project)
                                    return <li><Project project={project}/></li>
                                })
                            }
                        </ul>
                    </div>
                </ProjectsContainer>
            </ThemeProvider>

        )
    }
}

const mapStateToProps = state => {
    return {
        currentUserID: state.r_login.currentUserID,
        currentUserPROJECTS: state.r_projects.projects,
    }
}

export default connect(
    mapStateToProps, 
    {
        getProjects,
    }
)(Projects);

// export default Projects