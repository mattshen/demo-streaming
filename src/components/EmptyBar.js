import React, { PropTypes } from 'react';

export const EmptyBar = (props) => {
  return (
    <div style={{ height: `${props.height}px` }} />
  );
};

EmptyBar.propTypes = {
  height: PropTypes.number.isRequired,
};

export default EmptyBar;
