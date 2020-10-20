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
  // const [ fullName, setFullName ] = React.useState('')
  // const [CreateUserData, { data }] = useMutation(CREATE_USERDATA);

  const userId = useSelector((store) => store.authenticated.userId);
  const name = useSelector((store) => store.authenticated.userName);
  const githubLogin = useSelector((store) => store.authenticated.githubLogin);
  const email = useSelector((store) => store.authenticated.email);
  const avatar = useSelector((store) => store.authenticated.avatar);
  //intiliazied dispatch// for help we can take a look at Login.js=>bring dispatch here =>
  //create a new action => update=> essiantially same as UPDATE_AUTHENTICATION
  // and then we use MUTATION to save into the db

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
            userStacks: [],
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              console.log('values', values);
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form autoComplete='off'>
              <Field type='text' name='name' placeholder={name} />
              <ErrorMessage className='error' name='name' component='div' />
              <Field type='text' name='githubLogin' placeholder={githubLogin} />
              <ErrorMessage
                className='error'
                name='githubLogin'
                component='div'
              />
              <Field type='text' name='name' placeholder={email} />
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

              <Field as='textarea' placeholder='Bio' name='bio' />
              <ErrorMessage className='error' name='bio' component='div' />

              <CustomSelect label='userStacks' name='userStacks'>
                <option value='JavaScript'>JavaScript</option>
                <option value='Python'>Python</option>
                <option value='Golang'>Golang</option>
                <option value='Rust'>Rust</option>
                <option value='Java'>Java</option>
                <option value='C'>C</option>
                <option value='C++'>C++</option>
                <option value='C#'>C#</option>
              </CustomSelect>
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
