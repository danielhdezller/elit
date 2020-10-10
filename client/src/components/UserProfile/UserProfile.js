import React from 'react';

const UserProfile = ({ match, users }) => {
  const name = match.params.name;

  users.map((user) => {
    if (user.userName === name) {
      return (
        <div>
          <h1>
            {user.name} {user.familyName}
          </h1>
          hi {name}!<h3>{user.userName}</h3>
          {usersProfile}
          <h5>{user.techStack}</h5>
        </div>
      );
    }
  });
};
export default UserProfile;
