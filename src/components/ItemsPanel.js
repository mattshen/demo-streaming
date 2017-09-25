import React from 'react';

import PlaceHolder from '../assets/placeholder.png';

const Item = (props) => {
  return (
    <a style={{ height: '250px', width: '128px', padding: '10px' }}>
      <img style={{ backgroundColor: '#171717', height: '192px', width: '128px' }} src={props.data.images['Poster Art'].url} />
      {props.data.title}
    </a>
  );
};

const ItemsPanel = (props) => {
  return (
    <div style={{ display: 'flex', padding: '20px', alignItems: 'flex-start', alignContent: 'flex-start', flexWrap: 'wrap' }}>
      {props.items.map(item => (
        <Item data={item} />
      ))}
    </div>
  );
};

export default ItemsPanel;
