import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

import AuthForm from '../auth-form';
import News from '../news';

export default class App extends Component {

    render() {
        return (
          <Router>
            <Switch>
              <Route exact path='/' component={News} />
              <Route path='/login' component={AuthForm} />
            </Switch>
          </Router>
        )
    }
};
