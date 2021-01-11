import React, { useEffect, useState } from 'react';
import pokedex from '../services/pokeapi';

const SearchResult = ({ result: pokemon }) => {

  console.log(pokemon);

  return pokemon 
    ? (
      <div>
        <p className='separation-line text-muted'>We found it!</p>
        <div className='poke-result mt-3 '>
          <h4>
            {pokemon.name.toUpperCase()}
          </h4>
        </div>
        <div className='poke-result'>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>
            {pokemon.types.length > 1 ? 'Types: ' : 'Type: '}{pokemon.types.map(type => (
              `${type.type.name.charAt(0).toUpperCase()}${type.type.name.slice(1)}`
            )).join(', ')}
          </li>
          <li className='list-group-item'>
            Abilities: 
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
          <li className='list-group-item'>Base Experience: {pokemon.base_experience}</li>
          <li className='list-group-item'>Weight: {pokemon.weight}</li>
        </ul>
      </div>
    ) 
    : (
      <p className='text-muted text-center mt-1 mb-0'>
        Start searching!
      </p>
    );
};

const AbilityDescription = ({ name }) => {
  const [description, setDescription] = useState('');

  useEffect(() => {
    pokedex.getAbilityByName(name)
      .then(abilityInformation => setDescription(abilityInformation.effect_entries[1].effect));
  }, []);

  console.log(description);

  return description;
};

export default SearchResult;