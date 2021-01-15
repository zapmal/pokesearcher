import React, { useEffect, useContext } from 'react';
import { Link, withRouter } from 'react-router-dom';

import { AuthContext } from '../context/AuthState';

import logo from '../images/logo.png';

const Navigation = (props) => {
  const { isLoggedIn, getUser, logout } = useContext(AuthContext);

  useEffect(() => {
    getUser();
  }, [props.location.pathname]);

  return ( 
    <nav className='navbar navbar-expand navbar-light fixed-top'>
      <div className='container'>
        <Link to='/' className='navbar-brand'>Home</Link>
        <img src={logo} alt='logo' width='40px' />
        <div className='collapse navbar-collapse'>
          {isLoggedIn 
          ? (
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item'>
                <Link 
                  to='/' 
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