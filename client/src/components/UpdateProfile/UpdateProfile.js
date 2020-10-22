import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
import './UpdateProfile.scss';
import Select from 'react-select';
import { stacksOptions } from '../../config/data';
import { UPDATE_USERDATA } from '../../GraphQL/mutations';
import { GET_USER_LOGED_IN } from '../../GraphQL/querys';
import { useMutation, useQuery } from '@apollo/client';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

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

const CustomSelectStack = ({ setStacksSelections }) => {
  return (
    <>
      <Select
        onChange={(value) => {
          const stack = value.map((x) => x.value);
          setStacksSelections(stack);
        }}
        isMulti
        name='colors'
        options={stacksOptions}
        className='basic-multi-select'
        classNamePrefix='select'
      />
    </>
  );
};

function UpdateProfileEventForm() {

  const classes = useStyles();

  const [stacksSelections, setStacksSelections] = useState([]);
  const userId = useSelector((store) => store.authenticated.userId);
  const avatar = useSelector((store) => store.authenticated.avatar);
  const [updateUserData] = useMutation(UPDATE_USERDATA, {
    refetchQueries: [
      {
        query: GET_USER_LOGED_IN,
        variables: { userId },
      },
    ],
  });
  const { data } = useQuery(GET_USER_LOGED_IN, {
    variables: { userId },
  });
  let userData;
  if (data?.getUserLogedIn) {
    userData = data.getUserLogedIn;
  }

  return (
    <div
      className='
      d-flex 
      justify-content-center 
      flex-column 
      align-items-center
      mt-5
      '
    >
      <Avatar
        elevation={2}
        alt='User Picture'
        src={avatar}
        className={classes.large}
      />
      <h3 className='text-light my-3'>Update Profile</h3>
      <Formik
        initialValues={{
          userId: userId,
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            const results = { ...values };
            results.userStacks = stacksSelections;
            console.log('results:', results);
            updateUserData({ variables: { input: results } });
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form autoComplete='off' className='form-group d-flex flex-column justify-content-center'>
            <p className='text-light'>{userData?.name}</p>
            <Field className='form-control mb-1' type='text' name='name' placeholder='User name' />
            <ErrorMessage className='error' name='name' component='div' />
            <p className='text-light mt-1'>{userData?.email}</p>
            <Field className='form-control mb-1' type='text' name='email' placeholder='Email' />
            <ErrorMessage className='error' name='name' component='div' />
            <Field className='form-control mb-1' type='text' placeholder='Linkedin profile' name='linkedIn' />
            <ErrorMessage className='error' name='linkedIn' component='div' />
            <Field className='form-control mb-1' type='text' placeholder='Github profile' name='gitHub' />
            <ErrorMessage className='error' name='gitHub' component='div' />
            <Field className='form-control mb-1' type='text' placeholder='Personal homepage' name='portfolio' />
            <ErrorMessage className='error' name='portfolio' component='div' />
            <CustomSelectStack setStacksSelections={setStacksSelections}></CustomSelectStack>
            <Field className='form-control my-1' as='textarea' placeholder='Bio' name='bio' />
            <ErrorMessage className='error' name='bio' component='div' />
            <button
              className='btn btn-success'
              type='submit'
              disabled={isSubmitting}
              style={{ backgroundColor:'#25A2B8'}}
            >
              Update Profile
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default UpdateProfileEventForm;
