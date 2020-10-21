import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux';
import { GET_USER_LOGED_IN } from '../../GraphQL/querys';
import { useQuery } from '@apollo/client';
import UserStacks from '../../components/UserStacks/UserStacks';
import UserMedia from '../../components/UserMedia/UserMedia';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  purple: {
    color: '#FFFFFF',
  },
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    border: 'solid #25a2b8 3px'
  },
}));

const UserProfile = ({ match }) => {
  const userId = useSelector((store) => store.authenticated.userId);
  const { data } = useQuery(GET_USER_LOGED_IN, {
    variables: { userId },
  });
  let userData;
  if (data?.getUserLogedIn) {
    userData = data.getUserLogedIn;
    console.log('userData:', userData);
  }
  const classes = useStyles();
  return (
    <>
      <div className='row d-flex flex-column justify-content-center align-items-center pt-5 pb-2'>
        <div className={`${classes.root} col-lg-6 justify-content-center`}>
          <Avatar
            elevation={2}
            alt='User Picture'
            src={`${userData?.avatar}`}
            className={`${classes.large} shadow-lg`}
          />
        </div>
        <div className='col-lg-6 text-center text-light '>
          <Typography variant='h4' component='h2' className='mt-2 '>
            {userData?.name}
          </Typography>
          <UserMedia />
          <UserStacks />
        </div>
      </div>
      <div className='row d-flex justify-content-center text-center '>
        <div className='col-lg-6 mt-3'>
          <Typography className='text-light font-weight-bold mx-3' variant='h5' component='h2'>
            ABOUT
          </Typography>
          <p
            style={{ backgroundColor: '#25a2b81a', borderRadius: '10px' }}
            className='text-light font-weight-light mx-5 p-3 '>
            {userData?.bio}
          </p>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
