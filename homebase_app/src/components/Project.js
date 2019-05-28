// REACT
import React, { Component } from "react"

// REDUX
    // import { connect } from 'react-redux

// IMPORT  STYLED COMPONENTS
    import styled from 'styled-components'
    import { ThemeProvider } from 'styled-components'

    // IMPORT - STYLED COMPONENTS - INDIVIDUAL THEMES
        import theme from '../styles/footer_homepage'

// -- *** -- START CODE -- *** -- //
// -- *** -- START CODE -- *** -- //

// Styled Components
    const ProjectContainer = styled.div`
        display: flex;

        padding-left: 10px;
        border: 1px dashed black;

        margin-bottom: 10px;

        .projectContent_TOP {
            display: flex;
            justify-content: center;
        }
    `;

    const Content = styled.div`
        display: flex;

        .contentTitle {
            margin-right: 15px;
        }
    `;

class Project extends Component {
    render() {
        console.log(this.props)
        console.log(this.props.project.projectTitle)
        return (
            <ProjectContainer>
                <div className='projectContent'>

                    <div className=''>

                    </div>
                    <div className=''>

                    </div>





                    <div className='projectContent_TOP'>
                        <Content className='projectDueDate'>
                            <div className='contentTitle'>
                                Due Date:
                            </div>
                            <div className='content'>
                                {this.props.project.dueDate}
                            </div>
                        </Content>
                    </div>
                    <div className="projectContent_BOTTOM">
                        <Content className='projectTITLE'>
                            <div className='contentTitle'>
                            Project Title:
                            </div>
                            <div className='content'>
                            {this.props.project.projectTitle}
                            </div>
                        </Content>
                        <Content className='projectDESCRIPTION'>
                            <div className='contentTitle'>
                            Description:
                            </div>
                            <div className='content'>
                            {this.props.project.projectDescription}
                            </div>
                        </Content>
                    </div>

                </div>
            </ProjectContainer>

        )
    }
}
export default Project