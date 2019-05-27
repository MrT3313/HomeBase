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
    const UserProfileContainer = styled.div`
        display: flex;
        flex-direction: column;
    `;
class UserProfile extends Component {


    render() {
        return (
            <UserProfileContainer>
                <Header />

                <div>INSIDE USER PROFILE</div>
                
                <Footer />
            </UserProfileContainer>
        )
    }
}

// MAP STATE TO PROPS

// CONNECT




export default UserProfile 