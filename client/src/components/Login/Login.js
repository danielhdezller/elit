import React, { useState } from 'react';
// import './Login.scss';
import { useLazyQuery, useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';
// import githubIcon from '../../assets/images/GithubIcon.png';
import { GET_USER_CODE } from '../../GraphQL/querys.js';
import { GET_USER_DATA } from '../../GraphQL/mutations';
import { Button } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import { makeStyles } from '@material-ui/core/styles';
import Logout from '../Logout/Logout';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const Login = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const [code, setcode] = useState(false);

  const history = useHistory();
  const [getUsersCode, { data }] = useLazyQuery(GET_USER_CODE);
  if (data) {
    console.log('data:', data);
    window.location.href = data.githubLoginUrl;
  }
  const userCode = history.location.search.split('=').slice(1).join();
  const [mutateUser, { data: response }] = useMutation(GET_USER_DATA, {
    onCompleted: ({ mutateUser }) => {
      history.push('/profile');
    },
  });
  if (userCode && !code) {
    mutateUser({
      variables: { code: userCode },
    });
    setcode(true);
    dispatch({
      type: 'UPDATE_AUTHENTICATION',
      payload: true,
    });
  }
  if (response) {
    console.log('response:', response);
  }
  return (
    <Button
      onClick={() => getUsersCode()}
      variant='contained'
      color='secondary'
      className={classes.button}
      startIcon={<GitHubIcon />}
    >
      {code ? <Logout /> : 'LOGIN'}
    </Button>
  );
<<<<<<< HEAD
};
=======
}

>>>>>>> 209016db315177ae83f25550fc9b10bf385b311a
export default Login;
