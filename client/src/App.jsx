import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './bootstrap.min.css';
import './index.css';

import Home from './components/Home';
import Navigation from './components/Navigation';
import Login from './components/Login';
import Signup from './components/Signup';
import Forgot from './components/Forgot';
import Reset from './components/Reset';

import Search from './components/Search';

import { AuthProvider } from './context/AuthState';

const App = () =>  {
  return (
    <AuthProvider>
      <Router>
        <div className='app'>
          <Navigation />

          <div className='layout'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/signup' component={Signup} />
              <Route exact path='/forgot' component={Forgot} />
              <Route exact path='/reset/:token' component={Reset} />
              <Route exact path='/search' component={Search} />
            </Switch>
          </div>

          {/* <div className='layout'>
            <div className='wrapper'>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/signup' component={Signup} />
                <Route exact path='/forgot' component={Forgot} />
                <Route exact path='/reset/:token' component={Reset} />
                <Route exact path='/search' component={SearchInformation}/>
              </Switch>
            </div>
            <Route exact path='/search' component={Search} />
          </div> */}
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;