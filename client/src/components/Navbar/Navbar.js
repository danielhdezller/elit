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

const Navbar = () => {

  const classes = useStyles();

  return (
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

export default Navbar
