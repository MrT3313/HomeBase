// REACT
import React, { Component } from "react"

// REDUX
    import { connect } from 'react-redux'

// IMPORT ACTION CREATORS
    import { delete_objective } from '../redux/actions/a_deleteObjective'

// IMPORT  STYLED COMPONENTS
    import styled from 'styled-components'
    // import { ThemeProvider } from 'styled-components'

    // IMPORT - STYLED COMPONENTS - INDIVIDUAL THEMES
        // import theme from '../styles/footer_homepage'

// COMPONENTS
    import ObjectiveBoxes from './ObjectiveBoxes'

// ASSETS
    import EditIcon from '../assets/EditIcon.svg'
    import TrashIcon from '../assets/TrashIcon.svg'


// -- *** -- START CODE -- *** -- //
// -- *** -- START CODE -- *** -- //

// Styled Components
    const ObjectiveRowContainer = styled.div`
        display: flex;
        margin-bottom: 10px;

        .objectiveLeft, .objectiveRight {
            display: flex;
            align-items: center;
        }
        .objectiveLeft {
            font-size: 20px;
            
            .objectiveTitle, .objectiveIcons {
                display: flex;
                justify-content: center;
            }
            .objectiveTitle {
                text-align: center;
                width: 150px;
            }

            .objectiveIcons {
                width: 50px;
            }
        }

        .objectiveRight {
            display: flex;
            width: 100%
        }


    `;

class ObjectiveRow extends Component {

    deleteObjective = e => {
        e.preventDefault()        
        // console.log(this.props.objective.objectiveID)
        this.props.delete_objective(this.props.objective.objectiveID)
    }

    render() {
        return (
                <ObjectiveRowContainer>
                    <div className='objectiveLeft'>
                        <div className='objectiveTitle'>
                            {this.props.objective.objectiveTitle} 
                        </div>
                        <div className='objectiveIcons'>
                            <img src={EditIcon} />
                            <img src={TrashIcon} onClick={this.deleteObjective}/>
                        </div>
                    </div>
                    <div className='objectiveRight'>
                        <ObjectiveBoxes />
                    </div>
                </ObjectiveRowContainer>


        )
    }
}

// MAP STATE TO PROPE
const mapStateToProps = state => {
    return {
        currentUserID: state.r_login.currentUserID
    }
}

export default connect(
    mapStateToProps,
    {
        delete_objective
    }
)(ObjectiveRow)

// export default ObjectiveRow