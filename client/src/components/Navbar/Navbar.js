import React, {useEffect} from 'react';
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
import {useDispatch} from 'react-redux';
import {connect} from 'react-redux'


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
}));

 
  



const Navbar = (props) => {
  // useEffect(() => {
  //   console.log("props.clickData",props.clickData)
  // },[props.clickData])

  const classes = useStyles();
  const authenticated = useSelector((state) => state.authenticated);
  
  // const display = useSelector((state) => state.display)
  // const dispatch = useDispatch()
  
  function onClickHandler() {
    // dispatch({type:"SHOW"})
    const currentDisplay = authenticated.display
    console.log('authenticated:', authenticated);
    console.log('currentDisplay', currentDisplay)
    props.clickUpdateData(!currentDisplay)
  }

  return (
    <div className={classes.root}>
      <AppBar position='static' className={classes.bg}>
        <Toolbar>
          <IconButton onClick={onClickHandler}
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h4' className={classes.title}>
            <Link to='/'>Elit</Link>
          </Typography>
          {authenticated.authenticated ? <Logout /> : <Login />}
        </Toolbar>
      </AppBar>
    </div>
  );
};
// get data
const mapStateToProps = (state) => {
  return {
    clickData: state.authenticatedReducer
  }
}
//update data
const mapDispatchToProps = (dispatch) => {
 return {
   clickUpdateData: (currentDisplay) => dispatch({type: "TOGGLE", data: currentDisplay})
 }
}
// update redux with component data

// authenticatedReducer
export default connect(mapStateToProps,
  mapDispatchToProps)(Navbar);
