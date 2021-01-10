import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../context/AuthState';

import Search from './Search';

const Home = () => {
  const { 
    isLoggedIn,
    loading, 
    error,
  } = useContext(AuthContext);
  const token = localStorage.getItem('token');

  if (loading && token) {
    return (
      <div className='wrapper'>
        <h3>Loading...</h3>
      </div>
    );
  }

  if (error) return <h3>There was an error loading the dashboard.</h3>

  return isLoggedIn 
    ? (
      <div className='wrapper'>
        <h3>Hello buddy</h3>
      </div>
    ) 
    : (
      <div className='wrapper'>
        <h3>Welcome to <span className='poke-info'>Poke</span>Searcher</h3>
        <p className='text-center mt-3'>
          You can <Link className='poke-link' to='/login'>login</Link> or <Link className='poke-link' to='/signup'>create</Link> a new account
          and start searching your favorite pokemons.
        </p>
      </div>
    )
};

export default Home;