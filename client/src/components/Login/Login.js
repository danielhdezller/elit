import React, { useState } from 'react';
import './Login.scss';
import { useLazyQuery, useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import githubIcon from '../../assets/images/GithubIcon.png';
import { GET_USER_CODE } from '../../GraphQL/querys.js';
import { GET_USER_DATA } from '../../GraphQL/mutations';

function Login() {
  const history = useHistory();
  const [getUsersCode, { data }] = useLazyQuery(GET_USER_CODE);
  if (data) {
    console.log('data:', data);
    window.location.href = data.githubLoginUrl;
  }
  const userCode = history.location.search.split('=').slice(1).join();
  const [mutateUser, { data: response }] = useMutation(GET_USER_DATA);
  if (userCode && !response?.authorizeWithGithub?.user?.name) {
    mutateUser({
      variables: { code: userCode },
      //MO THIS DOSENT WORK PROPERLY
      // onCompleted({ mutateUser }) {
      //   // history.push('/profile');
      // },
    });
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
