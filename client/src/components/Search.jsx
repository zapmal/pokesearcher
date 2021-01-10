import React, { useState } from 'react';
import pokedex from '../services/pokeapi';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [result, setResult] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(searchTerm);
    console.log(pokedex);

    setResult(searchTerm);
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

        <button className='btn btn-block btn-danger'>Search</button>
      </form>

      {result && <SearchResults />}
    </div>
  );
};

const SearchInformation = () => {
  const smallTextClassNames = 'form-text text-muted text-left mb-1';
  return (
    <>
      <h3 className='mb-2 mt-0'>Searcher</h3>
      <p className='text-muted text-center mt-1 mb-2'>Information about the search.</p>
      <small className={smallTextClassNames}>
        - 
      </small>
      <small className={smallTextClassNames}>
        - 
      </small>
      <small className={smallTextClassNames}>
        - 
      </small>
    </>
  );
};

const SearchResults = (props) => {
  return (
    <div className='inner'>
      <p>1</p>
    </div>
  );
};

export default Search;