import React from 'react';

import LogoPanel from './LogoPanel';
import LoginButton from './LoginButton';
import StartFreeTrialButton from './StartFreeTrialButton';


const headerStyle = {
  display: 'flex',
  'background-color': '#0c59ff',
  color: 'white',
  flexWrap: 'wrap',
};

const Header = () => {
  return (
    <div style={headerStyle}>
      <div style={{ flex: 0.6 }}>
        <LogoPanel />
      </div>
      <div style={{ flex: 0.4, display: 'flex', justifyContent: 'flex-end', flexWrap: 'wrap' }}>
        <div style={{ padding: '5px' }}>
          <LoginButton />
        </div>
        <div style={{ padding: '5px' }}>
          <StartFreeTrialButton />
        </div>
      </div>
    </div>
  );
};

export default Header;
