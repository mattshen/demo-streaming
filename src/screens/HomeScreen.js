import React, { Component } from 'react';

import Header from '../components/Header/index';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer/index';
import CategoriesPanel from '../components/CategoriesPanel';

class HomeScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      categories: [{
        title: 'Popular Series',
        route: 'series',
      }, {
        title: 'Popular Movies',
        route: 'movies',
      }],
    };
  }

  render() {
    return (
      <div>
        <Header />
        <NavBar navTitle="Popular Titles" />
        <CategoriesPanel categories={this.state.categories} />
        <Footer />
      </div>
    );
  }

}

export default HomeScreen;
