import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import { useSelector } from 'react-redux';
import { GET_USER_LOGED_IN } from '../../GraphQL/querys';
import { useQuery } from '@apollo/client';

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
    width: theme.spacing(25),
    height: theme.spacing(25),
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
  }
  const classes = useStyles();
  return (
    <>
      <div className='row d-flex flex-column justify-content-center align-items-center py-5'>
        <div className={`${classes.root} col-lg-6 justify-content-center`}>
          <Avatar
            elevation={2}
            alt='User Picture'
            src={`${userData?.avatar}`}
            className={`${classes.large} shadow-lg`}
          />
        </div>
        <div className='col-lg-6 text-center'>
          <Typography variant='h3' component='h2'>
            {userData?.name}
          </Typography>
          <Chip size='small' color='primary' label='JavaScript' />
          <Chip size='small' color='primary' label='Golang' />
          <Chip size='small' color='primary' label='Python' />
        </div>
      </div>
      <div
        className='row d-flex justify-content-center text-center p-5 rounded-lg'
        //  style={{ backgroundColor: '#3f51b524' }}
      >
        <div className='col-lg-6'>
          <Typography variant='h5' component='h2'>
            ABOUT
          </Typography>
          <Typography variant='h5' component='h2'>
            when an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five centuries,
          </Typography>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
