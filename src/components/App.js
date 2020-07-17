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

export const App = ({ isBoilerplate }) => (
  <Fragment>
    <Router history={createBrowserHistory()}>
      <Navigation />
      <Switch>
        <Route exact path='/' component={Something} />
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/sample'>
          {isBoilerplate ? <Sample /> : <Redirect to="/" /> }
        </Route>
        <Route path='/mlc' component={MLC}/>
        <Route path='/refs' component={Refs}/>
        <Route path='/hooks' component={Hooks}/>
        <Route path='/redux' component={Redux}/>
        <Route
          path='/route1'
          component={() => {
            return <div>Placeholder for adding a component for this route</div>
          }}
        />
      </Switch>
    </Router>
  </Fragment>
)

App.propTypes = {
  isBoilerplate: PropTypes.bool
}
