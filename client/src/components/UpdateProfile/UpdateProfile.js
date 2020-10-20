import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
import './UpdateProfile.scss';
// import { UPDATE_USERDATA } from '../../GraphQL/mutations';
// import { useMutation } from '@apollo/client';
import Select from 'react-select';
import { stacksOptions } from '../../config/data';

const CustomSelectStack = ({ setStacksSelections }) => {
  return (
    <>
      <Select
        onChange={(value) => setStacksSelections(value)}
        isMulti
        name='colors'
        options={stacksOptions}
        className='basic-multi-select'
        classNamePrefix='select'
      />
    </>
  );
};

const UpdateProfileEventForm = () => {
  const [stacksSelections, setStacksSelections] = useState([]);

  const userId = useSelector((store) => store.authenticated.userId);
  const avatar = useSelector((store) => store.authenticated.avatar);

  return (
    <div>
      <div>
        <img src={avatar} atl='img' />
        <h3>Update Profile</h3>
        <Formik
          initialValues={{
            linkedIn: '',
            gitHub: '',
            portfolio: '',
            bio: '',
            userStacks: '',
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              // console.log('values', values);
              const results = { ...values };
              results.userStacks = stacksSelections;
              console.log('results:', results);
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form autoComplete='off'>
              <Field type='text' name='name' placeholder='user Name' />
              <ErrorMessage className='error' name='name' component='div' />
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
};

export default UpdateProfileEventForm;
