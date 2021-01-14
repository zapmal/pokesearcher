import React, { useState } from 'react';

import useHistory from '../hooks/useHistory';

import SearchForm from './SearchForm';
import SearchResult from './SearchResult';
import SearchHistory from './SearchHistory';

const Search = () => {
  const [result, setResult] = useState('');
  const [storedHistory, setHistory] = useHistory();

  return (
    <>
      <SearchForm setResult={setResult} history={storedHistory} setHistory={setHistory} />
      <SearchResult pokemon={result.pokemon} species={result.species} />
      <SearchHistory history={storedHistory}/>
    </>
  );
};

export default Search;