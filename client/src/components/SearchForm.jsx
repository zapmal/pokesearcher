import React, { useState } from 'react';
import pokedex from '../services/pokeapi';

const SearchForm = ({ setResult }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const pokemon = await pokedex.getPokemonByName(searchTerm.toLowerCase());

      if (!pokemon) {
        setResult(await pokedex.getPokemonByName('psyduck'));
      } else {
        setResult(pokemon);
      }
    } catch (error) {
      setResult(await pokedex.getPokemonByName('psyduck'));
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
        or if you <span className='text-danger'>provide a wrong one</span>, we'll return the best pokemon, ever.
      </small>
    </>
  );
};


export default SearchForm;