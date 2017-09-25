import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import PlaceHolder from '../assets/placeholder.png';

const Category = (props) => {
  return (
    <Link to={props.route} style={{ height: '160px', width: '254px', padding: '10px' }}>
      <img alt={props.title} style={{ backgroundColor: '#171717' }} src={PlaceHolder} />
      {props.title}
    </Link>
  );
};

Category.propTypes = {
  route: PropTypes.string,
  title: PropTypes.string.isRequired,
};

const CategoriesPanel = (props) => {
  return (
    <div style={{ display: 'flex', padding: '20px', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
      {
        props.categories.map(
          (category, i) => <Category title={category.title} route={category.route} key={i} />
        )
      }
    </div>
  );
};

CategoriesPanel.propTypes = {
  categories: PropTypes.array.isRequired,
};

export default CategoriesPanel;
