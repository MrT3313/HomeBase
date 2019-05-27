// REACT 
    import React, { Component } from 'react';

// REDUX 
    // import { connect } from "react-redux"

// COMPONENTS
    import Header from '../components/Header'
    import Footer from '../components/Footer'

// IMPORT STYLED COMPONENTS
    import styled from 'styled-components'

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

                <div>YO YO MAN - IM INSIDE THE HOMEPAGE - Body Placeholder</div>

                <Footer />
            </HomepageContainer>
        )
    }
}

// MAP STATE TO PROPS

// CONNECT




export default Homepage 