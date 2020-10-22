import React, { useState } from 'react';
import { useLazyQuery, useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import { GET_USER_CODE } from '../../GraphQL/querys.js';
import { GET_USER_DATA } from '../../GraphQL/mutations';
import { Button } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    backgroundColor: '#25A2B8',
    color:'#fff',
  },
}));

const Login = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const [code, setcode] = useState(false);

  const history = useHistory();
  const [getUsersCode, { data }] = useLazyQuery(GET_USER_CODE);
  if (data) {
    window.location.href = data.githubLoginUrl;
  }
  const userCode = history.location.search.split('=').slice(1).join();
  const [mutateUser, { data: response }] = useMutation(GET_USER_DATA);
  if (userCode && !code) {
    mutateUser({
      variables: { code: userCode },
    });
    setcode(true);
  }
  if (response) {
    history.push(`/member/${response.authorizeWithGithub.user.githubLogin}`);
    let userLoged = {
      authenticated: true,
      userId: response.authorizeWithGithub.user.id,
      userName: response.authorizeWithGithub.user.name,
      githubLogin: response.authorizeWithGithub.user.githubLogin,
      email: response.authorizeWithGithub.user.email,
      avatar: response.authorizeWithGithub.user.avatar,
    };
    dispatch({
      type: 'UPDATE_AUTHENTICATION',
      payload: userLoged,
    });
  }
  return (
    <Button
      onClick={() => getUsersCode()}
      variant='contained'
      // color='white'
      className={classes.button}
      startIcon={<GitHubIcon />}
    >
      LOGIN
    </Button>
  );
};
export default Login;
