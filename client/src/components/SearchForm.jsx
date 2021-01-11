import React, { useState } from 'react';
import pokedex from '../services/pokeapi';

const SearchForm = (props) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const pokemon = await pokedex.getPokemonByName(searchTerm);
    console.log(pokemon);

    if (!pokemon) {
      props.setResult(await pokedex.getPokemonByName('psyduck'));
    } else {
      props.setResult(pokemon);
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
        - If you don't provide a name (that is, an empty search) we'll return the best pokemon, ever.
      </small>
    </>
  );
};


export default SearchForm;