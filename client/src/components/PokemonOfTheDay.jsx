import React, { useEffect } from 'react';
import pokedex from '../services/pokeapi';

const pokemons = [
];

//limit = 898

const PokemonOfTheDay = () => {
  return (
    <div className='wrapper text-center pokemon-of-the-day'>
      <h4 className='mt-0 mb-1'>Pokemon of the <span className='poke-info'>Day</span></h4>
    </div>
  );
};

export default PokemonOfTheDay;