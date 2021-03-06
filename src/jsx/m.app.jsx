'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { Router, Route, IndexRoute } from 'react-router';
import Ad from './m.ad.jsx';
import Home from './m.home.jsx';
import Profile from './m.profile.jsx';
import NoMatch from './m.noMatch.jsx';
import Apps from './m.apps.jsx';
import Games from './m.games.jsx';
import Notes from './m.notes.jsx';
require('../css/animate.min.css');
require('../css/default.sass');
require('../css/m.app.sass');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }


  render() {
    return (
        <div className='container'>
          {this.props.children && React.cloneElement(this.props.children, {back: '#/'})}
        </div>
      );
  }
};

ReactDOM.render((
    <Router history={createBrowserHistory()}>
      <Route path='/' component={App}>
        <IndexRoute component={Ad} />
        <Route path='home' component={Home} />
        <Route path='profile' component={Profile} />
        <Route path='apps' component={Apps} />
        <Route path='games' component={Games} />
        <Route path='notes' component={Notes} />
        <Route path='*' component={NoMatch} />
      </Route>
    </Router>
  ),
  document.getElementById('m-app')
);