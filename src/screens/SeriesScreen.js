import React, { Component, PropTypes } from 'react';

import Header from '../components/Header/index';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer/index';
import ItemsPanel from '../components/ItemsPanel';

import API from '../API';


export default class SeriesScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      series: [],
    };
  }

  componentDidMount() {
    API.fetchSeries()
    .then((data) => {
      this.setState({
        ...this.state,
        series: data,
      });
    });
  }

  render() {
    return (
      <div>
        <Header />
        <NavBar navTitle="Popular Series" showGoBack />
        <ItemsPanel items={this.state.series} />
        <Footer />
      </div>
    );
  }

}
