import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from '../screens/Home';

export default function routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exac component={Home}></Route>
      </Switch>
    </Router>
  );
}
