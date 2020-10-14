<<<<<<< HEAD
import React from 'react';
import Login from '../Login/Login';
=======
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Login from '../Login/Login'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import 'fontsource-roboto';

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
    backgroundColor: '#000',
  }
}));
>>>>>>> 60995b3ea984c62f3529605b9a3c6a6e1be95549

const Navbar = () => {

  const classes = useStyles();

  return (
<<<<<<< HEAD
    <nav className='navbar bg-dark'>
      <h1 className='text-danger border-white'>Elit</h1>
      <Login />
    </nav>
  );
};
=======
    <div className={classes.root}>
      <AppBar position="static" className={classes.bg}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" className={classes.title}>
            Elit
          </Typography>
            <Login  />
        </Toolbar>
      </AppBar>
    </div>
  )
}
>>>>>>> 60995b3ea984c62f3529605b9a3c6a6e1be95549

export default Navbar;
