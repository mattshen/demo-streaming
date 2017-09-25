import React, { Component } from 'react';

import Header from '../components/Header/index';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer/index';
import CategoriesPanel from '../components/CatagoriesPanel';

class HomeScreen extends Component {

  constructor(props) {

    super(props);
    this.state = {
      catagories: [{
        title: 'Series',
      }, {
        title: 'Movies',
      }],
    };
  }

  render() {
    return (
      <div>
        <Header />
        <NavBar />
        <CategoriesPanel catagories={this.state.catagories} />
        <Footer />
      </div>
    );
  }

};

export default HomeScreen;
