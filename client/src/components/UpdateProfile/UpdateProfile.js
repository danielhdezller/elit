import React from 'react';
import { Formik, Form, Field, ErrorMessage, useField } from 'formik';
import * as Yup from 'yup';
import './EventForm.scss';
import { CREATE_EVENT } from '../../GraphQL/mutations';
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
  const [createEvent, { data }] = useMutation(CREATE_EVENT);
  console.log('data:', data);

  return (
    <div>
      <div>
        <h3>Add a new event to de community</h3>
        <Formik
          initialValues={{
            eventTitle: '',
            date: '',
            eventDescription: '',
            eventLink: '',
            categories: '',
            location: '',
            userName: '', //its not finished here I will put the name of the user loged it dosent apeear in the form is undher the hood
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
              // alert(JSON.stringify(values));
              console.log('values', values);
              console.log('values.eventLink', values.eventDescription);
              createEvent({ variables: { input: values } });
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form autoComplete='off'>
              <Field
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
              <ErrorMessage name='date' component='div' />
              <Field
                className='fildDescription'
                type='eventDescription'
                placeholder='Event description'
                name='eventDescription'
              />
              <ErrorMessage name='eventDescription' component='div' />
              <Field
                type='url'
                placeholder='https://example.com'
                pattern='https://.*'
                name='eventLink'
              />
              <ErrorMessage name='eventLink' component='div' />
              <CustomSelect label='Event Category' name='categories'>
                <option value='Event Category'>Event Category</option>
                <option value='Teaching Session'>Teaching Session</option>
                <option value='Tech Talk'>Tech Talk</option>
                <option value='Collaboration'>Collaboration</option>
                <option value='MeetUp'>MeetUp</option>
              </CustomSelect>
              <Field type='location' placeholder='Location' name='location' />
              <ErrorMessage name='location' component='div' />
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

export default EventForm;
