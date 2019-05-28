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
    import Objective from './Objective'
    import Weekdays from './Weekdays'

// ASSETS


// -- *** -- START CODE -- *** -- //
// -- *** -- START CODE -- *** -- //

// Styled Components
    const ObjectivesContainer = styled.div`
        position: relative;

        display: flex;
        flex-direction: row; 
        justify-content: center;

        .DIVIDER {
            position: absolute;
                top: 60px;
            display: flex;

            height: 20px;
            width: 98%;
            border-radius: 5px;

            background-color: pink;
        }

        .objectivesContent {
            width: 80%;
        }

        .objectivesContent_TOP {
            display: flex;
            flex-direction: row;
            align-items: center;
            width: 100%;
            
            .weekOfDate {
                text-align: center;
                margin: 0px 10px;
                min-width: 50px;
            }
        }
        .objectivesContent_BOTTOM {
            margin-top: 30px;
        }

    `;

class Objectives extends Component {

    componentDidMount() {
        console.log('FORCED CURRENT USER', this.props.currentUserID)
        this.props.getUserObjectives(this.props.currentUserID)
    }

    render() {
        return (
            // <ThemeProvider >
                <ObjectivesContainer>
                    {/* Position Absolutly ased on <ObjectivesContainer /> */}
                    <div className='DIVIDER'>
                        {/* DIVIDER */}
                    </div>

                    <div className='objectivesContent'>
                        <div className='objectivesContent_TOP'>
                            <div className='weekOfDate'>
                                Week Of: 5/27/19
                            </div>
                            <div className='daysOfWeek'>
                                <Weekdays />
                            </div>
                        </div>
                        <div className='objectivesContent_BOTTOM'>
                            <div className='objectivesLIST'>
                                {/* MAP AND RENDER INDIVIDUAL OBJECTIVES */}
                                {this.props.currentUserOBJECTIVES.map( objective => {
                                    console.log(objective)
                                    return (
                                        <Objective objective={objective}/>
                                    )
                                })}
                            </div>
                            <div className='Objectives Log'>

                            </div>
                        </div>
                    </div>
                </ObjectivesContainer>





                    // <div className='objectivesLEFT'>
                    //     <div className='weekOfDate'>
                    //         Week Of: <br/>
                    //         5/27/19
                    //     </div>
                    //     <div className='objectivesLIST'>
                    //         <ul>
                    //             <li>item1</li>
                    //             <li>objective2</li>
                    //             <li>item3</li>
                    //             <li>objective4</li>

                    //         </ul>
                    //     </div>
                    // </div>
                    // <div className='objectivesRIGHT'>
                    //     <div className='weekdayTitles'>
                    //         <div>M</div>
                    //         <div>T</div>
                    //         <div>W</div>
                    //         <div>Th</div>
                    //         <div>F</div>
                    //         <div>S</div>
                    //         <div>Su</div>
                    //     </div>
                    //     <div className='completionNotes'>

                    //     </div>
                    // </div>
                
            // </ThemeProvider>

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