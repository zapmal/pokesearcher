import React, { useState } from 'react';

import SearchForm from './SearchForm';
import SearchResult from './SearchResult';

const HocSearch = () => {
  const [result, setResult] = useState('');

  return (
    <>
      <SearchForm setResult={setResult} />
      <SearchResult result={result}/>
    </>
  );
};

export default HocSearch;