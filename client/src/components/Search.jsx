import React, { useState } from 'react';

import SearchForm from './SearchForm';
import SearchResult from './SearchResult';
import SearchHistory from './SearchHistory';

const Search = () => {
  const [result, setResult] = useState('');

  return (
    <>
      <SearchForm setResult={setResult} />
      <SearchResult pokemon={result.pokemon} species={result.species} />
      <SearchHistory />
    </>
  );
};

export default Search;