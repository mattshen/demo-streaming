import React from 'react';

import AppStore from '../../assets/store/app-store.svg';
import PlayStore from '../../assets/store/play-store.svg';
import MSStore from '../../assets/store/windows-store.svg';

const AppStoreLinks = () => {
  return (
    <div style={{ display: 'row', flex: '0.5' }}>
      <img style={{ padding: '5px' }} src={AppStore} alt="Apple App Store" />
      <img style={{ padding: '5px' }} src={PlayStore} alt="Google PlayStore" />
      <img height={40} style={{ padding: '5px' }} src={MSStore} alt="Microsoft Store" />
    </div>
  );
};

export default AppStoreLinks;