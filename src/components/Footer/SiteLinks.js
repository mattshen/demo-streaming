import React from 'react';

const SiteLink = (props) => {
  return (
    <a>{props.title}</a>
  );
};

const Separator = () => {
  return (
    <a style={{ padding: '5px' }}>|</a>
  );
};

const SiteLinks = (props) => {
  return (
    <div style={{ padding: '5px' }}>
      <SiteLink title="Home" /> <Separator />
      <SiteLink title="Terms and Conditions" /><Separator />
      <SiteLink title="Privacy Policy" /> <Separator />
      <SiteLink title="Collection Statement" /> <Separator />
      <SiteLink title="Help" /> <Separator />
      <SiteLink title="Manage Account" />
    </div>
  );
};


export default SiteLinks;
