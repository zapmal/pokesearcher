import React, { useState } from 'react';
import apiClient from '../services/api';

const Signup = (props) => {
  const [values, setValues] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    apiClient.post('/register', values)
      .then(response => {
        props.history.push('/login');
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
      <h3>Sign Up</h3>

      <div className='form-group'>
        <label htmlFor='firstname'>First Name</label>
        <input 
          id='firstname' 
          type='text' 
          className='form-control' 
          placeholder='First name' 
          name='first_name'
          onChange={onChange}
        />
      </div>

      <div className='form-group'>
        <label htmlFor='lastname'>Last Name</label>
        <input 
          id='lastname' 
          type='text' 
          className='form-control' 
          placeholder='Last name' 
          name='last_name'
          onChange={onChange}
        />
      </div>

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

      <div className='form-group'>
        <label htmlFor='password-c'>Confirm Password</label>
        <input 
          id='password-c' 
          type='password' 
          className='form-control' 
          placeholder='Confirm your password' 
          name='password_confirm'
          onChange={onChange}
        />
      </div>

      <button className='btn btn-block btn-primary'>Sign Up</button>
    </form>
  );
};

export default Signup;