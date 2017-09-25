import React from 'react';

import EmptyBar from '../EmptyBar';
import SiteLinks from './SiteLinks';
import Copyright from './Copyright';
import SocialLinks from './SocialLinks';
import AppStoreLinks from './AppStoreLinks';

const footerStyle = {
  display: 'flex',
  'text-align': 'left',
  'background-color': '#323232',
  padding: '10px',
  color: '#edf0e6',
  fontSize: '12',
  flexDirection: 'column',
  flexWrap: 'wrap',
};

const Footer = () => {
  return (
    <div style={footerStyle}>
      <SiteLinks />
      <Copyright />
      <EmptyBar height={25} />
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <SocialLinks />
        <AppStoreLinks />
      </div>
    </div>
  );
};

export default Footer;
