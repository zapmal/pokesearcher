import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../context/AuthState';

const Home = () => {
  const { 
    isLoggedIn,
    loading, 
    error,
  } = useContext(AuthContext);
  const token = localStorage.getItem('token');

  if (loading && token) return <h3>Loading...</h3>

  if (error) return <h3>There was an error loading the dashboard.</h3>

  return isLoggedIn 
    ? <h3>Welcome back.</h3> 
    : (
      <>
        <h3>Welcome to AniSearcher</h3>
        <p className='text-center mt-3'>
          You can <Link to='/login'>Login</Link> or <Link to='/signup'>create</Link> a new account
          and start searching your favorite mangas and animes.
        </p>
      </>
    )
};

export default Home;