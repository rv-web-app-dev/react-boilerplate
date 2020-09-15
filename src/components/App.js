import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import { createBrowserHistory } from 'history'


import MLC from './MLC';
import Refs from './Refs';
import Hooks from './Hooks';
import Redux from './Redux';
import Navigation from './Navigation';
import Home from './../routes/Home';
import About from './../routes/About';
import Sample from './../routes/Sample';
import Something from './Something';
import Start from './History/Start';
import Route1 from './History/Route1';
import Route2 from "./History/Route2";
import End from "./History/End";

export const App = ({ isBoilerplate }) => (
  <Fragment>
    <Router history={createBrowserHistory()}>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Something} />
        <Route path="/about">
          <About />
        </Route>
        <Route path="/sample">
          {isBoilerplate ? <Sample /> : <Redirect to="/" />}
        </Route>
        <Route path="/mlc" component={MLC} />
        <Route path="/refs" component={Refs} />
        <Route path="/hooks" component={Hooks} />
        <Route path="/redux" component={Redux} />
        <Route path="/history/start" component={Start} />
        <Route path="/history/route1" component={Route1} />
        <Route path="/history/route2" component={Route2} />
        <Route path="/history/end" component={End} />
        <Route
          path="/route1"
          component={() => {
            return <div>Placeholder for adding a component for this route</div>;
          }}
        />
      </Switch>
    </Router>
  </Fragment>
);

App.propTypes = {
  isBoilerplate: PropTypes.bool
}
