// REACT
import React, { Component } from "react"

// REDUX
    import { connect } from 'react-redux'

// IMPORT ACTION CREATORS
    import { getUserObjectives } from '../redux/actions/a_getUserObjectives.js'
    import { add_objective } from '../redux/actions/a_addObjective.js'


// IMPORT  STYLED COMPONENTS
    import styled from 'styled-components'
    // import { ThemeProvider } from 'styled-components'

    // IMPORT - STYLED COMPONENTS - INDIVIDUAL THEMES
        // import theme from '../styles/footer_homepage'

// COMPONENTS
    import ObjectiveRow from './ObjectiveRow'
    import Weekdays from './Weekdays'
    import Button from './Button'

// ASSETS
    import arrow from '../assets/arrow.svg'


// -- *** -- START CODE -- *** -- //
// -- *** -- START CODE -- *** -- //

// Styled Components
    const ObjectivesContainer = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;

        .objectivesHidden, .objectivesShown {
            display: flex;
            justify-content: center;
            align-items: center;
            
            width:100%;
            height: 30px;
        }
        .objectivesHidden {
            background-color: #cbf7f7;
            
        }
        .objectivesShown {
            background-color: #ff9d9d;
            img {
                transform: rotate(180deg);
            }
        }

        .objectives_shownContent {
            display: flex;
            flex-direction: column;

            .content_left {
                display: flex;
                align-items: center;

                margin-right: 10px;
            }

            .objectiveRow_1 {
                display: flex;
                flex-direction: row;
                align-items: center;
    
                .weekOfDate {
                    text-align: center;
                    // margin-right: 15px;
                    width: 200px;
                }
            }

        }

    `;

class Objectives extends Component {
    state = { 
        showObjectives: true,
        
        showAddNewObjective: false,
        newObjTitle: ''
    }

    componentDidMount() {
        console.log('FORCED CURRENT USER', this.props.currentUserID)
        this.props.getUserObjectives(this.props.currentUserID)
    }

    tglObjectives = e => {
        e.preventDefault()
        this.setState(prevState => ({
            ...prevState,
            showObjectives: !prevState.showObjectives
        }));
    }

    showAddNewObjective = e => {
        e.preventDefault()
        this.setState(prevState => ({
            ...prevState,
            addNewObjective: !prevState.addNewObjective
        }));
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    addObjective_submit = e => {
        e.preventDefault()

        const objectToPass = {
            objectiveStatus: 'active',
            objectiveTitle: this.state.newObjTitle,
            userID: this.props.currentUserID,
        }
        // console.log(objectToPass)
        this.props.add_objective(objectToPass)
    }

    render() {
        return (
                <ObjectivesContainer className='ObjectivesContainer'>
                    {!this.state.showObjectives &&
                        <div 
                            className="objectivesHidden"
                            onClick={this.tglObjectives}
                        >
                            <img src={arrow}/>
                            <div className="tglObjectives_ClosedTitle">
                                Click To Open Objective Panel!
                            </div>
                            <img src={arrow}/>
                        </div>
                    }
                    {this.state.showObjectives && 
                        <>
                            <div className="objectivesShown">
                                
                                <Button 
                                    title={this.state.addNewObjective ? 'Close Add Objective Box': 'Add Objective' }
                                    onClick={this.showAddNewObjective}
                                />

                                <Button 
                                    title={'Close Objective Pannel'}
                                    onClick={this.tglObjectives}
                                />
                            </div>
                            {this.state.addNewObjective &&
                                <form className='addObjectiveForm' onSubmit={this.click}>
                                    <input name="newObjTitle" placeholder="New Objective Title" onChange={this.onChange}/>
                                    <button 
                                        onClick={this.addObjective_submit}
                                    >
                                        Add Objective
                                    </button>
                                </form>
                            }
                            <div className="objectives_shownContent">
                                <div className='objectiveRow_1'>
                                    <div className='weekOfDate'>
                                        Week Of: 6/3/19 
                                    </div>
                                    <Weekdays />
                                </div>

                                <div className='objectiveRow_2'>
                                    {this.props.currentUserOBJECTIVES.map( objective => {
                                        return <ObjectiveRow objective={objective}/>
                                    })}
                                </div>
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
        getUserObjectives,
        add_objective,
    }
)(Objectives)

// export default Objectives