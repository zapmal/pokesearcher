import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import pokedex from '../services/pokeapi';

import { AuthContext } from '../context/AuthState';

const SearchHistory = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return isLoggedIn 
    ? (
      <div className='wrapper recommendation text-center'>
        <h4 className='mt-0 mb-1'>Search History</h4>
        <p className=''>
        </p>
      </div>
    )
    : (
      <div className='wrapper recommendation text-center'>
        <h4 className='mt-0 mb-1 '>Search History</h4>
        <p className=''>
          
        </p>
      </div>
    );
};

export default SearchHistory;