// REACT
import React, { Component } from "react"

// REDUX
    // import { connect } from 'react-redux

// IMPORT  STYLED COMPONENTS
    import styled from 'styled-components'
    // import { ThemeProvider } from 'styled-components'

    // IMPORT - STYLED COMPONENTS - INDIVIDUAL THEMES
        // import theme from '../styles/footer_homepage'

// ASSETS


// -- *** -- START CODE -- *** -- //
// -- *** -- START CODE -- *** -- //

// Styled Components
    const ObjectivesContainer = styled.div`
        display: flex;
        flex-direction: row; 
        border: 1px solid black;

        .objectivesLEFT, .objectivesRIGHT { 
            display: flex;
            flex-direction: column;
        }
        
        .objectivesLEFT {
            padding-left:10px;
            margin-right: 20px;

            .weekOfDate {
                display: flex; 
                text-align: center;
            }

            ul {
                list-style-position: inside;
                padding: 0px;
            }

        }

        .objectivesRIGHT {

            .weekdayTitles {
                display: flex;
                flex-direction: row;

                div {
                    margin-right: 50px;
                }
            }

        }


    `;

class Objectives extends Component {

    render() {
        return (
            // <ThemeProvider >
                <ObjectivesContainer>
                    <div className='objectivesLEFT'>
                        <div className='weekOfDate'>
                            Week Of: <br/>
                            5/27/19
                        </div>
                        <div className='objectivesLIST'>
                            <ul>
                                <li>item1</li>
                                <li>objective2</li>
                                <li>item3</li>
                                <li>objective4</li>

                            </ul>
                        </div>
                    </div>
                    <div className='objectivesRIGHT'>
                        <div className='weekdayTitles'>
                            <div>M</div>
                            <div>T</div>
                            <div>W</div>
                            <div>Th</div>
                            <div>F</div>
                            <div>S</div>
                            <div>Su</div>
                        </div>
                        <div className='completionNotes'>

                        </div>
                    </div>
                </ObjectivesContainer>
            // </ThemeProvider>

        )
    }
}
export default Objectives