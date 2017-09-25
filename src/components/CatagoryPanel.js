import React from 'react';

import PlaceHolder from '../assets/placeholder.png';

const Category = (props) => {
  return (
    <a style={{ height: '144px', width: '254px', padding: '10px' }}>
      <img style={{ backgroundColor: '#171717' }} src={PlaceHolder} />
      {props.title}
    </a>
  );
};

const CategoriesPanel = (props) => {
  return (
    <div style={{ display: 'flex', padding: '20px', alignItems: 'flex-start', alignContent: 'flex-start' }}>
      <Category title="Popular Series" />
      <Category title="Popular Movies" />
    </div>
  );
};

export default CategoriesPanel;
