// REACT
import React, { Component } from "react"

// REDUX
    // import { connect } from 'react-redux

// IMPORT  STYLED COMPONENTS
    import styled from 'styled-components'
    // import { ThemeProvider } from 'styled-components'

    // IMPORT - STYLED COMPONENTS - INDIVIDUAL THEMES
        // import theme from '../styles/footer_homepage'

// COMPONENTS
    import Objective from './Objective'

// ASSETS


// -- *** -- START CODE -- *** -- //
// -- *** -- START CODE -- *** -- //

// Styled Components
    const ObjectiveRowContainer = styled.div`
        display: flex;
        margin-bottom: 10px;

        .objectiveTitle {
            display: flex;
            justify-content: center;
            align-items: center;

            min-width: 65px;
            margin-right: 10px;
            border: 1px solid black;
            border-radius: 5px;
            
        }
        .objectiveTracking {
            display: flex;
            align-items: center;
            justify-content: center;

            flex-grow: 1
        }

    `;

class ObjectiveRow extends Component {

    render() {
        return (
                <ObjectiveRowContainer>
                    <div className='objectiveTitle'>
                        {this.props.objective.objectiveTitle}    
                    </div>
                    <div className='objectiveTracking'>
                        <Objective />
                    </div>
                </ObjectiveRowContainer>


        )
    }
}
export default ObjectiveRow