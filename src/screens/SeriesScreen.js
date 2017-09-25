import React, { Component } from 'react';

import Header from '../components/Header/index';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer/index';
import ItemsPanel from '../components/ItemsPanel';
import LoadingBar from '../components/LoadingBar';
import SimpleErrorBar from '../components/SimpleErrorBar';
import API from '../API';


export default class SeriesScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      series: [],
      hasError: false,
      fetching: false,
    };
  }

  componentDidMount() {
    this.setState({
      fetching: true,
      series: [],
      hasError: false,
    });

    API.fetchSeries()
    .then((data) => {
      this.setState({
        ...this.state,
        series: data,
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
        <NavBar navTitle="Popular Series" showGoBack />
        { this.state.fetching &&
          <LoadingBar />
        }
        { this.state.hasError &&
          <SimpleErrorBar />
        }
        <ItemsPanel items={this.state.series} />
        <Footer />
      </div>
    );
  }

}
