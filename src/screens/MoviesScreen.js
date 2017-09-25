import React, { Component } from 'react';

import Header from '../components/Header/index';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer/index';
import ItemsPanel from '../components/ItemsPanel';

import API from '../API';


export default class MoviesScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    API.fetchMovies()
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
        <NavBar navTitle="Popular Movies" showGoBack />
        <ItemsPanel items={this.state.movies} />
        <Footer />
      </div>
    );
  }

}
