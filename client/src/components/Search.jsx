import React, { useState } from 'react';
import pokedex from '../services/pokeapi';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [result, setResult] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const pokemon = await pokedex.getPokemonByName(searchTerm);
    console.log(pokemon);

    if (!pokemon) {
      setResult(await pokedex.getPokemonByName('psyduck'));
    } else {
      setResult(pokemon);
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

      {result && <SearchResult pokemon={result}/>}
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
        - Huh, looks like we got nothing to tell you, start searching!
      </small>
    </>
  );
};

const SearchResult = ({ pokemon }) => {
  const isDefault = pokemon.name === 'psyduck' ? true : false;
  return (
    <>
      <p className='text-muted text-center mt-3 mb-0'>
        {isDefault 
          ? 'You didn\'t provide a name, so we gave you a nice Psyduck!' 
          : 'We found it!'}  
      </p>
      <div className='poke-result mt-3'>
        <h3 className='mt-3'>{pokemon.name}</h3>
      </div>
    </>
  );
};

export default Search;