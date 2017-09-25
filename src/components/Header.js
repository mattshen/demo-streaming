import React from 'react';

import './Header.css';

const LogoPanel = () => {
  return (
    <div>
      DEMO Streaming
    </div>
  );
};

const LoginButton = () => {
  return (
    <div>
      Log in
    </div>
  );
};

const Header = () => {
  return (
    <div className="Header-panel">
      <LogoPanel />
      <LoginButton />
    </div>
  );
};

export default Header;
