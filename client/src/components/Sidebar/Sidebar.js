import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Sidebar = () => {
  
  const username = useSelector((state) => state.authenticated.userName);
  console.log('username:', username)

  return (
    <div>
      <h4>{username}</h4>
      <Router>
          <Link to={`/member/${username}/events`}>
          <button className='btn btn-success mt-5'>EVENTS</button>
          </Link>
          <div>
          <Link to={`/member/${username}/myevents`}>
          <button className='btn btn-success mt-5'>MY EVENTS</button>
          </Link>
          </div>
          <div>
          <Link to={`/member/${username}/myevents`}>
          <button className='btn btn-success mt-5'>MY EVENTS</button>
          </Link>
          </div>
      </Router>
    </div>
  );
};

export default Sidebar;
