// REACT 
    import React, { Component } from 'react';

// REDUX 
    // import { connect } from "react-redux"

// COMPONENTS
    import Header from '../components/Header'
    import Footer from '../components/Footer'
    import Projects from '../components/Projects'
    import Objectives from '../components/Objectives'
    import Todos from '../components/Todos'
    import Goals from '../components/Goals'
    import Events from '../components/Events'
    import Calendar from '../components/Calendar'
    



// IMPORT STYLED COMPONENTS
    import styled from 'styled-components'

// IMPORT - STYLED COMPONENTS - INDIVIDUAL THEMES
    import theme from '../styles/projects_homepage'

// -- *** -- START CODE -- *** -- //
// -- *** -- START CODE -- *** -- //

// STYLED COMPONENTS
    const HomepageContainer = styled.div`
        display: flex;
        flex-direction: column;

        

        .content_rowA, .content_rowB { 
            display: flex;
            flex-direction: row;
            margin-top: 20px;
        }

        .content_rowB {
            justify-content: space-between;

            .rowB_LEFT, .rowB_RIGHT {
                border: 1px solid black;
            }

            .rowB_LEFT {
                width: 25%
            }
            .rowB_RIGHT {
                width: 75%
            }
        }


    `;

// COMPONENT
class Homepage extends Component {


    render() {
        return (
            <HomepageContainer>
                <Header />

                <div className='content_rowA'>
                    <Projects theme={theme}/>
                    <Objectives />
                </div>
                <div className='content_rowB'>
                    <div className='rowB_LEFT'>
                        <Todos />
                    </div>
                    <div className='rowB_RIGHT'>
                        <Goals />
                        <Events />
                        <Calendar />
                    </div>
                </div>

                <Footer />
            </HomepageContainer>
        )
    }
}

// MAP STATE TO PROPS

// CONNECT




export default Homepage 