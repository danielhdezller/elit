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
  console.log(userId)
  return (
    <div>
      <div>
        <h3>Update Profile</h3>
        <Formik
          initialValues={{
            // name: '', //from Redux
            // userName: '', // from Redux
            linkedIn: '', //needs to save
            
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
                placeholder='LinkedIn'
                name='linkedIn'
              />
              <ErrorMessage
                className='error'
                name='linkedIn'
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
