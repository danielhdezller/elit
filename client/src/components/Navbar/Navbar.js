import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Login from '../Login/Login';
import Logout from '../Logout/Logout';
import { useSelector } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import 'fontsource-roboto';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import {
  List,
  ListItem,
  ListItemText
} from '@material-ui/core/';
// import { useSelector } from 'react-redux';
// import { withRouter } from 'react-router-dom'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

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
    backgroundColor: '#1d1d1d',
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const authenticated = useSelector((state) => state.authenticated);
  const [state, setState] = React.useState({ left: false });
  console.log('authenticated:', authenticated);

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };


  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Inbox', 'Starred'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar position='static' className={classes.bg}>
        <Toolbar>
          {/* <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
          > */}
          <div>
            {['left'].map((anchor) => (
              <React.Fragment key={anchor}>
                <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
                <SwipeableDrawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                  onOpen={toggleDrawer(anchor, true)}
                >
                  {list(anchor)}
                </SwipeableDrawer>
              </React.Fragment>
            ))}
          </div>
          <MenuIcon />
          {/* </IconButton> */}
        <Typography variant='h4' className={classes.title}>
          <Link to='/'>Elit</Link>
        </Typography>
        {authenticated.authenticated ? <Logout /> : <Login />}
        </Toolbar>
      </AppBar>
    </div >
  );
};

export default Navbar;
