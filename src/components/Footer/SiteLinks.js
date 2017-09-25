import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const SiteLink = (props) => {
  return (
    <Link to={props.to} style={{ 'text-decoration': 'none', color: 'white' }}>{props.title}</Link>
  );
};

SiteLink.propTypes = {
  to: PropTypes.string,
  title: PropTypes.string.isRequired,
};

const Separator = () => {
  return (
    <a style={{ padding: '5px' }}>|</a>
  );
};

const SiteLinks = () => {
  return (
    <div style={{ padding: '5px' }}>
      <SiteLink title="Home" to={'/home'} /><Separator />
      <SiteLink title="Terms and Conditions" /><Separator />
      <SiteLink title="Privacy Policy" /> <Separator />
      <SiteLink title="Collection Statement" /> <Separator />
      <SiteLink title="Help" /> <Separator />
      <SiteLink title="Manage Account" />
    </div>
  );
};


export default SiteLinks;
