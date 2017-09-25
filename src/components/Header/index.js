import React from 'react';

import LogoPanel from './LogoPanel';
import LoginButton from './LoginButton';
import StartFreeTrialButton from './StartFreeTrialButton';


const headerStyle = {
  display: 'flex',
  'background-color': '#0c59ff',
  height: '48px',
  color: 'white',
};

const Header = () => {
  return (
    <div style={headerStyle}>
      <div style={{ flex: 0.6 }}>
        <LogoPanel />
      </div>
      <div style={{ flex: 0.4, display: 'flex', justifyContent: 'flex-end' }}>
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
