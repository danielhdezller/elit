import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { GET_USER } from '../../GraphQL/querys';
import { useQuery } from '@apollo/client';
import UserStacks from '../../components/UserStacks/UserStacks';
import UserMedia from '../../components/UserMedia/UserMedia';
import { useHistory } from 'react-router-dom';

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
  const history = useHistory();
  const githubLogin = history.location.pathname.split('/').slice(2).join();
  console.log('githubLogin:', githubLogin);
  if (githubLogin) {
  }
  const { data } = useQuery(GET_USER, {
    variables: { githubLogin },
  });
  console.log('dataaaaa:', data);
  let userData;
  if (data?.getUser) {
    userData = data.getUser;
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
            style={{ backgroundColor: '#212529', borderRadius: '10px' }}
            className='text-light font-weight-light mx-5 p-3 '>
            {userData?.bio}
          </p>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
