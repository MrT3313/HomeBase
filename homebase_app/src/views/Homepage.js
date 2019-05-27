// REACT 
    import React, { Component } from 'react';

// REDUX 
    // import { connect } from "react-redux"

// COMPONENTS
    import Header from '../components/Header'
    import Footer from '../components/Footer'
    import Projects from '../components/Projects'

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
    `;

// COMPONENT
class Homepage extends Component {


    render() {
        return (
            <HomepageContainer>
                <Header />
                
                <Projects theme={theme}/>

                <Footer />
            </HomepageContainer>
        )
    }
}

// MAP STATE TO PROPS

// CONNECT




export default Homepage 