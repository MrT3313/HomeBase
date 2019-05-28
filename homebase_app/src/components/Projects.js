// REACT
import React, { Component } from "react"

// REDUX
    import { connect } from 'react-redux'

// IMPORT COMPONENTS
    import Project from '../components/Project'

// IMPORT  STYLED COMPONENTS
    import styled from 'styled-components'
    import { ThemeProvider } from 'styled-components'

// IMPORT COLORS
    import colors from '../styles/index'


// IMPORT ACTION CREATOR
    import { getProjects } from '../redux/actions/a_getProjects'

// -- *** -- START CODE -- *** -- //
// -- *** -- START CODE -- *** -- //

// Styled Components
    const ProjectsContainer = styled.div`
        position: relative;    

        display: flex;
        flex-direction: column;
        align-items: center;

        background-color: ${props => props.theme.backgroundColor};
        color: ${props => props.theme.fontColor};

        .DIVIDER {
            position: absolute;
                top: 25px;
            display: flex;

            height: 20px;
            width: 98%;
            border-radius: 5px;

            background-color: blue;
        }
        .projectContent {
            width: 80%;

            .projectTitle {
                margin-bottom: 40px;
            }
        }
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
                    {/* Position Absolutly ased on <ProjectContainer /> */}
                    <div className='DIVIDER'>
                        {/* DIVIDER */}
                    </div>

                    <div className='projectContent'>
                        <div className='projectTitle'>
                            PROJECTS:
                        </div>
                        <div className='project_LIST'>
                            {/* <ul> */}
                                {
                                    this.props.currentUserPROJECTS.map(project => {
                                        console.log(project)
                                        return (
                                            // <li>
                                                <Project project={project}/>
                                            // </li>
                                        )
                                    })
                                }
                            {/* </ul> */}
                        </div>
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