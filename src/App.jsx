// @flow
/* global module */
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';

import IndexContainer from './containers/IndexContainer';

const App = () => (
  <Router>
    <>
      <Route exact path='/' component={IndexContainer} />
    </>
  </Router>
);

export default hot(module)(App);
