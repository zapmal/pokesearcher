import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import Loading from './Loading';

import { AuthContext } from '../context/AuthState';

const Home = () => {
  const { 
    isLoggedIn,
    loading, 
    error,
    user,
  } = useContext(AuthContext);
  const token = localStorage.getItem('token');

  if (loading && token) {
    return (
      <div className='wrapper text-center'>
        <Loading color={'#f91c5e'}/> 
      </div>
    );
  }

  if (error) return <h3>There was an error loading the dashboard.</h3>

  return isLoggedIn 
    ? (
      <div className='wrapper'>
        <h3>Hello, {user.first_name}.</h3>
        <div className='text-center mt-2'>
          <p>Welcome again to PokeSearcher!</p>

          <div className='text-center'>
          <Link className='btn btn-danger btn-block' to='/search'>Start searching now</Link>
          </div>
        </div>
      </div>
    ) 
    : (
      <div className='wrapper'>
        <h3>Welcome to <span className='poke-info'>Poke</span>Searcher</h3>
        <p className='text-center mt-3'>
          <span className='poke-info'>Poke</span>Searcher is a modern pokemon searcher built using
          PokeApi. This is what allows us to have the latest data about your favorite Pokémons! 
          And also to be able of returning all information in an elegant, fast and efficient way.
        </p>

        <p className='text-center mt-3'>
          Here you can bookmark, search and see detailed data, and also see recommendations exclusively for you!
        </p>

        <div className='text-center'>
          <Link className='btn btn-danger btn-block' to='/login'>Login</Link>
        </div>

        <div className='text-center my-2'>
          <p className='m-0'>OR</p>
        </div>

        <div className='text-center'>
          <Link className='btn btn-danger btn-block' to='/register'>Register</Link>
        </div>
      </div>
    )
};

export default Home;