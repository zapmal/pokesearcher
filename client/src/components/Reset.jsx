import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import apiClient from '../services/api';

const Reset = (props) => {
  const [values, setValues] = useState();
  const [error, setError] = useState();
  const [isReseted, setIsReseted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const token = props.match.params.token;
    const data = {
      token,
      ...values
    };

    apiClient.post('/reset', data)
      .then(response => {
        console.log(response);
        setIsReseted(true);
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

  return isReseted 
    ? (
      <>
        <h4 className='mb-3 text-center'>Password successfully changed</h4>
        <p className='text-center'>Go and <Link to='/login'>login</Link> to start!</p>
      </>
    )
    : (
      <form onSubmit={handleSubmit}>
        <h3 className='mb-4'>Reset your password</h3>

        <div className='form-group'>
          <label htmlFor='password'>New Password</label>
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
          <label htmlFor='password-c'>Confirm your new password</label>
          <input 
            id='password-c' 
            type='password' 
            className='form-control' 
            placeholder='Confirm your password' 
            name='password_confirm'
            onChange={onChange}
          />
        </div>

        <button className='btn btn-block btn-primary'>Save new password</button>

        {error && (
          <div className='alert alert-danger mt-4' role='alert'>
            {error}
          </div>
        )}
      </form>
    );
};

export default Reset;