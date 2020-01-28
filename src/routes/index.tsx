import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from '../screens/Home';
import Details from '../screens/Details';

export default function routes() {
  return (
    <Router>
      <Switch>
        <Route path="/details/:alpha3Code" exac component={Details}></Route>
        <Route path="/" exac component={Home}></Route>
      </Switch>
    </Router>
  );
}
