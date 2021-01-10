import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import apiClient from '../services/api';

import { AuthContext } from '../context/AuthState';

const Login = (props) => {
  const [values, setValues] = useState();
  const [error, setError] = useState();
  const { login } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    apiClient.post('/login', values)
      .then(response => {
        login(response.data.token);
        props.history.push('/');
      })
      .catch(error => {
        setError(error.response.data.message);
      });
  };

  const onChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return (
    <div className='wrapper'>
      <form onSubmit={handleSubmit}>
        <h3>Login</h3>

        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input 
            id='email' 
            type='email' 
            className='form-control' 
            placeholder='Email' 
            name='email'
            onChange={onChange}
          />
        </div>

        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input 
            id='password' 
            type='password' 
            className='form-control' 
            placeholder='Password' 
            name='password'
            onChange={onChange}
          />
        </div>
        <button className='btn btn-block btn-danger'>Login</button>

        <p className='forgot-password text-center'>
          Forgot your password? <Link to='/forgot'>Click here</Link>
        </p>

        {error && (
          <div className='alert alert-danger mt-4' role='alert'>
            {error}
          </div>
        )}
      </form>
    </div>
    );
};

export default Login;