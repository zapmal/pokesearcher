import React, { useEffect, useState } from 'react';
import pokedex from '../services/pokeapi';

import CustomLabel from './CustomLabel';

import capitalize from '../utils/capitalize';
import captureRate from '../utils/captureRate';

const SearchResult = ({ pokemon, species }) => {

  console.log(pokemon);
  console.log(species);

  return pokemon 
    ? (
      <div className='poke-result-container'>
        <div className='poke-result mt-3 '>
          <h4>
            <CustomLabel color={species.color.name}>
              {pokemon.name.slice(0, Math.floor(pokemon.name.length / 2)).toUpperCase()}
            </CustomLabel>
            {pokemon.name.slice(Math.floor(pokemon.name.length / 2)).toUpperCase()}
          </h4>
        </div>

        <div className='poke-result'>
          <OfficialArtwork pokemonID={pokemon.id} />
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
          </li>
        </ul>
      </div>
    ) 
    : (
      <p className='text-muted text-center mt-1 mb-0'>
        Start searching!
      </p>
    );
};


const OfficialArtwork = ({ pokemonID }) => {
  const imagesEndpoint = 'https://pokeres.bastionbot.org/images/pokemon';
  const source = `${imagesEndpoint}/${pokemonID}.png`

  return <img src={source} alt={pokemonID} width='250px' />
};

const AbilityDescription = ({ name }) => {
  const [description, setDescription] = useState('');

  useEffect(() => {
    pokedex.getAbilityByName(name)
      .then(abilityInformation => setDescription(abilityInformation.effect_entries[1].effect));
  }, []);

  return description;
};

export default SearchResult;