// REACT
import React, { Component } from "react"

// REDUX
    // import { connect } from 'react-redux

// IMPORT  STYLED COMPONENTS
    import styled from 'styled-components'
    import { ThemeProvider } from 'styled-components'

    // IMPORT - STYLED COMPONENTS - INDIVIDUAL THEMES
        import theme from '../styles/footer_homepage'

// ASSETS
    import trashIcon from '../assets/TrashIcon.svg'
    import timerIcon from '../assets/Timer.svg'
    import checkmarkIcon from '../assets/Checkmark.svg'


// -- *** -- START CODE -- *** -- //
// -- *** -- START CODE -- *** -- //

// Styled Components
    const ProjectContainer = styled.div`
        display: flex;
        margin-bottom: 10px;

        border: 1px solid black
        border-radius: 5px;
        
        .projectContent {
            display: flex;
            flex-direction: column;
            flex-grow: 1;
        }

        .projectContent_TOP {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            .dueDate, .actions {
                display: flex;
            }
            .dueDate {
                text-align: center;
            }
        }
        .projectContent_BOTTOM {
            display: flex;
            flex-direction: row;

            .contentLeft {
                margin-right: 10px;
            }
        }
    `;

class Project extends Component {
    render() {
        console.log(this.props)
        console.log(this.props.project.projectTitle)
        return (
            <ProjectContainer>
                <div className='projectContent'>

                    <div className='projectContent_TOP'>
                        <div className='dueDate'>
                            Due Date: {this.props.project.dueDate} 
                        </div>
                        <div className='actions'>
                            <img src={trashIcon}/>
                            <img src={timerIcon}/>
                            <img src={checkmarkIcon}/>
                        </div>
                    </div>
                    <div className="projectContent_BOTTOM">
                        <div className='contentLeft'>
                            <div>Title:</div>
                            <div>Description:</div>
                        </div>
                        <div className='contentRight'>
                            <div>
                                {this.props.project.projectTitle}
                            </div>
                            <div>
                                {this.props.project.projectDescription}
                            </div>
                        </div>
                    </div>

                </div>
            </ProjectContainer>

        )
    }
}
export default Project