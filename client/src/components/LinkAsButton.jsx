import React from 'react';
import { Link } from 'react-router-dom';

const LinkAsButton = ({ to, content }) => {
  return (
    <div className='text-center'>
      <Link className='btn btn-danger btn-block' to={to}>{content}</Link>
    </div>
  );
};

export default LinkAsButton;