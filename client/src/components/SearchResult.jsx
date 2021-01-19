import React, { useEffect, useState } from 'react';
import pokedex from '../services/pokeapi';

import HalfColorizedLabel from './HalfColorizedLabel';
import OfficialArtwork from './OfficialArtwork';

import capitalize from '../utils/capitalize';
import captureRate from '../utils/captureRate';
import { POKEMON_CRIES_ENDPOINT } from '../config';

const SearchResult = ({ pokemon, species }) => {

  // console.log(pokemon);
  // console.log(species);

  const playPokemonCry = (pokemon) => {
    const cry = new Audio(`${POKEMON_CRIES_ENDPOINT}/${pokemon}.mp3`);

    if (!cry) return;

    cry.currentTime = 0;
    cry.play();
  };

  return pokemon 
    ? (
      <div className='poke-result-container'>
        <div className='poke-result mt-3'>
          <HalfColorizedLabel text={pokemon.name} color={species.color.name} />
        </div>

        <div className='poke-result'>
          <OfficialArtwork pokemonID={pokemon.id} width='250px' />
        </div>

        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>
            <strong className='poke-info'>{pokemon.types.length > 1 ? 'Types: ' : 'Type: '}</strong>
            {pokemon.types.map(type => capitalize(type.type.name)).join(', ')}
          </li>

          <li className='list-group-item'>
            <strong className='poke-info'>Abilities:</strong>
            {pokemon.abilities.map((ability, index) => (
              <ul className='list-group list-group-flush' key={index}>
                <li className='list-group-item'>
                  <strong>{ability.ability.name.toUpperCase()} </strong>
                  <small className='text-muted'>
                    {ability.is_hidden ? '- Hidden ability.' : ''}
                  </small>
                </li>
                <li className='list-group-item'>
                  <AbilityDescription name={ability.ability.name} />
                </li>
              </ul>
            ))}
          </li>

          <li className='list-group-item'>
            <strong className='poke-info'>Base Experience: </strong>
            {pokemon.base_experience}
          </li>

          <li className='list-group-item'>
            <strong className='poke-info'>Weight: </strong>
            {pokemon.weight}kg
          </li>

          <li className='list-group-item'>
            <strong className='poke-info'>Base stats:</strong>
            <ul className='list-group list-group-flush'>
              {pokemon.stats.map((stat, index) => (
                <li className='list-group-item' key={index}>
                  <strong className='text-center'>{stat.stat.name.toUpperCase()}</strong>: {stat.base_stat}
                </li>
              ))}
            </ul>
          </li>

          <li className='list-group-item'>
            <strong className='poke-info'>Sprites: </strong>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'>
                <img src={pokemon.sprites.front_default} alt={`${pokemon.name} front sprite`} />
                <img src={pokemon.sprites.back_default} alt={`${pokemon.name} back sprite`}/>
              </li>
              <li className='list-group-item'>
                <img src={pokemon.sprites.front_shiny} alt={`${pokemon.name} front sprite`} />
                <img src={pokemon.sprites.back_shiny} alt={`${pokemon.name} back sprite`}/>
              </li>
            </ul>
          </li>

          <li className='list-group-item'>
            <strong className='poke-info'>Capture rate: </strong>{species.capture_rate}
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'>
                Using Pokeballs: {captureRate(species.capture_rate).pokeball}%
              </li>

              <li className='list-group-item'>
                Using Greatball: {captureRate(species.capture_rate).greatball}%
              </li>

              <li className='list-group-item'>
                Using any other ball: {captureRate(species.capture_rate).other}%
              </li>
            </ul>
          </li>

          <li className='list-group-item'>
            <strong className='poke-info mr-3'>Cry:</strong>
            <button className='btn btn-danger' onClick={() => playPokemonCry(pokemon.name)}>Play</button>
          </li>

          <li className='list-group-item'>
          </li>
        </ul>
      </div>
    ) 
    : (
      <p className='text-muted text-center mt-1 mb-0'>
        Click that button, and start!
      </p>
    );
};



const AbilityDescription = ({ name }) => {
  const [description, setDescription] = useState('');

  useEffect(() => {
    pokedex.getAbilityByName(name)
      .then(abilities => {
        const englishAbilities = abilities
          .effect_entries
          .filter(entry => entry.language.name === 'en');
        
        setDescription(englishAbilities[0].effect);
      });
  }, []);

  return description;
};

export default SearchResult;