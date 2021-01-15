import React, { useEffect, useState } from 'react';

import Loading from './Loading';
import HalfColorizedLabel from './HalfColorizedLabel';
import OfficialArtwork from './OfficialArtwork';

import pokedex from '../services/pokeapi';
import captureRate from '../utils/captureRate';

const RandomPokemon = () => {
  const [pokemon, setPokemon] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const getRandomPokemon = async () => {
    const AMOUNT_OF_POKEMONS = 898;
    const pokemonID = Math.floor(Math.random() * ((AMOUNT_OF_POKEMONS + 1) - 1) + 1);
    console.log(pokemonID);

    try {
      const pokemon = await pokedex.getPokemonByName(pokemonID);
      const species = await pokedex.getPokemonSpeciesByName(pokemon.name);

      return { data: pokemon, species };
    } catch (error) {
      const pokemon = await pokedex.getPokemonByName('psyduck');
      const species = await pokedex.getPokemonSpeciesByName(pokemon.name);

      return { data: pokemon, species };
    }
  };

  useEffect(() => {
    getRandomPokemon().then(pokemon => { 
      setPokemon(pokemon);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className='wrapper text-center random-pokemon'>
      {isLoading 
        ? <Loading color={'#f91c5e'}/> 
        : (
          <>
            <HalfColorizedLabel text={pokemon.data.name} color={pokemon.species.color.name} />
            <OfficialArtwork pokemonID={pokemon.data.id} width='150px'/>
            <div className='mt-1 scale'>
              <small className='text-muted'>Pokeball capture rate: {captureRate(pokemon.species.capture_rate).pokeball}%</small>
            </div>
            <div className='scale'>
              <small className='text-muted'>Greatball capture rate: {captureRate(pokemon.species.capture_rate).greatball}%</small>
            </div>
            <div className='scale'>
              <small className='text-muted'>Any other ball capture rate: {captureRate(pokemon.species.capture_rate).other}%</small>
            </div>
          </>
          )}
    </div>
  );
};

export default RandomPokemon;