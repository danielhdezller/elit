import React from 'react';
import './Login.scss';
import { CLIENT_ID, REDIRECT_URI } from '../../config/config';
import githubIcon from '../../assets/images/GithubIcon.png';

function Login() {
  return (
    <div>
      <a
        className='githubLink'
        href={`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=user&redirect_uri=${REDIRECT_URI}`}
      >
        <div className='githubLogin'>
          <img
            className='githubIcon'
            src={githubIcon}
            alt='this is a github icon'
            width='30px'
            height='30px'
          />
          Login with Github
        </div>
      </a>
    </div>
  );
}

export default Login;
