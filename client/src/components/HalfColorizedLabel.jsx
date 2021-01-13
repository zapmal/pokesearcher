import React from 'react';

const HalfColorizedLabel = ({ text, color }) => {
  if (color === 'white') {
    color = 'black';
  }

  return (
    <h4>
      <strong style={{ color }}>
        {text.slice(0, Math.floor(text.length / 2)).toUpperCase()}
      </strong>
      {text.slice(Math.floor(text.length / 2)).toUpperCase()}
    </h4>
  );
};

export default HalfColorizedLabel;