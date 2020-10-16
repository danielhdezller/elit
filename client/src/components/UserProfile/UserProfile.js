import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar'

const useStyles = makeStyles((theme) => ({

  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  purple: {
    color: "#FFFFFF"
  },
  large: {
    width: theme.spacing(25),
    height: theme.spacing(25),
  },
}));

const UserProfile = ({ match, users }) => {
  const classes = useStyles();

  // const name = match.params.name

  // const firstName = users.map((user) =>
  //   user.userName === name ? user.name : null
  // )
  // const lastName = users.map((lastname) =>
  //   lastname.userName === name ? lastname.familyName : null
  // )
  // const stacks = users.map((username) =>
  //   username.userName === name ? username.techStack : null
  // )

  return (
    <>
      <Sidebar/>
      <div className='row d-flex flex-column justify-content-center align-items-center py-5'
      //  style={{ backgroundColor: 'beige' }}
      >
        <div className={`${classes.root} col-lg-6 justify-content-center`}>
          <Avatar elevation={2} alt="Remy Sharp" src="https://avatars1.githubusercontent.com/u/17513392?v=4" className={`${classes.large} shadow-lg`} />
        </div>
        <div className='col-lg-6 text-center'>
          <Typography variant="h3" component="h2">
            Hamed Sedighi
            </Typography>
          <Chip size="small" color="primary" label="JavaScript" />
          <Chip size="small" color="primary" label="Golang" />
          <Chip size="small" color="primary" label="Python" />
        </div>
        <Link to='/dashboard'>
          <button className='btn btn-success mt-5'>Update profile</button>
        </Link>
      </div>
      <div className='row d-flex justify-content-center text-center p-5 rounded-lg'
      //  style={{ backgroundColor: '#3f51b524' }}
      >

        <div className='col-lg-6'>
          <Typography variant="h5" component="h2">
            ABOUT
          </Typography>
          <Typography variant="h5" component="h2">
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
          </Typography>
        </div>
      </div>
    </>
  )
}
export default UserProfile