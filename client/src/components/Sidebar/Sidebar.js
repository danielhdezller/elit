import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Sidebar = ({username}) => {
  return (
    <div>
      <h1>User Name</h1>
      <Router>
          <Link to={`/members/${username}/events`}>
          <button className='btn btn-success mt-5'>EVENTS</button>
          </Link>
          <div>
          <Link to={`/members/${username}/myevents`}>
          <button className='btn btn-success mt-5'>MY EVENTS</button>
          </Link>
          </div>
          <div>
          <Link to={`/members/${username}/myevents`}>
          <button className='btn btn-success mt-5'>MY EVENTS</button>
          </Link>
          </div>
      </Router>
    </div>
  );
};

export default Sidebar;
