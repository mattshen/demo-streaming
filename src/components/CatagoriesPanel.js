import React from 'react';

import PlaceHolder from '../assets/placeholder.png';

const Category = (props) => {
  return (
    <a style={{ height: '160px', width: '254px', padding: '10px' }}>
      <img style={{ backgroundColor: '#171717' }} src={PlaceHolder} />
      {props.title}
    </a>
  );
};

const CategoriesPanel = (props) => {
  return (
    <div style={{ display: 'flex', padding: '20px', alignItems: 'flex-start', alignContent: 'flex-start' }}>
      {
        props.catagories.map(catagory => <Category title={catagory.title} />)
      }
    </div>
  );
};

export default CategoriesPanel;
