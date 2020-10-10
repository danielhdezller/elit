import React from 'react';
import Filtering from '../Filtering/Filtering';
import User from '../User/User';

const Home = ({ users }) => {
  const usersList = users.map((user) => (
    <User
      username={user.userName} 
      firstname={user.name}
      familyname={user.familyName}
      techstack={user.techStack}
    />
  ));
  return (
    <div>
      <h1>Welcome to Elite</h1>
      <Filtering />
      {usersList}
    </div>
  );
};

export default Home;
