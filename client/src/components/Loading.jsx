import React from 'react';
import Loader from 'react-loader-spinner';

const Loading = ({ color }) => {
  return <Loader type='ThreeDots' color={color} height={100} width={100} timeout={5000} />
};

export default Loading;