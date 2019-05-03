
import {Router} from 'react-router-dom'
import React , { Component} from "react";
import UI from './containers/UI';

import history from './history';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false
    };

  }

  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }

  render() {
    const childProps = {
      history: history,
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    };
    return (
      <Router history={history}>
        <UI childProps={childProps}/>
      </Router>
    )
  }
}


export default App;
