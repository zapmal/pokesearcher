import React, { useEffect, useContext } from 'react';

import { AuthContext } from '../context/AuthState';

const Home = (props) => {
  const { 
    getUser, 
    loading, 
    error,
  } = useContext(AuthContext);
  const token = localStorage.getItem('token');

  useEffect(() => {
    getUser();
  }, []);

  if (loading && token) return <h3>Loading...</h3>

  if (error) return <h3>There was an error loading the dashboard.</h3>

  return (
    <h3>Ayo</h3>
  );
};

export default Home;