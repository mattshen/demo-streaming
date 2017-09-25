import React from 'react';
import { Link, hashHistory } from 'react-router';

import PlaceHolder from '../assets/placeholder.png';

const Category = (props) => {
  return (
    <Link to={props.route}>
      <a style={{ height: '160px', width: '254px', padding: '10px' }}>
        <img style={{ backgroundColor: '#171717' }} src={PlaceHolder} />
        {props.title}
      </a>
    </Link>
  );
};

const CategoriesPanel = (props) => {
  return (
    <div style={{ display: 'flex', padding: '20px', alignItems: 'flex-start', alignContent: 'flex-start' }}>
      {
        props.categories.map(category => <Category title={category.title} route={category.route} />)
      }
    </div>
  );
};

export default CategoriesPanel;
