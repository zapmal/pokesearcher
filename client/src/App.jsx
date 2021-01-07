import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './bootstrap.min.css';
import './index.css';

import Home from './components/Home';
import Navigation from './components/Navigation';
import Login from './components/Login';
import Signup from './components/Signup';

import { AuthProvider } from './context/AuthState';

const App = () =>  {
  return (
      <Router>
        <AuthProvider>
          <div className='app'>
            <Navigation />

            <div className='auth-wrapper'>
              <div className='auth-inner'>
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/login' component={Login} />
                  <Route exact path='/signup' component={Signup} />
                </Switch>
              </div>
            </div>
          </div>
        </AuthProvider>
      </Router>
  );
}

export default App;
