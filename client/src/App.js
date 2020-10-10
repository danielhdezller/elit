import React from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './components/Dashboard/Dashboard';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import users from './mockData';
import UserProfile from './components/UserProfile/UserProfile';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' render={() => <Home users={users} />} />
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/profile' component={Profile} />
        <Route
          exact
          path='/members/:name'
          component={UserProfile}
          render={() => <UserProfile users={users} />}
        />
      </Switch>
    </Router>
  );
}

export default App;
