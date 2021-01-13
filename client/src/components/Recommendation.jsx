import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import pokedex from '../services/pokeapi';

import { AuthContext } from '../context/AuthState';

const Recommendation = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return isLoggedIn 
    ? (
      <div className='wrapper recommendation text-center'>
        <h4 className='mt-0 mb-1'>Recommendation</h4>
        <small className='mb-2'>All recommendations are based on your <strong>latest search</strong>.</small>
        <p>
          We've seen that you like to search { '<type>' } pokemons, why don't you try searching 
          { '<example>' } in the <strong><Link style={{ color: '#ffffff' }}  to='/search'>search</Link></strong>.
        </p>
      </div>
    )
    : (
      <div className='wrapper recommendation text-center'>
        <h4 className='mt-0 mb-1 '>Recommendation</h4>
        <small className='mb-2'>All recommendations are based on your <strong>latest search</strong>.</small>
        <p className=''>
          Start searching and discover the wonderful world of <strong>recommendations.</strong>
        </p>
      </div>
    );
};

export default Recommendation;