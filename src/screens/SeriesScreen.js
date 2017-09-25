import React, { Component, PropTypes } from 'react';

import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer/index';
import MoviesPanel from '../components/MoviesPanel';

import API from '../API';


export default class SeriesScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    API.fetchSeries()
    .then((data) => {
      this.setState({
        ...this.state,
        movies: data,
      });
    });
  }

  render() {
    return (
      <div>
        <Header />
        <NavBar />
        <MoviesPanel movies={this.state.movies} />
        <Footer />
      </div>
    );
  }

}
