// REACT
import React, { Component } from "react"

// REDUX
    import { connect } from 'react-redux'

// IMPORT ACTION CREATORS
    import { getUserObjectives } from '../redux/actions/a_getUserObjectives'

// IMPORT  STYLED COMPONENTS
    import styled from 'styled-components'
    // import { ThemeProvider } from 'styled-components'

    // IMPORT - STYLED COMPONENTS - INDIVIDUAL THEMES
        // import theme from '../styles/footer_homepage'

// COMPONENTS
    import ObjectiveRow from './ObjectiveRow'
    import Weekdays from './Weekdays'

// ASSETS


// -- *** -- START CODE -- *** -- //
// -- *** -- START CODE -- *** -- //

// Styled Components
    const ObjectivesContainer = styled.div`

        display: flex;
        flex-direction: column;
        


        .objectiveRow_2 {
            margin-top: 10px;
        }

        .objectiveRow_1 {
            display: flex;
            flex-direction: row;
            align-items: center;
            
            .weekOfDate {
                display: flex;
                text-align: center;

                min-width: 65px;

                margin-right: 10px;
            }
        }
    `;

class Objectives extends Component {
    state = { 
        showObjectives: false
    }

    componentDidMount() {
        console.log('FORCED CURRENT USER', this.props.currentUserID)
        this.props.getUserObjectives(this.props.currentUserID)
    }

    render() {
        return (
                <ObjectivesContainer>
                    {!this.state.showObjectives &&
                        <div>
                            HELLO :)
                        </div>
                    }
                    {this.state.showObjectives && 
                        <>
                            <div className='objectiveRow_1'>
                                <div className='weekOfDate'>
                                    Week Of: <br/>
                                    5/27/19 
                                </div>
                                <Weekdays />
                            </div>
                            <div className='objectiveRow_2'>
                                {this.props.currentUserOBJECTIVES.map( objective => {
                                    return <ObjectiveRow objective={objective}/>
                                })}
                            </div>
                        </>
                    }





                </ObjectivesContainer>

        )
    }
}

// MAP STATE TO PROPS
const mapStateToProps = state => {
    return {
        currentUserID: state.r_login.currentUserID,
        currentUserOBJECTIVES: state.r_objectives.objectives,
    }
}

export default connect(
    mapStateToProps,
    {
        getUserObjectives
    }
)(Objectives)

// export default Objectives