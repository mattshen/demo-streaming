import React from 'react';

const style = {
  'text-align': 'left',
  'background-color': '#323232',
  height: '20px',
  fontSize: '20',
  padding: '10px',
  color: '#edf0e6',
};

const NavBar = (props) => {
  return (
    <div style={style}>
      {props.navTitle}
    </div>
  );
};

export default NavBar;
