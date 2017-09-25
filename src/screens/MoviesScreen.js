import React, { Component } from 'react';

import Header from '../components/Header/index';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer/index';
import ItemsPanel from '../components/ItemsPanel';
import LoadingBar from '../components/LoadingBar';
import SimpleErrorBar from '../components/SimpleErrorBar';
import API from '../API';


export default class MoviesScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fetching: false,
      movies: [],
      hasError: false,
    };
  }

  componentDidMount() {
    this.setState({
      fetching: true,
      movies: [],
      hasError: false,
    });

    API.fetchMovies()
      .then((data) => {
        this.setState({
          ...this.state,
          movies: data,
          fetching: false,
        });
      }).catch(() => {
        this.setState({
          ...this.state,
          hasError: true,
          fetching: false,
        });
      });
  }

  render() {
    return (
      <div>
        <Header />
        <NavBar navTitle="Popular Movies" showGoBack />
        { this.state.fetching &&
          <LoadingBar />
        }
        { this.state.hasError &&
          <SimpleErrorBar />
        }
        <ItemsPanel items={this.state.movies} />
        <Footer />
      </div>
    );
  }

}
