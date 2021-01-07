import React, { createContext, useReducer } from 'react';
import apiClient from '../services/api';

import AuthReducer from './AuthReducer';

const initialState = {
  user: null,
  isLoggedIn: false,
  loading: true,
  error: null
};

const AuthContext = createContext(initialState);

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const getUser = () => {
    const token = localStorage.getItem('token');
    try {
      if (token) {
        apiClient.get('/user', { headers: { Authorization: `Bearer ${token}`}})
          .then(response => {
            if (response.status === 200) {
              dispatch({
                type: 'AUTH_USER',
                payload: response.data
              });
            }
        });
      }
    } catch (error) {
      dispatch({
        type: 'AUTH_ERROR',
        payload: error
      });
    };
  };

  const login = (token) => {
    localStorage.setItem('token', token);
    dispatch({ type: 'AUTH_LOGIN' });
  };

  const logout = () => {
    localStorage.clear();  
    dispatch({ type: 'AUTH_LOGOUT' });
  };

  return (
    <AuthContext.Provider value={{ 
      getUser, 
      login,
      logout,
      user: state.user,
      loading: state.loading,
      error: state.error,
      isLoggedIn: state.isLoggedIn 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export {
  AuthContext,
  AuthProvider
};