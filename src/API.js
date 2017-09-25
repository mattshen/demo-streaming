import _ from 'lodash';

function restCall(url) {
  const p = fetch(url);
  return p.then((response) => {
    return response.json().catch(() => { /* do nothing */ });
  });
}

const fetchMovies = () => {
  return restCall('sample.json')
    .then((data) => {
      return _.take(
        data.entries.filter(entry => entry.programType === 'movie' && entry.releaseYear >= 2010),
        21,
      );
    });
};

const fetchSeries = () => {
  return restCall('sample.json')
    .then((data) => {
      return _.take(
        data.entries.filter(entry => entry.programType === 'series' && entry.releaseYear >= 2010),
        21,
      );
    });
};

export default {
  fetchMovies,
  fetchSeries,
};
