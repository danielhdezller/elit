import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    backgroundColor: '#25A2B8',
    color: '#fff',
  },
}));

function Logout() {
  const dispatch = useDispatch();
  const history = useHistory();
  function logout() {
    dispatch({
      type: 'UPDATE_AUTHENTICATION',
      payload: false,
    });
    history.push('/');
  }
  const classes = useStyles();
  return (
    <div>
      <Button
        onClick={() => logout()}
        variant='contained'
        // color='secondary'
        className={classes.button}
        startIcon={<GitHubIcon />}
      >
        LOGOUT
      </Button>
    </div>
  );
}

export default Logout;
