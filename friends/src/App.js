import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import LoginForm from './components/Login'
import Friends from './components/Friends';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/friends">Friends list</Link>
          </li>
        </ul>
        <Switch>
          <ProtectedRoute exact path='/friends' component={Friends} />
          <Route path='/login' component={LoginForm} />
          <Route component={LoginForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
