import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core/';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AccountBox from '@material-ui/icons/AccountBox';
import Event from '@material-ui/icons/Event';
import DateRange from '@material-ui/icons/DateRange';
import AssignmentInd from '@material-ui/icons/AssignmentInd';
import Group from '@material-ui/icons/Group';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  drawer: {
    width: '190px',
  },
  paper: {
    background: "#161616"
  },
  textColor: {
    color: "#25a2b8"
  }
})


const Sidebar = (props) => {
  const classes = useStyles();

  const githubLogin = useSelector((state) => state.authenticated.githubLogin);
  const authenticated = useSelector((state) => state.authenticated);
  const { history } = props;
  const dispatch = useDispatch();

  const linkClick = (path) => {
    handleClose();
    history.push(path);
  };

  const itemsList = [
    {
      text: 'My Profile',
      onClick: () => linkClick(`/member/${githubLogin}`),
      icon: <AccountBox />,
    },
    {
      text: 'All Events',
      onClick: () => linkClick(`/member/${githubLogin}/events`),
      icon: <Event />,
    },
    {
      text: 'My Events',
      onClick: () => linkClick(`/member/${githubLogin}/myevents`),
      icon: <DateRange />,
    },
    {
      text: 'Update Profile',
      onClick: () => linkClick(`/member/${githubLogin}/updateprofile`),
      icon: <AssignmentInd />,
    },
    {
      text: 'Community',
      onClick: () => linkClick(`/member/${githubLogin}/community`),
      icon: <Group />,
    },
  ];

  const handleClose = () => dispatch({ type: 'TOGGLE', data: false });

  return (
    <Drawer
      classes={{ paper: classes.paper }}
      open={authenticated.display}
      onClose={handleClose}
    >
      <List>
        {itemsList.map((item, index) => {
          const { text, icon, onClick } = item;
          return (
            <ListItem button key={text} onClick={onClick}>
              {icon && <ListItemIcon className='text-light'>{icon}</ListItemIcon>}
              <ListItemText 
              className={classes.textColor}
               primary={text} />

            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
};
export default withRouter(Sidebar);
