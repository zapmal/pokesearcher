import React from 'react';
import { withRouter } from 'react-router-dom';

const Footer = (props) => {
  const { location } = props;

  if (location.pathname.match('/search')) {
    return null;
  }

  return (
    <footer className='text-center'>
      <p>PokeSearcher ©</p>
    </footer>
  );
};

export default withRouter(Footer);