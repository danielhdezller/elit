import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const username = useSelector((state) => state.authenticated.userName);
  
  return (
    <div className='sidebar position-absolute' 
    style={{
      backgroundColor: 'rgb(215, 213, 202)',
      bottom: 0,
      top: 53,
      left: -150,
      }}>
      <h4>{username}</h4>
      <Router>
          <Link to={`/member/${username}events`}>
          <button className='btn btn-success mt-5 ' style ={{marginLeft: 20}}>ALL EVENTS</button>
          </Link>
          <div>
          <Link to={`/member/${username}/myevents`}>
          <button className='btn btn-success mt-5' style ={{marginLeft: 20}}>MY EVENTS</button>
          </Link>
          </div>
         <div>
          <Link to={`/member/${username}/myevents`}>
          <button className='btn btn-success mt-5' style ={{marginLeft: 20}} >EDIT PROFILE</button>
          </Link>
          </div>
          <Link to={`/member/${username}/events`}>
          <button className='btn btn-success mt-5' style ={{marginBottom: 50, marginLeft: 20}}>COMMUNITY</button>
          </Link>
      </Router>
    </div>
  );
};

export default Sidebar;
