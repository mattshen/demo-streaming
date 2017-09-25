import _ from 'lodash';
import { PAGE_SIZE } from './Constants';

function restCall(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const p = fetch(url);
      p.then((response) => {
        resolve(response.json().catch(() => { /* do nothing */ }));
      });
    }, 1500); //TODO, make delay on purpose
  });
}

const fetchMovies = () => {
  return restCall('sample.json')
    .then((data) => {
      return _.take(
        data.entries.filter(entry => entry.programType === 'movie' && entry.releaseYear >= 2010),
        PAGE_SIZE,
      );
    });
};

const fetchSeries = () => {
  return restCall('sample.json')
    .then((data) => {
      return _.take(
        data.entries.filter(entry => entry.programType === 'series' && entry.releaseYear >= 2010),
        PAGE_SIZE,
      );
    });
};

export default {
  fetchMovies,
  fetchSeries,
};
