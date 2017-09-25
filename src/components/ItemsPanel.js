import React, { PropTypes } from 'react';

const Item = (props) => {
  return (
    <a style={{ height: '250px', width: '128px', padding: '10px' }}>
      <img alt={props.data.title} style={{ backgroundColor: '#171717', height: '192px', width: '128px' }} src={props.data.images['Poster Art'].url} />
      {props.data.title}
    </a>
  );
};

Item.propTypes = {
  data: PropTypes.object.isRequired,
};

const ItemsPanel = (props) => {
  return (
    <div style={{ display: 'flex', padding: '20px', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
      {props.items.map((item, i) => (
        <Item data={item} key={i} />
      ))}
    </div>
  );
};

ItemsPanel.propTypes = {
  items: PropTypes.array.isRequired,
};

export default ItemsPanel;
