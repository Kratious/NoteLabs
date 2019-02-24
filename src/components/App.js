import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginPage from './Login';
import LandingPage from './Landing';
import HomePage from './Home';
import '../styles/App.css';

import * as routes from '../constants/routes';

class App extends React.Component {

  render() {
    return (
      <Router>
        <div style={{height: '100%'}}>
          <Route
            exact path={routes.LANDING}
            component={() => <LandingPage />}
          />
          <Route
            exact path={routes.LOGIN}
            component={() => <LoginPage />}
          />
          <Route
            exact path={routes.HOME}
            component={() => <HomePage />}
          />
        </div>
      </Router>
    )
  }
}

export default App;