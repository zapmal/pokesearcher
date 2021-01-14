import React, { useState } from 'react';
import pokedex from '../services/pokeapi';

const SearchForm = ({ setResult, history, setHistory }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (!searchTerm) {
        const defaultPokemon = await pokedex.getPokemonByName('psyduck');
        const defaultSpecies = await pokedex.getPokemonSpeciesByName(defaultPokemon.name);

        setResult({
          pokemon: defaultPokemon,
          species: defaultSpecies
        });
      } else {
        const pokemon = await pokedex.getPokemonByName(searchTerm.toLowerCase());
        const species = await pokedex.getPokemonSpeciesByName(pokemon.name);

        setResult({
          pokemon,
          species
        });
        setHistory(pokemon.name);
      }
    } catch (error) {
      const errorPokemon = await pokedex.getPokemonByName('pikachu');
      const errorSpecies = await pokedex.getPokemonSpeciesByName(errorPokemon.name);

      setResult({
        pokemon: errorPokemon,
        species: errorSpecies
      });
    }
  };

  return (
    <div className='wrapper search'>

      <SearchInformation />

      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <input 
            type='text' 
            className='form-control mt-2' 
            placeholder='Charizard, Lucario, etc.' 
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </div>

        <div className='text-right'>
          <button className='btn text-right btn-danger'>Search</button>
        </div>
      </form>
    </div>
  );
};

const SearchInformation = () => {
  const smallTextClassNames = 'form-text text-muted text-left mb-1';
  return (
    <>
      <h3 className='mb-2 mt-0'><span className='poke-info'>Poke</span>Search</h3>
      <p className='text-muted text-left mt-1 mb-2'>Information about the search.</p>
      <small className={smallTextClassNames}>
        - If you <span className='text-danger'>don't provide a name</span>, 
        or if you <span className='text-danger'>provide a wrong one</span>, we'll return you the best of the best. 
      </small>
    </>
  );
};


export default SearchForm;