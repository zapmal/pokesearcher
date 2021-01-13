import React from 'react';

const OfficialArtwork = ({ pokemonID, width }) => {
  const imagesEndpoint = 'https://pokeres.bastionbot.org/images/pokemon';
  const source = `${imagesEndpoint}/${pokemonID}.png`

  return <img src={source} alt={pokemonID} width={width} />
};

export default OfficialArtwork;