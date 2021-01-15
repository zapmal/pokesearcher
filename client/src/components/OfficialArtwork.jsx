import React from 'react';
require('dotenv').config();

const OfficialArtwork = ({ pokemonID, width }) => {
  const imagesEndpoint = process.env.OFFICIAL_ARTWORK_ENDPOINT;
  const source = `${imagesEndpoint}/${pokemonID}.png`

  return <img src={source} alt={pokemonID} width={width} />
};

export default OfficialArtwork;