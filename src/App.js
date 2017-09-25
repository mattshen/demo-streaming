import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import HomeScreen from './screens/HomeScreen';
import MoviesScreen from './screens/MoviesScreen';
import SeriesScreen from './screens/SeriesScreen';

import logo from './logo.svg';
import './App.css';

/*
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <HomeScreen />
        </p>
      </div>
    );
  }
}
*/

const RootContainer = ({ children }) => <div id="appRoot" className="App">{children}</div>;
RootContainer.propTypes = {
  children: PropTypes.object.isRequired,
};

class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={RootContainer}>
          <IndexRoute component={HomeScreen} />
          <Route path="/home" component={HomeScreen} />
          <Route path="/series" component={SeriesScreen} />
          <Route path="/movies" component={MoviesScreen} />
        </Route>
      </Router>
    );
  }
}

export default App;
