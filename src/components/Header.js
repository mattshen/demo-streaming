import React from 'react';

const LogoPanel = () => {
  return (
    <div style={{ textAlign: 'left', fontSize: '24' }}>
      DEMO Streaming
    </div>
  );
};

const LoginButton = () => {
  return (
    <div>
      <button style={{ color: 'white', backgroundColor: 'Transparent', border: 'none' }}> Log in </button>
    </div>
  );
};

const StartFreeTrialButton = () => {
  return (
    <div>
      <button style={{ color: 'white', backgroundColor: '#313131', border: 'none', height: '20px' }}>Start your free trial</button>
    </div>
  );
};

const headerStyle = {
  display: 'flex',
  'background-color': '#0c59ff',
  height: '30px',
  padding: '10px',
  color: 'white',
};

const Header = () => {
  return (
    <div style={headerStyle}>
      <div style={{ flex: 0.6 }}>
        <LogoPanel />
      </div>
      <div style={{ flex: 0.4, display: 'flex' }}>
        <LoginButton />
        <StartFreeTrialButton />
      </div>
    </div>
  );
};

export default Header;
