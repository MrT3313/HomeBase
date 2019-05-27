// REACT
  import React, { Component } from 'react';
  import { Route } from "react-router-dom";


// COMPONENTS
  import Homepage from './views/Homepage'
  import UserProfile from './views/UserProfile'

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Route exact path='/'         component={Homepage} />
        <Route exact path='/profile'  component={UserProfile} />
        
      </div>
    );
  }
}

export default App;
