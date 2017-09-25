import React from 'react';

import facebook from '../../assets/social/facebook-white.svg';
import twitter from '../../assets/social/twitter-white.svg';
import instagram from '../../assets/social/instagram-white.svg';

const SocialLinks = () => {
  return (
    <div style={{ display: 'row', flex: '0.5' }}>
      <img height="20px" style={{ padding: '5px' }} src={facebook} alt="Facebook" />
      <img height="20px" style={{ padding: '5px' }} src={twitter} alt="Twitter" />
      <img height="20px" style={{ padding: '5px' }} src={instagram} alt="Instagram" />
    </div>
  );
};

export default SocialLinks;
