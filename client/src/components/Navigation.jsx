import React, { useEffect, useContext } from 'react';
import { Link, withRouter } from 'react-router-dom';

import { AuthContext } from '../context/AuthState';

const Navigation = (props) => {
  const { isLoggedIn, getUser, logout, loading } = useContext(AuthContext);
  const token = localStorage.getItem('token');

  useEffect(() => {
    getUser();
  }, [props.location.pathname]);

  if (loading && token) {
    return <p>Loading...</p>
  }

  return ( 
    <nav className='navbar navbar-expand navbar-light fixed-top'>
      <div className='container'>
        <Link to='/' className='navbar-brand'>Home</Link>
        <div className='collapse navbar-collapse'>
          {isLoggedIn 
          ? (
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item'>
                <Link 
                  to='/login' 
                  onClick={() => { 
                    logout();
                    props.history.push('/login');
                  }} 
                  className='nav-link'
                >
                  Logout
                </Link>
              </li>
            </ul>
          )
          : (
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item'>
                <Link to='/login' className='nav-link'>Login</Link>
              </li>
              <li className='nav-item'>
                <Link to='/signup' className='nav-link'>Signup</Link>
              </li>
            </ul>
          )
          }
        </div>
      </div>
    </nav>
    );
};

export default withRouter(Navigation);