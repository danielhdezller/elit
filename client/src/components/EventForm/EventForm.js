import React from 'react';
import { Formik, Form, Field, ErrorMessage, useField } from 'formik';
import * as Yup from 'yup';
import { useSelector } from 'react-redux';
import './EventForm.scss';
import { CREATE_EVENT } from '../../GraphQL/mutations';
import { GET_USER_EVENTS } from '../../GraphQL/querys';
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

const EventForm = () => {
  const { userId, userName } = useSelector((state) => state.authenticated);
  const [createEvent] = useMutation(CREATE_EVENT, {
    refetchQueries: [
      {
        query: GET_USER_EVENTS,
        variables: { userId },
      },
    ],
  });

  return (
    <div className='formContainer'>
      <div className='formContainer'>
        <h3>Add a new event to de community</h3>
        <Formik
          initialValues={{
            eventTitle: '',
            date: '',
            eventDescription: '',
            eventLink: '',
            categories: '',
            location: '',
            userName: userName,
            userId: userId,
          }}
          validationSchema={Yup.object({
            eventTitle: Yup.string().required('Required'),
            date: Yup.date().required('Required'),
            eventDescription: Yup.string().required('Required'),
            eventLink: Yup.string(),
            categories: Yup.string()
              .oneOf(
                ['Teaching Session', 'Tech Talk', 'Collaboration', 'MeetUp'],
                'Invalid Category'
              )
              .required('Required'),
            location: Yup.string().required('Required'),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              console.log('values:', values);
              createEvent({ variables: { input: values } });
              console.log('hola');
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form className='eventForm' autoComplete='off'>
              <Field
                className='eventField'
                type='eventTitle'
                placeholder='Event title'
                name='eventTitle'
              />
              <ErrorMessage
                className='error'
                name='eventTitle'
                component='div'
              />
              <Field type='datetime-local' name='date' />
              <ErrorMessage className='error' name='date' component='div' />
              <Field
                className='eventField'
                type='eventDescription'
                placeholder='Event description'
                name='eventDescription'
              />
              <ErrorMessage
                className='error'
                name='eventDescription'
                component='div'
              />
              <Field
                type='url'
                placeholder='https://example.com'
                pattern='https://.*'
                name='eventLink'
              />
              <ErrorMessage
                className='error'
                name='eventLink'
                component='div'
              />
              <div className='field'>
                <CustomSelect
                  className='eventField'
                  label='Event Category'
                  name='categories'
                >
                  <option value='Event Category'>Event Category</option>
                  <option value='Teaching Session'>Teaching Session</option>
                  <option value='Tech Talk'>Tech Talk</option>
                  <option value='Collaboration'>Collaboration</option>
                  <option value='MeetUp'>MeetUp</option>
                </CustomSelect>
              </div>
              <Field type='location' placeholder='Location' name='location' />
              <ErrorMessage className='error' name='location' component='div' />
              <button
                className='formSubmit'
                type='submit'
                disabled={isSubmitting}
              >
                Create Event
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default EventForm;
