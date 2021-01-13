import React from 'react';

const CustomLabel = ({ color, children }) => {
  if (color === 'white') {
    return <strong style={{ color: 'black' }}>{children}</strong>
  }
  return <strong style={{ color: color  }}>{children}</strong>
};

export default CustomLabel;