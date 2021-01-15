import React from 'react';

import { OFFICIAL_ARTWORK_ENDPOINT } from '../config';

const OfficialArtwork = ({ pokemonID, width }) => {
  const source = `${OFFICIAL_ARTWORK_ENDPOINT}/${pokemonID}.png`

  return <img src={source} alt='Random pokemon' width={width} />
};

export default OfficialArtwork;