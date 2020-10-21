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
    <div>
      <div>
        <img src={avatar} alt='User' />
        <h3>Update Profile</h3>
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
            <Form autoComplete='off'>
              <div>{userData?.name}</div>
              <Field type='text' name='name' placeholder='user Name' />
              <ErrorMessage className='error' name='name' component='div' />
              <div>{userData?.email}</div>
              <Field type='text' name='email' placeholder='email' />
              <ErrorMessage className='error' name='name' component='div' />
              <Field type='text' placeholder='LinkedIn link' name='linkedIn' />
              <ErrorMessage className='error' name='linkedIn' component='div' />
              <Field type='text' placeholder='GitHub link' name='gitHub' />
              <ErrorMessage className='error' name='gitHub' component='div' />
              <Field
                type='text'
                placeholder='Portfolio/Personal website link'
                name='portfolio'
              />
              <ErrorMessage
                className='error'
                name='portfolio'
                component='div'
              />
              <CustomSelectStack
                setStacksSelections={setStacksSelections}
              ></CustomSelectStack>
              <Field as='textarea' placeholder='Bio' name='bio' />
              <ErrorMessage className='error' name='bio' component='div' />
              <button type='submit' disabled={isSubmitting}>
                Update Profile
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default UpdateProfileEventForm;
