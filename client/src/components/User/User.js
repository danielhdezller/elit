import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

const User = ({ username, firstname, familyname, techstack }) => {
  return (
    <div className='card' style={{ width: '18rem' }}>
      <div className='card-body'>
        <Link>
          <h5 className='card-title'>{username}</h5>
        </Link>
        <h5 className='card-title'>
          {firstname} {familyname}
        </h5>
        <span class='badge badge-pill badge-dark'>{techstack}</span>
      </div>
    </div>
  );
};

export default User;
