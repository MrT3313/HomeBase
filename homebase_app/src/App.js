// REACT
  import React, { Component } from 'react';
  import { Route } from "react-router-dom";

// COMPONENTS
  import Homepage from './views/Homepage'
  import UserProfile from './views/UserProfile'

// IMPORT STYLED COMPONENTS
  import styled from 'styled-components'

// -- *** -- Start Code -- *** -- //
// -- *** -- Start Code -- *** -- //

// STYLED COMPONENTS
const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  
  width: 95%
  margin: 0 auto;

  border: 1px solid black;
`;

class App extends Component {
  render() {
    return (
      <AppContainer className="App">
        
        <Route exact path='/'         component={Homepage} />
        <Route exact path='/profile'  component={UserProfile} />
        
      </AppContainer>
    );
  }
}

export default App;
