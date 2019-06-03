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



// IMPORT STYLED COMPONENTS
    import styled from 'styled-components'

// IMPORT - STYLED COMPONENTS - INDIVIDUAL THEMES
    import Projects_theme from '../styles/projects_homepage'
    import Todos_theme from '../styles/todos_homepage'

// -- *** -- START CODE -- *** -- //
// -- *** -- START CODE -- *** -- //

// STYLED COMPONENTS
    const HomepageContainer = styled.div`
        display: flex;
        flex-direction: column;
        width: 100%;

        .content_rowA, .content_rowB { 
            display: flex;
            flex-direction: row;
            margin-top: 20px;
        }

        .content_rowA {
            justify-content: center;
        }

        .content_rowB {
            justify-content: space-between;

            .rowB_LEFT, .rowB_RIGHT {
                border: 1px solid black;
            }

            .rowB_LEFT {
                min-width: 100px;
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
            <HomepageContainer className='HOMEPAGE VIEW'>
                <Header />

                <div className='content_rowA'>
                    <Objectives />
                </div>
                <div className='content_rowB'>
                    <div className='rowB_LEFT'>
                        <Projects theme={Projects_theme}/>
                        <Todos theme={Todos_theme}/>
                    </div>
                    <div className='rowB_RIGHT'>
                        <Goals />
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