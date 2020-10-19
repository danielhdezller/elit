import React from 'react';
import { useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage, useField } from 'formik';
import * as Yup from 'yup';
import './UpdateProfile.scss';
import { CREATE_USERDATA } from '../../GraphQL/mutations';
import { useMutation } from '@apollo/client';

const CustomSelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className='error'>{meta.error}</div>
      ) : null}
    </>
  );
};

const UpdateProfileEventForm = () => {
  const [CreateUserData, { data }] = useMutation(CREATE_USERDATA);
  console.log('data:', data);

  const userId = useSelector((store)=> {
    return store.authenticated.userId
  })
  
  const name = useSelector((store) => {
    console.log('store',store.authenticated)
    return store.authenticated.userName
  })
  console.log('name',name)

  const githubLogin = useSelector((store) => {
    return store.authenticated.githubLogin
  })
  
  console.log('githubLogin',githubLogin)

  return (
    <div>
      <div>
        <h3>Update Profile</h3>
        <Formik
          initialValues={{                     
            linkedIn: '', //needs to save
            gitHub: '',
            portfolio: '',
          }}

          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              // alert(JSON.stringify(values));
              console.log('values', values);
              // console.log('values.eventLink', values.eventDescription);
              CreateUserData({ variables: { input: values, id: userId } });
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form autoComplete='off'>
              <Field
                type='text'
                name='name'
                value = {name}
              />
              <ErrorMessage
                className='error'
                name='name'
                component='div'
              />
              <Field
                type='text'
                name='githubLogin'
                value = {githubLogin}
              />
              <ErrorMessage
                className='error'
                name='githubLogin'
                component='div'
              />
              <Field
                type='text'
                placeholder='LinkedIn link'
                name='linkedIn'
              />
              <ErrorMessage
                className='error'
                name='linkedIn'
                component='div'
              />
              <Field
                type='text'
                placeholder='GitHub link'
                name='gitHub'
              />
              <ErrorMessage
                className='error'
                name='gitHub'
                component='div'
              />
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
              <button type='submit' disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default UpdateProfileEventForm;
