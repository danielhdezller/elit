import React from 'react';
import './App.scss';
import { Provider } from 'react-redux';
import store from './redux/store';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import users from './mockData';
import UserProfile from './components/UserProfile/UserProfile';
import { useQuery } from '@apollo/client';
import { GET_ALL_USERS } from './GraphQL/querys';
import Footer from './components/Footer/Footer'
import Sidebar from './components/Sidebar/Sidebar'

function App() {
  const { loading, error, data } = useQuery(GET_ALL_USERS);

  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route
            exact
            path='/'
            render={() => (
              <Home loading={loading} error={error} users={data?.getUsers} />
            )}
          />
          <Route exact path='/dashboard' component={Dashboard} />
          <Route
            exact
            path='/members/:name'
            render={({ match }) => <UserProfile match={match} users={users} />}
          />
        </Switch>
      </Router>
      <Footer />
    </Provider>
  );
}

export default App;
