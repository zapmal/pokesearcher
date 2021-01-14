import React, { useContext } from 'react';
import { Route, Redirect, } from 'react-router-dom';

import { AuthContext } from '../context/AuthState';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={props =>
        isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect 
            to={{ pathname: '/signup', state: { from:  props.location } }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;