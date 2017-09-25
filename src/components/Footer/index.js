import React from 'react';

import EmtpyBar from '../EmptyBar';
import SiteLinks from './SiteLinks';
import Copyright from './Copyright';
import SocialLinks from './SocialLinks';
import AppStoreLinks from './AppStoreLinks';

const footerStyle = {
  'text-align': 'left',
  'background-color': '#323232',
  padding: '10px',
  color: '#edf0e6',
  display: 'flex',
  flexDirection: 'column',
};

const Footer = () => {
  return (
    <div style={footerStyle}>
      <SiteLinks />
      <Copyright />
      <EmtpyBar height={25} />
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <SocialLinks />
        <AppStoreLinks />
      </div>
    </div>
  );
};

export default Footer;