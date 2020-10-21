import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Login from '../Login/Login';
import Logout from '../Logout/Logout';
import { useSelector } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import 'fontsource-roboto';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Sidebar from '../Sidebar/Sidebar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontFamily: 'Rubik Mono One, sans-serif',
  },
  bg: {
    backgroundColor: '#000100',
  },
  titleColor: {
    color: '#25A2B8'
  }
}));

const Navbar = (props) => {
  const classes = useStyles();
  const authenticated = useSelector((state) => state.authenticated);
  const dispatch = useDispatch();

  function onClickHandler() {
    dispatch({ type: 'TOGGLE', data: !authenticated.display });
  }

  return (
    <div className={classes.root}>
      <AppBar position='static' className={classes.bg}>
        <Toolbar>
          {authenticated.display ? <Sidebar /> : ''}
          {authenticated.authenticated ? (
            <IconButton
              onClick={onClickHandler}
              edge='start'
              className={classes.menuButton}
              // color='inherit'
              aria-label='menu'
            >
              <MenuIcon />
            </IconButton>
          ) : null}
          <Typography variant='h4' className={classes.title}>
            <Link to='/' className={classes.titleColor}>Elit</Link>
          </Typography>
          {authenticated.authenticated ? <Logout /> : <Login />}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
