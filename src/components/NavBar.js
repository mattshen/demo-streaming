import React, { PropTypes } from 'react';
import { Link } from 'react-router';

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
      {props.showGoBack &&
        <Link to="home" style={{ 'text-decoration': 'none', color: 'white' }}>Categories &gt; </Link>
      }
      {props.navTitle}
    </div>
  );
};

NavBar.propTypes = {
  navTitle: PropTypes.string.isRequired,
  showGoBack: PropTypes.bool,
};

export default NavBar;
