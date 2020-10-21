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
    width: theme.spacing(15),
    height: theme.spacing(15),
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
        <div className='col-lg-6 text-center text-light '>
          <Typography variant='h4' component='h2' className='mt-2 mb-3'>
            {userData?.name}
          </Typography>
          <Chip size='small' color='secondary' label='JavaScript' />
          <Chip size='small' color='secondary' label='Golang' />
          <Chip size='small' color='secondary' label='Python' />
        </div>
      </div>
      <div
        className='row d-flex justify-content-center text-center  rounded-lg'
      //  style={{ backgroundColor: '#3f51b524' }}
      >
        <div className='col-lg-6 col-10 text-light'>
          <Typography className='mb-2 p-1' style={{ borderBottom:'solid 1px #f64857', fontWeight: '900' }} variant='h6' color='secondary' component='h2'>
            ABOUT
          </Typography>
          <h5 className='font-weight-light'>
            when an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five centuries,
          </h5>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
