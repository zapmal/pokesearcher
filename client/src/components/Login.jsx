import React, { useState, useContext } from 'react';
import apiClient from '../services/api';

import { AuthContext } from '../context/AuthState';

const Login = (props) => {
  const [values, setValues] = useState();
  const { login } = useContext(AuthContext);


  const handleSubmit = (event) => {
    event.preventDefault();

    apiClient.post('/login', values)
      .then(response => {
        login(response.data.token);
        props.history.push('/');
      })
      .catch(error => console.error(error));
  };

  const onChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return (
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
      <button className='btn btn-block btn-primary'>Login</button>
    </form>
    );
};

export default Login;