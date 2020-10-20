import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  // ListItemIcon,
  ListItemText,
} from '@material-ui/core/';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';

const Sidebar = (props) => {
  const githubLogin = useSelector((state) => state.authenticated.githubLogin);
  const authenticated = useSelector((state) => state.authenticated);
  const { history } = props;
  const dispatch = useDispatch();
  // const [openSidebar, setOpenSidebar] = React.useState('close');

  const linkClick = (path) => {
    handleClose();
    history.push(path);
  };

  const itemsList = [
    {
      text: 'MY PROFILE',
      onClick: () => linkClick(`/member/${githubLogin}`),
    },
    {
      text: 'ALL EVENTS',
      onClick: () => linkClick(`/member/${githubLogin}/events`),
    },
    {
      text: 'MY EVENTS',
      onClick: () => linkClick(`/member/${githubLogin}/myevents`),
    },
    {

      text: "UPDATE PROFILE",
      onClick: () => linkClick(`/member/${username}/updateprofile`)

    },
    {
      text: 'COMMUNITY',
      onClick: () => linkClick(`/member/${githubLogin}/community`),
    },
  ];

  const handleClose = () => {
    dispatch({ type: 'TOGGLE', data: false });
  };

  return (
    <Drawer open={authenticated.display} onClose={handleClose}>
      <List>
        {itemsList.map((item, index) => {
          const { text, onClick } = item;
          return (
            <ListItem button key={text} onClick={onClick}>
              {/* {icon && <ListItemIcon>{icon}</ListItemIcon>} */}
              <ListItemText primary={text} />
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
};
export default withRouter(Sidebar);

// import React from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// const Sidebar = () => {
//   const username = useSelector((state) => state.authenticated.userName);

//   return (
//     <div className='sidebar position-absolute'
//     style={{
//       backgroundColor: 'rgb(215, 213, 202)',
//       bottom: 0,
//       top: 53,

//       }}>
//       <h4>{username}</h4>
//       <Router>
//           <Link to={`/member/${username}events`}>
//           <button className='btn btn-success mt-5 ' style ={{marginLeft: 20}}>ALL EVENTS</button>
//           </Link>
//           <div>
//           <Link to={`/member/${username}/myevents`}>
//           <button className='btn btn-success mt-5' style ={{marginLeft: 20}}>MY EVENTS</button>
//           </Link>
//           </div>
//          <div>
//           <Link to={`/member/${username}/editprofile`}>
//           <button className='btn btn-success mt-5' style ={{marginLeft: 20}} >EDIT PROFILE</button>
//           </Link>
//           </div>
//           <Link to={`/member/${username}/community`}>
//           <button className='btn btn-success mt-5' style ={{marginBottom: 50, marginLeft: 20}}>COMMUNITY</button>
//           </Link>
//       </Router>
//     </div>
//   );
// };

// export default Sidebar;
