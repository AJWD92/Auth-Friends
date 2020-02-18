import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import LoginForm from './components/Login'
import ProtectedRoute from './components/ProtectedRoute';
import FriendsList from './components/FriendsList';


function App() {
 
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/friends-list">Friends list</Link>
          </li>
        </ul>
        <Switch>
          <ProtectedRoute exact path='/friends-list' component={FriendsList} />
          <Route path='/login' component={LoginForm} />
          <Route component={LoginForm} />
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
