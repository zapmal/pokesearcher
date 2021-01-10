import React, { useState } from 'react';
import apiClient from '../services/api';

const Forgot = () => {
  const [email, setEmail] = useState();
  const [status, setStatus] = useState({ message: '', cls: '' });

  const handleSubmit = (event) => {
    event.preventDefault();
    apiClient.post('/forgot', { email })
      .then(response => {
        setStatus({
          message: 'We sent you an email! Check it~',
          cls: 'alert alert-success mt-4'
        })
      })
      .catch(error => {
        setStatus({ 
          message: error.response.data.message,
          cls: 'alert alert-danger mt-4'
        });
      });
  };

  return (
    <div className='wrapper'>
      <form onSubmit={handleSubmit}>
        <h3 className='mb-4'>Forgot your password?</h3>

        <div className='form-group'>
          <input 
            type='email' 
            className='form-control' 
            placeholder='Email' 
            name='email'
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>

        <button className='btn btn-block btn-danger'>Send</button>

        {status.message && (
          <div className={status.cls} role='alert'>
            {status.message}
          </div>
        )}
      </form>
    </div>
    );
};

export default Forgot;