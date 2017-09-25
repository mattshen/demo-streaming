import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import HomeScreen from './screens/HomeScreen';
import MoviesScreen from './screens/MoviesScreen';
import SeriesScreen from './screens/SeriesScreen';

import './App.css';

const AppRoot = ({ children }) => <div id="appRoot" className="App">{children}</div>;
AppRoot.propTypes = {
  children: PropTypes.object.isRequired,
};

const App = () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={AppRoot}>
        <IndexRoute component={HomeScreen} />
        <Route path="/home" component={HomeScreen} />
        <Route path="/series" component={SeriesScreen} />
        <Route path="/movies" component={MoviesScreen} />
      </Route>
    </Router>
  );
};

export default App;
