import React from 'react';
import './Login.scss';
import { gql, useLazyQuery } from '@apollo/client';

import { CLIENT_ID, REDIRECT_URI } from '../../config/config';
import githubIcon from '../../assets/images/GithubIcon.png';

const GET_USER_CODE = gql`
  query {
    githubLoginUrl
  }
`;

function Login() {
  const [getUsersCode, { loading, data }] = useLazyQuery(GET_USER_CODE);

  if (loading) return <p>Loading ...</p>;
  if (data) {
    console.log(data.githubLoginUrl);
  }
  return (
    <div>
      <div className='githubLogin' onClick={() => getUsersCode()}>
        <img
          className='githubIcon'
          src={githubIcon}
          alt='this is a github icon'
          width='30px'
          height='30px'
        />
        Login with Github
      </div>
    </div>
  );
}

export default Login;
